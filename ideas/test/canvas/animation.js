(function() {
    var ca = void 0
      , g = !0
      , h = null
      , j = !1
      , da = parseFloat
      , n = Math
      , q = window
      , ea = parseInt
      , fa = encodeURIComponent
      , ga = navigator
      , x = document;
    function ha(ka, K) {
        return ka.width = K
    }
    function la(ka, K) {
        return ka.display = K
    }
    function ma(ka, K) {
        return ka.height = K
    }
    function oa(ka, K) {
        return ka.innerHTML = K
    }
    function qa(ka, K) {
        return ka.className = K
    }
    function ra(ka, K) {
        return ka.zIndex = K
    }
    var sa = "lastPosition"
      , ta = "userAgent"
      , y = "push"
      , xa = "type"
      , ya = "location"
      , Aa = "detachEvent"
      , Ba = "clearTimeout"
      , Ca = "addEventListener"
      , Da = "splice"
      , Ea = "preventDefault"
      , Fa = "getElementsByTagName"
      , Ga = "search"
      , Ka = "getAttribute"
      , La = "width"
      , Ma = "display"
      , Pa = "startTime"
      , B = "style"
      , Qa = "slice"
      , Ra = "button"
      , H = "hasOwnProperty"
      , Sa = "body"
      , Xa = "ceil"
      , Ya = "removeAttribute"
      , Za = "appendChild"
      , $a = "round"
      , ab = "offsetWidth"
      , bb = "event"
      , cb = "clientX"
      , ib = "clientY"
      , jb = "attachEvent"
      , kb = "ctrlKey"
      , lb = "getElementById"
      , mb = "height"
      , nb = "indexOf"
      , L = "length"
      , ob = "duration"
      , Q = "parentNode"
      , pb = "changedTouches"
      , wb = "setTimeout"
      , xb = "touches"
      , yb = "replace"
      , zb = "className"
      , Ab = "options"
      , Bb = "start"
      , Cb = "element"
      , Db = "removeChild"
      , Eb = "direction"
      , Fb = "floor"
      , Lb = "charAt"
      , Mb = "removeEventListener"
      , Nb = "setAttribute"
      , Ob = "createElement"
      , Pb = "zIndex"
      , Y = ""
      , Qb = "\n"
      , Rb = " "
      , Sb = " -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop("
      , Tb = " : "
      , Ub = " rotate("
      , Vb = " rotateX("
      , Wb = " rotateY("
      , Xb = " scaleX("
      , Yb = " scaleY("
      , Zb = " skew("
      , $b = " translateX("
      , ac = " translateY("
      , bc = " translateZ("
      , uc = "#"
      , vc = "#000"
      , wc = "%"
      , xc = "%27"
      , yc = "&"
      , zc = "&nbsp;"
      , Ac = "' not found"
      , Bc = "')"
      , Cc = "("
      , Dc = ")"
      , Ec = ") "
      , Fc = ","
      , Gc = ",transparent),to(rgba(255,255,255,.5)))"
      , Hc = "-bottom"
      , Xc = "-moz-"
      , Yc = "-moz-crisp-edges"
      , Zc = "-moz-perspective"
      , $c = "-ms-interpolation-mode"
      , ad = "-ms-transform"
      , bd = "-ms-transform-origin"
      , cd = "-o-"
      , dd = "-webkit-"
      , ed = "-webkit-crisp-edges"
      , fd = "-webkit-perspective"
      , gd = "-webkit-tap-highlight-color"
      , hd = "-webkit-transform"
      , id = ".HYPE_element{-webkit-transform:rotateY(0);}video.HYPE_element{-webkit-transform:none;}^{color:#000;`size:16px;`weight:normal;`family:Helvetica,Arial,Sans-Serif;`weight:normal;`style:normal;`variant:normal;text-decoration:none;text-align:left;text-transform:none;text-indent:0;text-shadow:none;line-height:normal;letter-spacing:normal;white-space:normal;word-spacing:normal;@:baseline;border:none;background-color:transparent;background-image:none;-webkit-`smoothing:antialiased;-moz-backface-visibility:hidden;}"
      , jd = ".HYPE_scene "
      , kd = "/"
      , ld = "0"
      , md = "0.0"
      , nd = "0123456789ABCDEF"
      , od = "1"
      , pd = "1.0"
      , qd = "100%"
      , Ud = ": "
      , Vd = "</div>"
      , Wd = "</style>"
      , Xd = "<div style='overflow:auto;-webkit-overflow-scrolling:touch;width:100%;height:100%;'>"
      , Yd = "<iframe frameBorder='0'style='width:100%;height:100%;border:none' allowfullscreen='true'></iframe>"
      , Zd = '<style id="" type="text/css">'
      , $d = "="
      , ae = "?"
      , be = "@1x"
      , ce = "@2x"
      , de = "APPLY ERR "
      , ee = "Action"
      , fe = "Android"
      , ge = "BD"
      , he = "BODY"
      , ie = "BackCompat"
      , je = "ERROR: timeline named '"
      , ke = "Error in "
      , Re = "GHIJKLMNOPQRSTUVWXYZ"
      , Se = "HYPE_element"
      , Te = "HYPE_element "
      , Ue = "HYPE_element HYPE_scene"
      , Ve = "HYPE_element HYPE_scene "
      , We = "HYPE_element Hype_scene "
      , Xe = "HYPE_element_container"
      , Ye = "HYPE_persistent_symbols"
      , Ze = "HYPE_scene"
      , $e = "HYPE_scene_index"
      , af = "HYP_a"
      , bf = "HYP_b"
      , cf = "HYP_j"
      , df = "HYP_k"
      , ef = "HYP_m"
      , ff = "HYP_q"
      , gf = "HYP_t"
      , hf = "HYP_u"
      , jf = "HYP_w"
      , kf = "HypeDocumentLoad"
      , lf = "HypeLayoutRequest"
      , mf = "HypeResourceLoad"
      , nf = "HypeSceneLoad"
      , of = "HypeScenePrepareForDisplay"
      , pf = "HypeSceneUnload"
      , qf = "HypeSwipe"
      , rf = "HypeSymbolLoad"
      , sf = "HypeSymbolUnload"
      , tf = "HypeTimelineAction"
      , uf = "HypeTimelineComplete"
      , vf = "HypeTriggerCustomBehavior"
      , wf = "M"
      , xf = "MSPointerUp"
      , yf = "MouseEvents"
      , zf = "MozBoxShadow"
      , Af = "N"
      , Bf = "O"
      , Cf = "P"
      , Df = "Q"
      , Ef = "R"
      , Ff = "S"
      , Gf = "SpriteSheet"
      , Hf = "SpriteSheetGroup"
      , If = "T"
      , Jf = "U"
      , Kf = "V"
      , Lf = "W"
      , Mf = "^div,^span,^applet,^object,^iframe,^h1,^h2,^h3,^h4,^h5,^h6,^p,^blockquote,^pre,^a,^abbr,^acronym,^address,^big,^cite,^code,^del,^dfn,^em,^img,^ins,^kbd,^q,^s,^samp,^small,^strike,^strong,^sub,^sup,^tt,^var,^b,^u,^i,^center,^dl,^dt,^dd,^ol,^ul,^li,^fieldset,^form,^label,^legend,^table,^caption,^tbody,^tfoot,^thead,^tr,^th,^td,^article,^aside,^canvas,^details,^embed,^figure,^figcaption,^footer,^header,^hgroup,^menu,^nav,^output,^ruby,^section,^summary,^time,^mark,^audio,^video{color:?;`size:?;`weight:?;`family:?;`weight:?;`style:?;`variant:?;text-decoration:?;text-align:?;text-transform:?;text-indent:?;text-shadow:?;line-height:?;letter-spacing:?;white-space:?;word-spacing:?;@:?;border:none;background-color:transparent;background-image:none;padding:0;box-sizing:content-box;}^p{display:block;$:1em 0;}^div,^layer{display:block;}^article,^aside,^footer,^header,^hgroup,^nav,^section{display:block;}^blockquote{display:block;$:1em 40px;}^figcaption{display:block;}^figure{display:block;$:1em 40px;}^q{display:inline;}^q:before{content:open-quote;}^q:after{content:close-quote;}^center{display:block;text-align:center;}^hr{display:block;$:.5em auto;border-style:inset;border-width:1px;}^h1,^h2,^h3,^h4,^h5,^h6{display:block;$-left:0;$-right:0;`weight:bold;}^h1{`size:2em;$-top:.67em;$|:.67em;}^h2{`size:1.5em;$-top:.83em;$|:.83em;}^h3{`size:1.17em;$-top:1em;$|:1em;}^h4{$-top:1.33em;$|:1.33em;}^h5{`size:.83em;$-top:1.67em;$|:1.67em;}^h6{`size:.67em;$-top:2.33em;$|:2.33em;}^table{display:table;border-collapse:separate;border-spacing:2px;border-color:gray;}^thead{display:table-header-group;@:middle;border-color:?;}^tbody{display:table-row-group;@:middle;border-color:?;}^tfoot{display:table-footer-group;@:middle;border-color:?;}^col{display:table-column;}^colgroup{display:table-column-group;}^tr{display:table-row;@:?;border-color:?;}^td,^th{display:table-cell;@:?;}^th{`weight:bold;}^caption{display:table-caption;text-align:center;}^ul,^menu,^dir{display:block;list-style-type:disc;$:1em 0;padding-left:40px;}^ol{display:block;list-style-type:decimal;$:1em 0;padding-left:40px;}^li{display:list-item;$:0;}^ul ul,^ol ul{list-style-type:circle;}^ol ol ul,^ol ul ul,^ul ol ul,^ul ul ul{list-style-type:square;}^dd{display:block;$-left:40px;}^dl{display:block;$:1em 0;}^dt{display:block;}^ol ul,^ul ol,^ul ul,^ol ol{$-top:0;$|:0;}^u,^ins{text-decoration:underline;}^strong,^b{`weight:bolder;}^i,^cite,^em,^var,^address{`style:italic;}^tt,^code,^kbd,^samp{`family:monospace;}^pre,^xmp,^plaintext,^listing{display:block;`family:monospace;white-space:pre;$:1em 0;}^mark{background-color:yellow;color:black;}^big{`size:larger;}^small{`size:smaller;}^s,^strike,^del{text-decoration:line-through;}^sub{@:sub;`size:smaller;}^sup{@:super;`size:smaller;}^nobr{white-space:nowrap;}^a{color:blue;text-decoration:underline;cursor:pointer;}^a:active{color:red;}^noframes{display:none;}^frameset,^frame{display:block;}^frameset{border-color:?;}^iframe{border:0;}^details{display:block;}^summary{display:block;}"
      , Nf = "_blank"
      , Of = "a"
      , Pf = "aA"
      , Qf = "aB"
      , Rf = "aC"
      , Sf = "aD"
      , Tf = "aE"
      , Uf = "aM"
      , Vf = "aN"
      , Wf = "aS"
      , Ug = "aT"
      , Vg = "aU"
      , Wg = "aV"
      , Xg = "aW"
      , Yg = "aX"
      , Zg = "aY"
      , $g = "aZ"
      , ah = "absolute"
      , bh = "alt"
      , ch = "aria-busy"
      , dh = "aria-hidden"
      , eh = "auto"
      , fh = "b"
      , gh = "bA"
      , hh = "bB"
      , ih = "bC"
      , jh = "bF"
      , kh = "bG"
      , lh = "bH"
      , mh = "bI"
      , nh = "bJ"
      , oh = "bK"
      , ph = "bL"
      , qh = "bN"
      , rh = "bQ"
      , sh = "bR"
      , th = "bS"
      , uh = "bT"
      , vh = "backdrop-filter"
      , wh = "background-origin"
      , xh = "background-size"
      , yh = "below "
      , zh = "block"
      , Ah = "blur("
      , Bh = "body="
      , Ch = "box-reflect"
      , Dh = "box-shadow"
      , Eh = "boxShadow"
      , Fh = "brightness("
      , Gh = "c"
      , Hh = "cF"
      , Ih = "cG"
      , Jh = "cH"
      , Kh = "cI"
      , Lh = "cJ"
      , Mh = "cK"
      , Nh = "cL"
      , Oh = "cQ"
      , Ph = "cR"
      , Qh = "cV"
      , Rh = "cW"
      , Sh = "cX"
      , Th = "cY"
      , Uh = "cZ"
      , Vh = "cancel"
      , Wh = "catch"
      , Xh = "click"
      , Yh = "contrast("
      , Zh = "control temporal principal"
      , $h = "controls"
      , ai = "d"
      , bi = "dC"
      , ci = "dW"
      , di = "dX"
      , ei = "dY"
      , fi = "deg"
      , gi = "div"
      , hi = "down"
      , ii = "drag"
      , ji = "drop-shadow("
      , ki = "e"
      , li = "element"
      , mi = "end"
      , ni = "enter"
      , oi = "exit"
      , pi = "f"
      , qi = "filter"
      , ri = "flat"
      , si = "font-"
      , ti = "function"
      , ui = "gW"
      , vi = "gg"
      , wi = "hauptzeitachse"
      , xi = "head"
      , yi = "hidden"
      , zi = "href"
      , Ai = "http://"
      , Bi = "hue-rotate("
      , Ci = "hype-obj-"
      , Di = "hype-scene-"
      , Ei = "iPad"
      , Fi = "iPhone"
      , Gi = "iPod"
      , Hi = "iframe"
      , Ii = "image-rendering"
      , Ji = "inherit"
      , Ki = "inset "
      , Li = "j"
      , Mi = "kTimelineDefaultIdentifier"
      , Ni = "keydown"
      , Oi = "keypress"
      , Pi = "keyup"
      , Qi = "l"
      , Ri = "left"
      , Si = "linear-gradient("
      , Ti = "loop"
      , Ui = "m"
      , Vi = "mailto:"
      , Wi = "margin"
      , Xi = "mouseclick"
      , Yi = "mousedown"
      , Zi = "mousemove"
      , $i = "mouseout"
      , aj = "mouseover"
      , bj = "mouseup"
      , cj = "move"
      , dj = "n"
      , ej = "nearest-neighbor"
      , fj = "none"
      , gj = "number"
      , hj = "on"
      , ij = "onresize"
      , jj = "pageshow"
      , kj = "passive"
      , lj = "pixelated"
      , mj = "playsinline"
      , nj = "pointer-events"
      , oj = "pointerup"
      , pj = "px"
      , qj = "px) "
      , rj = "r"
      , sj = "resize"
      , tj = "rgb"
      , uj = "rgba("
      , vj = "rgba(0,0,0,0)"
      , wj = "right"
      , xj = "role"
      , yj = "saturate("
      , zj = "script"
      , Aj = "scroll"
      , Bj = "sepia("
      , Cj = "seq. temp. principale"
      , Dj = "source"
      , Ej = "start"
      , Fj = "string"
      , Gj = "subject="
      , Hj = "swipe"
      , Ij = "tX"
      , Jj = "tY"
      , Kj = "tabindex"
      , Lj = "tap"
      , Mj = "target"
      , Nj = "testPassive"
      , Oj = "ti"
      , Pj = "timeline principale"
      , Qj = "timelinename"
      , Rj = "title"
      , Sj = "touchcancel"
      , Tj = "touchend"
      , Uj = "touchmove"
      , Vj = "touchstart"
      , Wj = "transform-origin"
      , Xj = "transform-style"
      , Yj = "type"
      , Zj = "uB"
      , $j = "up"
      , ak = "url('"
      , bk = "user-select"
      , ck = "vertical-align"
      , dk = "video"
      , ek = "video/quicktime"
      , fk = "www."
      , gk = "z"
      , hk = "\u30e1\u30a4\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30f3"
      , ik = "\u4e3b\u65f6\u95f4\u7ebf";
    function jk() {
        return function() {}
    }
    (function() {
        q.HYPE_648T = function(ka, aa, K, le, Xf, Yf, za, t, qb, kk, cc, rd, tk, Zf, me, sd, lk, mk, uk, Ic) {
            function $f(a, b, c) {
                Jc != h && (a = {
                    element: a,
                    triggerOnce: j,
                    elementOffset: 0
                },
                a[c] = function() {
                    b()
                }
                ,
                c = new Jc.hypeS(a),
                td[y](c))
            }
            function X(a, b) {
                return function(c) {
                    for (var e = 0; e < b[L]; e++) {
                        var d = b[e]
                          , f = d.p;
                        if (1 == f)
                            Kc(nk(d.e, d.f), d.g, d.d);
                        else if (3 == f)
                            d.b != h && (f = d.z != ca ? d.z : j,
                            db(d.b, a != h ? a.id : h, f));
                        else if (7 == f)
                            d.b != h && eb(d.b, d.r);
                        else if (8 == f)
                            d.b != h && (f = d.z != ca ? d.z : j,
                            Lc(d.b, f, g, d.J != ca ? d.J : j));
                        else if (9 == f)
                            d.b != h && d.i != h && fb(d.i, d.b, j, g);
                        else if (4 == f) {
                            var k;
                            d.h != h ? k = Yf[kk[d.h]] : d.hc != h && (k = d.hc);
                            try {
                                k && k(R.API, a, c)
                            } catch (p) {
                                Mc(ke + E + Ud + p)
                            }
                        } else if (5 == f)
                            f = ag(d.j),
                            f != h && ((d = (d = d.k == g) || 1 == c[Ra] || c.metaKey == g) ? 9 > w.ga || w.ga != h && w.sb || w.Fa != h ? q.open(f, Nf) : (9 == w.ga || 15 > w.opera) && !(c instanceof MouseEvent) ? q.open(f, Nf) : (d = x[Ob](Of),
                            d[Nb](zi, f),
                            d[Nb](Mj, Nf),
                            x[Sa][Za](d),
                            f = x.createEvent(yf),
                            f.initMouseEvent(Xh, c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c[cb], c[ib], c[kb], c.altKey, c.shiftKey, c.metaKey, c[Ra], x[Sa][Q]),
                            d.dispatchEvent(f),
                            x[Sa][Db](d)) : q.top.location = f);
                        else if (6 == f) {
                            var m = d.l
                              , r = d.m
                              , d = d.n
                              , f = Vi;
                            m != h && (f += escape(m));
                            if (r != h || d != h)
                                f += ae,
                                m = [],
                                r != h && m[y](Gj + fa(r)),
                                d != h && m[y](Bh + fa(d)),
                                f += m.join(yc);
                            f != Vi && (q.top.location = f)
                        } else if (12 == f)
                            f = d.o,
                            d = d.q,
                            d != g && (d = j),
                            f != h && playAudioResourceGroupOid(f, d);
                        else if (13 == f)
                            f = d.o,
                            f != h && pauseAudioResourceGroupOid(f);
                        else if (14 == f)
                            f = d.B,
                            f != h && bg(f);
                        else if (15 == f) {
                            var E = d.s;
                            arguments = d.t;
                            f = Y + E + Cc + arguments.join(Fc) + Dc;
                            try {
                                eval(f)
                            } catch (l) {
                                Mc(ke + E + Ud + l)
                            }
                        }
                    }
                }
            }
            function nk(a, b) {
                var c = -1;
                if (b == h || 0 == b)
                    a: {
                        for (c = 0; c < za[L]; c++)
                            if (za[c].o == a)
                                break a;
                        c = -1
                    }
                else
                    1 == b && Ha + 1 < za[L] ? c = Ha + 1 : 2 == b ? c = Ha - 1 : 3 == b ? c = 0 : 4 == b && (c = za[L] - 1);
                return c
            }
            function ud(a, b) {
                return function(c) {
                    ne(c, b, J[a.id])
                }
            }
            function oe(a, b) {
                return function(c) {
                    cg(c, b, J[a.id])
                }
            }
            function dc() {}
            function dg(a) {
                var b = l(a, Yg, 8)
                  , c = l(a, Xg, 0);
                w.kb == h && (1 == 1 - c && a[B].removeProperty != h ? a[B].removeProperty(R.na + Ch) : a[B][R.na + Ch] = yh + z(b) + Sb + (1 - c) + Gc)
            }
            function pe(a) {
                var b = l(a, Kf);
                if (b != h) {
                    var c = Y;
                    b == od ? c = ag(l(a, Lf)) : b == ld && (c = Y + le + kd + l(a, Jf));
                    b = Yd;
                    w.Ba != h && (b = Xd + b + Vd);
                    oa(a, b);
                    b = a[Fa](Hi)[0];
                    b.src = c;
                    a = l(a, ei);
                    a != h && ec.dY(b, a)
                }
            }
            function qe(a, b) {
                if (!(12 > w.ga)) {
                    var c = b == g ? ge : Y
                      , e = l(a, c + ph, 0)
                      , d = l(a, c + kh, 0)
                      , f = l(a, c + lh, 0)
                      , k = l(a, c + mh, 1)
                      , p = l(a, c + nh, 1)
                      , m = l(a, c + oh, 1)
                      , c = Y;
                    0 != e && (c += Ah + e + qj);
                    0 != d && (c += Bj + d + Ec);
                    0 != f && (c += Bi + (Y + f + fi) + Ec);
                    1 != k && (c += yj + k + Ec);
                    if (1 != p) {
                        if (6 == w.fb || w.Ba != h && 536.26 >= w.ta)
                            p -= 1,
                            1 < p && (p = 1);
                        c += Fh + p + Ec
                    }
                    1 != m && (c += Yh + m + Ec);
                    1 == l(a, vi) && !b && (e = l(a, Ff, 0),
                    d = l(a, If, 0),
                    f = l(a, Ef, vc),
                    k = l(a, Df, 0),
                    0 == e && 0 == d && 0 == k || (c += ji + (z(e) + Rb + z(d) + Rb + z(k) + Rb + f) + Ec));
                    c == Y && (c = fj);
                    b == g ? (a[B][R.na + vh] = c,
                    a[B][vh] = c,
                    c = a[B][Ma],
                    la(a[B], fj),
                    la(a[B], a[B][Ma] + (Y + a[ab]).substring(0, 0)),
                    la(a[B], c)) : (a[B][R.na + qi] = c,
                    a[B].filter = c)
                }
            }
            function fc(a) {
                qe(a, j)
            }
            function gc(a) {
                qe(a, g)
            }
            function vd(a) {
                var b = l(a, hh)
                  , c = l(a, ih)
                  , e = l(a, gh)
                  , d = l(a, $g);
                b == h || (c == h || e == h || d == h) || (a[B].textShadow = (0 == b && 0 == c && 0 == d) == g ? fj : Y + z(b) + Rb + z(c) + Rb + z(d) + Rb + e)
            }
            function Nc(a) {
                if (1 == l(a, vi, 0))
                    qe(a);
                else {
                    var b = l(a, Ff)
                      , c = l(a, If)
                      , e = l(a, Ef)
                      , d = l(a, Df)
                      , f = l(a, vi, 0);
                    if (!(b == h || c == h || e == h || d == h))
                        for (var k = [R.na + Dh, zf, Eh, Dh], p = 0 == b && 0 == c && 0 == d, b = (2 == f ? Ki : Y) + z(b) + Rb + z(c) + Rb + z(d) + Rb + e, c = 0; c < k[L]; c++)
                            p == g ? a[B].removeProperty(k[c]) : a[B][k[c]] = b
                }
            }
            function hc(a) {
                var b = re(a)
                  , c = b == j ? h : l(a, bf)
                  , e = b == j ? h : l(a, af)
                  , d = l(a, rh, 0)
                  , f = l(a, sh, 0)
                  , k = l(a, Zg, 0)
                  , p = l(a, pi, 0)
                  , m = l(a, Oh, 1) * l(a, gf, 1)
                  , r = l(a, Ph, 1) * l(a, hf, 1)
                  , E = l(a, ui, 0)
                  , u = l(a, Zj, 0)
                  , s = l(a, ff)
                  , I = 0 != l(a, ph, 0)
                  , A = l(a, di) == lj
                  , ok = l(a, Ij, 0.5)
                  , N = l(a, Jj, 0.5)
                  , b = Y
                  , O = l(a, ci) == Hf;
                if (O == g) {
                    var M = na(wd(J[a.id]))
                      , U = M.clientWidth;
                    0 == U && (U = l(M, Gh, 0));
                    var G = M.clientHeight;
                    0 == G && (G = l(M, ai, 0));
                    var M = l(a, Gh, 0)
                      , C = l(a, ai, 0);
                    0 != M && 0 != U && (m *= U / M);
                    0 != C && 0 != G && (r *= G / C)
                }
                if (s == h) {
                    s = j;
                    U = gb(a);
                    U = t[U].v;
                    for (G = J[a.id]; G != h && U[G] != h; )
                        if (G = U[G].bF,
                        G != h && U[G] != h && (U[G].cQ != h || U[G].cR != h || ic == g && 0 != (U[G].bS & 256))) {
                            s = g;
                            break
                        }
                    hb(a, ff, s)
                }
                s = sd == g && -1 == a[zb][nb](Ze) && 1 == m && 1 == r && s == j && A == j && O == j && !(I == g && 50 <= w.Na);
                if (10 <= w.ga && 0 == p && (1 != m || 1 != r) && 0 == l(a, Af, 0) && 0 == l(a, Bf, 0) && 0 == l(a, Cf, 0) && 0 == l(a, wf, 0))
                    p = 1E-5;
                c != h && (b += $b + z(c, 2) + Ec);
                e != h && (b += ac + z(e, 2) + Ec);
                0 != d && (b += bc + z(d) + Ec);
                0 != p && (b += Ub + (Y + p + fi) + Ec);
                if (w.Ka == g) {
                    if (0 != k || s == g)
                        b += Wb + (Y + k + fi) + Ec;
                    0 != f && (b += Vb + (Y + f + fi) + Ec)
                }
                1 != m && (b += Xb + m + Ec);
                1 != r && (b += Yb + r + Ec);
                if (0 != E || 0 != u)
                    b += Zb + (Y + E + fi) + Fc + (Y + u + fi) + Ec;
                c = Y + (Y + 100 * ok + wc) + Rb + (Y + 100 * N + wc);
                a[B][R.na + Wj] = c;
                a[B].MozTransformOrigin = c;
                a[B].OTransformOrigin = c;
                a[B][bd] = c;
                a[B][Wj] = c;
                a[B][hd] = b;
                a[B].MozTransform = b;
                a[B].OTransform = b;
                a[B][ad] = b;
                a[B].transform = b
            }
            function rb(a) {
                hc(a)
            }
            function se(a) {
                function b(a, b) {
                    return Y + a + Si + (Y + (b == g ? (n.abs(d) + 180) % 360 : (360 - n.abs(d) + 270) % 360) + fi) + Fc + c + Fc + e + Dc
                }
                var c = l(a, dj);
                if (!(c == h || c == Y)) {
                    var e = l(a, Ui);
                    if (!(e == h || e == Y)) {
                        var d = l(a, Qi);
                        d != h && (a[B].backgroundImage = w.ta != h ? b(R.na, j) : w.nb != h ? b(Xc, j) : 15 > w.opera ? b(cd, j) : b(Y, g))
                    }
                }
            }
            function eg(a) {
                var b = 0 == l(a, ki, 1) && l(a, Pf) == h && l(a, Tf) == h && l(a, Qf) == h && l(a, qh) == h;
                if (l(a, jf, j) != b) {
                    var c = l(a, Oj);
                    b == g ? (a[Nb](dh, g),
                    ec.ti(a, h)) : (a[Ya](dh),
                    ec.ti(a, c));
                    hb(a, jf, b)
                }
            }
            function fg(a) {
                var b = a[B][Ma];
                la(a[B], l(a, Th, j) == g ? fj : l(a, rj, Y));
                b == fj && te(J[a.id])
            }
            function Ta(a) {
                Gb[a.id] = h;
                jc(a)
            }
            function jc(a) {
                try {
                    if (xd == g)
                        -1 == Oc[nb](a) && Oc[y](a);
                    else {
                        var b = l(a, th, 36)
                          , c = re(a)
                          , e = J[a.id]
                          , d = wd(e)
                          , f = gg(d)
                          , k = hg(d)
                          , p = gg(e)
                          , m = l(a, Of, 0)
                          , r = l(a, fh, 0)
                          , E = l(a, Gh, h)
                          , u = l(a, ai, h)
                          , s = d = g;
                        E == h && (d = j,
                        E = p[La]);
                        u == h && (s = j,
                        u = p[mb]);
                        var I = ue(e)
                          , A = ve(e)
                          , p = A - u
                          , t = m
                          , N = r
                          , O = I
                          , M = A
                          , U = j;
                        if (ic == g && 36 != b) {
                            var G = 0 != (b & 1)
                              , w = 0 != (b & 4)
                              , C = 0 != (b & 2)
                              , v = 0 != (b & 8)
                              , D = 0 != (b & 32)
                              , F = 0 != (b & 16)
                              , K = 0 != (b & 64) && C == g && F == g
                              , T = 0 != (b & 128) && C == g && F == g
                              , U = 0 != (b & 256) && (C == g || F == g)
                              , P = 0 == f[La] ? 0 : k[La] / f[La]
                              , S = 0 == f[mb] ? 0 : k[mb] / f[mb];
                            C == g && (O = G == g && w == g ? I + (k[La] - f[La]) : n[Xa](I * P));
                            G == g && w == g && C == j ? (b = m + I / 2,
                            t = n[Xa](b * P - I / 2)) : G == g && w == j && C == g ? t = k[La] - f[La] + m - (O - I) : G == g && w == j ? t = k[La] - f[La] + m : G == j && w == j && (t = n[Xa](m * P));
                            F == g && (M = v == g && D == g ? A + (k[mb] - f[mb]) : n[Xa](A * S));
                            v == g && D == g && F == j ? N = n[Xa]((r + A / 2) * S - A / 2) : v == g && D == j && F == g ? N = k[mb] - f[mb] + r - (M - A) : v == g && D == j ? N = k[mb] - f[mb] + r : v == j && D == j && (N = n[Xa](r * S));
                            if ((K == g || T == g) == g)
                                k = O,
                                f = M,
                                r = O / I,
                                P = M / A,
                                S = r,
                                K == g ? S = r <= P ? r : P : T == g && (S = r >= P ? r : P),
                                O = n[Xa](I * S),
                                M = n[Xa](A * S),
                                K = k - O,
                                T = f - M,
                                G == g && w == j ? t += K : G == g && w == g && (t += n[Xa](K / 2)),
                                v == g && D == j ? N += T : v == g && D == g && (N += n[Xa](T / 2))
                        }
                        var X = n.max(0, O - (I - E))
                          , V = n.max(0, M - p);
                        d == g ? (U == g && (t += l(a, Ij, 0.5) * (O - I),
                        hb(a, gf, n.max(0, O / I)),
                        X = E),
                        ha(a[B], z(X, 2))) : ha(a[B], Y);
                        s == g ? (U == g && (N += l(a, Jj, 0.5) * (M - A),
                        hb(a, hf, n.max(0, M / A)),
                        V = u),
                        ma(a[B], z(V, 2))) : ma(a[B], Y);
                        hb(a, af, N);
                        hb(a, bf, t);
                        c == j && (a[B].top = z(N),
                        a[B].left = z(t));
                        (c == g || U == g) && hc(a);
                        if (l(a, ci) == Gf) {
                            var W = ig(e);
                            0 < W[L] && hc(na(W[0]))
                        }
                        we == j && jg()
                    }
                } catch (Z) {}
            }
            function ag(a) {
                a != h && 0 === a[nb](fk) && (a = Ai + a);
                return a
            }
            function kg(a) {
                return typeof a == Fj && ((7 == a[L] || 4 == a[L]) && a[Lb](0) == uc || 0 == a[nb](tj) && a[nb](Dc) == a[L] - 1)
            }
            function lg(a, b, c) {
                var e = c.$
                  , d = Ua(a, c)
                  , f = a.d
                  , k = a.i
                  , p = e == j ? a.b : h
                  , p = p == h ? c.$ ? a.e : a.s : p
                  , m = e == g ? a.b : h
                  , m = m == h ? c.$ ? a.s : a.e : m
                  , r = a.f;
                a = na(a.o);
                var E = n.min(1, (b - d) / f);
                e == g && (E = 1 - E);
                var l = 1;
                if (r == Of)
                    l = 1 == E ? 1 : 0;
                else if (r == fh)
                    l = E;
                else if (typeof kc[r] === ti)
                    E = ia(c),
                    l = e == g ? E - d - f : d,
                    l = kc[r](e == g ? E - b - l : b - d, l, f);
                else
                    a: {
                        b = kc[r];
                        for (var s = d = h, f = 0; f < b[L]; f++) {
                            l = b[f];
                            for (c = 0; c < l.Pa[L]; c++) {
                                s = l.Pa[c];
                                if (s[ya].x >= E) {
                                    l = d != h ? d[ya].y + (s[ya].y - d[ya].y) * (E - d[ya].x) / (s[ya].x - d[ya].x) : s[ya].y;
                                    break a
                                }
                                d = s
                            }
                            d = h
                        }
                        l = s[ya].y
                    }
                E = p;
                if (cc[r] && 2 == cc[r].p)
                    E = l;
                else if (e == g && (l = 1 - l),
                typeof p == gj || typeof m == gj)
                    p = xe(p),
                    m = xe(m),
                    E = p + (m - p) * l;
                else if (kg(p) == g && kg(m) == g) {
                    p = mg(p);
                    m = mg(m);
                    e = [];
                    for (r = 0; 4 > r; r++)
                        e[r] = p[r] + (m[r] - p[r]) * l;
                    if (1 == e[3]) {
                        p = R.Qa;
                        m = uc;
                        for (r = 0; 3 > r; r++)
                            m += p[Lb](e[r] / 16) + p[Lb](e[r] % 16);
                        E = m
                    } else
                        E = uj + ea(e[0]) + Fc + ea(e[1]) + Fc + ea(e[2]) + Fc + da(e[3]) + Dc
                } else if (1 == l || e == g && 0 != l)
                    E = m;
                ba(a, k, E)
            }
            function ve(a) {
                a = na(a);
                var b = l(a, ai, 0)
                  , c = 0;
                0 == b ? b = a.clientHeight : c = l(a, Wg, 0) + l(a, Wf, 0);
                return b + c + (l(a, Cf, 0) + l(a, wf, 0))
            }
            function ue(a) {
                a = na(a);
                var b = l(a, Gh, 0)
                  , c = 0;
                0 == b ? b = a.clientWidth : c = l(a, Ug, 0) + l(a, Vg, 0);
                return b + c + (l(a, Bf, 0) + l(a, Af, 0))
            }
            function ye(a, b, c) {
                for (var e = b.pa; e < c[L]; e++) {
                    var d = c[e]
                      , f = Ua(d, b)
                      , k = d.o
                      , p = d.i;
                    if (a >= f) {
                        if (b.pa = e + 1,
                        Ia[k][p] == b.aa)
                            if (1 == d.p && b.da == g) {
                                if (d = t[F].v[k].aH,
                                f = na(k),
                                d == g && f.play && (f.autoplay = g,
                                f = f.play(),
                                f !== ca))
                                    f[Wh](jk())
                            } else
                                0 == d.p && b.ja[y](d)
                    } else
                        break
                }
                c = [];
                for (e = 0; e < b.ja[L]; e++)
                    k = b.ja[e],
                    f = Ua(k, b),
                    f = ja(f + k.d, b),
                    a < f ? k.i == Of || k.i == fh ? c[y](k) : lg(k, a, b) : (f = na(k.o),
                    d = b.$ == g ? k.b : h,
                    ba(f, k.i, d == h ? b.$ ? k.s : k.e : d),
                    b.ja[Da](e, 1),
                    e--);
                for (e = 0; e < c[L]; e++)
                    lg(c[e], a, b);
                c = ia(b);
                k = b.$ == j ? b.Da : b.Ja;
                if (k != h && 0 != k[L]) {
                    for (e = 0; e < b.oa[L]; e++) {
                        var m = b.oa[e]
                          , d = m.b
                          , p = $(d)
                          , f = p.ka.q
                          , r = f == j ? m[ob] : 86400
                          , f = b.$ == j ? ja(m[Pa] + r, b) : ja(c - m[Pa], b);
                        if (a >= f) {
                            if (lc[d] == b.aa) {
                                var l = m.G;
                                b.$ == j && (l = m.z ? l - r : l + r);
                                l = ja(n.max(0, l), p);
                                mc(p, j);
                                f = Hb(l, p, g, g, j);
                                f == j && eb(d, l)
                            }
                            b.oa[Da](e, 1);
                            e--
                        }
                    }
                    for (e = b.sa; e < k[L]; e++)
                        if (m = k[e],
                        d = m.b,
                        p = $(d),
                        p != h && (f = p.ka.q,
                        r = f == j ? m[ob] : 86400,
                        f = b.$ == j ? m[Pa] : ja(c - m[Pa] - r, b),
                        a >= f)) {
                            b.sa = e + 1;
                            var l = m.z
                              , u = m.E
                              , s = u
                              , I = m.G;
                            b.$ == g && (I = l ? I - r : I + r,
                            I = ja(I, p),
                            l = !l);
                            var A = I;
                            if (u) {
                                f = a - f;
                                if (f > r)
                                    s = j,
                                    f = r;
                                else
                                    b.oa[y](m);
                                A = l ? A - f : A + f;
                                A = ja(n.max(0, A), p)
                            }
                            if (s) {
                                if (f = fb(I, d, g, g))
                                    continue;
                                l && mc(p, l);
                                if (I != A && (f = fb(A, d, g, g)))
                                    continue;
                                b.da ? (Pc(p, b.ba),
                                Lc(d, l, j, j)) : eb(d, h)
                            } else
                                u == j && eb(d, h),
                                fb(A, d, j, g);
                            lc[d] = b.aa
                        }
                }
            }
            function Hb(a, b, c, e, d) {
                xd = g;
                var f = b.ea
                  , k = b.$ ? b.Ca : b.ma
                  , p = [];
                a = n.min(a * b.ba, ia(b));
                for (var m = b.pa; m < k[L]; m++) {
                    var r = k[m]
                      , l = Ua(r, b);
                    2 == r.p && ((b.da == g || d == g) && a >= l) && p[y](r)
                }
                d = j;
                if (0 == p[L] || e == j)
                    ye(a, b, k);
                else {
                    for (var r = e = 0, u = b.da, s = b.$, m = 0; m < p[L]; m++) {
                        var t = p[m]
                          , l = Ua(t, b);
                        if (d == g && e < l)
                            break;
                        if (!(c == j && l != a)) {
                            if (0 == r || r != l)
                                ye(l, b, k),
                                r = l;
                            for (var t = t.s.a, A = [], w = j, N = 0; N < t[L]; N++) {
                                var O = t[N];
                                7 == O.p && O.b == b.aa && (O.r = l,
                                w = g);
                                0 == l && 3 == O.p && O.b == b.aa || A[y](O)
                            }
                            if (0 != A[L]) {
                                var M;
                                b.ka[H](Gh) && (M = b.ka.c);
                                var U;
                                M ? sb[H](M) ? U = sb[M][Cb]() : S[H](M) && (U = S[M][Cb]) : U = pa();
                                X(U, A)({
                                    type: tf,
                                    timelineName: b.ka.n
                                })
                            }
                            if (f != b.ea || b.ea == h || u != b.da || w || s != b.$)
                                d = g,
                                e = l
                        }
                    }
                    d == j && ye(a, b, k)
                }
                ng();
                return d
            }
            function Ua(a, b) {
                return b.$ ? ja(ia(b) - a.d - a.t, b) : a.t
            }
            function og() {
                for (var a, b = Na() / 1E3, c = 0; c < Va[L]; c++) {
                    var e = Va[c];
                    if (!(e.ea == h || e.da == j || e.Ia == g)) {
                        var d = b - e.ea
                          , f = e.$ ? e.Ca : e.ma;
                        Hb(d, e, g, g) && (d = b - e.ea);
                        if (e.da != j) {
                            var k = ia(e);
                            if (d * e.ba <= k) {
                                if (0 < e.ja[L])
                                    a = 0;
                                else if (e.pa < f[L] && (f = ja((Ua(f[e.pa], e) - d * e.ba) / e.ba, e),
                                a == h || f < a))
                                    a = f;
                                f = e.$ == j ? e.Da : e.Ja;
                                if (0 < e.oa[L])
                                    a = 0;
                                else if (e.sa < f[L] && (f = f[e.sa],
                                f = ja(((e.$ == j ? f[Pa] : ja(k - f[Pa] - f[ob], e)) - d * e.ba) / e.ba, e),
                                f < a || a == h))
                                    a = f
                            }
                        }
                    }
                }
                0 === a ? yd() : a != h && q[wb](function() {
                    zd = j;
                    og()
                }, 1E3 * a)
            }
            function pg(a, b) {
                var c = a.Da
                  , e = [];
                if (c != h)
                    for (var d = 0; d < c[L]; d++) {
                        var f = c[d].b
                          , k = $(f);
                        k == h || -1 != e[nb](f) || (nc(k),
                        b == g && ze(k, g),
                        fb(0, f, j, g),
                        e[y](f))
                    }
            }
            function fb(a, b, c, e) {
                Ad(b);
                var d = $(b);
                if (d != h)
                    return Pc(d, 1),
                    -1 == Va[nb](d) && (eb(b),
                    Va[y](d)),
                    b = ia(d),
                    a > b && (a = d.ka.q == g ? n.max(0, a - n[Fb](a / b) * b) : b),
                    d.$ == g && (a = b - a),
                    e == g && (a = ja(a, d)),
                    d.pa = 0,
                    d.sa = 0,
                    d.ja = [],
                    d.oa = [],
                    e = Na() / 1E3,
                    d.ea = e - a,
                    d.ha = e - d.ea,
                    d.da == g && (q[Ba](d.qa),
                    d.qa = q[wb](function() {
                        oc(d)
                    }, 1E3 * ((b - a) / d.ba))),
                    ze(d, j),
                    pg(d, j),
                    Ae(d, 0),
                    qg(d, a),
                    a = Hb(a, d, j, g, c),
                    yd(),
                    a
            }
            function pc(a, b) {
                var c = $(a);
                if (c == h)
                    return 0;
                var e = 0;
                c.da == g ? (e = Na() / 1E3 - c.ea,
                e *= c.ba) : e = c.ha;
                var d = ia(c);
                b == g && c.$ == g && (e = d - e);
                e = n.max(0, e);
                return e = n.min(d, e)
            }
            function qg(a, b) {
                for (var c = {}, e = a.$ ? a.Ca : a.ma, d = 0; d < e[L]; d++) {
                    var f = e[d];
                    if (0 == f.p) {
                        var k = f.o
                          , p = f.i;
                        if (Ia[k][p] == a.aa) {
                            var m = a.$ ? f.e : f.s
                              , r = a.$ ? j : f.r;
                            Ua(f, a) >= b && (c[k] == h && (c[k] = {}),
                            r != g && c[k][p] == h && (r = na(k),
                            m == ca && (a.$ == g && 0 == f.d) && (m = f.s),
                            ba(r, p, m)),
                            c[k][p] = g)
                        }
                    }
                }
            }
            function Lc(a, b, c, e) {
                Ad(a);
                var d = $(a);
                d != h && (c && Pc(d, 1),
                mc(d, b),
                d.da == j && (d.ea != h ? d.ha == ia(d) ? e && db(a, h, b) : (d.da = g,
                d.ea = Na() / 1E3 - d.ha / d.ba,
                q[Ba](d.qa),
                d.qa = q[wb](function() {
                    oc(d)
                }, 1E3 * ((ia(d) - d.ha) / d.ba)),
                d.Ia != g && (Ae(d, d.ha),
                d.pa = 0,
                d.sa = 0,
                d.ja = [],
                d.oa = []),
                Hb(d.ha / d.ba, d, j, j)) : (e == g || 0 == d.ha) && db(a, h, b)),
                yd())
            }
            function eb(a, b) {
                for (var c in lc)
                    lc[H](c) != j && lc[c] == a && eb(c, h);
                Ad(a);
                c = $(a);
                c != h && c.da == g && (Pc(c, 1),
                c.ha = b != h ? b : Na() / 1E3 - c.ea,
                c.da = j,
                q[Ba](c.qa),
                c.ka != h && c.ha == c.ka.d && oc(c))
            }
            function oc(a) {
                a.ba = 1;
                if (!Hb(ia(a), a, g, g))
                    if (a.ka.q == g)
                        db(a.aa, h, a.$);
                    else if (nc(a),
                    Qc != h && Bd == a.aa)
                        a = Qc,
                        Bd = Qc = h,
                        a();
                    else if (a = {
                        type: uf,
                        timelineName: a.ka.n
                    },
                    Wa(a, h) !== j) {
                        var b = pa();
                        if (b != h) {
                            var c = t[Cd(qc(F))].F;
                            c != h && X(b, c.a)(a)
                        }
                    }
            }
            function ja(a, b) {
                return Be(a, b.ka.f)
            }
            function Be(a, b) {
                var c = n[Fb](a);
                return c + n[$a]((a - c) * b) / b
            }
            function ia(a) {
                return ja(a.ka.d, a)
            }
            function yd() {
                if (zd !== g) {
                    zd = g;
                    var a = function(a) {
                        q[wb](a, 1E3 / 60)
                    };
                    (q.requestAnimationFrame || q.webkitRequestAnimationFrame || q.mozRequestAnimationFrame || a)(function() {
                        zd = j;
                        og()
                    })
                }
            }
            function nc(a) {
                q[Ba](a.qa);
                a.pa = 0;
                a.sa = 0;
                a.ja = [];
                a.oa = [];
                a.ub = h;
                a.ea = h;
                a.da = j;
                a.ba = 1;
                a.ha = ia(a);
                a = Va[nb](a);
                -1 != a && Va[Da](a, 1)
            }
            function rg(a) {
                for (var b = 0; b < Va[L]; b++) {
                    var c = Va[b];
                    if (!(a != h && c.aa == a.aa))
                        for (var e = 0; e < c.ja[L]; e++)
                            Ia[c.ja[e].o][c.ja[e].i] != c.aa && (c.ja[Da](e, 1),
                            e--)
                }
            }
            function Ae(a, b) {
                for (var c = a.ma, e = 0; e < c[L]; e++) {
                    var d = c[e]
                      , f = d.o
                      , k = d.i
                      , d = ja(Ua(d, a) + d.d, a);
                    Ia[f] === ca && (Ia[f] = {});
                    if (d >= b && (Ja[f] === ca || Ja[f][k] === ca || Ja[f][k] == a.aa))
                        Ia[f][k] = a.aa
                }
                rg(a)
            }
            function db(a, b, c) {
                Ad(a);
                for (var e = 0; e < Oa[L]; e++) {
                    var d = Oa[e];
                    d.aa == a && nc(d)
                }
                var f = $(a);
                if (f != h)
                    if (f.ub = b,
                    Va[y](f),
                    t[F].T[f.aa] == h && f.cb == ca && f.Ia != g)
                        oc(f);
                    else if (a = c == j,
                    f.Ia != g && (ze(f, a),
                    mc(f, c),
                    Ae(f, 0),
                    qg(f, 0)),
                    f.da = g,
                    f.pa = 0,
                    f.sa = 0,
                    f.ja = [],
                    f.oa = [],
                    f.tb = {},
                    f.ea = Na() / 1E3,
                    q[Ba](f.qa),
                    f.qa = q[wb](function() {
                        oc(f)
                    }, 1E3 * (ia(f) / f.ba)),
                    pg(f, a),
                    f.Ia == g || 0 < f.ma[L] || 0 < f.Da[L])
                        Hb(0, f, g, g, j),
                        yd()
            }
            function Ad(a) {
                var b = $(a);
                if (b == h || b.ka == h || b.ka.q != g)
                    lc[a] = h
            }
            function ze(a, b) {
                for (var c = 0; c < a.ma[L]; c++) {
                    var e = a.ma[c]
                      , d = e.o
                      , f = e.i
                      , k = e.r;
                    try {
                        if (k == g && T[d][f] != h && (b || e.b == h))
                            e.b = T[d][f]
                    } catch (p) {}
                }
            }
            function $(a) {
                for (var b = 0; b < Oa[L]; b++) {
                    var c = Oa[b];
                    if (c.aa == a)
                        return c
                }
                for (var e in S)
                    if (S[H](e) != j)
                        for (var d = S[e].ib, b = 0; b < d[L]; b++)
                            if (c = d[b],
                            c.aa == a)
                                return c;
                return h
            }
            function tb(a) {
                var b = t[F].T, c;
                for (c in b)
                    if (b[H](c) != j && b[c].n == a) {
                        var e = j, d = t[F].U, f;
                        for (f in d)
                            if (d[H](f) != j) {
                                var k = d[f].V;
                                for (a in k)
                                    if (k[H](a) != j && k[a] == c) {
                                        e = g;
                                        break
                                    }
                                if (e == g)
                                    break
                            }
                        if (e == j)
                            return c
                    }
                if (-1 != sg[nb](a.toLowerCase()))
                    return Mi;
                Mc(je + a + Ac);
                return h
            }
            function Dd(a, b, c, e) {
                b = {
                    pa: 0,
                    ja: [],
                    ma: b,
                    aa: a,
                    Da: c.b,
                    da: j,
                    ha: 0,
                    ba: 1,
                    $: j,
                    oa: [],
                    cb: e,
                    ka: c,
                    tb: {}
                };
                for (c = 0; c < Oa[L]; c++)
                    Oa[c].aa == a && (nc(Oa[c]),
                    Oa[Da](c, 1),
                    c -= 1);
                Oa[y](b);
                return b
            }
            function mc(a, b) {
                var c = pc(a.aa, j);
                if (b != a.$) {
                    a.$ = b;
                    b == g && a.Ca == h && (a.Ca = a.ma[Qa](0),
                    a.Ca.sort(function(b, c) {
                        var e = Ua(b, a)
                          , p = Ua(c, a);
                        return e == p ? c.k - b.k : e - p
                    }));
                    b == g && a.Ja == h && (a.Ja = a.Da[Qa](0),
                    a.Ja.sort(function(b, c) {
                        var e = ja(b[Pa] + b[ob], a)
                          , p = ja(c[Pa] + c[ob], a);
                        return e == p ? (e = b[Pa],
                        p = c[Pa],
                        e == p ? c.F - b.F : p - e) : p - e
                    }));
                    var e = ia(a);
                    a.ja = [];
                    a.pa = 0;
                    a.sa = 0;
                    a.oa = [];
                    a.ha = ja(e - a.ha, a);
                    tg(a, e - c);
                    a.ea != h && Hb(ja(Na() / 1E3 - a.ea, a), a, j, j)
                }
            }
            function Pc(a, b) {
                if (a.ba != b) {
                    var c = pc(a.aa, j);
                    a.ba = b;
                    tg(a, c)
                }
            }
            function tg(a, b) {
                a.ea != h && (a.ea = Na() / 1E3 - b / a.ba,
                a.da == g && (q[Ba](a.qa),
                a.qa = q[wb](function() {
                    oc(a)
                }, 1E3 * ((ia(a) - b) / a.ba))))
            }
            function ug(a, b) {
                var c = tb(a);
                b == ca && (b = 0);
                db(c, h, 1 == b ? g : j)
            }
            function ne(a, b, c) {
                b = t[F].T[b];
                if (b != h) {
                    b = b.a;
                    for (var e = na(c), d = 0; d < b[L]; d++) {
                        var f = b[d];
                        if (f.o == c) {
                            var f = f.i
                              , k = Ce[c];
                            k != h && k[f] != h && (ba(e, f, k[f]),
                            k[f] = h)
                        }
                    }
                    a = a ? a : q[bb];
                    if (a[xa] == bj || a[xa] == oj || a[xa] == xf)
                        b = t[F].v[c].aM,
                        b != h && cg(a, b, c)
                }
            }
            function cg(a, b, c) {
                var e = t[F].T[b];
                if (e != h) {
                    var e = e.a
                      , d = na(c)
                      , f = t[F].v[c].aM;
                    f != h && f != b && ne(a, f, c);
                    var k = t[F].v[c].aN;
                    a = a ? a : q[bb];
                    a[xa] != bj && (a[xa] != oj && a[xa] != xf && k != h && k != b && f != b) && ne(a, k, c);
                    for (a = 0; a < e[L]; a++)
                        f = e[a],
                        f.o == c && (b = f.i,
                        f = f.e,
                        f != h && (k = Ce[c],
                        k == h && (k = {},
                        Ce[c] = k),
                        k[b] == h && (k[b] = T[c][b]),
                        ba(d, b, f)))
                }
            }
            function ba(a) {
                for (var b = arguments, c = 1; c < b[L]; c += 2) {
                    var e = b[c]
                      , d = b[c + 1];
                    if ("undefined" != typeof d)
                        try {
                            var f = ec[e];
                            f != h && (T[J[a.id]][e] = d,
                            f(a, d))
                        } catch (k) {
                            Mc(de + e + $d + d + Tb + k)
                        }
                }
            }
            function vg(a, b) {
                var c = wg[b];
                if (c == h)
                    return h;
                var e = T[J[a.id]][c.HYP_r];
                return e != h ? e : c.HYP_s
            }
            function z(a, b) {
                var c = n.pow(10, b == h ? 0 : b);
                return Y + n[$a](a * c) / c + pj
            }
            function mg(a) {
                var b = [0, 0, 0, 1];
                if (0 == a[nb](tj)) {
                    var c = a[nb](Cc)
                      , e = a[nb](Dc);
                    if (3 < e - c) {
                        a = a.substring(c + 1, e).split(Fc);
                        for (c = 0; c < a[L]; c++)
                            b[c] = da(a[c])
                    }
                } else {
                    a[Lb](0) == uc && (a = a[Qa](1));
                    a = a.toUpperCase();
                    for (var e = 3 == a[L] ? 0 : 1, d = R.Qa, c = 0; 3 > c; c++)
                        b[c] = 16 * d[nb](a[Lb](c * (1 + e))) + d[nb](a[Lb](2 * c + e))
                }
                return b
            }
            function xe(a) {
                typeof a != gj && (a = da(a));
                return isNaN(a) ? 0 : a
            }
            function xg(a, b, c) {
                Ed = j;
                c != h && delete t[F].T[c];
                la(b[B], zh);
                ba(b, rh, 0, Zg, 0);
                hb(b, ef, ld);
                ba(b, fh, 0, Of, 0, gk, 1, ki, 1);
                c = t[F].a;
                c != h ? (ha(b[B], qd),
                ha(C[B], c + wc)) : (ha(b[B], z(t[F].Y)),
                ha(C[B], b[B][La]));
                c = t[F].b;
                c != h ? (ma(b[B], qd),
                ma(C[B], c + wc)) : (ma(b[B], z(t[F].Z)),
                ma(C[B], b[B][mb]));
                Gb[C.id] = h;
                Gb[b.id] = h;
                T[J[a.id]] && (a != h && a != b) && (la(a[B], fj),
                a[Nb](dh, g),
                ba(a, rh, 0, Zg, 0, fh, 0, Of, 0, gk, 0, ki, 1),
                hb(a, ef, ld));
                C[B][fd] = h;
                C[B][R.na + Xj] = ri;
                C[B][Zc] = h;
                C[B].perspective = h;
                c = [];
                a = t[F].v;
                for (var e in a)
                    if (a[H](e) != j) {
                        var d = a[e]
                          , f = d.cL;
                        if (f) {
                            c[y](f);
                            var k = S[f][Cb];
                            T[J[k.id]] = h;
                            var p = x[Ob](d.k);
                            qa(p, d.cP ? Ve + d.cP : Ue);
                            p.id = k.id;
                            p[B].pointerEvents = eh;
                            for (p[B][nj] = eh; 0 < k.childNodes[L]; )
                                p[Za](k.childNodes[0]);
                            k[Q] && (k[Q][Za](p),
                            k[Q][Db](k));
                            k = p;
                            p = S[f].element = k;
                            if (p[Q] && p[Q][zb] == Xe) {
                                var p = p[Q]
                                  , m = p[B];
                                if (d.bR != h || d.aY != h) {
                                    var r = t[F].p;
                                    m[fd] = r;
                                    m.MozPerspective = r;
                                    m.perspective = r
                                } else
                                    m[fd] = Y,
                                    m.MozPerspective = Y,
                                    m.perspective = Y
                            }
                            b[Za](p);
                            De(d, k, k.id, j);
                            d = Fd(k);
                            for (k = 0; k < d[L]; k++) {
                                m = d[k];
                                p = a[J[m.id]];
                                for (r = 0; 2 > r; r++)
                                    for (var E = 0; E < Rc[L]; E++) {
                                        var u = Rc[E];
                                        if (p[H](u) != j) {
                                            var s = 0 == r ? j : g;
                                            if (u == Uf || u == Vf)
                                                s = 0 == r ? g : j;
                                            s != j && ba(m, u, p[u])
                                        }
                                    }
                            }
                            f = S[f].ib;
                            for (k = 0; k < f[L]; k++)
                                Oa[y](f[k])
                        }
                    }
                f = x[lb](Ye);
                for (e in S)
                    if (S[H](e) != j) {
                        d = j;
                        for (k = 0; k < c[L]; k++)
                            if (c[k] === e) {
                                d = g;
                                break
                            }
                        d == j && (k = S[e][Cb],
                        k[Q][zb] == Xe && (k = k[Q]),
                        f[Za](k))
                    }
                C[Ya](dh);
                C[Ya](ch);
                b[Ya](dh);
                db(Mi, h, j);
                e = Fd(pa());
                for (k = 0; k < e[L]; k++)
                    if (d = e[k],
                    yg(d) != j) {
                        if (f = a[J[d.id]].cL) {
                            c = S[f];
                            if (c.ob)
                                continue;
                            c.ob = g
                        }
                        c = {
                            type: rf
                        };
                        Wa(c, d);
                        (f = l(d, Mh)) && X(d, f.a)(c)
                    }
                a = {
                    type: nf
                };
                Wa(a, h) !== j && (e = t[Cd(J[b.id])].A,
                e != h && (e = e.a,
                X(pa(), e)(a)));
                a = gb(b);
                b = zg(b);
                for (e = 0; e < b[L]; e++)
                    if (c = b[e],
                    k = x[lb](c),
                    c = t[a].v[J[c]],
                    c != h)
                        for (f = 0; f < Gd[L]; f++)
                            d = Gd[f],
                            c[H](d) != j && ba(k, d, c[d])
            }
            function Ag(a, b) {
                var c = gb(a)
                  , e = zg(a);
                xd = g;
                for (var d = 0; d < e[L]; d++) {
                    var f = e[d]
                      , k = x[lb](f)
                      , p = t[c].v[J[f]];
                    p != h && De(p, k, f, b)
                }
                ng()
            }
            function zg(a) {
                a = Fd(a);
                for (var b = [], c = 0; c < a[L]; c++)
                    b[y](a[c].id);
                return b
            }
            function De(a, b, c, e) {
                var d = [jh, th, ci, Ij, Jj, fh, Of, Gh, ai, Li, vi, bi]
                  , f = J[c];
                T[f] == h && (T[f] = {});
                var f = gb(b)
                  , k = t[f].U[J[c]];
                if (k) {
                    var p = function(a) {
                        var b = k.V[a];
                        if (b != h)
                            return b;
                        if (-1 != sg[nb](a.toLowerCase()))
                            return k.W;
                        Mc(je + a + Ac);
                        return h
                    };
                    sb[J[c]] = {
                        symbolName: function() {
                            return k.n
                        },
                        element: function() {
                            return b
                        },
                        getSymbolInstancesByName: function(a) {
                            a = Bg(a);
                            for (var c = [], e = 0; e < a[L]; e++)
                                for (var d = a[e], f = d[Cb]().parentElement; f != h; ) {
                                    if (f == b) {
                                        c[y](d);
                                        break
                                    }
                                    f = f.parentElement
                                }
                            return c
                        },
                        startTimelineNamed: function(a, b) {
                            db(p(a), h, 1 == b ? g : j)
                        },
                        pauseTimelineNamed: function(a) {
                            eb(p(a), h)
                        },
                        continueTimelineNamed: function(a, b, c) {
                            Lc(p(a), 1 == b ? g : j, g, c)
                        },
                        goToTimeInTimelineNamed: function(a, b) {
                            fb(a, p(b), j, j)
                        },
                        currentTimeInTimelineNamed: function(a) {
                            return pc(p(a), g)
                        },
                        durationForTimelineNamed: function(a) {
                            a = $(p(a));
                            return ia(a)
                        },
                        currentDirectionForTimelineNamed: function(a) {
                            return $(p(a)).$ ? 1 : 0
                        },
                        isPlayingTimelineNamed: function(a) {
                            return $(p(a)).da
                        }
                    }
                }
                mk == j && a.bE == h && hb(b, ef, od);
                for (c = 0; c < d[L]; c++)
                    f = d[c],
                    ba(b, f, a[f]);
                Rc[y](Ih, Jh, Kh, Lh, Mh, Hh);
                for (var m in a)
                    if (a[H](m) != j) {
                        d = g;
                        for (c = 0; c < Gd[L]; c++)
                            if (Gd[c] == m) {
                                d = j;
                                break
                            }
                        if (d != j) {
                            if (e == g)
                                for (c = 0; c < Rc[L]; c++)
                                    if (Rc[c] == m) {
                                        d = j;
                                        break
                                    }
                            d != j && ba(b, m, a[m])
                        }
                    }
            }
            function pk() {
                Sc[Da](0, 1)
            }
            function Hd(a) {
                Sc[y](Id(a));
                q[wb](pk, 2500)
            }
            function Jd(a) {
                for (var b = 0; b < Sc[L]; b++) {
                    var c = Id(a);
                    25 > n.abs(c.x - Sc[b].x) && 25 > n.abs(c.y - Sc[b].y) && (a.stopPropagation(),
                    a[Ea]())
                }
            }
            function Bg(a) {
                var b = [], c = t[F].U, e;
                for (e in c)
                    c[H](e) != j && c[e].n == a && b[y](sb[e]);
                return b
            }
            function bg(a) {
                var b = {
                    type: vf,
                    customBehaviorName: a
                }
                  , c = Kd[a];
                if (c != h)
                    for (var e = 0; e < c[L]; e++)
                        c[e](b);
                for (var d in S)
                    S[H](d) != j && (c = S[d].Xa[a],
                    c != h && c(b));
                Wa(b, h)
            }
            function Cg(a, b, c) {
                c ? S[c].Xa[a] = b : (c = Kd[a],
                c == h && (c = [],
                Kd[a] = c),
                c[y](b))
            }
            function Ee(a, b, c, e) {
                function d(a) {
                    a = a ? a : q[bb];
                    (32 == a.keyCode || 13 == a.keyCode) && f(a)
                }
                function f(a) {
                    a = a ? a : q[bb];
                    if (a[xa] == aj) {
                        for (var d = j, f = 0; f < Tc[L]; f++)
                            if (Tc[f] == c) {
                                d = g;
                                break
                            }
                        if (d == g)
                            return;
                        Tc[y](c)
                    } else if (a[xa] == $i) {
                        d = gb(b);
                        if (t[d].v[J[b.id]] == h)
                            return;
                        a || (a = q[bb]);
                        for (d = x.elementFromPoint(a[cb], a[ib]); d != h && d != this && d.nodeName != he; )
                            d = d[Q];
                        if (d == this)
                            return;
                        Tc = []
                    } else if (a[xa] == Yi) {
                        if (a[kb] == g || 0 != a[Ra])
                            return
                    } else
                        a[xa] == Vj ? 0 < a[xb][L] && Hd(a[xb][0]) : a[xa] == Tj && 0 < a[pb][L] && Hd(a[pb][0]);
                    if (e == g && (a[xa] == Xi || a[xa] == bj || a[xa] == Tj)) {
                        if (0 < Ld)
                            return;
                        Md = g
                    }
                    c(a)
                }
                if (a == Xh || a == bj)
                    a = ga.pointerEnabled || q.PointerEvent ? oj : ga.msPointerEnabled ? xf : bj;
                ua(a, f, b, g);
                a == Xh ? ua(Oi, d, b, g) : a == Yi ? ua(Ni, d, b, g) : a == bj && ua(Pi, d, b, g)
            }
            function va(a, b, c, e) {
                Ee(a, b, c, e);
                a == aj ? Ee($i, b, jk(), e) : a == $i && Ee(aj, b, jk(), e)
            }
            function Ib(a, b, c) {
                c = {
                    xa: h,
                    ra: mi,
                    Aa: 0,
                    va: h,
                    Ga: 0,
                    jb: 0,
                    Ra: 0,
                    eb: 0,
                    Ya: 0,
                    Za: 0,
                    Va: h,
                    Ua: h,
                    ia: h,
                    fa: j,
                    Oa: j,
                    options: b,
                    Wa: c,
                    za: a
                };
                ua(Vj, Dg(c), a, g);
                if (b.ca == ii || b.ca == Hj) {
                    var e = a == x ? C : a;
                    e[B].msTouchAction = fj;
                    e[B].touchAction = fj
                }
                b.ca != Lj && ua(Yi, Dg(c), a, g)
            }
            function Eg(a, b) {
                for (var c = {
                    wa: 1,
                    lb: g,
                    ca: ii
                }, e = b.a, d = g, f = 0; f < e[L]; f++) {
                    var k = e[f]
                      , p = k.p;
                    0 != p && (d = j);
                    10 == p && k.b != h ? (c.la == h && (c.la = []),
                    c.la[y]({
                        b: k.b,
                        c: k.c,
                        A: k.A,
                        y: k.y,
                        K: 100 / k.K
                    })) : 11 == p && (c.ua = a)
                }
                d == j && Ib(a, c, X(a, e))
            }
            function Dg(a) {
                return function(b) {
                    a.La = j;
                    a.Ma = j;
                    for (var c = b.target || b.srcElement, e = pa(); c != h && c != e; ) {
                        if (c[B] && (c[B].overflow == Aj || c[B].overflow == eh)) {
                            a.La = 0 < c.scrollWidth - c.clientWidth;
                            a.Ma = 0 < c.scrollHeight - c.clientHeight;
                            break
                        }
                        c = c[Q]
                    }
                    c = a.La == j && a.Ma == j;
                    a.fa = b[xa] == Vj;
                    if (a.fa)
                        0 < b[xb][L] && (a[Ab].ca == Lj && c == g) && Hd(b[xb][0]),
                        a.Aa = b[xb][L];
                    else {
                        if (b[kb] == g || 0 != b[Ra])
                            return;
                        b[Ea] && c == g && b[Ea]()
                    }
                    if (a.fa == j || 1 === a.Aa) {
                        a.ra = Ej;
                        a.xa = h;
                        c = [];
                        for (e = 0; 5 >= e; e++)
                            c[y]({
                                start: {
                                    x: 0,
                                    y: 0
                                },
                                end: {
                                    x: 0,
                                    y: 0
                                },
                                lastPosition: {
                                    x: 0,
                                    y: 0
                                }
                            });
                        a.va = c;
                        a.ya = ca;
                        a.Oa = j;
                        var c = a.fa ? b[xb][0] : b, d;
                        d = function(b) {
                            Fe(a);
                            a.ra = Vh;
                            Nd(b, a)
                        }
                        ;
                        a.ia = d;
                        b = a.fa ? a.za : x;
                        a.fa ? ua(Sj, a.ia, b, j) : q.self != q.top && (e = function(a) {
                            (a.relatedTarget === x.documentElement || a.toElement === h) && d(a)
                        }
                        ,
                        a.ia = e,
                        ua($i, e, b, j));
                        c = Id(c);
                        e = a.va[0];
                        e[Bb].x = c.x;
                        e.end.x = c.x;
                        e[sa].x = c.x;
                        e[Bb].y = c.y;
                        e.end.y = c.y;
                        e[sa].y = c.y;
                        Fg(a, c);
                        a.Va = function(b) {
                            if (!(a.ra === mi || a.ra === Vh))
                                if (Md == g)
                                    a.ia(b);
                                else {
                                    var c = a[Ab];
                                    if (a.Ha == j == g && (Ld++,
                                    a.Ha = g,
                                    c.ca == ii)) {
                                        Uc == g && a.ia(b);
                                        a.za != x && (Uc = g);
                                        if (c.la != h)
                                            for (var e = 0; e < c.la[L]; e++) {
                                                var d = c.la[e].b
                                                  , r = $(d);
                                                eb(d, h);
                                                mc(r, j);
                                                a.jb = pc(r.aa, j);
                                                for (var t = r.ma, u = 0; u < t[L]; u++) {
                                                    var s = t[u].o
                                                      , I = t[u].i;
                                                    Ja[s] === ca && (Ja[s] = {});
                                                    Ja[s][I] = r.aa
                                                }
                                            }
                                        c.ua != h && (e = J[c.ua.id],
                                        a.Ya = l(c.ua, bf, T[e].a),
                                        a.Za = l(c.ua, af, T[e].b),
                                        Ia[e] != ca && (Ia[e].a = h,
                                        Ia[e].b = h,
                                        rg(h)),
                                        Ja[e] === ca && (Ja[e] = {}),
                                        Ja[e].a = li,
                                        Ja[e].b = li);
                                        Nd(b, a)
                                    }
                                    t = Id(a.fa ? b[xb][0] : b);
                                    s = a.va[0];
                                    s[sa].x = s.end.x;
                                    s[sa].y = s.end.y;
                                    a.Ra = a.eb;
                                    s.end.x = a.fa ? b[xb][0].pageX : t.x;
                                    s.end.y = a.fa ? b[xb][0].pageY : t.y;
                                    u = Na();
                                    a.eb = u;
                                    u -= a.Ga;
                                    a.xa = Gg(s[Bb], s.end, u);
                                    a.fa && (a.Aa = b[xb][L]);
                                    a.ra = cj;
                                    if (c.ca == ii) {
                                        u = a.La == j && a.Ma == j;
                                        if (c.la != h)
                                            for (e = 0; e < c.la[L]; e++) {
                                                var A = c.la[e];
                                                if (0 == A.c && a.La == g || 1 == A.c && a.Ma == g) {
                                                    a.ia(b);
                                                    return
                                                }
                                            }
                                        b[Ea] && u == g && b[Ea]();
                                        var u = I = 0
                                          , w = 1
                                          , N = 1;
                                        if (a.za != h)
                                            for (var O = wd(J[a.za.id]); O != h && O != aa; )
                                                e = na(O),
                                                I += l(e, Of, 0),
                                                u += l(e, fh, 0),
                                                w *= l(e, Oh, 1),
                                                w *= l(e, gf, 1),
                                                N *= l(e, Ph, 1),
                                                N *= l(e, hf, 1),
                                                O = wd(O);
                                        if (c.la != h)
                                            for (var M = c.la, e = 0; e < M[L]; e++)
                                                if (A = M[e],
                                                d = A.b,
                                                r = $(d)) {
                                                    var r = ia(r), U = Hg(A), G;
                                                    U == wj ? G = (s.end.x - s[Bb].x) / w : U == Ri ? G = (s[Bb].x - s.end.x) / w : U == $j ? G = (s[Bb].y - s.end.y) / N : U == hi && (G = (s.end.y - s[Bb].y) / N);
                                                    A = G / A.K;
                                                    A += a.jb;
                                                    A = n.min(r, A);
                                                    A = n.max(0, A);
                                                    fb(A, d, j, g)
                                                } else
                                                    a.ia(b);
                                        c.ua != h && (e = J[c.ua.id],
                                        G = a.Ya + (s.end.x - s[Bb].x) / w,
                                        s = a.Za + (s.end.y - s[Bb].y) / N,
                                        ic == j && (O = hg(O),
                                        N = ue(e),
                                        G = n.max(G, -N / 2 - I),
                                        G = n.min(G, O[La] - N / 2 - I),
                                        I = ve(e),
                                        s = n.max(s, -I / 2 - u),
                                        s = n.min(s, O[mb] - I / 2 - u)),
                                        ba(c.ua, Of, G, fh, s));
                                        Nd(b, a)
                                    } else
                                        c.ca == Hj ? 1 < a.Aa ? a.ia(b) : (b[Ea] && a.xa == c[Eb] && b[Ea](),
                                        G = c[Eb] == wj || c[Eb] == Ri ? s.end.x : s.end.y,
                                        O = j,
                                        O = c[Eb] == wj || c[Eb] == hi ? 20 < a.ya - G : 20 < G - a.ya,
                                        c = a.xa === c[Eb] || 100 > u,
                                        (O || c == j || Uc == g) && a.ia(b)) : c.ca == Lj && 5 < Ge(s[Bb], s.end) && a.ia(b);
                                    Fg(a, t)
                                }
                        }
                        ;
                        ua(a.fa ? Uj : Zi, a.Va, b, j);
                        a.Ua = function(b) {
                            if (!(a.ra === mi || a.ra === Vh) && !(b[xb] && 0 < b[xb][L]))
                                if (Md == g && 0 < Ld)
                                    a.ia(b);
                                else {
                                    var c = a[Ab];
                                    b[xa] == Tj && 0 < b[pb][L] && c[xa] == Lj && Hd(b[pb][0]);
                                    var e = Na()
                                      , d = e - a.Ga
                                      , l = a.va[0];
                                    a.xa = Gg(l[Bb], l.end, d);
                                    a.ra = mi;
                                    Ja = {};
                                    var t = 1 === a.Aa || !a.fa
                                      , u = 0 !== l.end.x;
                                    if (c.ca == ii) {
                                        if (a.Ha == j) {
                                            Fe(a);
                                            return
                                        }
                                        if (c.la != h) {
                                            t = (e - a.Ra) / 1E3;
                                            for (u = 0; u < c.la[L]; u++) {
                                                var s = c.la[u]
                                                  , e = s.b
                                                  , d = $(e)
                                                  , w = s.y;
                                                if (d) {
                                                    var A = ia(d)
                                                      , C = Hg(s)
                                                      , N = s.K
                                                      , O = j
                                                      , M = j
                                                      , U = 1;
                                                    if (w == g)
                                                        if (w = 0,
                                                        w = 0 == s.c ? n.abs(l[sa].x - l.end.x) / t : n.abs(l[sa].y - l.end.y) / t,
                                                        w *= 2,
                                                        20 < w)
                                                            O = g,
                                                            M = n[$a](180 * n.atan2(l.end.y - l[sa].y, l.end.x - l[sa].x) / n.PI),
                                                            M = (0 == s.c ? 90 <= M || -90 >= M ? Ri : wj : 0 >= M && -180 <= M ? $j : hi) != C,
                                                            U = w / N;
                                                        else {
                                                            C = s = pc(d.aa, j);
                                                            for (w = N = 0; w < d.ma[L]; w++) {
                                                                var G = d.ma[w];
                                                                if (2 == G.p) {
                                                                    for (var v = G.s.a, z = j, J = 0; J < v[L]; J++) {
                                                                        var D = v[J];
                                                                        if (7 == D.p && D.b != h && D.b == e) {
                                                                            z = g;
                                                                            break
                                                                        }
                                                                    }
                                                                    z == g && (G = G.t,
                                                                    v = n.abs(G - s),
                                                                    v < C && (C = v,
                                                                    N = G))
                                                                }
                                                            }
                                                            A - s < C && (N = A,
                                                            C = A - s);
                                                            0 != C && (O = g,
                                                            M = N < s,
                                                            U = n.abs(N - s) / 0.2)
                                                        }
                                                    mc(d, M);
                                                    Pc(d, U);
                                                    O == g && d.ha != A ? Lc(e, M, j, j) : fb(M ? A - d.ha : d.ha, e, g, g)
                                                }
                                            }
                                        }
                                        Nd(b, a)
                                    } else
                                        c.ca == Hj ? (e = a.xa === c[Eb],
                                        l = Ge(l[Bb], l.end),
                                        t && (u && e) && l > c.Ea ? (b = {
                                            type: qf + c[Eb][Lb](0).toUpperCase() + c[Eb][Qa](1) + ee
                                        },
                                        a.Wa(b)) : a.ia(b)) : c.ca == Lj ? 1500 > d && a.Wa(b) : a.ia(b);
                                    Fe(a)
                                }
                        }
                        ;
                        ua(a.fa ? Tj : bj, a.Ua, b, j);
                        b.setCapture && b.setCapture();
                        a.Ga = Na();
                        a.Ra = a.Ga;
                        Uc = Md = a.Ha = j
                    }
                }
            }
            function Fe(a) {
                if (a.Oa != g) {
                    a.Oa = g;
                    Ja = {};
                    var b = a.fa ? a.za : x;
                    b.releaseCapture && b.releaseCapture();
                    Vc(a.fa ? Uj : Zi, a.Va, b);
                    Vc(a.fa ? Tj : bj, a.Ua, b);
                    a.fa ? Vc(Sj, a.ia, b) : Vc($i, a.ia, b);
                    a[Ab].ca == ii && (Uc = j);
                    a.Ha == g && Ld--
                }
            }
            function Nd(a, b) {
                b[Ab].lb == g && (a.hypeGesturePhase = b.ra,
                a.hypeGestureXPosition = b.va[0].end.x,
                a.hypeGestureYPosition = b.va[0].end.y,
                b.Wa(a))
            }
            function Vc(a, b, c) {
                c[Mb] ? c[Mb](a, b, j) : c[Aa] && c[Aa](hj + a, b)
            }
            function ua(a, b, c, e) {
                var d = {
                    eventType: a,
                    handler: b,
                    element: c
                };
                e && Od[y](d);
                c[Ca] ? c[Ca](a, b, w.Ta ? {
                    passive: j
                } : j) : c[jb] && c[jb](hj + a, b);
                eg(c)
            }
            function Id(a) {
                var b = {};
                if (a.pageX || a.pageY)
                    b.x = a.pageX,
                    b.y = a.pageY;
                else if (a[cb] || a[ib])
                    b.x = a[cb] + x[Sa].scrollLeft + x.documentElement.scrollLeft,
                    b.y = a[ib] + x[Sa].scrollTop + x.documentElement.scrollTop;
                return b
            }
            function Hg(a) {
                var b;
                0 == a.c ? 0 == a.A ? b = wj : 1 == a.A && (b = Ri) : 1 == a.c && (0 == a.A ? b = $j : 1 == a.A && (b = hi));
                return b
            }
            function Fg(a, b) {
                var c = a[Ab]
                  , e = c[Eb] == wj || c[Eb] == Ri ? b.x : b.y;
                a.ya = a.ya == ca ? e : c[Eb] == wj || c[Eb] == hi ? n.max(a.ya, e) : n.min(a.ya, e)
            }
            function Gg(a, b, c) {
                a = n[$a](180 * n.atan2(b.y - a.y, b.x - a.x) / n.PI);
                c = n.min(45, 45 * c / 2E3);
                if (a >= 135 + c || a <= -135 - c)
                    return Ri;
                if (a <= 45 - c && a >= -45 + c)
                    return wj;
                if (a < -45 - c && a > -135 + c)
                    return $j;
                if (a > 45 + c && a < 135 - c)
                    return hi
            }
            function Ig(a) {
                a = Pd[a];
                if (a != h) {
                    for (var b = 1 < q.devicePixelRatio, c = j, e = h, d = 0; d < a[L]; d++) {
                        var f = a[d]
                          , k = K[f].t;
                        if (k == be)
                            e = f,
                            c = g;
                        else if (k == ce) {
                            if (c == j || b == g)
                                e = f;
                            if (b == g)
                                break
                        } else
                            c == j && (e = f)
                    }
                    return e
                }
            }
            function qk(a) {
                var b = K[a].g;
                if (b != h && Ig(b) != a)
                    Jg(a);
                else {
                    var b = new Image
                      , c = function() {
                        Jg(a)
                    }
                      , e = He(a);
                    b.onload = c;
                    b.onerror = c;
                    b.onabort = c;
                    b.src = e;
                    b.vb = a
                }
            }
            function Jg(a) {
                a = Jb[nb](a);
                -1 != a && Jb[Da](a, 1);
                0 >= Jb[L] && Kg()
            }
            function Kg() {
                rd != h && rd(j, C);
                if (Wa({
                    type: kf
                }, C) !== j)
                    if (-1 == me)
                        Kc(Ha);
                    else {
                        rc = g;
                        for (var a = -1, b = 0; b < za[L]; b++) {
                            for (var c = za[b].X, e = 0; e < c[L]; e++)
                                if (c[e] == me) {
                                    a = b;
                                    break
                                }
                            if (-1 != a)
                                break
                        }
                        -1 == a && (a = 0);
                        Ha = a;
                        Qd(me)
                    }
            }
            function He(a) {
                var b = K[a];
                if (b == h)
                    return Y;
                var c = b.n;
                a = Y;
                b.r != g && (a += le + kd);
                a += c;
                b = Wa({
                    type: mf,
                    url: a
                });
                typeof b === Fj && (a = b);
                return a
            }
            function Cd(a) {
                for (var b = 0; b < t[L]; b++)
                    if (t[b].o == a)
                        return b;
                return -1
            }
            function qc(a) {
                a = t[a];
                return a == h ? h : a.o
            }
            function pa() {
                return na(qc(F))
            }
            function Fd(a) {
                return a.getElementsByClassName(Se)
            }
            function ub(a, b, c, e, d, f, k, l, m) {
                a[y]({
                    i: b,
                    t: c,
                    d: e,
                    f: d,
                    o: f,
                    s: k,
                    e: l,
                    r: m,
                    p: 0
                })
            }
            function Lg(a, b, c, e, d) {
                b = {
                    i: a,
                    n: a,
                    f: 30,
                    d: b,
                    a: c,
                    b: []
                };
                C[Nb](ch, g);
                C[Nb](dh, g);
                t[F].T[a] = b;
                Dd(a, c, b);
                Bd = a;
                Qc = function() {
                    xg(e, d, a)
                }
                ;
                db(a, h, j)
            }
            function Rd(a, b, c, e) {
                var d = C[Q][ab]
                  , f = a[Ka]($e)
                  , k = b[Ka]($e);
                if (T[J[a.id]]) {
                    var l = Sd(f)
                      , m = Td(f);
                    ba(a, Gh, l, ai, m)
                }
                a = Sd(k);
                k = Td(k);
                ba(b, Gh, a, ai, k);
                c && (c = l,
                a > c && (c = a),
                ha(C[B], z(c)),
                Gb[C.id] = h,
                C[B].margin == eh && ba(b, Of, n.max(0, (l < a ? d < c ? d - l : c - l : d < c ? d - a : c - a) / 2)));
                e && (b = m,
                k > b && (b = k),
                ma(C[B], z(b)))
            }
            function Td(a) {
                var b = C[Q].offsetHeight
                  , c = t[a].b;
                return c != h ? c / 100 * b : t[a].Z
            }
            function Sd(a) {
                var b = C[Q][ab]
                  , c = t[a].a;
                return c != h ? c / 100 * b : t[a].Y
            }
            function Qd(a, b, c, e) {
                if (!(qc(a) == h || Ed == g)) {
                    c == h && (c = 1.1);
                    c = Be(c, 60);
                    Ed = g;
                    var d = function() {
                        e != h && e();
                        Oa = [];
                        Kd = {};
                        var d = pa();
                        ic = t[a].a != h || t[a].b != h ? g : j;
                        var f = qc(a)
                          , k = F
                          , m = pa();
                        if (m != h)
                            for (var m = m[Fa](dk), p = 0; p < m[L]; p++)
                                m[p].pause && m[p].pause();
                        m = Va[Qa](0);
                        for (p = 0; p < m[L]; p++)
                            m[p].cb == ca && nc(m[p]);
                        var p = [], r;
                        for (r in sb)
                            if (sb[H](r) != j) {
                                var m = j, s;
                                for (s in qb)
                                    if (qb[H](s) != j) {
                                        for (var u = 0; u < qb[s][L]; u++)
                                            if (r == qb[s][u]) {
                                                m = g;
                                                break
                                            }
                                        if (m == g)
                                            break
                                    }
                                m == j && p[y](r)
                            }
                        for (m = 0; m < p[L]; m++)
                            delete sb[p[m]];
                        Tc = [];
                        F = Cd(f);
                        r = na(f);
                        s = r[Ka]($e);
                        if (w.Ba != h && (m = pa(),
                        m != h)) {
                            m = m[Fa](dk);
                            for (p = 0; p < m[L]; p++) {
                                u = m[p];
                                oa(u, Y);
                                var v = u.outerHTML
                                  , E = u[Q];
                                E[Db](u);
                                oa(E, E.innerHTML + v)
                            }
                        }
                        if (Jc != h) {
                            for (m = 0; m < td[L]; m++)
                                td[m].destroy();
                            td = []
                        }
                        m = na(f);
                        T[f] = {};
                        var f = [], p = t[k].v, D;
                        for (D in p)
                            if (p[H](D) != j) {
                                var z = p[D];
                                (k = z.cL) && f[y](k)
                            }
                        var p = m[Ka]($e)
                          , u = t[p].v
                          , v = []
                          , E = []
                          , I = 0;
                        for (D in u)
                            if (u[H](D) != j && (z = u[D],
                            k = z.cL)) {
                                for (var K = j, P = 0; P < f[L]; P++)
                                    if (f[P] === D) {
                                        K = g;
                                        break
                                    }
                                var R = S[k][Cb]
                                  , P = R;
                                P[Q][zb] == Xe && (P = R[Q]);
                                if (K) {
                                    if (T[J[R.id]]) {
                                        for (var z = R, $ = K = 0; z && z.id != aa; )
                                            K += l(z, Of, 0),
                                            $ += l(z, fh, 0),
                                            z = z[Q];
                                        ba(R, Of, K, fh, $)
                                    }
                                    C[Za](P);
                                    S[k].mb ? ra(P[B], P[B][Pb] + 100) : (E[y](P),
                                    P[B][Pb] > I && (I = P[B][Pb]))
                                } else
                                    v[y]([P, R, z]);
                                S[k].bb == j && (Ag(P, g),
                                S[k].bb = g,
                                P[Q] != h && P[Q][Db](P))
                            }
                        for (P = 0; P < E[L]; P++)
                            R = E[P],
                            ra(R[B], R[B][Pb] - I - 1);
                        Ag(m, j);
                        for (P = 0; P < v[L]; P++)
                            m[Za](v[P][0]),
                            R = v[P][1],
                            z = v[P][2],
                            De(z, R, R.id, g);
                        D = {
                            type: of
                        };
                        Wa(D, m);
                        k = t[p].dA;
                        k != h && X(m, k.a)(D);
                        D = t[s].T;
                        for (var V in D)
                            D[H](V) != j && (k = t[F].T[V],
                            k.s == ca && Dd(V, k.a, k));
                        V = {
                            C: Ni,
                            D: Pi,
                            E: Oi
                        };
                        for (var W in V)
                            V[H](W) == j || t[s][W] == h || (D = X(pa(), t[s][W].a),
                            k = V[W],
                            sc[k] = D,
                            x[Ca] ? x[Ca](k, D, j) : x[jb] && x[jb](hj + k, D));
                        W = t[s].L;
                        for (m = 0; m < W[L]; m++)
                            V = W[m].B,
                            D = X(pa(), W[m].a),
                            Cg(V, D, h);
                        W = {
                            G: Ri,
                            H: wj,
                            I: $j,
                            J: hi
                        };
                        for (var Z in W)
                            if (W[H](Z) != j && (V = t[s][Z])) {
                                V = V.a;
                                D = g;
                                for (m = 0; m < V[L]; m++)
                                    if (0 != V[m].p) {
                                        D = j;
                                        break
                                    }
                                D == j && (V = X(pa(), V),
                                Ib(r, {
                                    wa: 1,
                                    direction: W[Z],
                                    Ea: 30,
                                    ca: Hj
                                }, V))
                            }
                        (Z = t[s].K) && Eg(x, Z);
                        Z = pa();
                        if (2 == b) {
                            Rd(d, Z, g, g);
                            W = c;
                            r = [];
                            ra(Z[B], 1);
                            ub(r, ki, 0, W, fh, J[Z.id], 0, 1);
                            if (d != h)
                                if (ra(d[B], 0),
                                Zf == j)
                                    s = J[d.id],
                                    ub(r, ki, 0, W, fh, s, 1, 0);
                                else if (d[B][La] != Z[B][La] || d[B][mb] != Z[B][mb])
                                    s = J[d.id],
                                    ub(r, ki, W / 2, W / 2, fh, s, 1, 0);
                            ba(Z, ki, 0);
                            Lg(cf, W, r, d, Z);
                            la(Z[B], zh)
                        } else
                            4 == b || 5 == b || 6 == b || 7 == b ? (W = c,
                            r = [],
                            D = d[Ka]($e),
                            k = Z[Ka]($e),
                            s = Sd(D),
                            V = Sd(k),
                            D = Td(D),
                            k = Td(k),
                            5 == b || 4 == b ? (Rd(d, Z, j, g),
                            s != V && (ub(r, Gh, 0, W, Gh, aa, s, V),
                            T[aa] = {},
                            T[aa].c = s,
                            T[aa].d = D > k ? D : k,
                            T[aa].a = 0,
                            T[aa].b = 0)) : (Rd(d, Z, g, j),
                            D != k && (ub(r, ai, 0, W, Gh, aa, D, k),
                            T[aa] = {},
                            T[aa].c = s > V ? s : V,
                            T[aa].d = D,
                            T[aa].a = 0,
                            T[aa].b = 0)),
                            m = Of,
                            f = V,
                            p = -1 * V,
                            5 == b ? (f = -1 * s,
                            p = s) : 6 == b ? (m = fh,
                            f = -1 * D,
                            p = D) : 7 == b && (m = fh,
                            f = k,
                            p = -1 * k),
                            d != h && (u = J[d.id],
                            ba(d, Gh, s, ai, D),
                            ub(r, m, 0, W, Gh, u, 0, f)),
                            ub(r, m, 0, W, Gh, J[Z.id], p, 0),
                            ba(Z, Gh, V, ai, k, m, p),
                            Lg(df, W, r, d, Z),
                            la(Z[B], zh)) : (Rd(d, Z, j, j),
                            xg(d, Z, h));
                        Kb()
                    }
                      , f = j
                      , k = pa();
                    k[Ya](dh);
                    if (Mg == g && k != h) {
                        var k = Cd(qc(F))
                          , p = {
                            type: pf
                        };
                        if (Wa(p, h) !== j) {
                            var m = t[k].B;
                            if (m != h) {
                                for (var r = m.a, E = X(pa(), r), m = 0; m < r[L]; m++) {
                                    var u = r[m]
                                      , s = u.b;
                                    3 == u.p && (s != h && t[k].T[s] != h) && (f = g,
                                    Bd = s,
                                    Qc = d)
                                }
                                E(p)
                            }
                        }
                        p = Fd(pa());
                        for (m = 0; m < p[L]; m++)
                            r = p[m],
                            yg(r) != j && !t[k].v[J[r.id]].cL && (E = {
                                type: sf
                            },
                            Wa(E, r),
                            (u = l(r, Hh)) && X(r, u.a)(E));
                        for (var v in sc)
                            sc[H](v) != j && (x[Mb] ? x[Mb](v, sc[v], j) : x[Aa] && x[Aa](hj + v, sc[v]));
                        sc = {};
                        for (m = 0; m < Od[L]; m++)
                            v = Od[m],
                            Vc(v.eventType, v.handler, v[Cb]);
                        Od = []
                    }
                    Mg = g;
                    f == j && d()
                }
            }
            function Kc(a, b, c) {
                rc = j;
                var e = za[a];
                e == h || Ed == g || (e = Ng(e),
                Qd(e, b, c, function() {
                    Ha = a
                }))
            }
            function Ie(a) {
                for (var b = [], c = 0; c < a.X[L]; c++) {
                    var e = a.X[c]
                      , d = t[e];
                    b[y]({
                        _: e,
                        name: d.n,
                        breakpoint: d.d,
                        width: d.Y,
                        height: d.Z
                    })
                }
                return b
            }
            function Og(a, b) {
                for (var c = Ie(b), e = 0; e < c[L]; e++)
                    if (c[e].name == a)
                        return c[e]._;
                return -1
            }
            function Je() {
                for (var a = [], b = 0; b < za[L]; b++)
                    a[y](za[b].n);
                return a
            }
            function hb(a, b, c) {
                a = a.id;
                a = J[a] || a;
                var e = T[a];
                e == h && (e = {},
                T[a] = e);
                e[b] = c
            }
            function l(a, b, c) {
                c = "undefined" != typeof c ? c : h;
                a = a.id;
                a = T[J[a] || a];
                if (a == h)
                    return c;
                b = a[b];
                return b == h ? c : b
            }
            function Wa(a, b) {
                var c = q.HYPE_eventListeners;
                if (c != h) {
                    for (var e, d = 0; d < c[L]; d++)
                        if (c[d][xa] == a[xa] && c[d].callback != h && (e = c[d].callback(R.API, b, a),
                        e === j))
                            return j;
                    return e
                }
            }
            function Pg(a) {
                var b = x[Fa](xi)[0];
                b || (b = x[Ob](gi),
                x[Sa][Za](b));
                b[Za](a)
            }
            function Qg(a) {
                a = a[yb](/\|/g, Hc)[yb](/\`/g, si)[yb](/\@/g, ck)[yb](/\?/g, Ji)[yb](/\$/g, Wi)[yb](/\^/g, jd);
                sd == j && (a = a[yb](/rotateY\(0\)/g, fj));
                var b = x[Ob](gi)
                  , c = x.xmlEncoding == h ? zc : Y;
                oa(b, c + Zd + a + Wd + c);
                Pg(b)
            }
            function Wc(a, b) {
                var c = b.f
                  , e = n[Fb](a);
                return Be(e + 100 * (a - e) / c, c)
            }
            function rk() {
                for (var a in Ke)
                    Ke[H](a) != j && (cc[a] = {
                        q: Ke[a]
                    });
                for (var b in cc)
                    if (cc[H](b) != j)
                        if (a = cc[b].q,
                        typeof a === Fj)
                            kc[b] = eval(a);
                        else {
                            for (var c = [], e = 0; e < a[L]; e++) {
                                var d = a[e];
                                c[y]({
                                    hb: {
                                        x: d[0],
                                        y: d[1]
                                    },
                                    gb: {
                                        x: d[2],
                                        y: d[3]
                                    },
                                    $a: {
                                        x: d[4],
                                        y: d[5]
                                    },
                                    ab: {
                                        x: d[6],
                                        y: d[7]
                                    },
                                    length: 0,
                                    Pa: []
                                })
                            }
                            sk(c);
                            kc[b] = c
                        }
            }
            function sk(a) {
                var b, c;
                c == h && (c = 100);
                b == h && (b = 100);
                for (var e = 0; e < a[L]; e++) {
                    for (var d = a[e], f = c, f = n[Xa](n.max(n.min(Ge(d.hb, d.ab) / 2, c), b)), k = 0; k < f; k++) {
                        var p = d
                          , m = k / (f - 1)
                          , l = tc(p.hb, p.gb, m)
                          , t = tc(p.gb, p.$a, m)
                          , p = tc(p.$a, p.ab, m)
                          , u = tc(l, t, m)
                          , t = tc(t, p, m)
                          , m = tc(u, t, m)
                          , u = j
                          , s = t;
                        t.x == m.x && t.y == m.y && (l.x == m.x && l.y == m.y ? s = p : (s = l,
                        u = g));
                        l = 0;
                        l = s.x == m.x ? s.y >= m.y ? 90 : -90 : 180 * n.atan((s.y - m.y) / (s.x - m.x)) / n.PI;
                        s.x < m.x && (l += 180);
                        m.Sa = l;
                        u == g && (m.Sa += 180);
                        l = {};
                        l.location = m;
                        d.Pa[y](l)
                    }
                    d.length = 0
                }
            }
            function tc(a, b, c) {
                return {
                    x: a.x + (b.x - a.x) * c,
                    y: a.y + (b.y - a.y) * c,
                    Sa: 0
                }
            }
            function Ge(a, b) {
                return n.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y))
            }
            function Rg(a, b, c) {
                var e = x[Ob](gi)
                  , d = e[B];
                qa(e, Xe);
                d.position = ah;
                d.top = ld;
                d.left = ld;
                ha(d, qd);
                ma(d, qd);
                if (b.bR != h || b.aY != h)
                    d[fd] = c,
                    d.MozPerspective = c,
                    d.perspective = c;
                d.pointerEvents = fj;
                d[nj] = fj;
                e[Za](a);
                return e
            }
            function gb(a) {
                var b = F;
                a != h && (a = a[Ka]($e),
                a != h && (b = ea(a)));
                return b
            }
            function ig(a) {
                var b = [], c = gb(x[lb](vb[a])), e = t[c].v, d;
                for (d in e)
                    if (e[H](d) != j) {
                        var f = e[d];
                        (f.bF == a || f.bF == h && a == t[c].o) && b[y](d)
                    }
                return b
            }
            function wd(a) {
                var b = gb(x[lb](vb[a]));
                a = t[b].v[a];
                return a == h ? h : a.bF
            }
            function te(a) {
                if (ic != j) {
                    Gb = {};
                    a = ig(a);
                    for (var b = 0; b < a[L]; b++) {
                        var c = a[b]
                          , e = na(c);
                        jc(e);
                        te(c)
                    }
                }
            }
            function Kb() {
                if (!(0 < Jb[L])) {
                    if (rc == j && Le == j) {
                        Le = g;
                        var a = Ng(za[Ha]);
                        F != a && Qd(a, 1, 0);
                        Le = j
                    }
                    ic == g && te(h)
                }
            }
            function Ng(a) {
                var b = Ie(a)
                  , c = b[0]._;
                if (1 != b[L]) {
                    var e = C.parentElement[ab];
                    if (0 != e)
                        for (var d = 0; d < b[L] && !(b[d].breakpoint > e); d++)
                            c = b[d]._
                }
                b = t[c].n;
                e = Wa({
                    type: lf,
                    layoutName: b,
                    sceneName: a.n
                }, C);
                typeof e === Fj && e != b && (a = Og(e, a),
                -1 != a && (c = a));
                return c
            }
            function hg(a) {
                var b = vb[qc(F)];
                a != h && (b = vb[a]);
                a = Gb[b];
                a == h && (a = x[lb](b),
                a = {
                    width: a[ab],
                    height: a.offsetHeight
                },
                Gb[b] = a);
                return a
            }
            function gg(a) {
                var b = 0
                  , c = 0;
                a == h ? (b = x[lb](vb[a]),
                a = gb(b),
                b = t[a].Y,
                c = t[a].Z) : (b = ue(a),
                c = ve(a));
                return {
                    width: b,
                    height: c
                }
            }
            function re(a) {
                return (w.ta != h || 3.5 <= w.Fa || 10 <= w.ga) && l(a, ef) == od
            }
            function ng() {
                xd = j;
                we = g;
                for (var a = 0; a < Oc[L]; a++)
                    jc(Oc[a]);
                we = j;
                jg();
                Oc = []
            }
            function jg() {
                Jc == h || Me == g || (Me = g,
                q[wb](function() {
                    Me = j;
                    Jc.refreshAll()
                }, 0))
            }
            function yg(a) {
                var b = gb(a);
                return t[b].U[J[a.id]] != h || l(a, Nh) != h ? g : j
            }
            function Ne(a, b, c) {
                var e = b;
                if (e == h || x[lb](e) != h) {
                    do
                        e = c + Oe();
                    while (x[lb](e) != h)
                }
                vb[a] = e;
                J[e] = a;
                return Pe[b != h ? b : e] = e
            }
            function na(a) {
                return x[lb](vb[a])
            }
            function Na() {
                return Date.now()
            }
            function Oe() {
                for (var a = Y, b = R.Qa + Re, c = 0; 20 > c; c++)
                    var e = n[Fb](n.random() * b[L])
                      , a = a + b.substring(e, e + 1);
                return a
            }
            function Mc(a) {
                q.console && q.console.log(a)
            }
            var R = this
              , C = x[lb](aa)
              , Gd = [Rh, Sh]
              , Rc = [Pf, Sf, Rf, Tf, Qf, qh, Uf, Vf, uh, Qh]
              , sg = [Qj, ik, Pj, wi, Zh, hk, Cj]
              , wg = {
                top: {
                    HYP_r: fh
                },
                left: {
                    HYP_r: Of
                },
                width: {
                    HYP_r: Gh
                },
                height: {
                    HYP_r: ai
                },
                "background-image": {
                    HYP_x: g,
                    HYP_r: Uh
                },
                rotateZ: {
                    HYP_r: pi,
                    HYP_s: 0
                },
                scaleX: {
                    HYP_r: Oh,
                    HYP_s: 1
                },
                scaleY: {
                    HYP_r: Ph,
                    HYP_s: 1
                },
                "z-index": {
                    HYP_r: gk
                },
                opacity: {
                    HYP_r: ki,
                    HYP_s: 1
                }
            }
              , Ha = 0
              , F = 0
              , Oa = []
              , Va = []
              , Ia = {}
              , Ja = {}
              , lc = {}
              , sb = {}
              , S = {}
              , zd = j
              , Pd = {}
              , Jb = []
              , T = {}
              , Ce = {}
              , Tc = []
              , sc = {}
              , Qc = h
              , Bd = h
              , vb = {}
              , J = {}
              , Pe = {}
              , Sg = 0
              , Ed = j
              , Od = []
              , kc = {}
              , Mg = j
              , ic = j
              , xd = j
              , we = j
              , Oc = []
              , Gb = {}
              , Kd = {}
              , Ke = {
                d: [[0, 0, 0.42, 0, 1, 1, 1, 1]],
                e: [[0, 0, 0, 0, 0.58, 1, 1, 1]],
                c: [[0, 0, 0.42, 0, 0.58, 1, 1, 1]]
            }
              , rc = j
              , Le = j
              , Jc = q.HYPE_w_648
              , td = []
              , Me = j;
            R.Qa = nd;
            R.na = dd;
            var Uc = j
              , Ld = 0
              , Md = j
              , Sc = [];
            R.z_o = function() {
                0 == Sg && (Sg = Oe());
                rd != h && rd(g, C);
                sd = sd && w.ta != h;
                w.Ba != h && x[Sa][Ca](Uj, jk(), w.Ta ? {
                    passive: j
                } : j);
                vb[aa] = aa;
                J[aa] = aa;
                Pe[aa] = aa;
                for (var a = 0; a < t[L]; a++) {
                    var b = t[a].T, c;
                    for (c in b)
                        if (b[H](c) != j) {
                            var e = b[c];
                            e.d = Wc(e.z, e);
                            for (var d = 0; d < e.a[L]; d++) {
                                var f = e.a[d];
                                f.t = Wc(f.y, e);
                                f.d = Wc(f.z, e);
                                f.p == h ? f.p = 0 : 2 == f.p && (f.d = 0);
                                f.r == h && (f.r = j);
                                f.k = d
                            }
                            d = e.b;
                            for (f = 0; f < d[L]; f++) {
                                var k = d[f];
                                k.startTime = Wc(k.C, e);
                                k.duration = Wc(k.D, e)
                            }
                        }
                }
                Qg(id);
                lk == g && Qg(Mf);
                for (a = 0; a < Xf[L]; a++)
                    b = Xf[a],
                    c = x[Ob](gi),
                    oa(c, b),
                    Pg(c);
                q[wb](Kb, 120);
                q[wb](Kb, 1200);
                a = x[Ob](gi);
                a.id = Ye;
                la(a[B], fj);
                a[Nb](dh, g);
                C[Za](a);
                for (b = 0; b < t[L]; b++) {
                    c = t[b];
                    e = x[Ob](gi);
                    d = e[B];
                    qa(e, Ze);
                    e.id = Ne(c.o, h, Di);
                    e[Nb]($e, c._);
                    Zf != j && (d.backgroundColor = c.c);
                    la(d, fj);
                    e[Nb](dh, g);
                    d.overflow = yi;
                    d.position = ah;
                    ha(d, z(c.Y));
                    ma(d, z(c.Z));
                    w.Ka == g && 11 > w.ga && (d.perspective = c.p);
                    C[Za](e);
                    var d = c.v, l;
                    for (l in d)
                        if (d[H](l) != j && (f = d[l],
                        (k = f.cL) && S[k] == h)) {
                            var m = c.T, r = [], v;
                            for (v in m)
                                if (m[H](v) != j) {
                                    var u = c.T[v]
                                      , s = u.a;
                                    u.s == k && (u = Dd(v, s, u, k),
                                    r[y](u))
                                }
                            m = x[Ob](f.k);
                            qa(m, f.cP ? We + f.cP : Ue);
                            m.id = Ne(l, f.i, Ci);
                            m[Nb]($e, c._);
                            m[B].pointerEvents = eh;
                            m[B][nj] = eh;
                            f.w != h && oa(m, f.w);
                            if (w.Ka == g && (w.ga == h || 11 <= w.ga))
                                u = Rg(m, f, c.p),
                                u[Nb]($e, c._),
                                a[Za](u);
                            else
                                a[Za](m);
                            S[k] = {
                                element: m,
                                ib: r,
                                mb: f.cS,
                                bb: j,
                                Xa: []
                            }
                        }
                    r = c.O;
                    for (s = 0; s < r[L]; s++)
                        if (l = r[s],
                        d[H](l) != j && (f = d[l],
                        k = f.cL,
                        !(f.cM == g || k))) {
                            m = x[Ob](f.k);
                            qa(m, f.cP ? Te + f.cP : Se);
                            m.id = Ne(l, f.i, Ci);
                            m[Nb]($e, c._);
                            m[B].pointerEvents = eh;
                            m[B][nj] = eh;
                            f.w != h && oa(m, f.w);
                            var k = h, I;
                            for (I in qb)
                                if (qb[H](I) != j) {
                                    for (u = 0; u < qb[I][L]; u++)
                                        if (l == qb[I][u]) {
                                            k = I;
                                            break
                                        }
                                    if (k != h)
                                        break
                                }
                            w.Ka == g && (w.ga == h || 11 <= w.ga) ? (u = Rg(m, f, c.p),
                            k ? S[k][Cb][Za](u) : e[Za](u)) : k ? S[k][Cb][Za](m) : e[Za](m)
                        }
                }
                rk();
                for (var A in K)
                    K[H](A) != j && (l = K[A].g,
                    l != h && (v = Pd[l],
                    v == h && (v = [],
                    Pd[l] = v),
                    v[y](A)));
                for (var F in K)
                    K[H](F) != j && K[F].p != h && -1 == Jb[nb](F) && Jb[y](F);
                A = Jb[Qa](0);
                if (0 == A[L])
                    Kg();
                else
                    for (F = 0; F < A[L]; F++)
                        l = A[F],
                        1 == K[l].p && qk(l);
                q[Ca] ? (q[Ca](sj, function() {
                    rc = j;
                    Kb()
                }),
                q[Ca](jj, function() {
                    q[wb](Kb, 1)
                })) : q[jb] && q[jb](ij, function() {
                    rc = j;
                    Kb()
                });
                Ic && (C[B][gd] = vj,
                C[Ca] && (C[Ca](Xh, Jd, g),
                C[Ca](bj, Jd, g),
                C[Ca](Yi, Jd, g),
                C[Ca](aj, Jd, g)))
            }
            ;
            var w;
            var wa = function(a) {
                return (a = ga && ga[ta] && ga[ta].match(a)) && a[1]
            }
              , v = {};
            if (ga) {
                v.ga = da(wa(/MSIE (\d+\.\d+)/)) || da(wa(/(Trident)/) && wa(/rv:(\d+\.\d+)/)) || da(wa(/Edge\/(\d+\.\d+)/)) || h;
                v.nb = da(wa(/Gecko\/(\d+)/)) || h;
                v.Fa = da(wa(/Firefox\/(\d+\.\d+)/)) || h;
                v.ta = da(!v.ga && wa(/AppleWebKit\/(\d+\.\d+)/)) || h;
                v.Na = da(v.ta && wa(/Chrome\/(\d+\.\d+)/)) || h;
                v.fb = da(v.ta && wa(/Safari\/(\d+\.\d+)/) && wa(/Version\/(\d+\.\d+)/)) || h;
                v.opera = da(wa(/Opera\/(\d+\.\d+)/) && wa(/Version\/(\d+\.\d+)/)) || wa(/Opera\/(\d+\.\d+)/) || da(v.ta && wa(/OPR\/(\d+\.\d+)/)) || h;
                v.kb = -1 < ga[ta][Ga](fe) || h;
                v.pb = -1 < ga[ta][Ga](Ei) || h;
                v.qb = -1 < ga[ta][Ga](Fi) || h;
                v.rb = -1 < ga[ta][Ga](Gi) || h;
                v.Ba = v.pb || v.qb || v.rb || h;
                v.sb = x.compatMode == ie || h;
                v.Ka = v.ta != h || 10 <= v.Fa || 10 <= v.ga;
                for (var Qe in v)
                    (v[Qe] === h || isNaN(v[Qe])) && delete v[Qe];
                v.opera && v.ga && delete v.ga;
                v.Ta = j;
                try {
                    var Tg = Object.defineProperty({}, kj, {
                        get: function() {
                            v.Ta = g
                        }
                    });
                    q[Ca](Nj, h, Tg);
                    q[Mb](Nj, h, Tg)
                } catch (vk) {}
            }
            w = v;
            var ec = {
                i: dc,
                cP: dc,
                b: jc,
                a: jc,
                c: Ta,
                d: Ta,
                bQ: function(a) {
                    re(a) == g && hc(a)
                },
                bS: jc,
                t: function(a, b) {
                    a[B].fontSize = z(b)
                },
                s: function(a, b) {
                    a[B].fontFamily = b
                },
                v: function(a, b) {
                    a[B].fontWeight = b
                },
                u: function(a, b) {
                    a[B].fontStyle = b
                },
                H: function(a, b) {
                    a[B].textDecoration = b
                },
                F: function(a, b) {
                    a[B].textAlign = b
                },
                G: function(a, b) {
                    a[B].color = b
                },
                X: function(a, b) {
                    a[B].letterSpacing = z(b)
                },
                E: function(a, b) {
                    a[B].wordSpacing = z(b)
                },
                Y: function(a, b) {
                    a[B].lineHeight = z(b)
                },
                aX: dg,
                aW: dg,
                f: rb,
                bR: hc,
                aY: hc,
                cQ: rb,
                cR: rb,
                gW: rb,
                uB: rb,
                tX: rb,
                tY: rb,
                bO: rb,
                bP: dc,
                e: function(a, b) {
                    a[B].opacity = b;
                    a[B].MozOpacity = b;
                    eg(a)
                },
                aP: function(a, b) {
                    a[B].cursor = b
                },
                bD: function(a, b) {
                    a[B][R.na + bk] = b;
                    a[B].MozUserSelect = b;
                    a.onselectstart = function() {
                        return j
                    }
                },
                N: function(a, b) {
                    a[B].borderLeftWidth = z(b);
                    Ta(a)
                },
                O: function(a, b) {
                    a[B].borderRightWidth = z(b);
                    Ta(a)
                },
                P: function(a, b) {
                    a[B].borderTopWidth = z(b);
                    Ta(a)
                },
                M: function(a, b) {
                    a[B].borderBottomWidth = z(b);
                    Ta(a)
                },
                B: function(a, b) {
                    a[B].borderLeftColor = b
                },
                C: function(a, b) {
                    a[B].borderRightColor = b
                },
                D: function(a, b) {
                    a[B].borderTopColor = b
                },
                A: function(a, b) {
                    a[B].borderBottomColor = b
                },
                J: function(a, b) {
                    a[B].borderLeftStyle = b
                },
                K: function(a, b) {
                    a[B].borderRightStyle = b
                },
                L: function(a, b) {
                    a[B].borderTopStyle = b
                },
                I: function(a, b) {
                    a[B].borderBottomStyle = b
                },
                aK: function(a, b) {
                    b = typeof b != gj ? b : z(b);
                    a[B].borderTopLeftRadius = b;
                    a[B].MozBorderRadiusTopleft = b
                },
                aL: function(a, b) {
                    b = typeof b != gj ? b : z(b);
                    a[B].borderTopRightRadius = b;
                    a[B].MozBorderRadiusTopright = b
                },
                aI: function(a, b) {
                    b = typeof b != gj ? b : z(b);
                    a[B].borderBottomLeftRadius = b;
                    a[B].MozBorderRadiusBottomleft = b
                },
                aJ: function(a, b) {
                    b = typeof b != gj ? b : z(b);
                    a[B].borderBottomRightRadius = b;
                    a[B].MozBorderRadiusBottomright = b
                },
                bE: function(a, b) {
                    oa(a, Y);
                    var c = Pd[b];
                    if (c != h)
                        for (var e = 0; e < c[L]; e++) {
                            var d = c[e]
                              , f = K[d].t
                              , d = He(d)
                              , k = a.ownerDocument[Ob](Dj);
                            k.src = d;
                            f != h && (w.Na == h || f != ek) && k[Nb](Yj, f);
                            a[Za](k)
                        }
                },
                Play: function(a, b) {
                    try {
                        a == g ? b.Play() : b.Stop()
                    } catch (c) {
                        q[wb](function() {
                            ec.Play(b, a)
                        }, 100)
                    }
                },
                aH: function(a) {
                    a.autoplay = j
                },
                aO: function(a, b) {
                    a[Nb]($h, b);
                    a.controls = 0 != b
                },
                dA: function(a, b) {
                    a[Nb](mj, b)
                },
                aR: function(a, b) {
                    a.muted = 0 != b;
                    a.volume = 0 != b ? md : pd
                },
                aQ: function(a, b) {
                    a[Nb](Ti, b);
                    a.loop = 0 != b
                },
                j: function(a, b) {
                    a[B].position = b
                },
                r: fg,
                cY: fg,
                aG: function(a, b) {
                    a[Nb](Rj, b);
                    a[Nb](bh, b)
                },
                dB: function(a, b) {
                    a[Nb](xj, b)
                },
                g: function(a, b) {
                    a[B].backgroundColor = b
                },
                n: se,
                m: se,
                l: se,
                h: function(a, b) {
                    var c = Ig(b);
                    c != h && (c = He(c),
                    ba(a, Uh, c))
                },
                cZ: function(a, b) {
                    a[B].backgroundImage = ak + b[yb](/'/g, xc) + Bc
                },
                q: function(a, b) {
                    a[B].backgroundSize = b;
                    a[B][R.na + xh] = b;
                    a[B].MozBackgroundSize = b
                },
                o: function(a, b) {
                    a[B].backgroundOrigin = b;
                    a[B][R.na + wh] = b;
                    a[B].MozBackgroundOrigin = b
                },
                p: function(a, b) {
                    a[B].backgroundRepeat = b
                },
                x: function(a, b) {
                    a[B].overflow = b
                },
                aT: function(a, b) {
                    a[B].paddingLeft = z(b);
                    Ta(a)
                },
                aU: function(a, b) {
                    a[B].paddingRight = z(b);
                    Ta(a)
                },
                aV: function(a, b) {
                    a[B].paddingTop = z(b);
                    Ta(a)
                },
                aS: function(a, b) {
                    a[B].paddingBottom = z(b);
                    Ta(a)
                },
                S: Nc,
                T: Nc,
                R: Nc,
                Q: Nc,
                gg: Nc,
                bB: vd,
                bC: vd,
                bA: vd,
                aZ: vd,
                bL: function(a) {
                    fc(a);
                    w.Na != h && a[B][hd] == Y && (a[B][hd] = fj)
                },
                bG: fc,
                bH: fc,
                bI: fc,
                bJ: fc,
                bK: fc,
                BDbL: gc,
                BDbG: gc,
                BDbH: gc,
                BDbI: gc,
                BDbJ: gc,
                BDbK: gc,
                Z: function(a, b) {
                    a[B].wordWrap = b
                },
                yy: function(a, b) {
                    a[B].whiteSpace = b
                },
                y: function(a, b) {
                    a[B].whiteSpaceCollapsing = b
                },
                z: function(a, b) {
                    ra(a[B], b);
                    a[Q][zb] == Xe && ra(a[Q][B], b)
                },
                aA: function(a, b) {
                    var c = X(a, b.a);
                    Ic && (Ib(a, {
                        wa: 1,
                        ca: Lj
                    }, c),
                    a[B][gd] = vj);
                    va(Xh, a, c, g)
                },
                aD: function(a, b) {
                    va(aj, a, X(a, b.a), j)
                },
                aC: function(a, b) {
                    va($i, a, X(a, b.a), j)
                },
                aE: function(a, b) {
                    var c = X(a, b.a);
                    Ic && (va(Tj, a, c, g),
                    a[B][gd] = vj);
                    va(bj, a, c, g)
                },
                aB: function(a, b) {
                    var c = X(a, b.a);
                    if (Ic) {
                        var e = g;
                        if (w.Ba != h)
                            for (var d = b.a, f = 0; f < d[L]; f++)
                                if (5 == d[f].p && d[f].k == g) {
                                    e = j;
                                    break
                                }
                        e == g && va(Vj, a, c, g);
                        a[B][gd] = vj
                    }
                    va(Yi, a, c, g)
                },
                bN: function(a, b) {
                    Eg(a, b)
                },
                cW: function(a, b) {
                    $f(a, X(a, b.a), ni)
                },
                cX: function(a, b) {
                    $f(a, X(a, b.a), oi)
                },
                cG: function(a, b) {
                    Ib(a, {
                        wa: 1,
                        direction: wj,
                        Ea: 30,
                        ca: Hj
                    }, X(a, b.a))
                },
                cH: function(a, b) {
                    Ib(a, {
                        wa: 1,
                        direction: Ri,
                        Ea: 30,
                        ca: Hj
                    }, X(a, b.a))
                },
                cI: function(a, b) {
                    Ib(a, {
                        wa: 1,
                        direction: $j,
                        Ea: 30,
                        ca: Hj
                    }, X(a, b.a))
                },
                cJ: function(a, b) {
                    Ib(a, {
                        wa: 1,
                        direction: hi,
                        Ea: 30,
                        ca: Hj
                    }, X(a, b.a))
                },
                cK: dc,
                cF: dc,
                aM: function(a, b) {
                    va(aj, a, oe(a, b), j);
                    va($i, a, ud(a, b), j)
                },
                aN: function(a, b) {
                    Ic && (va(Vj, a, oe(a, b), j),
                    va(Uj, a, ud(a, b), j),
                    va(Tj, a, ud(a, b), j),
                    a[B][gd] = vj);
                    va(Yi, a, oe(a, b), j);
                    va(bj, a, ud(a, b), j)
                },
                V: pe,
                U: pe,
                W: pe,
                w: function(a, b) {
                    oa(a, b);
                    for (var c = a[Fa](zj), e = 0; e < c[L]; e++) {
                        var d = c[e];
                        if (d.src == h || d.src == Y)
                            (q.execScript || function(a) {
                                q.eval.call(q, a)
                            }
                            )(d.text || d.textContent)
                    }
                },
                bT: function(a, b) {
                    for (var c = 0; c < b[L]; c++)
                        Cg(b[c].B, X(a, b[c].a), b[c].cL)
                },
                cV: function(a, b) {
                    ec.bT(a, b)
                },
                dX: function(a, b) {
                    a[B][Ii] = b;
                    b == lj && (w.Fa != h ? a[B][Ii] = Yc : 10 > w.fb && (a[B][Ii] = ed),
                    a[B][$c] = ej)
                },
                aF: function(a, b) {
                    a[B].cssText += Qb + b
                },
                dY: function(a, b) {
                    if (!(a.tagName != Hi && l(a, Kf) != h))
                        for (var c = 0; c < b[L]; c++) {
                            var e = b[c][0]
                              , d = Y;
                            1 < b[c][L] && (d = b[c][1]);
                            try {
                                a[Nb](e, d)
                            } catch (f) {}
                        }
                },
                k: jk(),
                dW: dc,
                bF: function(a, b) {
                    var c = a
                      , e = a[Q];
                    e != h && e[zb] == Xe && (c = e);
                    var e = na(b)
                      , d = c[Q];
                    e == h || (e == c || e == a || e == d) || (d[Db](c),
                    e[Za](c))
                },
                ti: function(a, b) {
                    b == h ? a[Ya](Kj) : a[Nb](Kj, b)
                },
                cN: function(a, b) {
                    a[B].pointerEvents = b;
                    a[B][nj] = b;
                    if (11 > w.ga) {
                        var c = function(b) {
                            b = b ? b : q[bb];
                            if (a[B][nj] == fj) {
                                var c = a[B][Ma];
                                la(a[B], fj);
                                var f = x.elementFromPoint(b[cb], b[ib]);
                                la(a[B], c ? c : Y);
                                x.createEvent && (b[Ea](),
                                c = x.createEvent(yf),
                                c.initMouseEvent(b[xa], b.bubbles, b.cancelable, b.view, b.detail, b.screenX, b.screenY, b[cb], b[ib], b[kb], b.altKey, b.shiftKey, b.metaKey, b[Ra], h),
                                f.dispatchEvent(c))
                            }
                        };
                        ua(xf, c, a, g);
                        ua(bj, c, a, g);
                        ua(Yi, c, a, g);
                        ua(Xh, c, a, g)
                    }
                }
            };
            R.API = {
                kSceneTransitionInstant: 1,
                kSceneTransitionCrossfade: 2,
                kSceneTransitionSwap: 3,
                kSceneTransitionPushLeftToRight: 4,
                kSceneTransitionPushRightToLeft: 5,
                kSceneTransitionPushBottomToTop: 6,
                kSceneTransitionPushTopToBottom: 7,
                kHypeGesturePhaseStart: Ej,
                kHypeGesturePhaseMove: cj,
                kHypeGesturePhaseEnd: mi,
                kHypeGesturePhaseCancel: Vh,
                documentName: function() {
                    return ka
                },
                documentId: function() {
                    return aa
                },
                sceneNames: Je,
                customData: {},
                currentSceneName: function() {
                    return za[Ha].n
                },
                layoutsForSceneNamed: function(a) {
                    a = a != h ? Je()[nb](a) : Ha;
                    return Ie(za[a])
                },
                currentLayoutName: function() {
                    return t[F].n
                },
                showLayoutNamed: function(a) {
                    a = Og(a, za[Ha]);
                    -1 != a && (rc = g,
                    Qd(a, 1, 0))
                },
                showSceneNamed: function(a, b, c) {
                    var e = Je();
                    Kc(e[nb](a), b, c)
                },
                showNextScene: function(a, b) {
                    Kc(Ha + 1, a, b)
                },
                showPreviousScene: function(a, b) {
                    Kc(Ha - 1, a, b)
                },
                playTimelineNamed: ug,
                startTimelineNamed: ug,
                goToTimeInTimelineNamed: function(a, b) {
                    var c = tb(b);
                    fb(a, c, j, j)
                },
                pauseTimelineNamed: function(a) {
                    a = tb(a);
                    eb(a, h)
                },
                continueTimelineNamed: function(a, b, c) {
                    a = tb(a);
                    b == ca && (b = 0);
                    Lc(a, 1 == b ? g : j, g, c)
                },
                getElementById: function(a) {
                    var b = Pe[a];
                    b == h && (b = a);
                    return x[lb](b)
                },
                setElementProperty: function(a, b, c, e, d) {
                    var f = {
                        easein: ai,
                        easeout: ki,
                        easeinout: Gh,
                        linear: fh
                    }
                      , k = wg[b];
                    if (k != h && (k.HYP_x != g && (c = xe(c)),
                    vg(a, b) != c)) {
                        b = k.HYP_r;
                        var l = J[a.id]
                          , k = Y + l + b
                          , m = [gk, Uh];
                        0 < e && -1 == m[nb](b) ? (a = h,
                        d != h && (typeof d === ti ? (a = Oe(),
                        kc[a] = d) : a = f[d]),
                        a == h && (a = Gh),
                        d = [],
                        ub(d, b, 0, e, a, l, 1, c, g),
                        c = {
                            i: k,
                            n: k,
                            f: 30,
                            d: e,
                            a: d,
                            b: []
                        },
                        t[F].T[k] = c,
                        Dd(k, d, c),
                        db(k, h, j)) : (Ia[l] != ca && (Ia[l][b] = k,
                        b == Uh && (Ia[l].h = k)),
                        e = $(k),
                        e != h && nc(e),
                        ba(a, b, c))
                    }
                },
                getElementProperty: vg,
                functions: function() {
                    return Yf
                },
                resourcesFolderURL: function() {
                    return le
                },
                relayoutIfNecessary: Kb,
                kDirectionForward: 0,
                kDirectionReverse: 1,
                currentTimeInTimelineNamed: function(a) {
                    a = tb(a);
                    return pc(a, g)
                },
                durationForTimelineNamed: function(a) {
                    var b = tb(a);
                    a = 0;
                    b = $(b);
                    b != h && (a = ia(b));
                    return a
                },
                currentDirectionForTimelineNamed: function(a) {
                    a = tb(a);
                    a = $(a);
                    var b = 0;
                    a != h && (b = a.$ ? 1 : 0);
                    return b
                },
                isPlayingTimelineNamed: function(a) {
                    var b = tb(a);
                    a = j;
                    b = $(b);
                    b != h && (a = b.da);
                    return a
                },
                triggerCustomBehaviorNamed: bg,
                getSymbolInstanceById: function(a) {
                    if (a != h)
                        return sb[J[a]]
                },
                getSymbolInstancesByName: Bg
            }
        }
        ;
        q.HYPE == h && (q.HYPE = q.HYPE_648T,
        q.HYPE.documents = {});
        var ka = [];
        q.HYPE_dtl_648T != h && (ka = q.HYPE_dtl_648T[Qa](0));
        q.HYPE_dtl_648T = [];
        for (var K = 0; K < ka[L]; K++)
            ka[K]()
    }
    )();
}
)();
