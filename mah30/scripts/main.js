var _0x2636 = [
    "width",
    "style",
    "http://localhost/",
    "Scene",
    "hostname",
    "indexOf",
    "Unauthorized\x20host.\x20\x20Please\x20contact\x20FreeGames.pip",
    "boot",
    "preload",
    "load",
    "image",
    "bg_menu",
    "img/background_menu.jpg",
    "img/game_title.png",
    "create",
    "addEventListener",
    "resize",
    "check_storage",
    "scene",
    "start",
    "add",
    "graphics",
    "fillStyle",
    "fillRect",
    "progress",
    "clear",
    "img/shadow.png",
    "img/background.jpg",
    "btn_shuffle",
    "btn_hint",
    "img/btn_hint.png",
    "btn_restart",
    "btn_menu",
    "img/btn_menu.png",
    "btn_next",
    "img/btn_next.png",
    "excelent",
    "img/excellent.png",
    "window",
    "img/window.png",
    "arrow_left",
    "img/arrow_left.png",
    "arrow_right",
    "check",
    "img/check.png",
    "hand",
    "img/hand.png",
    "btn_play",
    "img/btn_play.png",
    "img/btn_more.png",
    "btn_sound",
    "btn_info",
    "img/btn_info.png",
    "img/btn_back.png",
    "btn_fullscreen",
    "img/btn_fullscreen.png",
    "tiles",
    "img/card_sheet.png",
    "layouts",
    "spritesheet",
    "page",
    "img/page_layout.png",
    "audio",
    "click",
    "audio/click.ogg",
    "click_arrow",
    "audio/click_arrow.ogg",
    "audio/click_arrow.m4a",
    "match",
    "audio/match.ogg",
    "audio/match.m4a",
    "complete",
    "level_click",
    "audio/level_click.ogg",
    "audio/level_click.m4a",
    "once",
    "gameMenu",
    "bind",
    "game_title",
    "sprite",
    "setInteractive",
    "play",
    "btn_more",
    "more",
    "info",
    "sound",
    "alpha",
    "full",
    "input",
    "gameobjectdown",
    "Linear",
    "set_sound",
    "levelMenu",
    "open",
    "moregame_url",
    "Mahjong\x20Game\x0a\x0aDistributed\x20by\x20FreeGames.org\x0a\x0aFace\x20pieces\x20design\x20by\x20Riichi",
    "group",
    "setFrame",
    "type",
    "layout",
    "getChildren",
    "getLength",
    "length",
    "selected_layout",
    "tweens",
    "100",
    "cur_page",
    "gamePlay",
    "btn_back",
    "pointerdown",
    "button",
    "shuffle",
    "restart",
    "cards",
    "push",
    "val",
    "round",
    "random",
    "concat",
    "layer",
    "pos_y",
    "pos_z",
    "active",
    "setTint",
    "setDepth",
    "shadows",
    "shadow",
    "clearTint",
    "set_fullscreen",
    "destroy",
    "hint",
    "total_layouts",
    "floor",
    "400",
    "Sine.easeInOut",
    "show",
    "remove",
    "completed_layouts",
    "setItem",
    "redfoc_mahjong",
    "scaleX",
    "scaleY",
    "Back.easeOut",
    "800",
    "next",
    "addUpCallback",
    "request",
    "is_fullscreen",
    "exit",
    "getItem",
    "innerWidth",
    "innerHeight",
    "portait",
    "rotate\x20your\x20device!",
    "height",
];
(function (_0x1df226, _0x6615f0) {
    var _0x471bb1 = function (_0x239f45) {
        while (--_0x239f45) {
            _0x1df226["push"](_0x1df226["shift"]());
        }
    };
    _0x471bb1(++_0x6615f0);
})(_0x2636, 0x138);
var _0x6c9f = function (_0x242de2, _0x46e8a5) {
    _0x242de2 = _0x242de2 - 0x0;
    var _0x3a6528 = _0x2636[_0x242de2];
    return _0x3a6528;
};
var game_data = { selected_layout: 0x1, total_layouts: 0x24, cur_page: 0x1, completed_layouts: [], sound: !![], is_fullscreen: ![], moregame_url: _0x6c9f("0x0") };
var ff = "m";
var bb = "r";
var dd = "g";
var aa = "f";
var ee = "a";
var gg = "s";
var hh = "o";
var cc = "e";
class gameBoot extends Phaser[_0x6c9f("0x1")] {
    constructor() {
        if (window["location"][_0x6c9f("0x2")][_0x6c9f("0x3")](aa + bb + cc + cc + dd + ee + ff + cc + gg + "." + hh + bb + dd) < 0x0) {
            super(_0x6c9f("0x5"));
        } else {
            super(_0x6c9f("0x5"));
        }
    }
    [_0x6c9f("0x6")]() {
        this[_0x6c9f("0x7")][_0x6c9f("0x8")](_0x6c9f("0x9"), _0x6c9f("0xa"));
        this[_0x6c9f("0x7")][_0x6c9f("0x8")]("game_title", _0x6c9f("0xb"));
    }
    [_0x6c9f("0xc")]() {
        window[_0x6c9f("0xd")](_0x6c9f("0xe"), resize);
        resize();
        redfoc_game[_0x6c9f("0xf")]();
        this[_0x6c9f("0x10")][_0x6c9f("0x11")](_0x6c9f("0x6"));
    }
}
class gameLoad extends Phaser[_0x6c9f("0x1")] {
    constructor() {
        super(_0x6c9f("0x6"));
    }
    [_0x6c9f("0x6")]() {
        this[_0x6c9f("0x12")]["image"](0x280, 0x168, _0x6c9f("0x9"));
        this[_0x6c9f("0x12")][_0x6c9f("0x8")](0x280, 0x168, "game_title");
        var _0x29ec12 = this[_0x6c9f("0x12")][_0x6c9f("0x13")]();
        var _0x17d5b9 = this[_0x6c9f("0x12")][_0x6c9f("0x13")]();
        _0x29ec12[_0x6c9f("0x14")](0x222222, 0x1);
        _0x29ec12[_0x6c9f("0x15")](0xfa, 0x212, 0x30c, 0x1e);
        this["load"]["on"](_0x6c9f("0x16"), function (_0x52ed4b) {
            _0x17d5b9[_0x6c9f("0x17")]();
            _0x17d5b9[_0x6c9f("0x14")](0x9ca7a8, 0x1);
            _0x17d5b9["fillRect"](0xff, 0x217, 0x302 * _0x52ed4b, 0x14);
        });
        this[_0x6c9f("0x7")][_0x6c9f("0x8")]("shadow", _0x6c9f("0x18"));
        this[_0x6c9f("0x7")][_0x6c9f("0x8")]("bg", _0x6c9f("0x19"));
        this[_0x6c9f("0x7")][_0x6c9f("0x8")](_0x6c9f("0x1a"), "img/btn_shuffle.png");
        this[_0x6c9f("0x7")][_0x6c9f("0x8")](_0x6c9f("0x1b"), _0x6c9f("0x1c"));
        this["load"][_0x6c9f("0x8")](_0x6c9f("0x1d"), "img/btn_restart.png");
        this[_0x6c9f("0x7")][_0x6c9f("0x8")](_0x6c9f("0x1e"), _0x6c9f("0x1f"));
        this[_0x6c9f("0x7")][_0x6c9f("0x8")](_0x6c9f("0x20"), _0x6c9f("0x21"));
        this["load"][_0x6c9f("0x8")](_0x6c9f("0x22"), _0x6c9f("0x23"));
        this["load"][_0x6c9f("0x8")](_0x6c9f("0x24"), _0x6c9f("0x25"));
        this[_0x6c9f("0x7")][_0x6c9f("0x8")](_0x6c9f("0x26"), _0x6c9f("0x27"));
        this[_0x6c9f("0x7")][_0x6c9f("0x8")](_0x6c9f("0x28"), "img/arrow_right.png");
        this[_0x6c9f("0x7")]["image"](_0x6c9f("0x29"), _0x6c9f("0x2a"));
        this[_0x6c9f("0x7")][_0x6c9f("0x8")](_0x6c9f("0x2b"), _0x6c9f("0x2c"));
        this[_0x6c9f("0x7")][_0x6c9f("0x8")](_0x6c9f("0x2d"), _0x6c9f("0x2e"));
        this[_0x6c9f("0x7")][_0x6c9f("0x8")]("btn_more", _0x6c9f("0x2f"));
        this[_0x6c9f("0x7")]["image"](_0x6c9f("0x30"), "img/btn_sound.png");
        this[_0x6c9f("0x7")][_0x6c9f("0x8")](_0x6c9f("0x31"), _0x6c9f("0x32"));
        this[_0x6c9f("0x7")][_0x6c9f("0x8")]("btn_back", _0x6c9f("0x33"));
        this[_0x6c9f("0x7")][_0x6c9f("0x8")](_0x6c9f("0x34"), _0x6c9f("0x35"));
        this[_0x6c9f("0x7")]["spritesheet"](_0x6c9f("0x36"), _0x6c9f("0x37"), { frameWidth: 0x3d, frameHeight: 0x58 });
        this["load"]["spritesheet"](_0x6c9f("0x38"), "img/layouts.png", { frameWidth: 0xf8, frameHeight: 0xc8 });
        this[_0x6c9f("0x7")][_0x6c9f("0x39")](_0x6c9f("0x3a"), _0x6c9f("0x3b"), { frameWidth: 0x1e, frameHeight: 0x1e });
        this[_0x6c9f("0x7")][_0x6c9f("0x3c")](_0x6c9f("0x3d"), [_0x6c9f("0x3e"), "audio/click.m4a"]);
        this[_0x6c9f("0x7")][_0x6c9f("0x3c")](_0x6c9f("0x3f"), [_0x6c9f("0x40"), _0x6c9f("0x41")]);
        this["load"][_0x6c9f("0x3c")](_0x6c9f("0x42"), [_0x6c9f("0x43"), _0x6c9f("0x44")]);
        this[_0x6c9f("0x7")][_0x6c9f("0x3c")](_0x6c9f("0x45"), ["audio/complete.ogg", "audio/complete.m4a"]);
        this["load"][_0x6c9f("0x3c")](_0x6c9f("0x46"), [_0x6c9f("0x47"), _0x6c9f("0x48")]);
        this[_0x6c9f("0x7")][_0x6c9f("0x49")](
            _0x6c9f("0x45"),
            function () {
                this["scene"][_0x6c9f("0x11")](_0x6c9f("0x4a"));
            }[_0x6c9f("0x4b")](this)
        );
    }
}
class gameMenu extends Phaser[_0x6c9f("0x1")] {
    constructor() {
        super(_0x6c9f("0x4a"));
    }
    ["create"]() {
        this[_0x6c9f("0x12")]["image"](0x280, 0x168, _0x6c9f("0x9"));
        this[_0x6c9f("0x12")][_0x6c9f("0x8")](0x280, 0xe6, _0x6c9f("0x4c"));
        var _0x528df4 = ![];
        var _0x4da1c2 = this[_0x6c9f("0x12")][_0x6c9f("0x4d")](0x280, 0x1ae, _0x6c9f("0x2d"))[_0x6c9f("0x4e")]();
        _0x4da1c2["id"] = _0x6c9f("0x4f");
        var _0x5083da = this["add"][_0x6c9f("0x4d")](0x280, 0x244, _0x6c9f("0x50"))[_0x6c9f("0x4e")]();
        _0x5083da["id"] = _0x6c9f("0x51");
        var _0x18ebab = this[_0x6c9f("0x12")][_0x6c9f("0x4d")](0x50, 0x50, _0x6c9f("0x31"))["setInteractive"]();
        _0x18ebab["id"] = _0x6c9f("0x52");
        var _0x50f8d7 = this["add"][_0x6c9f("0x4d")](0xbe, 0x50, "btn_sound")[_0x6c9f("0x4e")]();
        _0x50f8d7["id"] = "sound";
        if (game_data[_0x6c9f("0x53")] == ![]) {
            _0x50f8d7[_0x6c9f("0x54")] = 0.6;
        }
        var _0x1d0069 = this[_0x6c9f("0x12")]["sprite"](0x4b0, 0x50, _0x6c9f("0x34"))[_0x6c9f("0x4e")]();
        _0x1d0069["id"] = _0x6c9f("0x55");
        this[_0x6c9f("0x56")]["on"](
            _0x6c9f("0x57"),
            function (_0x45f12a, _0x4a0aad) {
                if (!_0x528df4) {
                    _0x528df4 = !![];
                    play_sound[_0x6c9f("0x4b")](this)(_0x6c9f("0x3d"));
                    if (_0x4a0aad["id"] == _0x6c9f("0x55")) {
                        redfoc_game["set_fullscreen"][_0x6c9f("0x4b")](this)();
                    }
                    this["tweens"][_0x6c9f("0x12")]({ targets: _0x4a0aad, scaleX: 0.9, scaleY: 0.9, ease: _0x6c9f("0x58"), duration: "100", yoyo: !![], onComplete: _0x26a346[_0x6c9f("0x4b")](this) });
                    function _0x26a346() {
                        _0x528df4 = ![];
                        if (_0x4a0aad["id"] == _0x6c9f("0x53")) {
                            redfoc_game[_0x6c9f("0x59")](_0x4a0aad);
                        } else if (_0x4a0aad["id"] == _0x6c9f("0x4f")) {
                            this[_0x6c9f("0x10")][_0x6c9f("0x11")](_0x6c9f("0x5a"));
                        } else if (_0x4a0aad["id"] == "more") {
                            window[_0x6c9f("0x5b")](game_data[_0x6c9f("0x5c")]);
                        } else if (_0x4a0aad["id"] == _0x6c9f("0x52")) {
                            alert(_0x6c9f("0x5d"));
                        }
                    }
                }
            }["bind"](this)
        );
    }
}
class levelMenu extends Phaser[_0x6c9f("0x1")] {
    constructor() {
        super("levelMenu");
    }
    [_0x6c9f("0xc")]() {
        this[_0x6c9f("0x12")][_0x6c9f("0x8")](0x280, 0x168, "bg");
        var _0x167a28 = this[_0x6c9f("0x12")][_0x6c9f("0x4d")](0x8c, 0x168, "arrow_left")[_0x6c9f("0x4e")]();
        var _0x2c36aa = this[_0x6c9f("0x12")][_0x6c9f("0x4d")](0x473, 0x168, "arrow_right")[_0x6c9f("0x4e")]();
        var _0x47c6ee = this[_0x6c9f("0x12")]["image"](0x280, 0x174, "window");
        var _0x41e6db = this[_0x6c9f("0x12")][_0x6c9f("0x5e")]();
        var _0x1e6dfe = this[_0x6c9f("0x12")]["group"]();
        var _0x47e923 = this[_0x6c9f("0x12")]["group"]();
        var _0x1719fd = game_data["total_layouts"];
        var _0x83dd83 = game_data["cur_page"];
        var _0x355037 = 0x3;
        var _0x4fbec6 = 0x172;
        var _0x3c59ce = 0xdc;
        var _0xe7a74a = 0x10e;
        var _0x5a3888 = 0xe6;
        var _0x39c3d9 = 0x0;
        var _0xc024b9 = 0x0;
        for (var _0x2c3ca1 = 0x0; _0x2c3ca1 < 0x6; _0x2c3ca1++) {
            if (_0x2c3ca1 == _0x355037) {
                _0x39c3d9++;
                _0xc024b9 = 0x0;
            }
            var _0x146e82 = _0x1e6dfe[_0x6c9f("0xc")](_0x4fbec6 + _0xe7a74a * _0xc024b9, _0x3c59ce + _0x5a3888 * _0x39c3d9, "layouts");
            _0x146e82[_0x6c9f("0x5f")](_0x2c3ca1 + (_0x83dd83 - 0x1) * 0x6);
            _0x146e82[_0x6c9f("0x4e")]();
            _0x146e82["id"] = _0x2c3ca1 + 0x1;
            _0x146e82[_0x6c9f("0x60")] = _0x6c9f("0x61");
            _0xc024b9++;
        }
        _0xe7a74a = 0x28;
        _0x4fbec6 = 0x280 - (_0xe7a74a * (_0x1719fd / 0x6)) / 0x2 + _0xe7a74a / 0x2;
        _0x3c59ce = 0x24c;
        _0xc024b9 = 0x0;
        for (var _0x2c3ca1 = 0x0; _0x2c3ca1 < _0x1719fd / 0x6; _0x2c3ca1++) {
            var _0x3955ac = _0x41e6db["create"](_0x4fbec6 + _0xe7a74a * _0x2c3ca1, _0x3c59ce, _0x6c9f("0x3a"));
            _0x3955ac[_0x6c9f("0x5f")](0x1);
        }
        _0x525ab2();
        function _0x525ab2() {
            for (var _0x2c3ca1 = 0x0; _0x2c3ca1 < _0x1719fd / 0x6; _0x2c3ca1++) {
                var _0x3955ac = _0x41e6db[_0x6c9f("0x62")]()[_0x2c3ca1];
                _0x3955ac[_0x6c9f("0x5f")](0x1);
                if (_0x2c3ca1 + 0x1 == _0x83dd83) {
                    _0x3955ac[_0x6c9f("0x5f")](0x0);
                }
            }
        }
        _0x2e0968();
        function _0x2e0968() {
            if (_0x47e923[_0x6c9f("0x63")]() > 0x0) {
                _0x47e923[_0x6c9f("0x17")](!![], !![]);
            }
            var _0x3d86b3 = game_data["completed_layouts"];
            var _0x20bf52 = _0x3d86b3[_0x6c9f("0x64")];
            if (_0x20bf52 > 0x0) {
                var _0x5aa7ea = _0x1e6dfe[_0x6c9f("0x62")]();
                var _0x2a2386 = (_0x83dd83 - 0x1) * 0x6;
                var _0x14b3b3 = _0x2a2386 - 0x6;
                for (var _0x50ebda = 0x0; _0x50ebda < _0x20bf52; _0x50ebda++) {
                    var _0x33574a = _0x3d86b3[_0x50ebda];
                    for (var _0x2c3ca1 = 0x0; _0x2c3ca1 < 0x6; _0x2c3ca1++) {
                        var _0x172293 = _0x2c3ca1 + (_0x83dd83 - 0x1) * 0x6;
                        if (_0x172293 == _0x33574a - 0x1) {
                            var _0x487918 = 0x5f;
                            var _0x31fea9 = 0x41;
                            var _0x3955ac = _0x47e923[_0x6c9f("0xc")](_0x5aa7ea[_0x2c3ca1]["x"] + _0x487918, _0x5aa7ea[_0x2c3ca1]["y"] + _0x31fea9, "check");
                        }
                    }
                }
            }
        }
        this[_0x6c9f("0x56")]["on"](
            _0x6c9f("0x57"),
            function (_0x221d37, _0xfd6b5f) {
                if (_0xfd6b5f[_0x6c9f("0x60")] == _0x6c9f("0x61")) {
                    play_sound[_0x6c9f("0x4b")](this)(_0x6c9f("0x46"));
                    game_data[_0x6c9f("0x65")] = _0xfd6b5f["id"] + (_0x83dd83 - 0x1) * 0x6;
                    this[_0x6c9f("0x66")][_0x6c9f("0x12")]({ targets: _0xfd6b5f, scaleX: 0.9, scaleY: 0.9, ease: _0x6c9f("0x58"), duration: _0x6c9f("0x67"), yoyo: !![], onComplete: _0x3e586a["bind"](this) });
                    function _0x3e586a() {
                        game_data[_0x6c9f("0x68")] = _0x83dd83;
                        this[_0x6c9f("0x10")]["start"](_0x6c9f("0x69"));
                    }
                }
            }["bind"](this)
        );
        var _0x62ca36 = this[_0x6c9f("0x12")]["sprite"](0x50, 0x50, _0x6c9f("0x6a"))["setInteractive"]();
        var _0xacb7de = ![];
        _0x62ca36["on"](
            _0x6c9f("0x6b"),
            function () {
                if (!_0xacb7de) {
                    play_sound[_0x6c9f("0x4b")](this)(_0x6c9f("0x3d"));
                    _0xacb7de = !![];
                    this[_0x6c9f("0x66")][_0x6c9f("0x12")]({ targets: _0x62ca36, scaleX: 0.9, scaleY: 0.9, ease: _0x6c9f("0x58"), duration: "100", yoyo: !![], onComplete: _0x5a724a[_0x6c9f("0x4b")](this) });
                    function _0x5a724a() {
                        this[_0x6c9f("0x10")][_0x6c9f("0x11")](_0x6c9f("0x4a"));
                    }
                }
            }["bind"](this)
        );
        _0x2c36aa["on"](
            _0x6c9f("0x6b"),
            function (_0x1e0b3a) {
                play_sound[_0x6c9f("0x4b")](this)(_0x6c9f("0x3f"));
                var _0x225dcc = _0x1e6dfe[_0x6c9f("0x62")]();
                if (_0x83dd83 * 0x6 < _0x1719fd) {
                    _0x83dd83++;
                    for (var _0x2c3ca1 = 0x0; _0x2c3ca1 < 0x6; _0x2c3ca1++) {
                        var _0x10a705 = _0x225dcc[_0x2c3ca1]["id"];
                        _0x225dcc[_0x2c3ca1][_0x6c9f("0x5f")](_0x2c3ca1 + (_0x83dd83 - 0x1) * 0x6);
                    }
                }
                _0x525ab2();
                _0x2e0968();
            }[_0x6c9f("0x4b")](this)
        );
        _0x167a28["on"](
            _0x6c9f("0x6b"),
            function (_0x4f90ee) {
                play_sound[_0x6c9f("0x4b")](this)(_0x6c9f("0x3f"));
                var _0x3ab7dd = _0x1e6dfe[_0x6c9f("0x62")]();
                if (_0x83dd83 > 0x1) {
                    _0x83dd83--;
                    for (var _0x2c3ca1 = 0x0; _0x2c3ca1 < 0x6; _0x2c3ca1++) {
                        var _0x36206b = _0x3ab7dd[_0x2c3ca1]["id"];
                        _0x3ab7dd[_0x2c3ca1][_0x6c9f("0x5f")](_0x2c3ca1 + (_0x83dd83 - 0x1) * 0x6);
                    }
                }
                _0x525ab2();
                _0x2e0968();
            }[_0x6c9f("0x4b")](this)
        );
    }
}
class gamePlay extends Phaser[_0x6c9f("0x1")] {
    constructor() {
        super(_0x6c9f("0x69"));
    }
    [_0x6c9f("0xc")]() {
        this["cards"] = this[_0x6c9f("0x12")][_0x6c9f("0x5e")]();
        this["shadows"] = this[_0x6c9f("0x12")][_0x6c9f("0x5e")]();
        this[_0x6c9f("0x12")][_0x6c9f("0x8")](0x280, 0x168, "bg");
        var _0x14e4bf = this[_0x6c9f("0x12")][_0x6c9f("0x4d")](0x50, 0x50, "btn_menu")[_0x6c9f("0x4e")]();
        _0x14e4bf[_0x6c9f("0x60")] = _0x6c9f("0x6c");
        _0x14e4bf["id"] = _0x6c9f("0x61");
        var _0x5f5665 = this["add"][_0x6c9f("0x4d")](0x50, 0xc8, _0x6c9f("0x30"))[_0x6c9f("0x4e")]();
        _0x5f5665["type"] = _0x6c9f("0x6c");
        _0x5f5665["id"] = _0x6c9f("0x53");
        if (game_data["sound"] == ![]) {
            _0x5f5665[_0x6c9f("0x54")] = 0.6;
        }
        var _0x17d95c = this[_0x6c9f("0x12")][_0x6c9f("0x4d")](0x50, 0x140, _0x6c9f("0x34"))[_0x6c9f("0x4e")]();
        _0x17d95c[_0x6c9f("0x60")] = _0x6c9f("0x6c");
        _0x17d95c["id"] = _0x6c9f("0x55");
        var _0x3ec1cb = this[_0x6c9f("0x12")][_0x6c9f("0x4d")](0x4b0, 0x50, _0x6c9f("0x1a"))[_0x6c9f("0x4e")]();
        _0x3ec1cb[_0x6c9f("0x60")] = "button";
        _0x3ec1cb["id"] = _0x6c9f("0x6d");
        var _0x2b95a6 = this[_0x6c9f("0x12")][_0x6c9f("0x4d")](0x4b0, 0xc8, "btn_hint")[_0x6c9f("0x4e")]();
        _0x2b95a6[_0x6c9f("0x60")] = "button";
        _0x2b95a6["id"] = "hint";
        var _0x157716 = this[_0x6c9f("0x12")][_0x6c9f("0x4d")](0x4b0, 0x140, _0x6c9f("0x1d"))[_0x6c9f("0x4e")]();
        _0x157716[_0x6c9f("0x60")] = _0x6c9f("0x6c");
        _0x157716["id"] = _0x6c9f("0x6e");
        var _0x2ddea9 = 0x8;
        var _0x3b58df = 0x10;
        var _0x37823b = ![];
        var _0x2a9b26 = [];
        var _0x20510f = load_layout(game_data[_0x6c9f("0x65")]);
        var _0x31bd85 = _0x20510f[_0x6c9f("0x64")];
        var _0x307e37 = [];
        var _0x2ae1ff;
        var _0x448c91;
        var _0x4a4da7 = ![];
        _0x185304();
        function _0x185304(_0x525ad8) {
            _0x1e46e3();
            _0x2ae1ff = _0xced72c();
            _0x2ae1ff = _0x1ef0f3(_0x2ae1ff);
        }
        function _0x3e9c71() {
            var _0x40499d = [];
            var _0x20ed30 = this[_0x6c9f("0x6f")][_0x6c9f("0x63")]();
            var _0x2fe69f = this[_0x6c9f("0x6f")][_0x6c9f("0x62")]();
            for (var _0x1c6668 = 0x0; _0x1c6668 < _0x20ed30; _0x1c6668++) {
                _0x40499d[_0x6c9f("0x70")](_0x2fe69f[_0x1c6668]["val"]);
            }
            _0x40499d = _0x1ef0f3(_0x40499d);
            for (var _0x1c6668 = 0x0; _0x1c6668 < _0x20ed30; _0x1c6668++) {
                _0x2fe69f[_0x1c6668]["setFrame"](_0x40499d[_0x1c6668]);
                _0x2fe69f[_0x1c6668][_0x6c9f("0x71")] = _0x40499d[_0x1c6668];
            }
            _0x254fb9[_0x6c9f("0x4b")](this)();
            var _0x12ab2e = _0x25a671[_0x6c9f("0x4b")](this)(_0x6c9f("0x29"));
            if (!_0x12ab2e) {
                _0x3e9c71[_0x6c9f("0x4b")](this)();
            }
        }
        function _0x1e46e3() {
            for (var _0x465ebb = 0x0; _0x465ebb < _0x31bd85; _0x465ebb++) {
                var _0x2e2a3b = 0x0;
                for (var _0x2fad0f = 0x0; _0x2fad0f < _0x2ddea9; _0x2fad0f++) {
                    for (var _0x2fd6f8 = 0x0; _0x2fd6f8 <= _0x3b58df; _0x2fd6f8++) {
                        if (_0x20510f[_0x465ebb][_0x2fad0f][_0x2fd6f8] == 0x1) {
                            _0x2e2a3b++;
                        }
                    }
                }
                _0x307e37[_0x465ebb] = _0x2e2a3b;
            }
        }
        function _0xced72c() {
            var _0x151d6c = [];
            var _0x5a8e89 = 0x0;
            for (var _0x130753 = 0x0; _0x130753 < _0x31bd85; _0x130753++) {
                _0x5a8e89 += _0x307e37[_0x130753];
            }
            var _0x4e9904 = [];
            var _0x5aa117 = _0x5a8e89 / 0x2;
            for (var _0x130753 = 0x0; _0x130753 < _0x5aa117; _0x130753++) {
                var _0x191ae9 = Math[_0x6c9f("0x72")](Math[_0x6c9f("0x73")]() * 0x23);
                _0x4e9904[_0x6c9f("0x70")](_0x191ae9);
            }
            var _0x4e74dd = _0x4e9904;
            var _0x151d6c = _0x4e9904[_0x6c9f("0x74")](_0x4e74dd);
            return _0x151d6c;
        }
        function _0x13f838() {
            var _0x53e0c7 = 0x0;
            var _0x537068 = [];
            for (var _0x3baaf9 = 0x0; _0x3baaf9 < _0x31bd85; _0x3baaf9++) {
                var _0x3e5f2d = _0x307e37[_0x3baaf9];
                var _0x3ca24f = [];
                for (var _0x5ae66d = 0x0; _0x5ae66d < _0x3e5f2d; _0x5ae66d++) {
                    _0x3ca24f["push"](_0x2ae1ff[_0x53e0c7]);
                    _0x53e0c7++;
                }
                _0x537068[_0x6c9f("0x70")](_0x3ca24f);
            }
            return _0x537068;
        }
        var _0x21dfdb = 0x1;
        var _0x182dec;
        var _0x1c6c2e = null;
        var _0x2b5223 = null;
        var _0x33f8c9 = 0x0;
        var _0x36bb4d = 0x0;
        var _0x2caf40 = 0x0;
        var _0x52ffbf = 0x0;
        var _0x3b6d24 = 0xd9;
        var _0x5249a9 = 0x61;
        for (var _0x2d1224 = 0x0; _0x2d1224 < _0x31bd85; _0x2d1224++) {
            _0x5249a9 -= 0xb;
            _0x3b6d24 -= 0x5;
            for (var _0x2b1c13 = 0x0; _0x2b1c13 < _0x2ddea9; _0x2b1c13++) {
                var _0x3e4c33 = 0x39;
                var _0x283164 = 0x50;
                var _0x4d38b0 = 0x0;
                for (var _0x39fc45 = 0x0; _0x39fc45 < _0x3b58df; _0x39fc45++) {
                    if (_0x20510f[_0x2d1224][_0x2b1c13][_0x39fc45] == 0x1) {
                        var _0x243779 = _0x2ae1ff[_0x52ffbf];
                        var _0x182dec = this[_0x6c9f("0x12")][_0x6c9f("0x4d")](_0x3b6d24 + _0x3e4c33 * _0x39fc45, _0x5249a9 + _0x283164 * _0x2b1c13, _0x6c9f("0x36"));
                        _0x182dec[_0x6c9f("0x5f")](_0x243779);
                        _0x182dec[_0x6c9f("0x71")] = _0x243779;
                        _0x182dec["id"] = _0x52ffbf;
                        _0x182dec[_0x6c9f("0x75")] = _0x2d1224;
                        _0x182dec[_0x6c9f("0x76")] = _0x2b1c13;
                        _0x182dec[_0x6c9f("0x77")] = _0x39fc45;
                        _0x182dec[_0x6c9f("0x78")] = ![];
                        _0x182dec["setInteractive"]();
                        _0x182dec[_0x6c9f("0x79")](0xb2b2b2);
                        _0x182dec[_0x6c9f("0x7a")](_0x2d1224 + 0x1);
                        this[_0x6c9f("0x6f")][_0x6c9f("0x12")](_0x182dec);
                        var _0x545a33 = this[_0x6c9f("0x7b")][_0x6c9f("0xc")](_0x182dec["x"], _0x182dec["y"], _0x6c9f("0x7c"));
                        _0x545a33[_0x6c9f("0x7a")](_0x2d1224);
                        _0x545a33["id"] = _0x52ffbf;
                        let _0x489ca6 = function () {
                            if (_0x2d1224 == _0x31bd85 - 0x1) {
                                return !![];
                            } else if (_0x20510f[_0x2d1224 + 0x1][_0x2b1c13][_0x39fc45] == 0x0) {
                                return !![];
                            } else {
                                return ![];
                            }
                        };
                        if (_0x489ca6()) {
                            if (
                                _0x20510f[_0x2d1224][_0x2b1c13][_0x39fc45 - 0x1] == 0x0 ||
                                _0x20510f[_0x2d1224][_0x2b1c13][_0x39fc45 + 0x1] == 0x0 ||
                                _0x20510f[_0x2d1224][_0x2b1c13][_0x39fc45 - 0x1] == undefined ||
                                _0x20510f[_0x2d1224][_0x2b1c13][_0x39fc45 + 0x1] == undefined
                            ) {
                                _0x182dec[_0x6c9f("0x7d")]();
                                _0x182dec[_0x6c9f("0x78")] = !![];
                            }
                        }
                        _0x52ffbf++;
                    }
                    if (_0x39fc45 == 0xa) {
                        _0x4d38b0++;
                    }
                    _0x21dfdb++;
                }
            }
        }
        this[_0x6c9f("0x56")]["on"](
            _0x6c9f("0x57"),
            function (_0x263736, _0x534994) {
                if (_0x534994[_0x6c9f("0x60")] == _0x6c9f("0x6c")) {
                    if (!_0x37823b) {
                        play_sound[_0x6c9f("0x4b")](this)(_0x6c9f("0x3d"));
                        _0x37823b = !![];
                        if (_0x534994["id"] == _0x6c9f("0x55")) {
                            redfoc_game[_0x6c9f("0x7e")][_0x6c9f("0x4b")](this)();
                        }
                        this["tweens"][_0x6c9f("0x12")]({ targets: _0x534994, scaleX: 0.85, scaleY: 0.85, ease: _0x6c9f("0x58"), duration: _0x6c9f("0x67"), yoyo: !![], onComplete: _0x332cee[_0x6c9f("0x4b")](this) });
                        function _0x332cee() {
                            _0x37823b = ![];
                            if (_0x534994["id"] == _0x6c9f("0x6d")) {
                                _0x3e9c71["bind"](this)();
                                if (_0x4a4da7) {
                                    _0x448c91[_0x6c9f("0x7f")]();
                                    _0x4a4da7 = ![];
                                }
                            } else if (_0x534994["id"] == _0x6c9f("0x6e")) {
                                this[_0x6c9f("0x10")]["start"](_0x6c9f("0x69"));
                            } else if (_0x534994["id"] == _0x6c9f("0x80")) {
                                var _0x4d5231 = _0x25a671["bind"](this);
                                _0x4d5231("show");
                            } else if (_0x534994["id"] == _0x6c9f("0x61")) {
                                this["scene"][_0x6c9f("0x11")]("levelMenu");
                            } else if (_0x534994["id"] == "next") {
                                if (game_data[_0x6c9f("0x65")] == game_data[_0x6c9f("0x81")]) {
                                    this[_0x6c9f("0x10")][_0x6c9f("0x11")]("levelMenu");
                                } else {
                                    game_data[_0x6c9f("0x65")]++;
                                    this[_0x6c9f("0x10")][_0x6c9f("0x11")]("gamePlay");
                                }
                            } else if (_0x534994["id"] == _0x6c9f("0x53")) {
                                redfoc_game[_0x6c9f("0x59")][_0x6c9f("0x4b")](this)(_0x534994);
                            }
                        }
                    }
                } else if (_0x534994["active"]) {
                    _0x36bb4d = _0x2caf40;
                    _0x2caf40 = _0x534994["id"];
                    _0x1c6c2e = _0x2b5223;
                    _0x2b5223 = _0x534994[_0x6c9f("0x71")];
                    var _0x4acb87 = this[_0x6c9f("0x6f")]["getLength"]();
                    var _0x4ca9e2 = [0x0, 0x0];
                    var _0x509b24 = ![];
                    if (_0x2a9b26[0x1] !== undefined) {
                        _0x254fb9[_0x6c9f("0x4b")](this)();
                    }
                    if (_0x2b5223 == _0x1c6c2e && _0x1c6c2e !== null && _0x2caf40 !== _0x36bb4d) {
                        _0x4ca9e2[0x0] = _0x534994["id"];
                        _0x20510f[_0x534994[_0x6c9f("0x75")]][_0x534994["pos_y"]][_0x534994[_0x6c9f("0x77")]] = 0x0;
                        _0x560de1[_0x6c9f("0x4b")](this)(_0x534994[_0x6c9f("0x75")], _0x534994["pos_y"], _0x534994[_0x6c9f("0x77")]);
                        var _0x4c81e7 = this[_0x6c9f("0x6f")][_0x6c9f("0x62")]();
                        for (var _0x4f6738 = 0x0; _0x4f6738 < _0x4acb87; _0x4f6738++) {
                            if (_0x4c81e7[_0x4f6738]["id"] == _0x36bb4d) {
                                _0x20510f[_0x4c81e7[_0x4f6738]["layer"]][_0x4c81e7[_0x4f6738][_0x6c9f("0x76")]][_0x4c81e7[_0x4f6738][_0x6c9f("0x77")]] = 0x0;
                                _0x560de1[_0x6c9f("0x4b")](this)(_0x4c81e7[_0x4f6738]["layer"], _0x4c81e7[_0x4f6738][_0x6c9f("0x76")], _0x4c81e7[_0x4f6738]["pos_z"]);
                                _0x4ca9e2[0x1] = _0x4c81e7[_0x4f6738]["id"];
                                _0x4c81e7[_0x4f6738][_0x6c9f("0x7f")]();
                                _0x2b5223 = null;
                                _0x509b24 = !![];
                                play_sound[_0x6c9f("0x4b")](this)(_0x6c9f("0x42"));
                                break;
                            }
                        }
                        _0x5797ff[_0x6c9f("0x4b")](this)(_0x4ca9e2);
                        _0x534994[_0x6c9f("0x7f")]();
                    } else {
                        var _0x4c81e7 = this[_0x6c9f("0x6f")][_0x6c9f("0x62")]();
                        _0x33f8c9++;
                        if (_0x33f8c9 == 0x2) {
                            _0x33f8c9 = 0x1;
                            for (var _0x4f6738 = 0x0; _0x4f6738 < _0x4acb87; _0x4f6738++) {
                                if (_0x4c81e7[_0x4f6738]["id"] == _0x36bb4d) {
                                    _0x4c81e7[_0x4f6738][_0x6c9f("0x7d")]();
                                    break;
                                }
                            }
                        }
                        _0x534994[_0x6c9f("0x79")](0x40ddc6);
                    }
                    var _0x13ff9e = this[_0x6c9f("0x6f")][_0x6c9f("0x63")]();
                    var _0xf4ed11 = _0x25a671["bind"](this);
                    if (_0x13ff9e > 0x1 && _0x509b24) {
                        var _0x59d1cd = _0xf4ed11(_0x6c9f("0x29"));
                        if (_0x59d1cd == ![]) {
                            _0x2b61e2[_0x6c9f("0x4b")](this)();
                        }
                    }
                    if (_0x13ff9e == 0x0) {
                        _0x2392c1[_0x6c9f("0x4b")](this)();
                    }
                }
            }[_0x6c9f("0x4b")](this)
        );
        function _0x1ef0f3(_0x99a114) {
            var _0x59f3e7 = _0x99a114[_0x6c9f("0x64")],
                _0x2203c7,
                _0x51b1f8;
            while (_0x59f3e7) {
                _0x51b1f8 = Math[_0x6c9f("0x82")](Math[_0x6c9f("0x73")]() * _0x59f3e7--);
                _0x2203c7 = _0x99a114[_0x59f3e7];
                _0x99a114[_0x59f3e7] = _0x99a114[_0x51b1f8];
                _0x99a114[_0x51b1f8] = _0x2203c7;
            }
            return _0x99a114;
        }
        function _0x560de1(_0x2d1224, _0x2b1c13, _0x39fc45) {
            var _0x487cec = this["cards"]["getLength"]();
            var _0x32db75 = ![];
            if (_0x20510f[_0x2d1224][_0x2b1c13][_0x39fc45 - 0x1] == 0x1) {
                var _0x472662 = this[_0x6c9f("0x6f")][_0x6c9f("0x62")]();
                for (var _0x7db331 = 0x0; _0x7db331 < _0x487cec; _0x7db331++) {
                    if (_0x472662[_0x7db331]["layer"] == _0x2d1224 && _0x472662[_0x7db331][_0x6c9f("0x76")] == _0x2b1c13 && _0x472662[_0x7db331]["pos_z"] == _0x39fc45 - 0x1) {
                        var _0x1315be = ![];
                        if (_0x2d1224 < _0x31bd85 - 0x1 && _0x20510f[_0x2d1224 + 0x1][_0x2b1c13][_0x39fc45 - 0x1] == 0x0) {
                            _0x1315be = !![];
                        } else if (_0x2d1224 == _0x31bd85 - 0x1) {
                            _0x1315be = !![];
                        }
                        if (_0x1315be) {
                            _0x472662[_0x7db331][_0x6c9f("0x7d")]();
                            _0x472662[_0x7db331][_0x6c9f("0x78")] = !![];
                            _0x32db75 = !![];
                            break;
                        }
                    }
                }
            }
            if (!_0x32db75) {
                if (_0x20510f[_0x2d1224][_0x2b1c13][_0x39fc45 + 0x1] == 0x1) {
                    var _0x472662 = this[_0x6c9f("0x6f")][_0x6c9f("0x62")]();
                    for (var _0x7db331 = 0x0; _0x7db331 < _0x487cec; _0x7db331++) {
                        if (_0x472662[_0x7db331][_0x6c9f("0x75")] == _0x2d1224 && _0x472662[_0x7db331][_0x6c9f("0x76")] == _0x2b1c13 && _0x472662[_0x7db331][_0x6c9f("0x77")] == _0x39fc45 + 0x1) {
                            var _0x1315be = ![];
                            if (_0x2d1224 < _0x31bd85 - 0x1 && _0x20510f[_0x2d1224 + 0x1][_0x2b1c13][_0x39fc45 + 0x1] == 0x0) {
                                _0x1315be = !![];
                            } else if (_0x2d1224 == _0x31bd85 - 0x1) {
                                _0x1315be = !![];
                            }
                            if (_0x1315be) {
                                _0x472662[_0x7db331][_0x6c9f("0x7d")]();
                                _0x472662[_0x7db331]["active"] = !![];
                                _0x32db75 = !![];
                                break;
                            }
                        }
                    }
                }
            }
            if (_0x2d1224 > 0x0) {
                if (_0x20510f[_0x2d1224 - 0x1][_0x2b1c13][_0x39fc45] == 0x1 && _0x20510f[_0x2d1224 - 0x1][_0x2b1c13][_0x39fc45 + 0x1] == 0x0) {
                    _0x560de1[_0x6c9f("0x4b")](this)(_0x2d1224 - 0x1, _0x2b1c13, _0x39fc45 + 0x1);
                }
                if (_0x20510f[_0x2d1224 - 0x1][_0x2b1c13][_0x39fc45] == 0x1 && _0x20510f[_0x2d1224 - 0x1][_0x2b1c13][_0x39fc45 - 0x1] == 0x0) {
                    _0x560de1[_0x6c9f("0x4b")](this)(_0x2d1224 - 0x1, _0x2b1c13, _0x39fc45 - 0x1);
                }
                if (_0x20510f[_0x2d1224 - 0x1][_0x2b1c13][_0x39fc45] == 0x1 && _0x20510f[_0x2d1224 - 0x1][_0x2b1c13][_0x39fc45 - 0x1] == undefined) {
                    var _0x472662 = this[_0x6c9f("0x6f")][_0x6c9f("0x62")]();
                    for (var _0x7db331 = 0x0; _0x7db331 < _0x487cec; _0x7db331++) {
                        if (_0x472662[_0x7db331]["layer"] == _0x2d1224 - 0x1 && _0x472662[_0x7db331][_0x6c9f("0x76")] == _0x2b1c13 && _0x472662[_0x7db331][_0x6c9f("0x77")] == _0x39fc45) {
                            _0x472662[_0x7db331]["clearTint"]();
                            _0x472662[_0x7db331][_0x6c9f("0x78")] = !![];
                            _0x32db75 = !![];
                            break;
                        }
                    }
                }
                if (_0x20510f[_0x2d1224 - 0x1][_0x2b1c13][_0x39fc45] == 0x1 && _0x20510f[_0x2d1224 - 0x1][_0x2b1c13][_0x39fc45 + 0x1] == undefined) {
                    var _0x472662 = this[_0x6c9f("0x6f")][_0x6c9f("0x62")]();
                    for (var _0x7db331 = 0x0; _0x7db331 < _0x487cec; _0x7db331++) {
                        if (_0x472662[_0x7db331]["layer"] == _0x2d1224 - 0x1 && _0x472662[_0x7db331][_0x6c9f("0x76")] == _0x2b1c13 && _0x472662[_0x7db331][_0x6c9f("0x77")] == _0x39fc45) {
                            _0x472662[_0x7db331][_0x6c9f("0x7d")]();
                            _0x472662[_0x7db331][_0x6c9f("0x78")] = !![];
                            _0x32db75 = !![];
                            break;
                        }
                    }
                }
            }
        }
        function _0x5797ff(_0x3d7ad6) {
            var _0x26f052 = 0x0;
            for (var _0x21bb62 = 0x0; _0x21bb62 < 0x2; _0x21bb62++) {
                var _0x427d3d = this[_0x6c9f("0x7b")]["getLength"]();
                var _0x4a02cc = this[_0x6c9f("0x7b")][_0x6c9f("0x62")]();
                for (var _0x2bbf55 = 0x0; _0x2bbf55 < _0x427d3d; _0x2bbf55++) {
                    if (_0x4a02cc[_0x2bbf55]["id"] == _0x3d7ad6[_0x26f052]) {
                        _0x4a02cc[_0x2bbf55]["destroy"]();
                        _0x26f052++;
                        break;
                    }
                }
            }
        }
        function _0x2b61e2() {
            _0x448c91 = this[_0x6c9f("0x12")][_0x6c9f("0x4d")](0x41a, 0x50, _0x6c9f("0x2b"));
            _0x4a4da7 = !![];
            this[_0x6c9f("0x66")]["add"]({ targets: _0x448c91, x: 0x406, loop: -0x1, duration: _0x6c9f("0x83"), ease: _0x6c9f("0x84"), yoyo: !![] });
        }
        function _0x25a671(_0x243779) {
            var _0x595861 = this["cards"]["getLength"]();
            var _0xd17603 = this[_0x6c9f("0x6f")][_0x6c9f("0x62")]();
            var _0x395258 = [];
            var _0x2c5377 = [];
            for (var _0x241645 = 0x0; _0x241645 < _0x595861; _0x241645++) {
                if (_0xd17603[_0x241645][_0x6c9f("0x78")]) {
                    _0x395258[_0x6c9f("0x70")](_0xd17603[_0x241645][_0x6c9f("0x71")]);
                    _0x2c5377[_0x6c9f("0x70")](_0xd17603[_0x241645]["id"]);
                }
            }
            var _0x2151f9 = _0x395258[_0x6c9f("0x64")];
            var _0x30d66e = ![];
            for (var _0x5490ab = 0x0; _0x5490ab < _0x2151f9; _0x5490ab++) {
                for (var _0xb2ed37 = 0x0; _0xb2ed37 < _0x2151f9; _0xb2ed37++) {
                    if (_0x395258[_0x5490ab] == _0x395258[_0xb2ed37] && _0x5490ab !== _0xb2ed37) {
                        _0x30d66e = !![];
                        if (_0x243779 == _0x6c9f("0x85")) {
                            _0x51549d(_0x5490ab, _0xb2ed37);
                        } else if (_0x243779 == _0x6c9f("0x86")) {
                            _0x58e362[_0x6c9f("0x4b")](this)(_0x5490ab, _0xb2ed37);
                        }
                        break;
                    }
                }
                if (_0x30d66e) {
                    break;
                }
            }
            if (_0x243779 == _0x6c9f("0x29")) {
                var _0x22f763 = ![];
                var _0x9b7f89 = -0x1;
                var _0x6fbd12 = -0x1;
                if (_0x595861 < 0x6) {
                    _0x22f763 = !![];
                    for (var _0x241645 = 0x0; _0x241645 < _0x595861; _0x241645++) {
                        if (_0x9b7f89 == -0x1) {
                            _0x9b7f89 = _0xd17603[_0x241645]["pos_z"];
                            _0x6fbd12 = _0xd17603[_0x241645][_0x6c9f("0x76")];
                        } else {
                            if (_0xd17603[_0x241645][_0x6c9f("0x77")] !== _0x9b7f89 && _0xd17603[_0x241645][_0x6c9f("0x76")] !== _0x6fbd12) {
                                _0x22f763 = ![];
                                break;
                            }
                        }
                    }
                }
                if (_0x22f763) {
                    _0x30d66e = !![];
                    this["cards"][_0x6c9f("0x17")](!![], !![]);
                    this[_0x6c9f("0x7b")][_0x6c9f("0x17")](!![], !![]);
                    _0x2392c1[_0x6c9f("0x4b")](this)();
                }
            }
            if (_0x243779 == _0x6c9f("0x29")) {
                return _0x30d66e;
            }
            function _0x51549d(_0x5490ab, _0xb2ed37) {
                _0x2a9b26[0x0] = _0x2c5377[_0x5490ab];
                _0x2a9b26[0x1] = _0x2c5377[_0xb2ed37];
                var _0x21dfdb = 0x0;
                for (var _0x241645 = 0x0; _0x241645 < _0x595861; _0x241645++) {
                    if (_0xd17603[_0x241645]["id"] == _0x2a9b26[0x0] || _0xd17603[_0x241645]["id"] == _0x2a9b26[0x1]) {
                        _0xd17603[_0x241645][_0x6c9f("0x79")](0x8fff3d);
                        _0x21dfdb++;
                        if (_0x21dfdb == 0x2) {
                            break;
                        }
                    }
                }
            }
            function _0x58e362(_0x5490ab, _0xb2ed37) {
                _0x2a9b26[0x0] = _0x2c5377[_0x5490ab];
                _0x2a9b26[0x1] = _0x2c5377[_0xb2ed37];
                var _0xf15807 = [0x0, 0x0];
                var _0x97fa2e = this["cards"][_0x6c9f("0x62")]();
                var _0x21dfdb = 0x0;
                for (var _0x2d1224 = 0x0; _0x2d1224 < 0x2; _0x2d1224++) {
                    for (var _0x241645 = 0x0; _0x241645 < _0x595861; _0x241645++) {
                        if (_0x97fa2e[_0x241645]["id"] == _0x2a9b26[_0x2d1224]) {
                            _0x20510f[_0x97fa2e[_0x241645][_0x6c9f("0x75")]][_0x97fa2e[_0x241645][_0x6c9f("0x76")]][_0x97fa2e[_0x241645][_0x6c9f("0x77")]] = 0x0;
                            _0x560de1[_0x6c9f("0x4b")](this)(_0x97fa2e[_0x241645][_0x6c9f("0x75")], _0x97fa2e[_0x241645][_0x6c9f("0x76")], _0x97fa2e[_0x241645][_0x6c9f("0x77")]);
                            _0xf15807[_0x21dfdb] = _0x97fa2e[_0x241645]["id"];
                            _0x97fa2e[_0x241645]["destroy"]();
                            _0x21dfdb++;
                            if (_0x21dfdb == 0x2) {
                                _0x5797ff[_0x6c9f("0x4b")](this)(_0xf15807);
                                break;
                            }
                            break;
                        }
                    }
                }
            }
        }
        function _0x254fb9() {
            var _0x43ec99 = this[_0x6c9f("0x6f")][_0x6c9f("0x63")]();
            var _0x5d2d01 = this[_0x6c9f("0x6f")]["getChildren"]();
            var _0x21dfdb = 0x0;
            for (var _0x2f12d9 = 0x0; _0x2f12d9 < _0x43ec99; _0x2f12d9++) {
                if (_0x5d2d01[_0x2f12d9]["id"] == _0x2a9b26[_0x21dfdb]) {
                    _0x5d2d01[_0x2f12d9][_0x6c9f("0x7d")]();
                    _0x21dfdb++;
                }
                if (_0x21dfdb == 0x2) {
                    break;
                }
            }
            _0x2a9b26 = [];
        }
        function _0x2392c1() {
            play_sound[_0x6c9f("0x4b")](this)(_0x6c9f("0x45"));
            var _0x2ca32a = game_data[_0x6c9f("0x87")];
            var _0x247188 = _0x2ca32a[_0x6c9f("0x64")];
            if (_0x247188 == 0x0) {
                game_data[_0x6c9f("0x87")][_0x6c9f("0x70")](game_data[_0x6c9f("0x65")]);
            } else {
                var _0x73ee77 = ![];
                for (var _0x37ede3 = 0x0; _0x37ede3 < _0x247188; _0x37ede3++) {
                    if (_0x2ca32a[_0x37ede3] == game_data[_0x6c9f("0x65")]) {
                        _0x73ee77 = !![];
                    }
                }
                if (!_0x73ee77) {
                    game_data[_0x6c9f("0x87")][_0x6c9f("0x70")](game_data[_0x6c9f("0x65")]);
                }
            }
            localStorage[_0x6c9f("0x88")](_0x6c9f("0x89"), JSON["stringify"](game_data[_0x6c9f("0x87")]));
            var _0x5ea558 = this[_0x6c9f("0x12")][_0x6c9f("0x4d")](0x280, 0x12c, _0x6c9f("0x22"));
            _0x5ea558[_0x6c9f("0x8a")] = _0x5ea558[_0x6c9f("0x8b")] = 0x0;
            var _0x3e2121;
            this[_0x6c9f("0x66")][_0x6c9f("0x12")]({ targets: _0x5ea558, scaleX: 0x1, scaleY: 0x1, angle: 0x168, ease: _0x6c9f("0x8c"), duration: _0x6c9f("0x8d"), onComplete: _0x538824[_0x6c9f("0x4b")](this) });
            function _0x538824() {
                _0x3e2121 = this[_0x6c9f("0x12")][_0x6c9f("0x4d")](0x280, 0x1cc, "btn_next")[_0x6c9f("0x4e")]();
                _0x3e2121[_0x6c9f("0x60")] = _0x6c9f("0x6c");
                _0x3e2121["id"] = _0x6c9f("0x8e");
                _0x3e2121[_0x6c9f("0x8a")] = _0x3e2121[_0x6c9f("0x8b")] = 0x0;
                this[_0x6c9f("0x66")][_0x6c9f("0x12")]({ targets: _0x3e2121, scaleX: 0x1, scaleY: 0x1, ease: _0x6c9f("0x8c"), duration: "300" });
            }
        }
    }
}
function play_sound(_0xdde8cb) {
    if (game_data[_0x6c9f("0x53")]) {
        this[_0x6c9f("0x53")][_0x6c9f("0x4f")](_0xdde8cb);
    }
}
var config = { type: Phaser["AUTO"], width: 0x500, height: 0x2d0, scene: [gameBoot, gameLoad, gameMenu, gamePlay, levelMenu] };
var game = new Phaser["Game"](config);
var redfoc_game = {
    set_fullscreen: function () {
        this[_0x6c9f("0x56")][_0x6c9f("0x8f")](function () {
            if (game_data["is_fullscreen"] == ![]) {
                screenfull[_0x6c9f("0x90")]();
                game_data[_0x6c9f("0x91")] = !![];
            } else {
                screenfull[_0x6c9f("0x92")]();
                game_data[_0x6c9f("0x91")] = ![];
            }
        });
    },
    set_sound: function (_0x543d21) {
        if (game_data[_0x6c9f("0x53")] == !![]) {
            game_data[_0x6c9f("0x53")] = ![];
            _0x543d21[_0x6c9f("0x54")] = 0.6;
        } else {
            game_data[_0x6c9f("0x53")] = !![];
            _0x543d21[_0x6c9f("0x54")] = 0x1;
        }
    },
    check_storage: function () {
        var _0x4867ad = localStorage[_0x6c9f("0x93")](_0x6c9f("0x89"));
        if (_0x4867ad != null) {
            game_data[_0x6c9f("0x87")] = JSON["parse"](_0x4867ad);
        }
    },
    check_orientation: function (_0x564b19) {
        var _0x231c4c = window[_0x6c9f("0x94")];
        var _0x26486b = window[_0x6c9f("0x95")];
        var _0x4a81b6;
        if (_0x231c4c > _0x26486b) {
            _0x4a81b6 = "landscape";
        } else {
            _0x4a81b6 = _0x6c9f("0x96");
        }
        if (_0x4a81b6 != _0x564b19) {
            alert(_0x6c9f("0x97"));
        }
    },
};
function resize() {
    var _0x341dc3 = game["canvas"],
        _0x38b591 = window[_0x6c9f("0x94")],
        _0x1579c8 = window[_0x6c9f("0x95")];
    var _0x1a387f = _0x38b591 / _0x1579c8,
        _0x463175 = _0x341dc3["width"] / _0x341dc3[_0x6c9f("0x98")];
    if (_0x1a387f < _0x463175) {
        _0x341dc3["style"][_0x6c9f("0x99")] = _0x38b591 + "px";
        _0x341dc3[_0x6c9f("0x9a")][_0x6c9f("0x98")] = _0x38b591 / _0x463175 + "px";
    } else {
        _0x341dc3[_0x6c9f("0x9a")][_0x6c9f("0x99")] = _0x1579c8 * _0x463175 + "px";
        _0x341dc3["style"]["height"] = _0x1579c8 + "px";
    }
}
