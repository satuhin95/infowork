var _0x47ba = [
  "+=5",
  "hit",
  "enabled",
  "endPos",
  "midEndPos",
  "endScale",
  "disable",
  "dragCont",
  "classList",
  "noEvents",
  "add",
  "progress",
  "translate3d",
  "split",
  "lagos",
  "abuja",
  "style",
  "zIndex",
  "length",
  "config",
  "50%\x2050%",
  "t11",
  "tv1",
  "tv2",
  "cta",
  "50%\x2070%",
  "t12",
  "addEventListener",
  "removeEventListener",
  "click",
  "getComputedStyle",
  "transform",
  "trim",
  "scale",
  "pow",
  "//ms.purplepatch.online/football/drag-and-drop/savlon/october-22/images/",
  "png",
  "arrows\x20ball\x20ball_shadow\x20logo\x20drag_text\x20g1\x20g2\x20g1_text\x20g2_text\x20map\x20t0",
  "bg2\x20t11\x20t12\x20tv1\x20tv2\x20goal_1\x20goal_2\x20cta",
  "init",
  "asset_packs",
  "names",
  "curLoad",
  "myCustomData",
  "onload",
  "name",
  "backgroundImage",
  "position",
  "width",
  "height",
  "numb",
  "total",
  "format",
  "cur_asset_pack",
  "opacity",
  "hasOwnProperty",
  "load",
  "attachEvent",
  "src",
  "{EVENT_URL}",
  "{CLICK_MACRO}",
  "adArea",
  "goal",
  "getElementById",
  "ball1",
  "slide_1",
  "slide_2",
  "from",
  "easeOut",
  "g1_text",
  "g2_text",
  "set",
  "arrows",
  "drag_text",
  "goal_1",
  "easeIn",
  "push",
  "ball1_anim",
  "hits",
  "pos",
  "create",
  "size",
  "started",
  "target",
  "left",
  "top",
  "ball_shadow",
  "ball",
];
(function (_0x2699a9, _0x501e82) {
  var _0x5b6c40 = function (_0xa3de42) {
    while (--_0xa3de42) {
      _0x2699a9["push"](_0x2699a9["shift"]());
    }
  };
  _0x5b6c40(++_0x501e82);
})(_0x47ba, 0x1f2);
var _0x5570 = function (_0x546a53, _0x3f720e) {
  _0x546a53 = _0x546a53 - 0x0;
  var _0x440369 = _0x47ba[_0x546a53];
  return _0x440369;
};
var _dsptr = function (_0x2032b1) {
  var _0x14154b = new Image();
  _0x14154b[_0x5570("0x0")] = _0x5570("0x1") + _0x2032b1;
};
function ctaFunction(_0x1e8db6) {
  window["open"](_0x5570("0x2"));
}
var adArea = document["getElementById"](_0x5570("0x3"));
var myDraggable = [];
var pointerToggle = !![];
var inactive = ![];
var StartY;
var completedNumb = 0x0;
var boxX = 0x0;
var boxY = 0x0;
var inactivityTime = 0x0;
var inactiveDisabled = ![];
var totHits = 0x1;
var curHits = 0x0;
var objects = {
  goal: document["getElementById"](_0x5570("0x4")),
  ball1: document[_0x5570("0x5")](_0x5570("0x6")),
  slide_1: document[_0x5570("0x5")](_0x5570("0x7")),
  slide_2: document["getElementById"](_0x5570("0x8")),
  ball1_anim: document[_0x5570("0x5")]("ball1_anim"),
  dragCont: document[_0x5570("0x5")]("dragCont"),

};
var slide_3 = document.querySelector('#slide_3')
function init() {
  initDrag();
  initAnim();
}
function initAnim() {
  TweenMax[_0x5570("0x9")](objects["t0"], 0.75, {
    delay: 0.1,
    x: 0x64,
    opacity: 0x0,
    ease: Back[_0x5570("0xa")],
  });
  TweenMax[_0x5570("0x9")](objects["g1"], 0.75, {
    delay: 0.9,
    x: -0x64,
    opacity: 0x0,
    ease: Back[_0x5570("0xa")],
  });
  TweenMax[_0x5570("0x9")](objects["g2"], 0.75, {
    delay: 0x1,
    x: 0x64,
    opacity: 0x0,
    ease: Back[_0x5570("0xa")],
  });
  TweenMax[_0x5570("0x9")](objects[_0x5570("0xb")], 0.75, {
    delay: 1.4,
    y: -0x21,
    opacity: 0x0,
    ease: Back[_0x5570("0xa")],
  });
  TweenMax["from"](objects[_0x5570("0xc")], 0.75, {
    delay: 1.5,
    y: -0x21,
    opacity: 0x0,
    ease: Back[_0x5570("0xa")],
  });
  TweenMax[_0x5570("0xd")](objects[_0x5570("0xe")], { y: 0x14, opacity: 0x0 });
  setTimeout(function () {
    if (!dragFt) {
      TweenMax["to"](objects[_0x5570("0xe")], 0.75, {
        delay: 0x0,
        y: 0x0,
        opacity: 0x1,
        ease: Back[_0x5570("0xa")],
      });
    }
  }, 0x708);
  TweenMax[_0x5570("0x9")](objects[_0x5570("0xf")], 0.75, {
    delay: 0x2,
    opacity: 0x1,
    ease: Power2[_0x5570("0xa")],
  });
}

// function goalAnim(_0x287512) {
//   var _0x204d58 = objects[_0x5570("0x4")];
//   var _0x2a080e = objects[_0x5570("0x10")];
//   var _0x3e9c82 = objects["goal_2"];
//   TweenMax[_0x5570("0xd")](_0x204d58, { opacity: 0x1 });
//   TweenMax[_0x5570("0xd")](_0x2a080e, { scale: 0x0, opacity: 0x1 });
//   TweenMax[_0x5570("0xd")](_0x3e9c82, { scale: 0x0, opacity: 0x1 });
//   var _0x4b5ab3 = 0.5;
//   var _0x198df3 = 0.4;
//   TweenMax["to"](_0x2a080e, _0x4b5ab3, {
//     delay: 0.15,
//     scale: 0x1,
//     ease: Power3[_0x5570("0xa")],
//   });
//   TweenMax["to"](_0x3e9c82, _0x4b5ab3, {
//     delay: 0.15,
//     scale: 0x1,
//     ease: Power1[_0x5570("0xa")],
//     onComplete: function () {
//       TweenMax["to"](_0x2a080e, _0x198df3, {
//         delay: 0.1,
//         opacity: 0x0,
//         scale: 1.5,
//         ease: Power2[_0x5570("0x11")],
//       });
//       TweenMax["to"](_0x3e9c82, _0x198df3, {
//         delay: 0.3,
//         opacity: 0x0,
//         scale: 1.5,
//         ease: Power2[_0x5570("0x11")],
//         onComplete: function () {
//           curHits++;
//           dragActive(!![]);
//           if (curHits >= totHits) {
//             endDragAnim(_0x287512);
//           }
//         },
//       });
//     },
//   });
// }
var ftDrag = !![];
var startScale;
var zoomed = ![];
var startX, startY;
function initDrag() {
  var _0x1b4832 = 0x1e;
  var _0x476fc1 = {
    top: 0x1 - _0x1b4832,
    left: 0x0 - _0x1b4832,
    width: 0x12c + _0x1b4832 * 0x2,
    height: 0xfa + _0x1b4832 * 0x2,
  };
  var _0x3e7414 = -0x2d;
  var _0x475bd7 = {
    ball1: { pos: { x: 0x75, y: 0x99 }, size: { w: 0x46, h: 0x47 } },
    hits: [
      {
        enabled: !![],
        hit: {
          x: 0xbf + _0x3e7414,
          y: 0x69 + _0x3e7414,
          x2: 0x105 + _0x3e7414,
          y2: 0xa0 + _0x3e7414,
        },
        midEndPos: { x: 0xbf, y: 0x8a },
        endPos: { x: 0xe1, y: 0x99 },
        endScale: 0.15,
        rot: -0x2d,
      },
      {
        enabled: !![],
        hit: {
          x: 0x28 + _0x3e7414,
          y: 0x68 + _0x3e7414,
          x2: 0x6e + _0x3e7414,
          y2: 0xa0 + _0x3e7414,
        },
        midEndPos: { x: 0x4b, y: 0x82 },
        endPos: { x: 0x3f, y: 0x8d },
        endScale: 0.15,
        rot: 0x2d,
      },
    ],
  };
  myDraggable[_0x5570("0x12")](
    addDraggable(
      objects[_0x5570("0x13")],
      _0x476fc1,
      _0x475bd7[_0x5570("0x6")],
      _0x475bd7[_0x5570("0x14")]
    )
  );
}
function addDraggable(_0x91ce97, _0x4ec54a, _0x2a7042, _0xcb96c8) {
  TweenLite["set"](_0x91ce97, {
    css: {
      left: _0x2a7042[_0x5570("0x15")]["x"],
      top: _0x2a7042["pos"]["y"],
      opacity: 0x1,
    },
  });
  return Draggable[_0x5570("0x16")](_0x91ce97, {
    bounds: _0x4ec54a,
    edgeResistance: 0.95,
    onPress: function () {
      onPress(this);
    },
    onDrag: function (_0x2fcb37) {
      onDrag(this, _0xcb96c8, _0x2a7042[_0x5570("0x17")]);
    },
    onDragEnd: function (_0x11ce68) {
      onDragEnd(this, _0xcb96c8);
    },
  });
}
var dragFt = ![];
function onPress(_0x42ea14) {
  if (!dragFt) {
    _dsptr(_0x5570("0x18"));
    dragFt = !![];
    disableCursor = !![];
    TweenMax["to"](objects[_0x5570("0xe")], 0.6, { opacity: 0x0 });
  }
  startScale = { x: 0x1, y: 0x1 };
  startX = getCssProperty(_0x42ea14[_0x5570("0x19")]["id"], _0x5570("0x1a"));
  startY = getCssProperty(_0x42ea14[_0x5570("0x19")]["id"], _0x5570("0x1b"));
  TweenMax["to"](objects[_0x5570("0x1c")], 0.35, { opacity: 0x0 });
}
var disableOnDrag = ![];
function onDrag(_0x3c60eb, _0x4de161, _0x2b3f70) {
  var _0x40d072 = startX + _0x3c60eb["x"];
  var _0x1f3adf = startY + _0x3c60eb["y"];
  inactivityTime = 0x0;
  TweenMax[_0x5570("0xd")](objects[_0x5570("0x1d")], {
    rotation: _0x5570("0x1e"),
  });
  for (var _0x37f3a8 = 0x0; _0x37f3a8 < _0x4de161["length"]; _0x37f3a8++) {
    var _0x56e590 = _0x4de161[_0x37f3a8][_0x5570("0x1f")];
    if (_0x4de161[_0x37f3a8]["enabled"]) {
      if (
        !disableOnDrag &&
        _0x40d072 > _0x56e590["x"] &&
        _0x40d072 < _0x56e590["x2"] &&
        _0x1f3adf > _0x56e590["y"] &&
        _0x1f3adf < _0x56e590["y2"]
      ) {
        dragActive(![]);
        _0x4de161[_0x37f3a8][_0x5570("0x20")] = ![];
        disableOnDrag = !![];
        stopT1 = !![];
        dropProduct(
          _0x3c60eb,
          _0x40d072,
          _0x1f3adf,
          _0x4de161[_0x37f3a8][_0x5570("0x21")],
          _0x4de161[_0x37f3a8][_0x5570("0x22")],
          _0x4de161[_0x37f3a8]["rot"],
          _0x4de161[_0x37f3a8][_0x5570("0x23")],
          _0x2b3f70,
          _0x37f3a8
        );
        _0x3c60eb[_0x5570("0x24")]();
      }
    }
  }
}
function dragActive(_0x10622a) {
  if (_0x10622a) {
    objects[_0x5570("0x25")][_0x5570("0x26")]["remove"](_0x5570("0x27"));
  } else {
    objects[_0x5570("0x25")][_0x5570("0x26")][_0x5570("0x28")](_0x5570("0x27"));
  }
}
function onDragEnd(_0x4896d1, _0x1d966f) {

  var _0x266ae4 = startX + _0x4896d1["x"];
  var _0x31b6c8 = startY + _0x4896d1["y"];

  if (
    _0x266ae4 > _0x1d966f["x"] &&
    _0x266ae4 < _0x1d966f["x2"] &&
    _0x31b6c8 > _0x1d966f["y"] &&
    _0x31b6c8 < _0x1d966f["y2"]
  ) {
  } else if (!disableOnDrag) {
    var _0x1c7f11 = ![];
    TweenMax["to"](objects[_0x5570("0x1c")], 0.35, { opacity: 0x1 });
    tn = TweenLite["to"](_0x4896d1[_0x5570("0x19")], 0.5, {
      x: 0x0 + "px",
      y: 0x0 + "px",
      rotation: 0x0,
      ease: Power3[_0x5570("0xa")],
      onUpdate: function () {
        if (tn[_0x5570("0x29")]() > 0.63 && !_0x1c7f11) {
          _0x1c7f11 = !![];
        }
      },
    });
  }


}
function dropProduct(
  _0x2c8f2c,
  _0x4e48e8,
  _0x553edf,
  _0x416cb5,
  _0xdab457,
  _0x52b994,
  _0x1998a3,
  _0x5e48fc,
  _0x50f1c5
) {
  var _0x1de74b = getTransformValue(
    _0x2c8f2c[_0x5570("0x19")],
    _0x5570("0x2a")
  );
  var _0x2bdc7d = _0x1de74b[_0x5570("0x2b")](",\x20");
  var _0x2e32aa = parseInt(_0x2bdc7d[0x0]);
  var _0x5d8a2b = parseInt(_0x2bdc7d[0x1]);
  var _0x16ee36 =
    _0x416cb5["x"] - _0x4e48e8 + _0x2e32aa - (_0x5e48fc["w"] / 0x2) * 0x0;
  var _0x25dc1d =
    _0x416cb5["y"] - _0x553edf + _0x5d8a2b - (_0x5e48fc["h"] / 0x2) * 0x0;
  var _0x2b6d9f =
    _0xdab457["x"] - _0x4e48e8 + _0x2e32aa - (_0x5e48fc["w"] / 0x2) * 0x0;
  var _0x297a1e =
    _0xdab457["y"] - _0x553edf + _0x5d8a2b - (_0x5e48fc["h"] / 0x2) * 0x0;
  if (_0x1998a3 == null) {
    _0x1998a3 = 0.5;
  }
  var _0x2430c6;
  if (_0x50f1c5 == 0x1) {
    console.log('one')
    _0x2430c6 = _0x5570("0x2c");
  } else {
    _0x2430c6 = _0x5570("0x2d");
    console.log('two')
  }
  TweenLite["to"](_0x2c8f2c["target"], 0.3, {
    scaleX: (0x1 + _0x1998a3) / 0x2,
    scaleY: (0x1 + _0x1998a3) / 0x2,
    x: _0x2b6d9f,
    y: _0x297a1e,
    rotation: 0x0,
    ease: Power1[_0x5570("0xa")],
    onComplete: function () {
      _0x2c8f2c[_0x5570("0x19")][_0x5570("0x2e")][_0x5570("0x2f")] = 0x383;
      goalAnim(_0x2430c6);
      TweenLite["to"](_0x2c8f2c[_0x5570("0x19")], 0.4, {
        scaleX: _0x1998a3,
        scaleY: _0x1998a3,
        x: _0x16ee36,
        y: _0x25dc1d,
        rotation: _0x52b994,
        ease: Back[_0x5570("0xa")]["config"](1.7),
        onComplete: function () {
          disableOnDrag = ![];
        },
      });
    },
  });
  completedNumb++;
  countResult(_0x2c8f2c["target"]["id"]);
}
var tn;
function updateFunction() {
  tweenProgress = tn[_0x5570("0x29")]();
  if (tweenProgress > 0.8) {
  }
}
var results = {};
function countResult(_0x118795) {
  results[_0x118795] = !![];
}
var output = "";
// function endDragAnim(_0x373069) {
//   _dsptr("finished");
//   inactiveDisabled = !![];
//   for (
//     var _0x4ea3c0 = 0x0;
//     _0x4ea3c0 < myDraggable[_0x5570("0x30")];
//     _0x4ea3c0++
//   ) {
//     myDraggable[_0x4ea3c0][0x0][_0x5570("0x24")]();
//   }
//   TweenLite["to"](objects[_0x5570("0x7")], 0.8, {
//     scale: 0xa,
//     ease: Back[_0x5570("0x11")][_0x5570("0x31")](0.6),
//     opacity: 0x0,
//     transformOrigin: _0x5570("0x32"),
//   });
//   TweenLite["set"](objects["slide_2"], { scale: 0.4 });
//   TweenLite["to"](objects[_0x5570("0x8")], 0.8, {
//     delay: 0.5,
//     scale: 0x1,
//     opacity: 0x1,
//     ease: Power3[_0x5570("0xa")],
//     opacity: 0x1,
//   });
//   TweenLite[_0x5570("0x9")](objects[_0x5570("0x33")], 0.8, {
//     delay: 0.8,
//     y: -0x3c,
//     opacity: 0x0,
//     ease: Back["easeOut"],
//   });
//   TweenLite[_0x5570("0x9")](objects[_0x5570("0x34")], 0.8, {
//     delay: 1.1,
//     x: -0x64,
//     opacity: 0x0,
//     ease: Power3[_0x5570("0xa")],
//   });
//   TweenLite[_0x5570("0x9")](objects[_0x5570("0x35")], 0.8, {
//     delay: 1.1,
//     x: 0x64,
//     opacity: 0x0,
//     ease: Power3[_0x5570("0xa")],
//   });
//   TweenLite["from"](objects[_0x5570("0x36")], 0.8, {
//     delay: 1.5,
//     scale: 0x0,
//     transformOrigin: _0x5570("0x37"),
//     ease: Back["easeOut"],
//   });
//   TweenLite["from"](objects[_0x5570("0x38")], 0.8, {
//     delay: 1.7,
//     opacity: 0x0,
//     ease: Back[_0x5570("0xa")],
//   });
//   activateButtons();
// }
function resetAll() {}
function activateButtons() {
  adArea[_0x5570("0x39")]("click", ctaFunction);
}
function removeButtons() {
  adArea[_0x5570("0x3a")](_0x5570("0x3b"), ctaFunction);
}
function getCssProperty(_0xc026f1, _0x14d959) {
  var _0x43a7e5 = document["getElementById"](_0xc026f1);
  return parseInt(
    window[_0x5570("0x3c")](_0x43a7e5, null)["getPropertyValue"](_0x14d959)
  );
}
function getTransformValue(_0x53342b, _0x240eb3) {
  var _0x307398 = _0x53342b[_0x5570("0x2e")][_0x5570("0x3d")]["split"](")");
  for (var _0x3bc43c in _0x307398) {
    var _0x2032e3 = _0x307398[_0x3bc43c];
    var _0x58efab = _0x2032e3[_0x5570("0x2b")]("(");
    if (_0x58efab[0x0][_0x5570("0x3e")]() == _0x240eb3) return _0x58efab[0x1];
  }
  return ![];
}
function getScale(_0x3b07c5) {
  var _0x979672 = getTransformValue(_0x3b07c5, _0x5570("0x3f"));
  var _0x215d87 = _0x979672["split"](",\x20");
  var _0x82e511 = parseInt(_0x215d87[0x0] * 0x64) / 0x64;
  var _0x1253a3 = parseInt(_0x215d87[0x1] * 0x64) / 0x64;
  return { x: _0x82e511, y: _0x1253a3 };
}
function pitagor(_0x41f1ce, _0x2b0598) {
  return Math["pow"](
    Math[_0x5570("0x40")](_0x41f1ce, 0x2) +
      Math[_0x5570("0x40")](_0x2b0598, 0x2),
    0.5
  );
}
function easeInCubic(_0xcdc14a) {
  return _0xcdc14a * _0xcdc14a * _0xcdc14a;
}
var assets_url = _0x5570("0x41");
var assets = {
  init: [{ format: _0x5570("0x42"), type: "id", names: _0x5570("0x43") }],
  end: [{ format: "png", type: "id", names: _0x5570("0x44") }],
};
var assetsCur = 0x0;
var assetsTotal = 0x0;
var allLoaded = ![];
function initLoad() {
  loadAsset(assets[_0x5570("0x45")]);
}
function loadOther() {
  assetsTotal = Object[_0x5570("0x17")](assets);
  for (var _0x1a07c9 in assets) {
    if (_0x1a07c9 != _0x5570("0x45")) {
      loadAsset(assets[_0x1a07c9]);
    }
  }
}
function loadAsset(_0x265331) {
  _0x265331["cur_asset_pack"] = 0x0;
  _0x265331["asset_packs"] = _0x265331[_0x5570("0x30")];
  for (
    var _0x78eebb = 0x0;
    _0x78eebb < _0x265331[_0x5570("0x46")];
    _0x78eebb++
  ) {
    var _0x134583 =
      _0x265331[_0x78eebb][_0x5570("0x47")][_0x5570("0x2b")]("\x20");
    _0x265331[_0x78eebb][_0x5570("0x48")] = 0x0;
    for (
      var _0xea7b64 = 0x0;
      _0xea7b64 < _0x134583[_0x5570("0x30")];
      _0xea7b64++
    ) {
      var _0x288505 = new Image();
      _0x288505[_0x5570("0x49")] = {
        total: _0x134583["length"],
        a: _0x265331,
        name: _0x134583[_0xea7b64],
        numb: _0x78eebb,
      };
      _0x288505[_0x5570("0x4a")] = function () {
        objects[this[_0x5570("0x49")][_0x5570("0x4b")]] = document[
          _0x5570("0x5")
        ](this[_0x5570("0x49")][_0x5570("0x4b")]);
        objects[this["myCustomData"]["name"]][_0x5570("0x2e")][
          _0x5570("0x4c")
        ] = "url(" + this["src"] + ")";
        objects[this["myCustomData"][_0x5570("0x4b")]][_0x5570("0x2e")][
          _0x5570("0x4d")
        ] = "absolute";
        objects[this[_0x5570("0x49")]["name"]][_0x5570("0x2e")]["width"] =
          this[_0x5570("0x4e")] + "px";
        objects[this["myCustomData"][_0x5570("0x4b")]]["style"][
          _0x5570("0x4f")
        ] = this[_0x5570("0x4f")] + "px";
        countAsset(
          this[_0x5570("0x49")]["a"],
          this[_0x5570("0x49")][_0x5570("0x50")],
          this[_0x5570("0x49")][_0x5570("0x51")]
        );
      };
      _0x288505[_0x5570("0x0")] =
        assets_url +
        _0x134583[_0xea7b64] +
        "." +
        _0x265331[_0x78eebb][_0x5570("0x52")];
    }
  }
}
function countAsset(_0x401681, _0x489400, _0x49ddd9) {
  _0x401681[_0x489400][_0x5570("0x48")]++;
  if (_0x401681[_0x489400]["curLoad"] == _0x49ddd9) {
    _0x401681[_0x5570("0x53")]++;
    if (_0x401681[_0x5570("0x53")] == _0x401681[_0x5570("0x46")]) {
      assetSetLoaded();
    }
  }
}
function assetSetLoaded() {
  assetsCur++;
  if (assetsCur == 0x1) {
    adArea[_0x5570("0x2e")][_0x5570("0x54")] = 0x1;
    init();
    loadOther();
  } else if (assetsCur == assetsTotal) {
    allLoaded = !![];
  }
}
function initGroundLoad() {
  initLoad();
}
Object[_0x5570("0x17")] = function (_0x558b59) {
  var _0x5562af = 0x0,
    _0x273e3f;
  for (_0x273e3f in _0x558b59) {
    if (_0x558b59[_0x5570("0x55")](_0x273e3f)) _0x5562af++;
  }
  return _0x5562af;
};
if (window[_0x5570("0x39")]) {
  window[_0x5570("0x39")](_0x5570("0x56"), initGroundLoad(), ![]);
} else if (window[_0x5570("0x57")]) {
  window[_0x5570("0x57")]("onload", initGroundLoad());
}
function goalAnim(_0x287512) {
  var _0x204d58 = objects[_0x5570("0x4")];
  var _0x2a080e = objects[_0x5570("0x10")];
  var _0x3e9c82 = objects["goal_2"];
  TweenMax[_0x5570("0xd")](_0x204d58, { opacity: 0x1 });
  TweenMax[_0x5570("0xd")](_0x2a080e, { scale: 0x0, opacity: 0x1 });
  TweenMax[_0x5570("0xd")](_0x3e9c82, { scale: 0x0, opacity: 0x1 });
  var _0x4b5ab3 = 0.5;
  var _0x198df3 = 0.4;
  TweenMax["to"](_0x2a080e, _0x4b5ab3, {
    delay: 0.15,
    scale: 0x1,
    ease: Power3[_0x5570("0xa")],
  });
  TweenMax["to"](_0x3e9c82, _0x4b5ab3, {
    delay: 0.15,
    scale: 0x1,
    ease: Power1[_0x5570("0xa")],
    onComplete: function () {
      TweenMax["to"](_0x2a080e, _0x198df3, {
        delay: 0.1,
        opacity: 0x0,
        scale: 1.5,
        ease: Power2[_0x5570("0x11")],
      });
      TweenMax["to"](_0x3e9c82, _0x198df3, {
        delay: 0.3,
        opacity: 0x0,
        scale: 1.5,
        ease: Power2[_0x5570("0x11")],
        onComplete: function () {
          curHits++;
          dragActive(!![]);
          if (curHits >= totHits) {
            endDragAnim(_0x287512);
          }
        },
      });
    },
  });
}
function endDragAnim(_0x373069) {
  // _dsptr("finished");
  inactiveDisabled = !![];
  for (
    var _0x4ea3c0 = 0x0;
    _0x4ea3c0 < myDraggable[_0x5570("0x30")];
    _0x4ea3c0++
  ) {
    myDraggable[_0x4ea3c0][0x0][_0x5570("0x24")]();
  }
  TweenLite["to"](objects[_0x5570("0x7")], 0.8, {
    scale: 0xa,
    ease: Back[_0x5570("0x11")][_0x5570("0x31")](0.6),
    opacity: 0x0,
    transformOrigin: _0x5570("0x32"),
  });
  TweenLite["set"](objects["slide_2"], { scale: 0.4 });
  TweenLite["to"](objects[_0x5570("0x8")], 0.8, {
    delay: 0.5,
    scale: 0x1,
    opacity: 0x1,
    ease: Power3[_0x5570("0xa")],
    opacity: 0x1,
  });
  TweenLite[_0x5570("0x9")](objects[_0x5570("0x33")], 0.8, {
    delay: 0.8,
    y: -0x3c,
    opacity: 0x0,
    ease: Back["easeOut"],
  });
  TweenLite[_0x5570("0x9")](objects[_0x5570("0x34")], 0.8, {
    delay: 1.1,
    x: -0x64,
    opacity: 0x0,
    ease: Power3[_0x5570("0xa")],
  });
  TweenLite[_0x5570("0x9")](objects[_0x5570("0x35")], 0.8, {
    delay: 1.1,
    x: 0x64,
    opacity: 0x0,
    ease: Power3[_0x5570("0xa")],
  });
  TweenLite["from"](objects[_0x5570("0x36")], 0.8, {
    delay: 1.5,
    scale: 0x0,
    transformOrigin: _0x5570("0x37"),
    ease: Back["easeOut"],
  });
  TweenLite["from"](objects[_0x5570("0x38")], 0.8, {
    delay: 1.7,
    opacity: 0x0,
    ease: Back[_0x5570("0xa")],
  });
  activateButtons();
}