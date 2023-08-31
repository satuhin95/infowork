  var w = 300;
  var h = 250;
  var ctx;
  var d = new Date();
  var fClick = ![];
  var o = {
      'adArea': document.getElementById("adArea"),
      'canvas': document.getElementById('canvas')
  };
  var balloons = {
      'amm': 15,
      'startDelay': 0.3,
      'w': '49px',
      'h': '128px',
      'bounds': [0, 0, w, h],
      'boundsMargin': 35,
      'imgID': 'baloon',
      'img': null,
      'pos0': [],
      'pos': [],
      'introPos': [],
      'explPower': [],
      'fix': {
          'x': -24,
          'y': -40
      },
      'startD': {
          'array': [],
          'xAmm': 50,
          'yAmm': 300,
          'xRand': 0.5,
          'yRand': 0.2
      },
      'wiggle': {
          'array': [],
          'dx': 40,
          'dy': 16
      },
      'tapRadius': 40,
      'active': [],
      'tapFix': {
          'x': -20,
          'y': -20
      },
      'explFix': {
          'x': 30,
          'y': 18
      },
      'explodedAmm': 0,
      'explAnim': [],
      'expl': {
          'power': 20,
          'dur': 0.7,
          'radius': 60,
          'shardAmm': 4,
          'shardSize': 14
      }
  };

  function init() {
      cloudsAnimLoop();
      initCanvas();
  }

  function addEvents() {
      o.adArea.addEventListener('click', onTap);
      o.adArea.addEventListener('touchmove', onTap);
  }

  function endSlide() {
      var abc = "25% 50%";
      TweenMax['set'](o.t21, {
          'scale': 0,
          'opacity': 1,
          'transformOrigin': abc
      });
      TweenMax['set'](o.t22, {
          'scale': 0,
          'opacity': 1,
          'transformOrigin': abc
      });
      TweenMax['set'](o.t23, {
          'scale': 0,
          'opacity': 1,
          'transformOrigin': abc
      });
      var bcd = 0.85;
      TweenMax['to'](o.t21, bcd, {
          'delay': 1,
          'scale': 1,
          'ease': Power2['easeOut']
      });
      TweenMax['to'](o.t22, bcd, {
          'delay': 1.2,
          'scale': 1,
          'ease': Power2['easeOut']
      });
      TweenMax['to'](o.t23, bcd, {
          'delay': 1.4,
          'scale': 1,
          'ease': Power2['easeOut']
      });
      TweenMax['set'](o.product, {
          'y': 100,
          'opacity': 0
      });
      TweenMax['to'](o.product, 1.3, {
          'delay': 0.1,
          'y': 0,
          'opacity': 1,
          'ease': Back['easeOut']
      });
      setTimeout(activateButtons, 1e3);
  }

  function onTap(e) {
      if (!fClick) {
          fClick = !![];
          TweenMax['to'](o.t11, 0.1, {
              'opacity': 0
          });
          TweenMax['to'](o.t12, 0.1, {
              'opacity': 0
          });
      }
      var a = e.clientX + balloons['tapFix']['x'];
      var b = e.clientY + balloons['tapFix']['y'];
      var c = balloons['tapRadius'];
      for (var i = 0; i < balloons["amm"]; i++) {
          if (balloons["active"][i]) {
              var p = balloons["pos"][i];
              if (p['x'] - c < a && p['x'] + c > a && p['y'] - c < b && p['y'] + c > b) {
                  var x = p['x'] + balloons['explFix']['x'];
                  var y = p['y'] + balloons["explFix"]['y'];
                  explodeBalloon(i, x, y);
              }
          }
      }
  }

  function explodeBalloon(i, x, y) {
      balloons["active"][i] = ![];
      balloons["explAnim"][i]["active"] = !![];
      balloons["explAnim"][i]["initiated"] = !![];
      balloons["explodedAmm"]++;
      animExplosion(i, x, y);
      if (balloons["explodedAmm"] >= balloons["amm"]) {
          endSlide();
      }
  }

  function cloudsAnimLoop() {
      TweenMax['to']('#clouds', 8, {
          'x': -w,
          'ease': Linear['easeNone'],
          'repeat': -1
      });
  }

  function initCanvas() {
      ctx = o.canvas.getContext('2d');
      balloons["img"] = o[balloons["imgID"]];
      var bmargin = balloons["boundsMargin"];
      balloons["bounds"][0] += bmargin;
      balloons["bounds"][1] += bmargin;
      balloons["bounds"][0x2] += -bmargin;
      balloons["bounds"][0x3] += -bmargin;
      for (var i = 0; i < balloons["amm"]; i++) {
          var ib = balloons["bounds"][0] + Math['random']() * (balloons["bounds"][0x2] - balloons["bounds"][0]);
          var iy = balloons['bounds'][0x1] + Math["random"]() * (balloons["bounds"][0x3] - balloons['bounds'][0x1]);
          balloons["pos0"]["push"]({
              'x': ib,
              'y': iy
          });
          balloons["pos"]["push"]({
              'x': 0,
              'y': 0
          });
          balloons["wiggle"]["array"]["push"]({
              'x': 0,
              'y': 0
          });
          var sx = balloons["startD"]["xAmm"] + balloons["startD"]["xAmm"] * (0.5 - Math['random']()) * balloons["startD"]["xRand"];
          var sy = balloons["startD"]['yAmm'] + balloons["startD"]['yAmm'] * (0.5 - Math["random"]()) * balloons['startD']['yRand'];
          balloons["startD"]["array"]["push"]({
              'x': sx,
              'y': sy
          });
          balloons["introPos"]["push"]({
              'x': sx,
              'y': sy
          });
          balloons["active"]["push"](!![]);
          balloons['explAnim']["push"]({
              'active': ![],
              'initiated': ![],
              'data': {}
          });
      }
      setTimeout(
          function() {
              initBalloonsAnim();
              drawingLoop();
          }, balloons["startDelay"] * 1e3);
  }

  function initBalloonsAnim() {
      var a3 = 0.03;
      var a2 = 2;
      for (var i = 0; i < balloons["amm"]; i++) {
          TweenMax['to'](balloons["introPos"][i], a2, {
              'delay': i * a3,
              'x': 0,
              'y': 0,
              'ease': Power2["easeOut"]
          });
      }
      setTimeout(showT1, (a3 * balloons["amm"] + a2) * 1e3 * 0.7);
  }

  function showT1() {
      var t18 = 0.8;
      TweenMax["set"](o['t11'], {
          'opacity': 0,
          'scale': 0.2,
          'transformOrigin': "50% 50%"
      });
      TweenMax["set"](o["t12"], {
          'opacity': 0,
          'scale': 0.2,
          'transformOrigin': "50% 50%"
      });
      TweenMax['to'](o["t11"], t18, {
          'delay': 0,
          'scale': 0x1,
          'opacity': 0x1,
          'ease': Back['easeOut']["config"](0x3)
      });
      TweenMax['to'](o['t12'], t18, {
          'delay': 0.15,
          'scale': 0x1,
          'opacity': 0x1,
          'ease': Back['easeOut']["config"](0x3)
      });
      setTimeout(addEvents, 0x1f4);
  }

  function drawingLoop() {
      calcWiggle();
      calcPos();
      drawCanvas();
      drawExplosions();
      requestAnimFrame(drawingLoop);
  }

  function calcWiggle() {
      var d = new Date();
      var gt = d["getTime"]();
      for (var i = 0; i < balloons['amm']; i++) {
          if (balloons['active'][i]) {
              var gi = gt + i * 0x78;
              var gz = 0.001;
              var wcox = balloons["wiggle"]['dx'] * Math['cos'](gi * gz);
              var wsin = balloons['wiggle']['dy'] * Math["sin"](gi * gz);
              balloons["wiggle"]['array'][i]['x'] = wcox;
              balloons["wiggle"]["array"][i]['y'] = wsin;
          }
      }
  }

  function animExplosion(i, y, s) {
      balloons["explAnim"][i]["data"]['shards'] = [];
      for (var a = 0; a < balloons["expl"]["shardAmm"]; a++) {
          var expcos = balloons["expl"]["radius"] * Math["cos"](Math["random"]() * 0x168 * Math['PI'] / 0xb4);
          var expsin = balloons["expl"]["radius"] * Math["sin"](Math["random"]() * 0x168 * Math['PI'] / 0xb4);
          balloons["explAnim"][i]["data"]['shards']['push']({
              'x': 0,
              'y': 0,
              'x0': y,
              'y0': s,
              'size': balloons["expl"]["shardSize"],
              'endPos': {
                  'x': expcos,
                  'y': expsin
              }
          });
      }
      var v = {
          'val': 0
      };
      TweenMax['to'](v, balloons['expl']["dur"], {
          'val': 0x1,
          'ease': Power2["easeOut"],
          'onUpdate': function() {
              var tv = this["target"]["val"];
              for (var a = 0; a < balloons["expl"]["shardAmm"]; a++) {
                  balloons["explAnim"][i]['data']["shards"][a]['x'] = balloons["explAnim"][i]['data']["shards"][a]['x0'] + tv * balloons['explAnim'][i]["data"]["shards"][a]["endPos"]['x'];
                  balloons['explAnim'][i]["data"]["shards"][a]['y'] = balloons["explAnim"][i]["data"]["shards"][a]['y0'] + tv * balloons["explAnim"][i]['data']["shards"][a]["endPos"]['y'];
                  balloons["explAnim"][i]["data"]["shards"][a]["size"] = balloons['expl']['shardSize'] * (0x1 - tv);
              }
          },
          'onComplete': function() {
              balloons["explAnim"][i]["active"] = ![];
          }
      });
  }

  function calcPos() {
      for (var i = 0; i < balloons['amm']; i++) {
          if (balloons["active"][i]) {
              var pos = balloons["pos0"][i]['x'] + balloons["fix"]['x'] + balloons["introPos"][i]['x'] + balloons["wiggle"]["array"][i]['x'];
              var posy = balloons["pos0"][i]['y'] + balloons["fix"]['y'] + balloons["introPos"][i]['y'] + balloons["wiggle"]["array"][i]['y'];
              balloons["pos"][i]['x'] = pos;
              balloons['pos'][i]['y'] = posy;
          }
      }
  }

  function drawCanvas() {
      ctx["clearRect"](0, 0, w, h);
      for (var i = 0; i < balloons["amm"]; i++) {
          if (balloons["active"][i]) {
              ctx["drawImage"](balloons['img'], balloons["pos"][i]['x'], balloons["pos"][i]['y']);
          }
      }
  }

  function drawExplosions() {
      for (var i = 0; i < balloons["amm"]; i++) {
          if (balloons["explAnim"][i]['active']) {
              if (balloons["explAnim"][i]["initiated"]) {
                  balloons['explAnim'][i]["initiated"] = ![];
              } else {
                  for (var j = 0; j < balloons["expl"]["shardAmm"]; j++) {
                      var expx = balloons['explAnim'][i]["data"]["shards"][j]['x'];
                      var expy = balloons["explAnim"][i]["data"]["shards"][j]['y'];
                      var exps = balloons['explAnim'][i]["data"]["shards"][j]["size"];
                      var expgra = ctx["createRadialGradient"](expx, expy, 0, expx, expy, exps);
                      expgra["addColorStop"](0, "#F15C2C");
                      expgra["addColorStop"](1, "#F14C2A");
                      ctx["fillStyle"] = expgra;
                      ctx['beginPath']();
                      ctx["arc"](expx, expy, exps, 0, 2 * Math['PI']);
                      ctx["fill"]();
                  }
              }
          }
      }
  }

  function activateButtons() {
      o["adArea"]["addEventListener"]("click", ctaFunction);
  }

  function getCssProperty(bcd, abc) {
      var def = document['getElementById'](bcd);
      return parseInt(window['getComputedStyle'](def, null)['getPropertyValue'](abc));
  }

  window.requestAnimFrame = function() {
      return window['requestAnimationFrame'] || window["webkitRequestAnimationFrame"] || window["mozRequestAnimationFrame"] || window['oRequestAnimationFrame'] || window["msRequestAnimationFrame"] || function(abc) {
          window['setTimeout'](abc, 1000 / 60);
      };
  }();

  var assetsCur = 0;
  var assetsTotal = 0;
  var allLoaded = ![];
  var swipe_allowed = ![];

  function initLoad() {
      loadAsset(assets["init"]);
  }

  function loadOther() {
      assetsTotal = Object["size"](assets);
      for (var i in assets) {
          if (i != "init") {
              loadAsset(assets[i]);
          }
      }
  }

  function loadMid() {
      loadAsset(assets['mid']);
  }

  function loadEnd() {
      loadAsset(assets.end);
  }

  function loadAsset(asset) {
      asset["cur_asset_pack"] = 0;
      asset["asset_packs"] = asset["length"];
      for (var i = 0; i < asset['asset_packs']; i++) {
          var name = asset[i]['names']["split"]('\x20');
          asset[i]["curLoad"] = 0;
          for (var j = 0; j < name["length"]; j++) {
              var image = new Image();
              image["myCustomData"] = {
                  'total': name["length"],
                  'a': asset,
                  'name': name[j],
                  'numb': i
              };
              image['onload'] = function() {
                  o[this["myCustomData"]["name"]] = document.getElementById(this['myCustomData']["name"]);
                  var data = this["myCustomData"]['a'][this["myCustomData"]["numb"]]["type"];
                  var counter = 1;
                  if (data == "class") {
                      o[this["myCustomData"]["name"]] = document["getElementsByClassName"](this["myCustomData"]["name"]);
                      counter = o[this["myCustomData"]["name"]]["length"];
                  }
                  for (var k = 0; k < counter; k++) {
                      var kname;
                      if (data == 'class') {
                          kname = o[this["myCustomData"]["name"]][k];
                          kname.style.backgroundImage = "url(" + this["src"] + ')';
                      } else if (data == 'id') {
                          kname = o[this['myCustomData']["name"]];
                          kname["style"]['backgroundImage'] = 'url(' + this["src"] + ')';
                      } else if (data == "src") {
                          kname = o[this["myCustomData"]['name']];
                          o[this["myCustomData"]["name"]]["src"] = this['src'];
                      }
                      kname.style.position = "absolute";
                      kname.style.width = this.width + 'px';
                      kname.style.height = this.height + 'px';
                      if (this["myCustomData"]['a'][this["myCustomData"]["numb"]]['scale'] != 1) {
                          var ka = 1 / this["myCustomData"]['a'][this["myCustomData"]['numb']]["scale"];
                          TweenMax['set'](kname, {
                              'scale': ka,
                              'transformOrigin': "0% 0%"
                          });
                      }
                  }
                  countAsset(this['myCustomData']['a'], this["myCustomData"]["numb"], this["myCustomData"]['total']);
              };
              image['src'] = assets_url + name[j] + '.' + asset[i]["format"];
          }
      }
  }

  function countAsset(a, b, c) {
      a[b]["curLoad"]++;
      if (a[b]["curLoad"] == c) {
          a['cur_asset_pack']++;
          if (a["cur_asset_pack"] == a['asset_packs']) {
              assetSetLoaded();
          }
      }
  }


  function assetSetLoaded() {
      assetsCur++;
      if (assetsCur == 0x1) {
          TweenMax['to'](o["adArea"], 0.3, {
              'delay': 0.05,
              'opacity': 0x1
          });
          init();
          loadOther();
      } else if (assetsCur == assetsTotal) {
          allLoaded = !![];
      }
  }


  Object['size'] = function(size) {
      var i = 0,
          s;
      for (s in size) {
          if (size["hasOwnProperty"](s)) {
              i++;
          }
      }
      return i;
  };

  if (window.addEventListener) {
      window.addEventListener('load', initLoad(), ![]);
  } else if (window.attachEvent) {
      window.attachEvent("onload", initLoad());
  }