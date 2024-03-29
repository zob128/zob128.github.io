(function(i) {
    function e(e) {
        for (var a, o, r = e[0], d = e[1], m = e[2], l = 0, u = []; l < r.length; l++)
            o = r[l],
            n[o] && u.push(n[o][0]),
            n[o] = 0;
        for (a in d)
            Object.prototype.hasOwnProperty.call(d, a) && (i[a] = d[a]);
        c && c(e);
        while (u.length)
            u.shift()();
        return s.push.apply(s, m || []),
        t()
    }
    function t() {
        for (var i, e = 0; e < s.length; e++) {
            for (var t = s[e], a = !0, r = 1; r < t.length; r++) {
                var d = t[r];
                0 !== n[d] && (a = !1)
            }
            a && (s.splice(e--, 1),
            i = o(o.s = t[0]))
        }
        return i
    }
    var a = {}
      , n = {
        app: 0
    }
      , s = [];
    function o(e) {
        if (a[e])
            return a[e].exports;
        var t = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return i[e].call(t.exports, t, t.exports, o),
        t.l = !0,
        t.exports
    }
    o.m = i,
    o.c = a,
    o.d = function(i, e, t) {
        o.o(i, e) || Object.defineProperty(i, e, {
            enumerable: !0,
            get: t
        })
    }
    ,
    o.r = function(i) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(i, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(i, e) {
        if (1 & e && (i = o(i)),
        8 & e)
            return i;
        if (4 & e && "object" === typeof i && i && i.__esModule)
            return i;
        var t = Object.create(null);
        if (o.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: i
        }),
        2 & e && "string" != typeof i)
            for (var a in i)
                o.d(t, a, function(e) {
                    return i[e]
                }
                .bind(null, a));
        return t
    }
    ,
    o.n = function(i) {
        var e = i && i.__esModule ? function() {
            return i["default"]
        }
        : function() {
            return i
        }
        ;
        return o.d(e, "a", e),
        e
    }
    ,
    o.o = function(i, e) {
        return Object.prototype.hasOwnProperty.call(i, e)
    }
    ,
    o.p = "";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
      , d = r.push.bind(r);
    r.push = e,
    r = r.slice();
    for (var m = 0; m < r.length; m++)
        e(r[m]);
    var c = d;
    s.push([0, "chunk-vendors"]),
    t()
}
)({
    0: function(i, e, t) {
        i.exports = t("56d7")
    },
    "07bb": function(i, e, t) {},
    "56d7": function(i, e, t) {
        "use strict";
        t.r(e);
        t("cadf"),
        t("551c"),
        t("097d");
        var a = t("2b0e")
          , n = function() {
            var i = this
              , e = i.$createElement
              , t = i._self._c || e;
            return t("div", {
                attrs: {
                    id: "app"
                }
            }, [i.loadingDone ? i._e() : t("div", {
                staticClass: "loading"
            }, [i._v("\n    loading resources... " + i._s(i.loading) + "%\n  ")]), t("div", {
                staticClass: "progress"
            }, [t("div", {
                staticClass: "bar",
                style: {
                    width: i.progress
                }
            })]), t("button", {
                staticClass: "btn",
                on: {
                    click: i.play
                }
            }, [i._v("播放(play)")]), t("button", {
                staticClass: "btn",
                on: {
                    click: i.stop
                }
            }, [i._v("停止(stop)")]), t("button", {
                staticClass: "btn",
                on: {
                    click: i.continue
                }
            }, [i._v("继续(continue)")]),t("button", {
                staticClass: "btn",
                on: {
                    click: i.pause
                }
            }, [i._v("暂停(pause)")]), t("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: i.selectedSong,
                    expression: "selectedSong"
                }],
                attrs: {
                    name: "",
                    id: ""
                },
                on: {
                    change: function(e) {
                        var t = Array.prototype.filter.call(e.target.options, function(i) {
                            return i.selected
                        }).map(function(i) {
                            var e = "_value"in i ? i._value : i.value;
                            return e
                        });
                        i.selectedSong = e.target.multiple ? t : t[0]
                    }
                }
            }, i._l(i.songs, function(e) {
                return t("option", {
                    key: e,
                    domProps: {
                        value: e
                    }
                }, [i._v("\n      " + i._s(e) + "\n    ")])
            }), 0), 
            t("input", {
                attrs:{
                    type:"button",
                    value:"参照链接",
                    onclick:"javascript:window.location.href='https://qiankun.netlify.app/piano-simulator/#/'"
                }
            }, [i._v("")]),
            t("div", {
                staticClass: "piano",
                on: {
                    mousedown: function(e) {
                        i.activate(e.target.attributes.note.value)
                    },
                    mouseup: function(e) {
                        i.deactivate(e.target.attributes.note.value)
                    }
                }
            }, [t("div", {
                staticClass: "octave first"
            }, [t("div", {
                staticClass: "white",
                class: {
                    active: i.activeKeys[1]
                },
                attrs: {
                    note: 1
                }
            }), t("span", {
                staticClass: "black",
                class: {
                    active: i.activeKeys[2]
                },
                attrs: {
                    note: 2
                }
            }), t("div", {
                staticClass: "white",
                class: {
                    active: i.activeKeys[3]
                },
                attrs: {
                    note: 3
                }
            })]), i._l(7, function(e) {
                return t("div", {
                    key: e,
                    staticClass: "octave"
                }, [t("div", {
                    staticClass: "white",
                    class: {
                        active: i.activeKeys[12 * (e - 1) + 4]
                    },
                    attrs: {
                        note: 12 * (e - 1) + 4
                    }
                }), t("span", {
                    staticClass: "black",
                    class: {
                        active: i.activeKeys[12 * (e - 1) + 5]
                    },
                    attrs: {
                        note: 12 * (e - 1) + 5
                    }
                }), t("div", {
                    staticClass: "white",
                    class: {
                        active: i.activeKeys[12 * (e - 1) + 6]
                    },
                    attrs: {
                        note: 12 * (e - 1) + 6
                    }
                }), t("span", {
                    staticClass: "black",
                    class: {
                        active: i.activeKeys[12 * (e - 1) + 7]
                    },
                    attrs: {
                        note: 12 * (e - 1) + 7
                    }
                }), t("div", {
                    staticClass: "white",
                    class: {
                        active: i.activeKeys[12 * (e - 1) + 8]
                    },
                    attrs: {
                        note: 12 * (e - 1) + 8
                    }
                }), t("div", {
                    staticClass: "white",
                    class: {
                        active: i.activeKeys[12 * (e - 1) + 9]
                    },
                    attrs: {
                        note: 12 * (e - 1) + 9
                    }
                }), t("span", {
                    staticClass: "black",
                    class: {
                        active: i.activeKeys[12 * (e - 1) + 10]
                    },
                    attrs: {
                        note: 12 * (e - 1) + 10
                    }
                }), t("div", {
                    staticClass: "white",
                    class: {
                        active: i.activeKeys[12 * (e - 1) + 11]
                    },
                    attrs: {
                        note: 12 * (e - 1) + 11
                    }
                }), t("span", {
                    staticClass: "black",
                    class: {
                        active: i.activeKeys[12 * (e - 1) + 12]
                    },
                    attrs: {
                        note: 12 * (e - 1) + 12
                    }
                }), t("div", {
                    staticClass: "white",
                    class: {
                        active: i.activeKeys[12 * (e - 1) + 13]
                    },
                    attrs: {
                        note: 12 * (e - 1) + 13
                    }
                }), t("span", {
                    staticClass: "black",
                    class: {
                        active: i.activeKeys[12 * (e - 1) + 14]
                    },
                    attrs: {
                        note: 12 * (e - 1) + 14
                    }
                }), t("div", {
                    staticClass: "white",
                    class: {
                        active: i.activeKeys[12 * (e - 1) + 15]
                    },
                    attrs: {
                        note: 12 * (e - 1) + 15
                    }
                })])
            }), t("div", {
                staticClass: "octave last"
            }, [t("div", {
                staticClass: "white",
                class: {
                    active: i.activeKeys[88]
                },
                attrs: {
                    note: 88
                }
            })])], 2)])
        }
          , s = []
          , o = t("e814")
          , r = t.n(o)
          , d = (t("c5f6"),
        {
            data: function() {
                return {
                    loading: 0,
                    loadingDone: !1,
                    progress: 0,
                    timer: null,
                    totalTime: 0,
                    startTime: 0,
                    activeKeys: {},
                    selectedSong: "th_dipp01_蓬莱伝説.mid",
                    songs: ["Again.mid", "aLIEz.mid", "All in good time.mid", "Allegro Cantabile Sound.mid", "Amnanesis.mid", "AQUA.mid", "Aruji Naki Sono Koe.mid", "Ashita e no Kaerimichi.mid", "Attack on Titan.mid", "Before my body is dry.mid", "Bios.mid", "Blessing.mid", "Blue Bird.mid", "Blumenkranz.mid", "Boku ja nai.mid", "Boys be Smile.mid", "Brave Heart.mid", "Brave Shine.mid", "Brave Song (piano + viola).mid", "Brave Song.mid", "Butterfly.mid", "Cha-la Head-Cha-La.mid", "Challenge accepted (1).mid", "City of Eternity.mid", "COLORS.mid", "Cras numquam scire.mid", "Daydream Syndrome.mid", "departures.mid", "Dream theme from Nazo no Kanojo X.mid", "Enter Enter Mission.mid", "EONIAN.mid", "Esoragoto.mid", "Euterpe.mid", "Everyday World.mid", "Extra magic hour.mid", "Fallen Angel.mid", "Fubuki.mid", "GO GO Maniac.mid", "Gotta catch 'em all.mid", "Guren no Yumiya.mid", "Heartwarming.mid", "Hello Alone -Yui Ballade-.mid", "Hikari no Senritsu.mid", "Hikaru Nara.mid", "Jiyuu no Tsubasa for two pianos (MIDI).mid", "Kanashimi no ato ni.mid", "Kancolle - Piano Suite.mid", "Key anime piano suite.mid", "Kibou ni Tsuite.mid", "Kibou no Hana.mid", "Killy Killy Joker.mid", "Kimi ni Matsuwaru Mystery.mid", "Kimi no Shiranai Monogatari.mid", "Koibumi.mid", "Koko Kara Hajimaru Monogatari.mid", "Kokoro no Senritsu.mid", "Kono Namida wo Kimi ni Sasagu (2).mid", "kono suba piano suite.mid", "Kuchizuke Diamond.mid", "Kuusou Mesorogiwi.mid", "Level 5 - Judgelight.mid", "Life goes on.mid", "Light my Fire.mid", "Little Busters!.mid", "Lumis Eterne.mid", "Madoka Magica - Piano Medley.mid", "Magia.mid", "Main Theme from Non Non Byori.mid", "Masshiro World.mid", "Megumeru - Cuckool mix 2007 -.mid", "Miiro.mid", "Mikansei Stride.mid", "Moonlight Densetsu.mid", "My Dearest.mid", "My precious friend - Isshuukan Friends.mid", "My Soul Your Beats.mid", "Nagi no Asukara - Piano Suite.mid", "Namae no nai Kaibutsu.mid", "Niji no Ressha.mid", "Ninelie.mid", "Oath Sign.mid", "One Last Song.mid", "Only my railgun (easy ver).mid", "Only my railgun (full ver).mid", "Only my railgun.mid", "Owari no Sekai Kara.mid", "Patema Inverse.mid", "Philosophyz.mid", "Piano Arrangement - DDC - Mysterious Purification Rod.mid", "Piano Arrangement - IaMP - Demystify Feast.mid", "Pierce the Heavens with your drill!.mid", "Playable Piano - TH10 - Autumnal Waterfall.mid", "Playable Piano - TH10 - Because Princess Inada is Scolding Me.mid", "Playable Piano - TH14 - Magical Storm.mid", "Playable Piano - TH15 - Faraway Voyage of 380,000 Kilometers.mid", "Playable Piano - TH15 - Frozen Capital of Eternity.mid", "Playable Piano - TH15 - The Rabbit has Landed.mid", "Playable Piano - TH16 - A Pair of Divine Beasts.mid", "Playable Piano - TH16.5 - Lucid Dreamer.mid", "Playable Piano - Touhou 2 - She's in a Temper!.mid", "Playable Piano - Touhou 2 - World of Empty Dreams.mid", "Playable Piano - Touhou 2 Hakurei Eastern Wind.mid", "Playable Piano - Touhou 4 - Lotus Road.mid", "Playable Piano - Touhou 8 - Deaf to All but the Song.mid", "Playable Piano - Touhou 8 - Voyage 1969.mid", "Playable Piano - Touhou 16 - The Magic Straw-Hat Jizo.mid", "Playable Piano - Touhou CtC - The Purest Sky and Sea.mid", "Playable_Piano_-_TH16_-_No_More_Going_Through_Doors.mid", "REDLINE DAY.mid", "Resonance.mid", "Rewrite v2 - Lenno Liu.mid", "Sagitta Luminis.mid", "Sakura.mid", "Satori_Maiden__3rd_eye_-_Satori_Komeijis_Theme_-_by_Animenzzz.mid", "Sayonara Memories.mid", "Scarlet Ballet.mid", "Secret_Base_-_Kimi_ga_Kureta_Mono_(10_years_after_Ver - ThePianoL.mid", "Shakugan no Shana Medley.mid", "Sis puella magica!.mid", "Sister's Noise.mid", "Snow Halation.mid", "Sora to Kimi no Message.mid", "Sparkling Daydream.mid", "Sweet & Sweet Cherry.mid", "Swordland (Main Theme).mid", "th_Agartha_wind-piano.mid","th_dipp01_蓬莱伝説.mid","th_dipp02_二色蓮花蝶 Red and White.mid","th_dipp03 桜花之恋塚 Japanese Flower.mid","th_dipp04_明治十七年の上海アリス.mid","th_dipp05_東方怪奇談.mid","th_dipp06_エニグマティクドール.mid","th_dipp07_サーカスレヴァリエ.mid","th_dipp08_人形の森.mid","th_dipp10 Reincarnation.mid","th_dipp12_永遠の巫女 Enternal shrine.mid","th_dipp13 空飛ぶ巫女の不思議な毎日.mid", "th_Fragrant Plants 2.mid", "th_GXSBoss_Medley.mid", "th_marisaex.mid", "th_Retrospective Kyoto.mid", "th_schrodingers-black-cat-piano.mid", "th01_Oriental Magician-piano.mid", "th01_Strange Oriental Discourse-piano.mid", "th05_magic_shop_of_raspberry.mid", "th05-end-piano.mid","th06_5a_The Maid and the Pocket Watch of Blood.mid","th06_exa_The Centennial Festival for Magical Girls.mid","th08_4b_dream battle.mid","th08_05_nightbird.mid", "th10_6a_grave_of_being.mid", "th11_exa_last_remote_akira.mid", "th12.5_nemesis_stronghold.mid", "th12.5_strange_city_you_live.mid", "th12.5_youkai_modern_colony.mid", "th14_3_cheat_against_the_impossible_danmaku.mid", "th15_3a_The Mysterious Shrine Maiden Flying Through Space.mid", "th15_5b_Pierrot of the Star Spangled Banner.mid", "th15_ex-piano.mid", "th17_5a_beast_metropolitan.mid", "The city in the night.mid", "The Reluctant Heroes.mid", "The Song of Aether.mid", "This Game (1).mid", "This Game (TV Size).mid", "This is (not) the end.mid", "Toki Tsukasadoru Juuni no Meiyaku.mid", "tokimeki poporon.mid", "Touhou_18_UM_Complete_OST.mid", "Trust me.mid", "Unbeatable Network.mid", "unfinished.mid", "Unravel.mid", "We are!.mid", "Wiosna.mid", "World End.mid", "Yasashii Boukyaku.mid", "Yasashisa no Riyuu.mid", "Yoake Umarekuru Shoujo.mid", "Yume wa Nando mo Umarekawaru.mid", "ZZZ.mid", "th04_forbidden_game.mid", "th04_Innoncence.mid", "th05_crimson_girl.mid", "莲台野夜行-古老的冥界塔楼.mid", "燕石博物志_dr眠瞳.mid"]
                }
            },
            watch: {
                selectedSong: function() {}
            },
            methods: {
                // initTimer: function() {
                //     var i = this;
                //     this.startTime = +new Date,
                //     this.totalTime = MIDI.Player.endTime,
                //     this.timer = setInterval(function() {
                //         var e = new Date - i.startTime;
                //         e / i.totalTime >= 1 ? i.stopTimer() : i.progress = 100 * e / i.totalTime + "%"
                //     }, 20)
                // },
                initTimer: function() {
                    var i = this;
                    this.startTime = 0,
                    this.totalTime = MIDI.Player.endTime,
                    this.timer0 = setInterval(function() {
                        i.startTime += 20;
                    }, 20),
                    this.timer = setInterval(function() {
                        i.startTime / i.totalTime >= 1 ? i.stopTimer() : i.progress = 100 * i.startTime / i.totalTime + "%"
                    }, 20)
                },
                stopTimer: function() {
                    var i = this.timer,
                    j = this.timer0;
                    clearInterval(i),
                    clearInterval(j),
                    this.progress = 0
                },
                activate: function(i) {
                    var e = this;
                    i = Number(i),
                    this.activeKeys[i] ? (this.deactivate(i),
                    this.$nextTick(function() {
                        setTimeout(function() {
                            e.$set(e.activeKeys, i, !0)
                        }, 20)
                    })) : this.$set(this.activeKeys, i, !0)
                },
                deactivate: function(i) {
                    i = Number(i),
                    this.$delete(this.activeKeys, i)
                },
                play: function() {
                    var i = this;
                    this.stopTimer();
                    var e = MIDI.Player;
                    e.timeWarp = 1,
                    e.loadFile("./midifiles/" + this.selectedSong, function() {
                        e.start(),
                        i.initTimer()
                    })
                },
                stop: function() {
                    this.stopTimer();
                    var i = MIDI.Player;
                    i.stop()
                },
                continue: function() {
                    var i = MIDI.Player,
                    j = this;
                    clearInterval(j.timer0);
                    this.timer0 = setInterval(function() {
                        j.startTime += 20;
                    }, 20);
                    i.resume()
                },
                pause: function() {
                    //this.stopTimer();
                    var i = MIDI.Player,
                    j = this.timer0;
                    clearInterval(j);
                    i.pause()
                }
            },
            created: function() {},
            mounted: function() {
                var i = this;
                MIDI.loadPlugin({
                    soundfontUrl: "./soundfont/",
                    instrument: "acoustic_grand_piano",
                    onprogress: function(e, t) {
                        i.loading = r()(100 * t),
                        1 == t && "load" == e && (i.loadingDone = !0)
                    },
                    onsuccess: function() {
                        var e = MIDI.Player;
                        e.addListener(function(e) {
                            144 === e.message && i.activate(e.note - 20),
                            128 === e.message && i.deactivate(e.note - 20)
                        })
                    }
                })
            }
        })
          , m = d
          , c = (t("6ed2"),
        t("b0a0"),
        t("2877"))
          , l = Object(c["a"])(m, n, s, !1, null, "c7dc22b2", null);
        l.options.__file = "App.vue";
        var u = l.exports
          , v = t("8c4f");
        a["a"].use(v["a"]);
        new v["a"]({
            routes: []
        });
        var h = t("2f62");
        a["a"].use(h["a"]);
        new h["a"].Store({
            state: {},
            mutations: {},
            actions: {}
        });
        a["a"].config.productionTip = !1,
        new a["a"]({
            render: function(i) {
                return i(u)
            }
        }).$mount("#app")
    },
    6170: function(i, e, t) {},
    "6ed2": function(i, e, t) {
        "use strict";
        var a = t("6170")
          , n = t.n(a);
        n.a
    },
    b0a0: function(i, e, t) {
        "use strict";
        var a = t("07bb")
          , n = t.n(a);
        n.a
    }
});
//# sourceMappingURL=app.07ab599c.js.map
