var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
System.register("utils/Globals", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Constants, Settings, Colours;
    return {
        setters:[],
        execute: function() {
            Constants = (function () {
                function Constants() {
                }
                Constants.STATE_BOOT = 'boot';
                Constants.STATE_PRELOAD = 'preload';
                Constants.STATE_MENU = 'menu';
                Constants.STATE_GAME = 'gameplay';
                Constants.FONT_VT323 = 'VT323, monospace';
                Constants.POPUP_BEGINGAME = 'begingamepopup';
                Constants.POPUP_OPTIONS = 'optionspopup';
                Constants.POPUP_HELP = 'helppopup';
                Constants.POPUP_CONFIRMATION = 'confirmationpopup';
                Constants.POPUP_ENDGAME = 'endgamepopup';
                Constants.HEAD_SLOT = 'head';
                Constants.FACE_SLOT = 'face';
                Constants.WAIST_SLOT = 'waist';
                Constants.FOOT_SLOT = 'foot';
                Constants.KEY_SAVE_DATA = 'zzpccsavedata';
                Constants.UI_OVER_SOUND = "";
                Constants.UI_DOWN_SOUND = "";
                Constants.MUSIC_LOOP = 'zzp_happy_relaxing';
                return Constants;
            }());
            exports_1("Constants", Constants);
            Settings = (function () {
                function Settings() {
                }
                Object.defineProperty(Settings, "SFX_VOLUME", {
                    get: function () {
                        return Settings.SFX_ENABLED ? Settings._SFX_VOLUME : 0;
                    },
                    set: function (value) {
                        Settings._SFX_VOLUME = (value > 1 && value < 0) ? Settings._SFX_VOLUME : value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Settings, "MUSIC_VOLUME", {
                    get: function () {
                        return Settings._MUSIC_VOLUME;
                    },
                    set: function (value) {
                        Settings._MUSIC_VOLUME = (value > 1 && value < 0) ? Settings._MUSIC_VOLUME : value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Settings.SFX_ENABLED = true;
                Settings.MUSIC_ENABLED = true;
                Settings._SFX_VOLUME = 0.6;
                Settings._MUSIC_VOLUME = 0.35;
                return Settings;
            }());
            exports_1("Settings", Settings);
            Colours = (function () {
                function Colours() {
                }
                Colours.hexToString = function (hex) {
                    return '#' + hex.toString(16);
                };
                Colours.rgbaToHex = function (color) {
                    return Phaser.Color.toRGBA(color.r, color.g, color.b, color.a);
                };
                Colours.floatRGBAToHex = function (color) {
                    return Phaser.Color.getColor(color.r * 255, color.g * 255, color.b * 255);
                };
                Colours.PINK = 0xff80ff;
                Colours.TIMER_STROKE = 0x1054a0;
                Colours.COPY_GREY = "#a6a6a6";
                Colours.SKY_GREY = 0xbccad6;
                Colours.SKY_SLATE_BLUE = 0x8d9db6;
                Colours.SKY_DARK_BLUE = 0x667292;
                Colours.SKY_SALMON = 0xf1e3dd;
                Colours.SKY_LIGHT_BLUE = 0xcfe0e8;
                Colours.SKY_POWDER_BLUE = 0xb7d7e8;
                Colours.SKY_BLUE = 0x87bdd8;
                Colours.SKY_TEAL = 0xdaebe8;
                Colours.ORANGE_HOVER = 0xFDAA16;
                Colours.BG_GREY = 0x595959;
                return Colours;
            }());
            exports_1("Colours", Colours);
        }
    }
});
System.register("RHAudioManager", ['dijon/core', "utils/Globals"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, Globals_1;
    var RHAudioManager;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Globals_1_1) {
                Globals_1 = Globals_1_1;
            }],
        execute: function() {
            RHAudioManager = (function (_super) {
                __extends(RHAudioManager, _super);
                function RHAudioManager() {
                    _super.call(this);
                }
                RHAudioManager.prototype.playAudio = function (marker, volume, loop, forceRestart) {
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    return _super.prototype.playAudio.call(this, marker, Globals_1.Settings.SFX_ENABLED ? volume : 0, loop, forceRestart);
                };
                RHAudioManager.prototype.playDelayedAudio = function (delay, marker, volume, loop, forceRestart) {
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    return _super.prototype.playDelayedAudio.call(this, delay, marker, Globals_1.Settings.SFX_ENABLED ? volume : 0, loop, forceRestart);
                };
                RHAudioManager.prototype.playSound = function (key, volume, loop, forceRestart) {
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    return _super.prototype.playSound.call(this, key, Globals_1.Settings.SFX_ENABLED ? volume : 0, loop, forceRestart);
                };
                RHAudioManager.prototype.playDelayedSound = function (delay, key, volume, loop, forceRestart) {
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    return _super.prototype.playDelayedSound.call(this, delay, key, Globals_1.Settings.SFX_ENABLED ? volume : 0, loop, forceRestart);
                };
                RHAudioManager.prototype.playSpriteMarker = function (marker, volume, loop, forceRestart) {
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    return _super.prototype.playSpriteMarker.call(this, marker, Globals_1.Settings.SFX_ENABLED ? volume : 0, loop, forceRestart);
                };
                RHAudioManager.prototype.playDelayedSpriteMarker = function (delay, marker, volume, loop, forceRestart) {
                    if (loop === void 0) { loop = false; }
                    if (forceRestart === void 0) { forceRestart = true; }
                    return _super.prototype.playDelayedSpriteMarker.call(this, delay, marker, Globals_1.Settings.SFX_ENABLED ? volume : 0, loop, forceRestart);
                };
                return RHAudioManager;
            }(core_1.AudioManager));
            exports_2("default", RHAudioManager);
        }
    }
});
System.register("utils/Notifications", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Notifications;
    return {
        setters:[],
        execute: function() {
            Notifications = (function () {
                function Notifications() {
                }
                Notifications.BOOT_INIT = 'bootInit';
                Notifications.BOOT_COMPLETE = 'bootcomplete';
                Notifications.BEGIN_GAME = 'begingame';
                Notifications.PAUSE_GAME = 'pausegame';
                Notifications.RESUME_GAME = 'resumegame';
                Notifications.RESTART_RUN = 'restartrun';
                Notifications.COUNTDOWN_COMPLETE = 'countdowncomplete';
                Notifications.EXITING_GAME = 'exitinggame';
                Notifications.EXIT_GAME_CANCELLED = 'exitgamecancel';
                Notifications.AUDIO_TOGGLED = 'audiotoggled';
                Notifications.MUSIC_TOGGLED = 'musictoggled';
                Notifications.GAME_OVER = 'gameover';
                Notifications.BACK_TO_MENU = 'backtomenu';
                Notifications.ADD_ALL_POPUPS = 'addallpopups';
                Notifications.SHOW_POPUP = 'showpopup';
                Notifications.HIDE_POPUP = 'hidepopup';
                Notifications.REGISTER_POPUP = 'registerpopup';
                Notifications.REQUEST_TUTORIAL = 'requesttutorial';
                Notifications.TUTORIAL_RESOLVED = 'tutorialresolved';
                Notifications.CURRENT_TIP_RESOLVED = 'currenttipresolved';
                Notifications.SHOW_REMINDER = 'showreminder';
                Notifications.DISMISS_REMINDER = 'dismissreminder';
                return Notifications;
            }());
            exports_3("default", Notifications);
        }
    }
});
System.register("interfaces", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("model/GameModel", ['dijon/mvc', "utils/Globals"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var mvc_1, Globals_2;
    var GameModel;
    return {
        setters:[
            function (mvc_1_1) {
                mvc_1 = mvc_1_1;
            },
            function (Globals_2_1) {
                Globals_2 = Globals_2_1;
            }],
        execute: function() {
            GameModel = (function (_super) {
                __extends(GameModel, _super);
                function GameModel() {
                    _super.apply(this, arguments);
                    this.restartingRun = false;
                    this.score = 0;
                }
                GameModel.prototype.increaseScore = function (points) {
                    this.score += points;
                };
                GameModel.prototype.resetGameplayStats = function () {
                    this.score = 0;
                };
                GameModel.prototype.loadPlayerData = function () {
                    this._saveData = this.game.storage.getFromLocalStorage(Globals_2.Constants.KEY_SAVE_DATA, true);
                    if (this._saveData == null) {
                        this._saveData = this._createPlayerData();
                    }
                    else {
                        Globals_2.Settings.SFX_ENABLED = this._saveData.sfxEnabled;
                        Globals_2.Settings.MUSIC_ENABLED = this._saveData.musicEnabled;
                    }
                    this.resetGameplayStats();
                };
                GameModel.prototype.savePlayerData = function () {
                    this.game.storage.saveToLocalStorage(Globals_2.Constants.KEY_SAVE_DATA, this._saveData);
                };
                GameModel.prototype.updateMuteSettings = function () {
                    this._saveData.sfxEnabled = Globals_2.Settings.SFX_ENABLED;
                    this._saveData.musicEnabled = Globals_2.Settings.MUSIC_ENABLED;
                    this.savePlayerData();
                };
                GameModel.prototype._createPlayerData = function () {
                    var newData = new Object();
                    newData.highscore = 0;
                    newData.isOnFirstRun = true;
                    newData.sfxEnabled = Globals_2.Settings.SFX_ENABLED;
                    newData.musicEnabled = Globals_2.Settings.MUSIC_ENABLED;
                    return newData;
                };
                Object.defineProperty(GameModel.prototype, "highScore", {
                    get: function () {
                        return this._saveData.highscore;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GameModel.prototype, "isOnFirstRun", {
                    get: function () {
                        return this._saveData.isOnFirstRun;
                    },
                    set: function (value) {
                        if (this._saveData.isOnFirstRun === value) {
                            return;
                        }
                        this._saveData.isOnFirstRun = value;
                        this.savePlayerData();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GameModel.prototype, "name", {
                    get: function () {
                        return GameModel.MODEL_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GameModel.prototype, "gameplayData", {
                    get: function () {
                        return this._data.game;
                    },
                    enumerable: true,
                    configurable: true
                });
                GameModel.MODEL_NAME = "gameModel";
                return GameModel;
            }(mvc_1.Model));
            exports_5("default", GameModel);
        }
    }
});
System.register("mediator/BaseMediator", ["dijon/mvc", "dijon/application", "utils/Notifications", "model/GameModel"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var mvc_2, application_1, Notifications_1, GameModel_1;
    var BaseMediator;
    return {
        setters:[
            function (mvc_2_1) {
                mvc_2 = mvc_2_1;
            },
            function (application_1_1) {
                application_1 = application_1_1;
            },
            function (Notifications_1_1) {
                Notifications_1 = Notifications_1_1;
            },
            function (GameModel_1_1) {
                GameModel_1 = GameModel_1_1;
            }],
        execute: function() {
            BaseMediator = (function (_super) {
                __extends(BaseMediator, _super);
                function BaseMediator() {
                    _super.apply(this, arguments);
                }
                BaseMediator.retrieveMediator = function (name, viewComp) {
                    var baseMed = application_1.Application.getInstance().retrieveMediator(name);
                    if (baseMed !== null) {
                        baseMed._viewComponent = viewComp;
                    }
                    return baseMed;
                };
                BaseMediator.prototype.getCopy = function (groupId, textId) {
                    return this.copyModel.getCopy(groupId, textId);
                };
                BaseMediator.prototype.showPopup = function (id) {
                    this.sendNotification(Notifications_1.default.SHOW_POPUP, id);
                };
                Object.defineProperty(BaseMediator.prototype, "gameplayData", {
                    get: function () {
                        return this.gameModel.gameplayData;
                    },
                    enumerable: true,
                    configurable: true
                });
                BaseMediator.prototype.pauseGame = function () {
                    this.sendNotification(Notifications_1.default.PAUSE_GAME);
                };
                Object.defineProperty(BaseMediator.prototype, "gameModel", {
                    get: function () {
                        return application_1.Application.getInstance().retrieveModel(GameModel_1.default.MODEL_NAME);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseMediator.prototype, "copyModel", {
                    get: function () {
                        return application_1.Application.getInstance().retrieveModel(mvc_2.CopyModel.MODEL_NAME);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseMediator.prototype, "name", {
                    get: function () {
                        return "baseMediator_" + this.game.rnd.uuid();
                    },
                    enumerable: true,
                    configurable: true
                });
                return BaseMediator;
            }(mvc_2.Mediator));
            exports_6("default", BaseMediator);
        }
    }
});
System.register("popups/BasePopup", ["dijon/display", "utils/Notifications", "mediator/BaseMediator"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var display_1, Notifications_2, BaseMediator_1;
    var BasePopup;
    return {
        setters:[
            function (display_1_1) {
                display_1 = display_1_1;
            },
            function (Notifications_2_1) {
                Notifications_2 = Notifications_2_1;
            },
            function (BaseMediator_1_1) {
                BaseMediator_1 = BaseMediator_1_1;
            }],
        execute: function() {
            BasePopup = (function (_super) {
                __extends(BasePopup, _super);
                function BasePopup(id, x, y) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    _super.call(this, x, y, id);
                    this.id = id;
                    this.visible = false;
                    this.alpha = 0;
                    this.init();
                    this.buildInterface();
                    this._startPosition = this.position.clone();
                    this.y -= 20;
                    this._addTweens();
                }
                BasePopup.prototype.init = function () {
                    this._addMediator();
                };
                BasePopup.prototype.buildInterface = function () { };
                BasePopup.prototype.destroy = function () {
                    this._hideTween.onComplete.removeAll();
                    this._showTween = null;
                    this._hideTween = null;
                    _super.prototype.destroy.call(this);
                };
                BasePopup.prototype.show = function () {
                    if (this._showTween.isRunning) {
                        return;
                    }
                    this._clearActiveTweens();
                    this.visible = true;
                    this._showTween.start();
                };
                BasePopup.prototype.hide = function () {
                    if (this._hideTween.isRunning) {
                        return;
                    }
                    this._allowInput = false;
                    this._clearActiveTweens();
                    this._hideTween.start();
                };
                BasePopup.prototype._close = function () {
                    this._mediator.sendNotification(Notifications_2.default.HIDE_POPUP, this.id);
                };
                BasePopup.prototype._addMediator = function () {
                    this._mediator = BasePopup.retrieveMediator(BaseMediator_1.default.MEDIATOR_NAME, this);
                    if (this._mediator === null) {
                        this._mediator = new BaseMediator_1.default(this, true, BaseMediator_1.default.MEDIATOR_NAME);
                    }
                    this._register();
                };
                BasePopup.prototype._addTweens = function () {
                    this._showTween = this.game.add.tween(this).to({ alpha: 1, y: this._startPosition.y }, 300, Phaser.Easing.Bounce.Out);
                    this._showTween.onComplete.add(this._showComplete, this);
                    this._hideTween = this.game.add.tween(this).to({ alpha: 0, y: this._startPosition.y + 80 }, 300, Phaser.Easing.Cubic.In);
                    this._hideTween.onComplete.add(this._hideComplete, this);
                };
                BasePopup.prototype._showComplete = function () {
                    this._allowInput = true;
                };
                BasePopup.prototype._hideComplete = function () {
                    this.visible = false;
                    this.y = this._startPosition.y - 20;
                };
                BasePopup.prototype._sendResumeNotification = function () {
                    this._mediator.sendNotification(Notifications_2.default.RESUME_GAME);
                };
                BasePopup.prototype._clearActiveTweens = function () {
                    if (this._showTween.isRunning) {
                        this._showTween.stop();
                    }
                    if (this._hideTween.isRunning) {
                        this._hideTween.stop();
                    }
                };
                BasePopup.retrieveMediator = function (name, viewComp) {
                    return BaseMediator_1.default.retrieveMediator(name, viewComp);
                };
                BasePopup.prototype._register = function () {
                    this._mediator.sendNotification(Notifications_2.default.REGISTER_POPUP, this);
                };
                return BasePopup;
            }(display_1.Group));
            exports_7("default", BasePopup);
        }
    }
});
System.register("state/BaseState", ["dijon/core", 'dijon/application'], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_2, application_2;
    var BaseState;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (application_2_1) {
                application_2 = application_2_1;
            }],
        execute: function() {
            BaseState = (function (_super) {
                __extends(BaseState, _super);
                function BaseState() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(BaseState.prototype, "game", {
                    get: function () {
                        return application_2.Application.getInstance().game;
                    },
                    enumerable: true,
                    configurable: true
                });
                return BaseState;
            }(core_2.State));
            exports_8("default", BaseState);
        }
    }
});
System.register("mediator/GameplayMediator", ["utils/Globals", "mediator/BaseMediator", "utils/Notifications"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var Globals_3, BaseMediator_2, Notifications_3;
    var GameplayMediator;
    return {
        setters:[
            function (Globals_3_1) {
                Globals_3 = Globals_3_1;
            },
            function (BaseMediator_2_1) {
                BaseMediator_2 = BaseMediator_2_1;
            },
            function (Notifications_3_1) {
                Notifications_3 = Notifications_3_1;
            }],
        execute: function() {
            GameplayMediator = (function (_super) {
                __extends(GameplayMediator, _super);
                function GameplayMediator() {
                    _super.apply(this, arguments);
                }
                GameplayMediator.prototype.listNotificationInterests = function () {
                    return [
                        Notifications_3.default.BEGIN_GAME,
                        Notifications_3.default.PAUSE_GAME,
                        Notifications_3.default.RESUME_GAME,
                        Notifications_3.default.COUNTDOWN_COMPLETE,
                        Notifications_3.default.GAME_OVER,
                        Notifications_3.default.BACK_TO_MENU,
                        Notifications_3.default.RESTART_RUN,
                        Notifications_3.default.AUDIO_TOGGLED
                    ];
                };
                GameplayMediator.prototype.handleNotification = function (notification) {
                    var noteName = notification.getName();
                    var noteBody = notification.getBody();
                    switch (noteName) {
                        case Notifications_3.default.GAME_OVER:
                            this.gameModel.isOnFirstRun = false;
                            break;
                        case Notifications_3.default.BEGIN_GAME:
                            this.gameplay.startRound();
                            break;
                        case Notifications_3.default.PAUSE_GAME:
                            this.gameplay.togglePause();
                            break;
                        case Notifications_3.default.RESUME_GAME:
                            this.gameplay.togglePause();
                            break;
                        case Notifications_3.default.RESTART_RUN:
                            this.game.transition.to(Globals_3.Constants.STATE_GAME);
                            break;
                        case Notifications_3.default.BACK_TO_MENU:
                            this.game.transition.to(Globals_3.Constants.STATE_GAME);
                            break;
                        case Notifications_3.default.COUNTDOWN_COMPLETE:
                            this.gameplay.togglePause(false);
                            break;
                        case Notifications_3.default.AUDIO_TOGGLED:
                            this.gameplay.toggleBGMusic();
                            break;
                    }
                };
                GameplayMediator.prototype.addPopups = function () {
                    this.sendNotification(Notifications_3.default.ADD_ALL_POPUPS);
                };
                GameplayMediator.prototype.showOptions = function () {
                    this.showPopup(Globals_3.Constants.POPUP_OPTIONS);
                };
                GameplayMediator.prototype.notifyGameOver = function () {
                    this.sendNotification(Notifications_3.default.GAME_OVER);
                    this.showPopup(Globals_3.Constants.POPUP_ENDGAME);
                };
                GameplayMediator.prototype.afterGameBuilt = function () {
                    if (this.gameModel.restartingRun === false) {
                        this.showPopup(Globals_3.Constants.POPUP_BEGINGAME);
                    }
                    else {
                        this.sendNotification(Notifications_3.default.BEGIN_GAME);
                    }
                };
                Object.defineProperty(GameplayMediator.prototype, "name", {
                    get: function () {
                        return GameplayMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GameplayMediator.prototype, "gameplay", {
                    get: function () {
                        return this._viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                GameplayMediator.MEDIATOR_NAME = 'gameplayMediator';
                return GameplayMediator;
            }(BaseMediator_2.default));
            exports_9("default", GameplayMediator);
        }
    }
});
System.register("mediator/HUDMediator", ["mediator/BaseMediator", "utils/Notifications"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var BaseMediator_3, Notifications_4;
    var HUDMediator;
    return {
        setters:[
            function (BaseMediator_3_1) {
                BaseMediator_3 = BaseMediator_3_1;
            },
            function (Notifications_4_1) {
                Notifications_4 = Notifications_4_1;
            }],
        execute: function() {
            HUDMediator = (function (_super) {
                __extends(HUDMediator, _super);
                function HUDMediator(viewComp) {
                    _super.call(this, viewComp, true, HUDMediator.MEDIATOR_NAME);
                }
                HUDMediator.prototype.listNotificationInterests = function () {
                    return [
                        Notifications_4.default.BEGIN_GAME,
                        Notifications_4.default.COUNTDOWN_COMPLETE,
                        Notifications_4.default.SHOW_REMINDER,
                        Notifications_4.default.DISMISS_REMINDER,
                        Notifications_4.default.REQUEST_TUTORIAL,
                        Notifications_4.default.TUTORIAL_RESOLVED,
                        Notifications_4.default.SHOW_POPUP
                    ];
                };
                HUDMediator.prototype.handleNotification = function (notification) {
                    var noteName = notification.getName();
                    var noteBody = notification.getBody();
                    switch (noteName) {
                        case Notifications_4.default.BEGIN_GAME:
                            break;
                        case Notifications_4.default.COUNTDOWN_COMPLETE:
                            this.hud.showMainHUD();
                            break;
                        case Notifications_4.default.REQUEST_TUTORIAL:
                            this.hud.tutorialOnScreen = true;
                            break;
                        case Notifications_4.default.TUTORIAL_RESOLVED:
                            this.hud.tutorialOnScreen = false;
                            break;
                        case Notifications_4.default.SHOW_POPUP:
                        case Notifications_4.default.DISMISS_REMINDER:
                            break;
                    }
                };
                HUDMediator.prototype.countdownComplete = function () {
                    this.sendNotification(Notifications_4.default.COUNTDOWN_COMPLETE);
                };
                Object.defineProperty(HUDMediator.prototype, "hud", {
                    get: function () {
                        return this._viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HUDMediator.prototype, "name", {
                    get: function () {
                        return HUDMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                HUDMediator.MEDIATOR_NAME = 'HUDMediator';
                return HUDMediator;
            }(BaseMediator_3.default));
            exports_10("default", HUDMediator);
        }
    }
});
System.register("prefabs/RHButton", ['dijon/application', "utils/Globals"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var application_3, Globals_4;
    var RHButton;
    return {
        setters:[
            function (application_3_1) {
                application_3 = application_3_1;
            },
            function (Globals_4_1) {
                Globals_4 = Globals_4_1;
            }],
        execute: function() {
            RHButton = (function (_super) {
                __extends(RHButton, _super);
                function RHButton(x, y, callback, context, assetKey, baseFrame, overFrame, downFrame, upFrame) {
                    _super.call(this, application_3.Application.getInstance().game, x, y, assetKey, callback, context, overFrame ? overFrame : baseFrame, baseFrame, downFrame ? downFrame : baseFrame, upFrame ? upFrame : baseFrame);
                    this._overSound = null;
                    this._downSound = null;
                    this.input.useHandCursor = true;
                    this.forceOut = true;
                }
                RHButton.CreateFromData = function (data) {
                    var self = new RHButton(data.position.x, data.position.y, null, null, data.key, data.frame, data.overFrame, data.downFrame, data.upFrame);
                    self.name = data.name;
                    if (data.anchor) {
                        self.anchor.setTo(data.anchor.x, data.anchor.y);
                    }
                    if (data.scale) {
                        self.scale.setTo(data.scale.x, data.scale.y);
                    }
                    self.alpha = data.alpha ? data.alpha : 1;
                    self.angle = data.angle ? data.angle : 0;
                    return self;
                };
                RHButton.prototype.assignPrefab = function (object) {
                };
                RHButton.prototype._onDownTriggered = function () { };
                RHButton.prototype.onInputDownHandler = function (sprite, pointer) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputDownHandler.call(this, sprite, pointer);
                    if (Globals_4.Settings.SFX_ENABLED === true) {
                        this.dgame.audio.playAudio(this.downSound, 0.5);
                    }
                    this._onDownTriggered();
                };
                RHButton.prototype.onInputOverHandler = function (sprite, pointer) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputOverHandler.call(this, sprite, pointer);
                    if (Globals_4.Settings.SFX_ENABLED === true) {
                        this.dgame.audio.playAudio(this.overSound, 0.5);
                    }
                };
                RHButton.prototype.onInputOutHandler = function (sprite, pointer) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputOutHandler.call(this, sprite, pointer);
                };
                RHButton.prototype.onInputUpHandler = function (sprite, pointer, isOver) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputUpHandler.call(this, sprite, pointer, isOver);
                };
                RHButton.prototype.updateBaseFrame = function (newFrame) {
                    this.setFrames(newFrame + "_hover", newFrame + "_normal", newFrame + '_down', newFrame + "_normal");
                };
                Object.defineProperty(RHButton.prototype, "downSound", {
                    get: function () {
                        return this._downSound !== null ? this._downSound : Globals_4.Constants.UI_DOWN_SOUND;
                    },
                    set: function (val) {
                        this._downSound = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHButton.prototype, "overSound", {
                    get: function () {
                        return this._overSound !== null ? this._overSound : Globals_4.Constants.UI_OVER_SOUND;
                    },
                    set: function (val) {
                        this._overSound = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RHButton.prototype, "dgame", {
                    get: function () {
                        return this.game;
                    },
                    enumerable: true,
                    configurable: true
                });
                return RHButton;
            }(Phaser.Button));
            exports_11("default", RHButton);
        }
    }
});
System.register("ui/HUD", ['dijon/display', "utils/Globals", "mediator/HUDMediator", "prefabs/RHButton"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var display_2, Globals_5, HUDMediator_1, RHButton_1;
    var HUD;
    return {
        setters:[
            function (display_2_1) {
                display_2 = display_2_1;
            },
            function (Globals_5_1) {
                Globals_5 = Globals_5_1;
            },
            function (HUDMediator_1_1) {
                HUDMediator_1 = HUDMediator_1_1;
            },
            function (RHButton_1_1) {
                RHButton_1 = RHButton_1_1;
            }],
        execute: function() {
            HUD = (function (_super) {
                __extends(HUD, _super);
                function HUD() {
                    _super.call(this, 0, 0, 'HUD');
                    this.tutorialOnScreen = false;
                    this.init();
                    this.buildInterface();
                }
                HUD.prototype.init = function () {
                    this._mediator = HUDMediator_1.default.retrieveMediator(HUDMediator_1.default.MEDIATOR_NAME, this);
                    if (this._mediator === null) {
                        this._mediator = new HUDMediator_1.default(this);
                    }
                };
                HUD.prototype.destroy = function () {
                    this._mediator.destroy();
                    _super.prototype.destroy.call(this);
                };
                HUD.prototype.buildInterface = function () {
                    this._addTimeDisplay();
                    this._addPauseButton();
                    this._addEffectsGroup();
                };
                HUD.prototype.showMainHUD = function () {
                    this.showTimer();
                    this.showPauseButton();
                };
                HUD.prototype.showPauseButton = function () {
                    this._pauseConnecterTween.start();
                    this._pauseButtonTween.start();
                };
                HUD.prototype.showTimer = function () {
                    this._distanceBGTween.start();
                    this._timeTextTween.start();
                };
                HUD.prototype.updateTime = function (remaining) {
                    var minutes = 0;
                    var seconds = remaining % 60;
                    if (remaining > 59) {
                        minutes = Math.floor(remaining / 60);
                    }
                    this._timeText.text = (minutes < 10 ? '0' + minutes.toString() : minutes.toString())
                        + ":" + (seconds < 10 ? '0' + seconds.toString() : seconds.toString());
                };
                HUD.prototype._togglePause = function () {
                    this.mediator.pauseGame();
                };
                HUD.prototype._addPauseButton = function () {
                    this._pauseButton = new RHButton_1.default(this.game.width * 0.937, this.game.height * -0.19, this._togglePause, this, 'ui', 'pause_icon');
                    this.addInternal.existing(this._pauseButton);
                    this._pauseButtonTween = this.game.add.tween(this._pauseButton).to({ x: this.game.width * 0.937, y: this.game.height * 0.09 }, HUD.TWEEN_TIME, Phaser.Easing.Back.Out, false);
                    this._pauseButton.anchor.set(0.5);
                };
                HUD.prototype._addTimeDisplay = function () {
                    this._timeBG.x = this._timeBG.realWidth * 0.5;
                    this._timeBG.centerPivot();
                    this._timeText = new display_2.BitmapText(this._timeBG.x + 40, this.game.height * -0.15 - 30, Globals_5.Constants.FONT_VT323, '00:00', (this.game.resolution > 1.5) ? 26 : 52, 'center', 0xffffff);
                    this.addInternal.existing(this._timeText);
                    this._timeText.anchor.set(0.5, 0);
                    this._distanceBGTween = this.game.add.tween(this._timeBG).to({ y: this._timeBG.realHeight * 0.5 }, HUD.TWEEN_TIME, Phaser.Easing.Back.Out, false);
                    this._timeTextTween = this.game.add.tween(this._timeText).to({ y: this._timeBG.realHeight * 0.5 - 19 }, HUD.TWEEN_TIME, Phaser.Easing.Back.Out, false);
                };
                HUD.prototype._addEffectsGroup = function () {
                    this._itemVisuals = this.addInternal.group();
                    this._itemVisuals.createMultiple(6, 'ui', 'grey_cross');
                    this._itemVisuals.setAllChildren('anchor.x', 0.5);
                    this._itemVisuals.setAllChildren('anchor.y', 0.5);
                    this._itemVisuals.callAll('kill', null);
                };
                Object.defineProperty(HUD.prototype, "mediator", {
                    get: function () {
                        return this._mediator;
                    },
                    enumerable: true,
                    configurable: true
                });
                HUD.TWEEN_TIME = 300;
                return HUD;
            }(display_2.Group));
            exports_12("default", HUD);
        }
    }
});
System.register("ui/Timer", ['dijon/application'], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var application_4;
    var Timer;
    return {
        setters:[
            function (application_4_1) {
                application_4 = application_4_1;
            }],
        execute: function() {
            Timer = (function (_super) {
                __extends(Timer, _super);
                function Timer() {
                    _super.call(this, application_4.Application.getInstance().game, -100, -100, null);
                    this._running = false;
                    this._elapsedMS = 0;
                    this.onComplete = new Phaser.Signal();
                    this.onPause = new Phaser.Signal();
                    this.onResume = new Phaser.Signal();
                    this.onTick = new Phaser.Signal();
                }
                Timer.prototype.resetTime = function (timeAllowed) {
                    this._elapsedMS = 0;
                    if (timeAllowed) {
                        this._countFunc = this.updateSecondsRemaining;
                        this._elapsedSeconds = timeAllowed;
                        this._elapsedMS = timeAllowed * 1000;
                    }
                    else {
                        this._countFunc = this.updateSecondsElapsed;
                        this._elapsedSeconds = 0;
                    }
                    this.onTick.dispatch(this._elapsedSeconds);
                };
                Timer.prototype.update = function () {
                    if (this._running) {
                        this._countFunc.call(this, this.game.time.elapsedMS);
                    }
                };
                Timer.prototype.updateSecondsElapsed = function (delta) {
                    this._elapsedMS += delta;
                    if (this._elapsedMS > this._elapsedSeconds * 1000) {
                        this._elapsedSeconds += 1;
                        this.onTick.dispatch(this._elapsedSeconds);
                    }
                };
                Timer.prototype.updateSecondsRemaining = function (delta) {
                    this._elapsedMS -= delta;
                    if (this._elapsedMS < this._elapsedSeconds * 1000) {
                        this._elapsedSeconds -= 1;
                        if (this._elapsedSeconds > 0) {
                            this.onTick.dispatch(this._elapsedSeconds);
                        }
                        else {
                            this.onComplete.dispatch(this);
                            this._running = false;
                        }
                    }
                };
                Timer.prototype._dispatchTimeUp = function () {
                    this.onComplete.dispatch();
                };
                Object.defineProperty(Timer.prototype, "paused", {
                    get: function () {
                        return !this._running;
                    },
                    set: function (value) {
                        this._running = !value;
                        if (this._running) {
                            this.onResume.dispatch();
                        }
                        else {
                            this.onPause.dispatch();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Timer.prototype, "elapsedTime", {
                    get: function () {
                        return this._elapsedSeconds;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Timer;
            }(Phaser.Image));
            exports_13("default", Timer);
        }
    }
});
System.register("state/Gameplay", ["state/BaseState", "mediator/GameplayMediator", "utils/Globals", "ui/HUD", "ui/Timer"], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var BaseState_1, GameplayMediator_1, Globals_6, HUD_1, Timer_1;
    var Gameplay;
    return {
        setters:[
            function (BaseState_1_1) {
                BaseState_1 = BaseState_1_1;
            },
            function (GameplayMediator_1_1) {
                GameplayMediator_1 = GameplayMediator_1_1;
            },
            function (Globals_6_1) {
                Globals_6 = Globals_6_1;
            },
            function (HUD_1_1) {
                HUD_1 = HUD_1_1;
            },
            function (Timer_1_1) {
                Timer_1 = Timer_1_1;
            }],
        execute: function() {
            Gameplay = (function (_super) {
                __extends(Gameplay, _super);
                function Gameplay() {
                    _super.apply(this, arguments);
                    this._paused = true;
                    this._bgLoop = null;
                }
                Gameplay.prototype.init = function () {
                    this._mediator = GameplayMediator_1.default.retrieveMediator(GameplayMediator_1.default.MEDIATOR_NAME, this);
                    if (this._mediator === null) {
                        this._mediator = new GameplayMediator_1.default(this);
                    }
                    this.game.onPause.add(this._gameLostFocus, this);
                    this.game.onResume.add(this._gameGainedFocus, this);
                };
                Gameplay.prototype.preload = function () {
                    this.game.asset.loadAssets('gameplay');
                };
                Gameplay.prototype.listBuildSequence = function () {
                    return [
                        this._addLayers,
                    ];
                };
                Gameplay.prototype.afterBuild = function () {
                    _super.prototype.afterBuild.call(this);
                    this._preStartSetup();
                    this.mediator.afterGameBuilt();
                    if (this._bgLoop === null) {
                        this._bgLoop = this.game.audio.playSound(Globals_6.Constants.MUSIC_LOOP, 0, true);
                    }
                    if (Globals_6.Settings.SFX_ENABLED) {
                        this._bgLoop.fadeTo(3000, Globals_6.Settings.MUSIC_VOLUME);
                    }
                };
                Gameplay.prototype.startRound = function () {
                    this.gameplayLayersVisible = true;
                    this.timer.resetTime(100);
                };
                Gameplay.prototype.restartRun = function () {
                    this._preStartSetup();
                    this.mediator.afterGameBuilt();
                };
                Gameplay.prototype.update = function () {
                };
                Gameplay.prototype.togglePause = function (showOptions) {
                    if (showOptions === void 0) { showOptions = true; }
                    this._paused = !this._paused;
                    this.timer.paused = this._paused;
                    if (this._paused === true && showOptions === true) {
                        this.mediator.showOptions();
                    }
                };
                Gameplay.prototype.toggleBGMusic = function () {
                    this._bgLoop.volume = Globals_6.Settings.SFX_ENABLED ? Globals_6.Settings.MUSIC_VOLUME : 0;
                };
                Gameplay.prototype._gameLostFocus = function () {
                    if (this.gameplayLayersVisible === true && this._paused === false) {
                        this.mediator.pauseGame();
                        this.game.sound.mute = true;
                    }
                };
                Gameplay.prototype._gameGainedFocus = function () {
                    this.game.sound.mute = false;
                };
                Gameplay.prototype._preStartSetup = function () {
                    this.gameplayLayersVisible = false;
                };
                Gameplay.prototype._onSecondElapsed = function () {
                    this._hud.updateTime(this.timer.elapsedTime);
                };
                Gameplay.prototype._endOfRound = function () {
                    this._hud.updateTime(0);
                    this._paused = true;
                    this.mediator.notifyGameOver();
                };
                Gameplay.prototype._addLayers = function () {
                    var label = this.add.dText(this.game.width * 0.5, this.game.height * 0.5, 'Main Menu', Globals_6.Constants.FONT_VT323, 30, Globals_6.Colours.COPY_GREY, 'center');
                    label.setPivot('center');
                    this._bgLayer = this.add.dGroup(0, 0, 'gameBG');
                    this._gameLayer = this.add.dGroup(0, 0, 'game');
                    this._buttonLayer = this.game.add.dGroup(0, 0, 'uiLayer');
                    this.gameplayLayersVisible = false;
                };
                Gameplay.prototype._addPopups = function () {
                    this.mediator.addPopups();
                };
                Gameplay.prototype._addHUD = function () {
                    this._hud = new HUD_1.default();
                    this.add.existing(this._hud);
                    this.timer = new Timer_1.default();
                    this.add.existing(this.timer);
                    this.timer.onTick.add(this._onSecondElapsed, this);
                    this.timer.onComplete.add(this._endOfRound, this);
                };
                Gameplay.prototype._buildLevel = function () {
                };
                Object.defineProperty(Gameplay.prototype, "gameplayLayersVisible", {
                    get: function () {
                        return this._gameLayer.visible;
                    },
                    set: function (value) {
                        this._bgLayer.visible = value;
                        this._gameLayer.visible = value;
                        this._buttonLayer.visible = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Gameplay.prototype, "mediator", {
                    get: function () {
                        return this._mediator;
                    },
                    enumerable: true,
                    configurable: true
                });
                Gameplay.prototype._createDebugRect = function (rect) {
                    var gfx = this.game.add.graphics();
                    gfx.beginFill(0x00ff00, 0.5);
                    gfx.drawRect(rect.x, rect.y, rect.width, rect.height);
                    gfx.endFill();
                };
                return Gameplay;
            }(BaseState_1.default));
            exports_14("default", Gameplay);
        }
    }
});
System.register("mediator/popup/ConfirmationPopupMediator", ["mediator/BaseMediator", "utils/Globals", "utils/Notifications"], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var BaseMediator_4, Globals_7, Notifications_5;
    var ConfirmationPopupMediator;
    return {
        setters:[
            function (BaseMediator_4_1) {
                BaseMediator_4 = BaseMediator_4_1;
            },
            function (Globals_7_1) {
                Globals_7 = Globals_7_1;
            },
            function (Notifications_5_1) {
                Notifications_5 = Notifications_5_1;
            }],
        execute: function() {
            ConfirmationPopupMediator = (function (_super) {
                __extends(ConfirmationPopupMediator, _super);
                function ConfirmationPopupMediator(viewComp) {
                    _super.call(this, viewComp, true, ConfirmationPopupMediator.MEDIATOR_NAME);
                }
                ConfirmationPopupMediator.prototype.listNotificationInterests = function () {
                    return [];
                };
                ConfirmationPopupMediator.prototype.handleNotification = function (notification) {
                    var noteName = notification.getName();
                    var noteBody = notification.getBody();
                    switch (noteName) {
                    }
                };
                ConfirmationPopupMediator.prototype.cancel = function () {
                    this.sendNotification(Notifications_5.default.EXIT_GAME_CANCELLED);
                    this.sendNotification(Notifications_5.default.SHOW_POPUP, Globals_7.Constants.POPUP_OPTIONS);
                };
                ConfirmationPopupMediator.prototype.confirm = function () {
                    if (this.gameModel.restartingRun) {
                        this.sendNotification(Notifications_5.default.RESTART_RUN);
                    }
                    else {
                        this.sendNotification(Notifications_5.default.BACK_TO_MENU);
                    }
                };
                Object.defineProperty(ConfirmationPopupMediator.prototype, "viewComponent", {
                    get: function () {
                        return this._viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ConfirmationPopupMediator.prototype, "name", {
                    get: function () {
                        return ConfirmationPopupMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                ConfirmationPopupMediator.MEDIATOR_NAME = 'ConfirmationPopupMediator';
                return ConfirmationPopupMediator;
            }(BaseMediator_4.default));
            exports_15("default", ConfirmationPopupMediator);
        }
    }
});
System.register("popups/ConfirmationPopup", ["dijon/display", "popups/BasePopup", "utils/Globals", "utils/Notifications", "mediator/popup/ConfirmationPopupMediator", "prefabs/RHButton"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var display_3, BasePopup_1, Globals_8, Notifications_6, ConfirmationPopupMediator_1, RHButton_2;
    var ConfirmationPopup;
    return {
        setters:[
            function (display_3_1) {
                display_3 = display_3_1;
            },
            function (BasePopup_1_1) {
                BasePopup_1 = BasePopup_1_1;
            },
            function (Globals_8_1) {
                Globals_8 = Globals_8_1;
            },
            function (Notifications_6_1) {
                Notifications_6 = Notifications_6_1;
            },
            function (ConfirmationPopupMediator_1_1) {
                ConfirmationPopupMediator_1 = ConfirmationPopupMediator_1_1;
            },
            function (RHButton_2_1) {
                RHButton_2 = RHButton_2_1;
            }],
        execute: function() {
            ConfirmationPopup = (function (_super) {
                __extends(ConfirmationPopup, _super);
                function ConfirmationPopup() {
                    _super.call(this, Globals_8.Constants.POPUP_CONFIRMATION, 0, 0);
                    this._isAttemptingToExit = false;
                }
                ConfirmationPopup.prototype.buildInterface = function () {
                };
                ConfirmationPopup.prototype._addMediator = function () {
                    this._mediator = BasePopup_1.default.retrieveMediator(ConfirmationPopupMediator_1.default.MEDIATOR_NAME, this);
                    if (this._mediator === null) {
                        this._mediator = new ConfirmationPopupMediator_1.default(this);
                    }
                    this._mediator.sendNotification(Notifications_6.default.REGISTER_POPUP, this);
                };
                ConfirmationPopup.prototype._addBG = function () {
                    this.bg = this.add(new Phaser.Sprite(this.game, this.game.width * 0.5, this.game.height * 0.5, 'popups', 'confirmation_bg'));
                    this.bg.anchor.set(0.5);
                };
                ConfirmationPopup.prototype._addContent = function () {
                    this._contentGroup = this.addInternal.dGroup(this.bg.x - this.bg.realWidth * 0.5, this.bg.y - this.bg.realHeight * 0.5 + 50);
                    this._cancelButton = this._contentGroup.add(new RHButton_2.default(this.bg.realWidth * 0.3, this.bg.realHeight * 0.5, this._cancel, this, 'popups2', 'confirmation_no'));
                    this._confirmButton = this._contentGroup.add(new RHButton_2.default(this.bg.realWidth * 0.7, this.bg.realHeight * 0.5, this._confirm, this, 'popups2', 'confirmation_yes'));
                    this._cancelButton.anchor.set(0.5, 0.5);
                    this._confirmButton.anchor.set(0.5, 0.5);
                };
                ConfirmationPopup.prototype._addTitle = function () {
                    this._title = new display_3.BitmapText(this.bg.x, this.bg.y - this.bg.realHeight * 0.5 + this.bg.realHeight * 0.35, Globals_8.Constants.FONT_VT323, 'ARE YOU SURE?', (this.game.resolution > 1.5) ? 25 : 50, 'center', 0xffffff);
                    this._title.centerPivot();
                    this.addInternal.existing(this._title);
                };
                ConfirmationPopup.prototype._cancel = function () {
                    this.mediator.sendNotification(Notifications_6.default.HIDE_POPUP, this.id);
                    this.mediator.cancel();
                };
                ConfirmationPopup.prototype._confirm = function () {
                    this.mediator.sendNotification(Notifications_6.default.HIDE_POPUP, this.id);
                    this.mediator.confirm();
                };
                Object.defineProperty(ConfirmationPopup.prototype, "mediator", {
                    get: function () {
                        return this._mediator;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ConfirmationPopup.prototype, "isAttemptingToExit", {
                    get: function () {
                        return this._isAttemptingToExit;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ConfirmationPopup;
            }(BasePopup_1.default));
            exports_16("default", ConfirmationPopup);
        }
    }
});
System.register("mediator/popup/HelpPopupMediator", ["mediator/BaseMediator", "utils/Globals", "utils/Notifications"], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var BaseMediator_5, Globals_9, Notifications_7;
    var HelpPopupMediator;
    return {
        setters:[
            function (BaseMediator_5_1) {
                BaseMediator_5 = BaseMediator_5_1;
            },
            function (Globals_9_1) {
                Globals_9 = Globals_9_1;
            },
            function (Notifications_7_1) {
                Notifications_7 = Notifications_7_1;
            }],
        execute: function() {
            HelpPopupMediator = (function (_super) {
                __extends(HelpPopupMediator, _super);
                function HelpPopupMediator(viewComp) {
                    _super.call(this, viewComp, true, HelpPopupMediator.MEDIATOR_NAME);
                    this._gameHasBegun = false;
                }
                HelpPopupMediator.prototype.listNotificationInterests = function () {
                    return [
                        Notifications_7.default.BEGIN_GAME,
                        Notifications_7.default.EXITING_GAME,
                        Notifications_7.default.EXIT_GAME_CANCELLED
                    ];
                };
                HelpPopupMediator.prototype.handleNotification = function (notification) {
                    var noteName = notification.getName();
                    var noteBody = notification.getBody();
                    switch (noteName) {
                        case Notifications_7.default.BEGIN_GAME:
                            this._gameHasBegun = true;
                            break;
                        case Notifications_7.default.EXITING_GAME:
                            this._gameHasBegun = false;
                            break;
                        case Notifications_7.default.EXIT_GAME_CANCELLED:
                            this._gameHasBegun = true;
                            break;
                    }
                };
                HelpPopupMediator.prototype.getGesturePositions = function () {
                    return this.gameModel.gameplayData.helpData;
                };
                HelpPopupMediator.prototype.closeHelp = function () {
                    if (!this._gameHasBegun) {
                        this.sendNotification(Notifications_7.default.SHOW_POPUP, Globals_9.Constants.POPUP_BEGINGAME);
                    }
                    else {
                        this.sendNotification(Notifications_7.default.SHOW_POPUP, Globals_9.Constants.POPUP_OPTIONS);
                    }
                };
                HelpPopupMediator.prototype.getHelpCopy = function (index) {
                    if (this.game.device.desktop) {
                        return this.copyModel.getCopyGroup('help-desktop')[index];
                    }
                    else {
                        return this.copyModel.getCopyGroup('help-mobile')[index];
                    }
                };
                Object.defineProperty(HelpPopupMediator.prototype, "name", {
                    get: function () {
                        return HelpPopupMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                HelpPopupMediator.MEDIATOR_NAME = 'HelpPopupMediator';
                return HelpPopupMediator;
            }(BaseMediator_5.default));
            exports_17("default", HelpPopupMediator);
        }
    }
});
System.register("popups/HelpPopup", ["popups/BasePopup", "utils/Globals", "utils/Notifications", "mediator/popup/HelpPopupMediator", "prefabs/RHButton"], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var BasePopup_2, Globals_10, Notifications_8, HelpPopupMediator_1, RHButton_3;
    var HelpPopup;
    return {
        setters:[
            function (BasePopup_2_1) {
                BasePopup_2 = BasePopup_2_1;
            },
            function (Globals_10_1) {
                Globals_10 = Globals_10_1;
            },
            function (Notifications_8_1) {
                Notifications_8 = Notifications_8_1;
            },
            function (HelpPopupMediator_1_1) {
                HelpPopupMediator_1 = HelpPopupMediator_1_1;
            },
            function (RHButton_3_1) {
                RHButton_3 = RHButton_3_1;
            }],
        execute: function() {
            HelpPopup = (function (_super) {
                __extends(HelpPopup, _super);
                function HelpPopup() {
                    _super.call(this, Globals_10.Constants.POPUP_HELP, 0, 0);
                }
                HelpPopup.prototype.buildInterface = function () {
                };
                HelpPopup.prototype._addMediator = function () {
                    this._mediator = BasePopup_2.default.retrieveMediator(HelpPopupMediator_1.default.MEDIATOR_NAME, this);
                    if (this._mediator === null) {
                        this._mediator = new HelpPopupMediator_1.default(this);
                    }
                    this._mediator.sendNotification(Notifications_8.default.REGISTER_POPUP, this);
                };
                HelpPopup.prototype._addBG = function () {
                    this.bg = this.add(new Phaser.Sprite(this.game, 0, 0, 'popups', 'pause_popup_background'));
                    this.bg.anchor.set(0.5);
                    this.bg.angle = 90;
                };
                HelpPopup.prototype._addContent = function () {
                    this._contentGroup = this.addInternal.dGroup(this.bg.x - (this.bg.realHeight * 0.5), this.bg.y - (this.bg.realWidth * 0.5) + 50);
                    var previousConnectors = this._contentGroup.add(new Phaser.Sprite(this.game, this.bg.realHeight * 0.023, this.bg.realWidth * 0.35, 'tutorials', 'tutorial_back_connector'));
                    var nextConnectors = this._contentGroup.add(new Phaser.Sprite(this.game, this.bg.realHeight * 0.977, this.bg.realWidth * 0.35, 'tutorials', 'tutorial_next_connector'));
                    var closeConnectors = this._contentGroup.add(new Phaser.Sprite(this.game, this.bg.realHeight * 0.95, this.bg.realWidth * 0.0 - 17, 'tutorials', 'tutorial_connector'));
                    this._previousButton = this._contentGroup.add(new RHButton_3.default(this.bg.realHeight * 0.023, this.bg.realWidth * 0.35, this._previous, this, 'tutorials', 'tutorial_back_button'));
                    this._nextButton = this._contentGroup.add(new RHButton_3.default(this.bg.realHeight * 0.977, this.bg.realWidth * 0.35, this._next, this, 'tutorials', 'tutorial_next_button'));
                    this._closeButton = this._contentGroup.add(new RHButton_3.default(this.bg.realHeight * 0.977, this.bg.realWidth * 0.0 - 35, this._closeHelp, this, 'tutorials', 'tutorial_close_button'));
                    this._previousButton.centerPivot();
                    this._nextButton.centerPivot();
                    this._closeButton.centerPivot();
                    previousConnectors.centerPivot();
                    nextConnectors.centerPivot();
                    closeConnectors.centerPivot();
                };
                HelpPopup.prototype._addTitle = function () {
                    this._title = this._contentGroup.addInternal.sprite(this.bg.realHeight * 0.5, this.bg.realWidth * -0.025, 'tutorials', 'how_to_play_text');
                    this._title.centerPivot();
                };
                HelpPopup.prototype._addSlides = function () {
                    this._slides = [];
                    this._dots = [];
                    this._activeDots = [];
                    var helpData = this.mediator.getGesturePositions();
                    this._slideCount = helpData.length;
                    var dotStartX = (this.bg.realHeight * 0.5) - (this._slideCount * 18 * 0.5) + 9;
                    for (var i = 0; i < this._slideCount; i++) {
                        var slide = this._contentGroup.addInternal.sprite((this.bg.realHeight * 0.5) + helpData[i].imagePOS.x, (this.bg.realWidth * 0.5) + helpData[i].imagePOS.y, helpData[i].image.key, helpData[i].image.sprite);
                        slide.centerPivot();
                        slide.alpha = 0;
                        slide.visible = false;
                        this._slides.push(slide);
                        var gesture = void 0;
                        if (this.game.device.desktop) {
                            gesture = new Phaser.Image(this.game, helpData[i].mousePOS.x, helpData[i].mousePOS.y, 'tutorials', "mouse_pointer");
                        }
                        else {
                            gesture = new Phaser.Image(this.game, helpData[i].gesturePOS.x, helpData[i].gesturePOS.y, 'tutorials', "tap_gesture");
                            if (i === 4) {
                                gesture.scale.setTo(-1, 1);
                            }
                        }
                        gesture.centerPivot();
                        slide.addChild(gesture);
                        var dot = this._contentGroup.addInternal.sprite(dotStartX + (i * 18), this.bg.realWidth * 0.775, 'tutorials', 'inactive_dot');
                        var activeDot = this._contentGroup.addInternal.sprite(dotStartX + (i * 18), this.bg.realWidth * 0.775, 'tutorials', 'active_dot');
                        dot.centerPivot();
                        activeDot.centerPivot();
                        activeDot.visible = false;
                        this._dots.push(dot);
                        this._activeDots.push(activeDot);
                    }
                    this._slides[this._currentSlide].alpha = 1;
                    this._slides[this._currentSlide].visible = true;
                    this._activeDots[this._currentSlide].visible = true;
                };
                HelpPopup.prototype.show = function () {
                    this._slides[this._currentSlide].visible = true;
                    _super.prototype.show.call(this);
                };
                HelpPopup.prototype._hideComplete = function () {
                    _super.prototype._hideComplete.call(this);
                    this._hideSlides();
                };
                HelpPopup.prototype._hideSlides = function () {
                    for (var i = 1; i < this._slides.length; i++) {
                        this._slides[i].visible = false;
                        this._slides[i].alpha = 0;
                        this._activeDots[i].visible = false;
                    }
                    this._currentSlide = 0;
                    this._activeDots[this._currentSlide].visible = true;
                    this._slides[this._currentSlide].alpha = 1;
                };
                HelpPopup.prototype._previous = function () {
                    if (this._isSliding === true) {
                        return;
                    }
                    this._isSliding = true;
                    var outTween = this.game.add.tween(this._slides[this._currentSlide]).to({ x: '+30', alpha: 0 }, 100, Phaser.Easing.Default, true);
                    outTween.onComplete.add(this._decrementSlideNumber, this);
                    this._activeDots[this._currentSlide].visible = false;
                    var prevSlide = this._currentSlide - 1;
                    if (prevSlide === -1) {
                        prevSlide = this._slideCount - 1;
                    }
                    this._slides[prevSlide].x -= 30;
                    this._slides[prevSlide].visible = true;
                    var inTween = this.game.add.tween(this._slides[prevSlide]).to({ x: '+30', alpha: 1 }, 100, Phaser.Easing.Default, true);
                    this._activeDots[prevSlide].visible = true;
                };
                HelpPopup.prototype._next = function () {
                    if (this._isSliding === true) {
                        return;
                    }
                    this._isSliding = true;
                    var outTween = this.game.add.tween(this._slides[this._currentSlide]).to({ x: '-30', alpha: 0 }, 100, Phaser.Easing.Default, true);
                    outTween.onComplete.add(this._incrementSlideNumber, this);
                    this._activeDots[this._currentSlide].visible = false;
                    var nextSlide = this._currentSlide + 1;
                    if (nextSlide === this._slideCount) {
                        nextSlide = 0;
                    }
                    this._slides[nextSlide].x += 30;
                    this._slides[nextSlide].visible = true;
                    var inTween = this.game.add.tween(this._slides[nextSlide]).to({ x: '-30', alpha: 1 }, 100, Phaser.Easing.Default, true);
                    this._activeDots[nextSlide].visible = true;
                };
                HelpPopup.prototype._incrementSlideNumber = function () {
                    this._isSliding = false;
                    this._slides[this._currentSlide].visible = false;
                    this._slides[this._currentSlide].x += 30;
                    this._currentSlide++;
                    if (this._currentSlide === this._slideCount) {
                        this._currentSlide = 0;
                    }
                };
                HelpPopup.prototype._decrementSlideNumber = function () {
                    this._isSliding = false;
                    this._slides[this._currentSlide].visible = false;
                    this._slides[this._currentSlide].x -= 30;
                    this._currentSlide--;
                    if (this._currentSlide === -1) {
                        this._currentSlide = this._slideCount - 1;
                    }
                };
                HelpPopup.prototype._closeHelp = function () {
                    if (this._allowInput) {
                        this.mediator.closeHelp();
                    }
                    this.mediator.sendNotification(Notifications_8.default.HIDE_POPUP, this.id);
                };
                Object.defineProperty(HelpPopup.prototype, "mediator", {
                    get: function () {
                        return this._mediator;
                    },
                    enumerable: true,
                    configurable: true
                });
                return HelpPopup;
            }(BasePopup_2.default));
            exports_18("default", HelpPopup);
        }
    }
});
System.register("mediator/popup/OptionsPopupMediator", ["mediator/BaseMediator", "utils/Globals", "utils/Notifications"], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var BaseMediator_6, Globals_11, Notifications_9;
    var OptionsPopupMediator;
    return {
        setters:[
            function (BaseMediator_6_1) {
                BaseMediator_6 = BaseMediator_6_1;
            },
            function (Globals_11_1) {
                Globals_11 = Globals_11_1;
            },
            function (Notifications_9_1) {
                Notifications_9 = Notifications_9_1;
            }],
        execute: function() {
            OptionsPopupMediator = (function (_super) {
                __extends(OptionsPopupMediator, _super);
                function OptionsPopupMediator(viewComp) {
                    _super.call(this, viewComp, true, OptionsPopupMediator.MEDIATOR_NAME);
                }
                OptionsPopupMediator.prototype.listNotificationInterests = function () {
                    return [];
                };
                OptionsPopupMediator.prototype.handleNotification = function (notification) {
                    var noteName = notification.getName();
                    var noteBody = notification.getBody();
                };
                OptionsPopupMediator.prototype.help = function () {
                    this.sendNotification(Notifications_9.default.SHOW_POPUP, Globals_11.Constants.POPUP_HELP);
                };
                OptionsPopupMediator.prototype.restartRun = function () {
                    this.gameModel.restartingRun = true;
                    this.sendNotification(Notifications_9.default.SHOW_POPUP, Globals_11.Constants.POPUP_CONFIRMATION);
                };
                OptionsPopupMediator.prototype.notifyMusicToggled = function () {
                    this.sendNotification(Notifications_9.default.MUSIC_TOGGLED);
                };
                OptionsPopupMediator.prototype.notifyAudioToggled = function () {
                    this.sendNotification(Notifications_9.default.AUDIO_TOGGLED);
                };
                Object.defineProperty(OptionsPopupMediator.prototype, "popup", {
                    get: function () {
                        return this._viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OptionsPopupMediator.prototype, "name", {
                    get: function () {
                        return OptionsPopupMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                OptionsPopupMediator.MEDIATOR_NAME = 'OptionsPopupMediator';
                return OptionsPopupMediator;
            }(BaseMediator_6.default));
            exports_19("default", OptionsPopupMediator);
        }
    }
});
System.register("popups/OptionsPopup", ["dijon/display", "popups/BasePopup", "utils/Globals", "utils/Notifications", "mediator/popup/OptionsPopupMediator", "prefabs/RHButton"], function(exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var display_4, BasePopup_3, Globals_12, Notifications_10, OptionsPopupMediator_1, RHButton_4;
    var OptionsPopup;
    return {
        setters:[
            function (display_4_1) {
                display_4 = display_4_1;
            },
            function (BasePopup_3_1) {
                BasePopup_3 = BasePopup_3_1;
            },
            function (Globals_12_1) {
                Globals_12 = Globals_12_1;
            },
            function (Notifications_10_1) {
                Notifications_10 = Notifications_10_1;
            },
            function (OptionsPopupMediator_1_1) {
                OptionsPopupMediator_1 = OptionsPopupMediator_1_1;
            },
            function (RHButton_4_1) {
                RHButton_4 = RHButton_4_1;
            }],
        execute: function() {
            OptionsPopup = (function (_super) {
                __extends(OptionsPopup, _super);
                function OptionsPopup() {
                    _super.call(this, Globals_12.Constants.POPUP_OPTIONS, 0, 0);
                }
                OptionsPopup.prototype.buildInterface = function () {
                    this._addBG();
                    this._addContent();
                };
                OptionsPopup.prototype._addMediator = function () {
                    this._mediator = BasePopup_3.default.retrieveMediator(OptionsPopupMediator_1.default.MEDIATOR_NAME, this);
                    if (this._mediator === null) {
                        this._mediator = new OptionsPopupMediator_1.default(this);
                    }
                    this._mediator.sendNotification(Notifications_10.default.REGISTER_POPUP, this);
                };
                OptionsPopup.prototype._addBG = function () {
                    this._width = 350;
                    this._height = 420;
                    var gfx = this.game.add.graphics();
                    gfx.beginFill(Globals_12.Colours.SKY_POWDER_BLUE, 1);
                    gfx.drawRoundedRect(0, 0, this._width, this._height, 10);
                    gfx.endFill();
                    gfx.beginFill(Globals_12.Colours.SKY_SLATE_BLUE, 1);
                    gfx.drawRoundedRect(5, 5, this._width - 10, this._height - 10, 10);
                    gfx.endFill();
                    this.bg = this.add(new Phaser.Sprite(this.game, 0, 0, gfx.generateTexture()));
                    this.game.world.remove(gfx);
                    this.x = this.game.width;
                    this.y = 100;
                };
                OptionsPopup.prototype._addContent = function () {
                    this._contentGroup = this.addInternal.dGroup(0, 0);
                    this._musicButton = this._contentGroup.add(new RHButton_4.default(this.bg.realWidth * 0.33, this.bg.realHeight * 0.6, this._music, this, 'ui', 'music_hover', 'music_normal', 'music_down'));
                    this._soundButton = this._contentGroup.add(new RHButton_4.default(this.bg.realWidth * 0.66, this.bg.realHeight * 0.6, this._sound, this, 'ui', 'audio_hover', 'audio_normal', 'audio_down'));
                    this._closeButton = this._contentGroup.add(new RHButton_4.default(this.bg.realWidth * 0.91, this.bg.realHeight * -0.025, this._closeSettings, this, 'ui', 'red_small_normal', 'red_small_normal', 'red_small_down'));
                    this._closeButton.centerPivot();
                    this._musicButton.centerPivot();
                    this._soundButton.centerPivot();
                    var closeX = new display_4.Sprite(this._closeButton.realWidth * 0.5, this._closeButton.realHeight * 0.45, 'ui', 'grey_cross');
                    this._closeButton.addChild(closeX);
                    closeX.centerPivot();
                    closeX.scale.setTo(2);
                    this._soundButton.updateBaseFrame(Globals_12.Settings.SFX_ENABLED ? 'audio' : 'audio_mute');
                    this._musicButton.updateBaseFrame(Globals_12.Settings.MUSIC_ENABLED ? 'music' : 'music_mute');
                    this._title = this._contentGroup.addInternal.dText(this.bg.realWidth * 0.5, this.bg.realHeight * 0.1, 'SETTINGS', Globals_12.Constants.FONT_VT323, 50, "#ffffff", 'center');
                    this._title.centerPivot();
                };
                OptionsPopup.prototype._addTweens = function () {
                    this._showTween = this.game.add.tween(this).to({ alpha: 1, x: this._startPosition.x - this._width - 20 }, 300, Phaser.Easing.Bounce.Out);
                    this._showTween.onComplete.add(this._showComplete, this);
                    this._hideTween = this.game.add.tween(this).to({ alpha: 0, x: this._startPosition.x }, 300, Phaser.Easing.Cubic.In);
                    this._hideTween.onComplete.add(this._hideComplete, this);
                };
                OptionsPopup.prototype._help = function () {
                };
                OptionsPopup.prototype._resumeGame = function () {
                    if (this._allowInput) {
                        this._close();
                        this.game.time.events.add(400, this._sendResumeNotification, this);
                    }
                };
                OptionsPopup.prototype._restartRun = function () {
                    if (this._allowInput) {
                        this.mediator.restartRun();
                    }
                };
                OptionsPopup.prototype._closeSettings = function () {
                    if (this._allowInput) {
                        this._mediator.sendNotification(Notifications_10.default.HIDE_POPUP, this.id);
                    }
                };
                OptionsPopup.prototype._music = function () {
                    Globals_12.Settings.MUSIC_ENABLED = !Globals_12.Settings.MUSIC_ENABLED;
                    this._musicButton.updateBaseFrame(Globals_12.Settings.MUSIC_ENABLED ? 'music' : 'music_mute');
                    this.mediator.notifyMusicToggled();
                };
                OptionsPopup.prototype._sound = function () {
                    Globals_12.Settings.SFX_ENABLED = !Globals_12.Settings.SFX_ENABLED;
                    this._soundButton.updateBaseFrame(Globals_12.Settings.SFX_ENABLED ? 'audio' : 'audio_mute');
                    this.mediator.notifyAudioToggled();
                };
                Object.defineProperty(OptionsPopup.prototype, "mediator", {
                    get: function () {
                        return this._mediator;
                    },
                    enumerable: true,
                    configurable: true
                });
                return OptionsPopup;
            }(BasePopup_3.default));
            exports_20("default", OptionsPopup);
        }
    }
});
System.register("mediator/popup/PopupManagerMediator", ["mediator/BaseMediator", "utils/Notifications", "utils/Globals", "popups/ConfirmationPopup", "popups/HelpPopup", "popups/OptionsPopup"], function(exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var BaseMediator_7, Notifications_11, Globals_13, ConfirmationPopup_1, HelpPopup_1, OptionsPopup_1;
    var PopupManagerMediator;
    return {
        setters:[
            function (BaseMediator_7_1) {
                BaseMediator_7 = BaseMediator_7_1;
            },
            function (Notifications_11_1) {
                Notifications_11 = Notifications_11_1;
            },
            function (Globals_13_1) {
                Globals_13 = Globals_13_1;
            },
            function (ConfirmationPopup_1_1) {
                ConfirmationPopup_1 = ConfirmationPopup_1_1;
            },
            function (HelpPopup_1_1) {
                HelpPopup_1 = HelpPopup_1_1;
            },
            function (OptionsPopup_1_1) {
                OptionsPopup_1 = OptionsPopup_1_1;
            }],
        execute: function() {
            PopupManagerMediator = (function (_super) {
                __extends(PopupManagerMediator, _super);
                function PopupManagerMediator(viewComp) {
                    _super.call(this, viewComp, true, PopupManagerMediator.MEDIATOR_NAME);
                    this._lookup = {};
                    this._popupsAdded = false;
                    this._optionsOpen = false;
                }
                PopupManagerMediator.prototype.listNotificationInterests = function () {
                    return [
                        Notifications_11.default.ADD_ALL_POPUPS,
                        Notifications_11.default.REGISTER_POPUP,
                        Notifications_11.default.SHOW_POPUP,
                        Notifications_11.default.HIDE_POPUP
                    ];
                };
                PopupManagerMediator.prototype.handleNotification = function (notification) {
                    var noteName = notification.getName();
                    var noteBody = notification.getBody();
                    switch (noteName) {
                        case Notifications_11.default.ADD_ALL_POPUPS:
                            this._addAllPopups();
                            break;
                        case Notifications_11.default.REGISTER_POPUP:
                            this._registerPopup(noteBody);
                            break;
                        case Notifications_11.default.SHOW_POPUP:
                            if (this._getPopup(noteBody) != null) {
                                this.manager.showModal();
                                this._getPopup(noteBody).show();
                            }
                            break;
                        case Notifications_11.default.HIDE_POPUP:
                            this.manager.hideModal();
                            if (this._getPopup(noteBody) != null) {
                                this._getPopup(noteBody).hide();
                            }
                            break;
                    }
                };
                PopupManagerMediator.prototype.clearLookup = function () {
                    this._lookup = {};
                };
                PopupManagerMediator.prototype.close = function () {
                    this.sendNotification(Notifications_11.default.HIDE_POPUP, Globals_13.Constants.POPUP_OPTIONS);
                };
                PopupManagerMediator.prototype.hasPopupWithId = function (popupID) {
                    return this._getPopup(popupID) ? true : false;
                };
                PopupManagerMediator.prototype._addAllPopups = function () {
                    if (this._popupsAdded) {
                        return;
                    }
                    var popup = null;
                    popup = new ConfirmationPopup_1.default();
                    popup = new HelpPopup_1.default();
                    popup = new OptionsPopup_1.default();
                    this._popupsAdded = true;
                };
                PopupManagerMediator.prototype._getPopup = function (popupID) {
                    return this._lookup[popupID] || null;
                };
                PopupManagerMediator.prototype._registerPopup = function (popup) {
                    this._lookup[popup.id] = popup;
                    this.manager.addModal();
                    this.manager.add(popup);
                };
                Object.defineProperty(PopupManagerMediator.prototype, "manager", {
                    get: function () {
                        return this._viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PopupManagerMediator.prototype, "name", {
                    get: function () {
                        return PopupManagerMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                PopupManagerMediator.MEDIATOR_NAME = 'popupManagerMediator';
                return PopupManagerMediator;
            }(BaseMediator_7.default));
            exports_21("default", PopupManagerMediator);
        }
    }
});
System.register("popups/PopupManager", ['dijon/display', "mediator/popup/PopupManagerMediator", "popups/BasePopup", 'dijon/utils'], function(exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    var display_5, PopupManagerMediator_1, BasePopup_4, utils_1;
    var PopupManager;
    return {
        setters:[
            function (display_5_1) {
                display_5 = display_5_1;
            },
            function (PopupManagerMediator_1_1) {
                PopupManagerMediator_1 = PopupManagerMediator_1_1;
            },
            function (BasePopup_4_1) {
                BasePopup_4 = BasePopup_4_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }],
        execute: function() {
            PopupManager = (function (_super) {
                __extends(PopupManager, _super);
                function PopupManager() {
                    _super.call(this, 0, 0, 'PopupManager', false);
                    this._fromOptions = false;
                    this.init();
                    this.buildInterface();
                }
                PopupManager.prototype.init = function () {
                    this.classType = BasePopup_4.default;
                    this.fixedToCamera = true;
                    this._mediator = BasePopup_4.default.retrieveMediator(PopupManagerMediator_1.default.MEDIATOR_NAME, this);
                    if (this._mediator === null) {
                        this._mediator = new PopupManagerMediator_1.default(this);
                    }
                };
                PopupManager.prototype.buildInterface = function () {
                    this.addModal();
                };
                PopupManager.prototype.addModal = function () {
                    if (this._modal) {
                        return;
                    }
                    this._modal = this.add(this.game.add.sprite(0, 0, utils_1.Textures.rect(this.game.width, this.game.height, 0x000000, 0.25)));
                    this._modal.name = 'popupManagerModal';
                    this._modal.inputEnabled = true;
                    this._modal.events.onInputDown.add(this.mediator.close, this.mediator);
                    this._modal.cacheAsBitmap = true;
                    this._modal.visible = false;
                };
                PopupManager.prototype.showModal = function () {
                    var _this = this;
                    this.sendToBack(this._modal);
                    this.game.time.events.add(100, function () { _this._modal.visible = true; }, this);
                };
                PopupManager.prototype.hideModal = function () {
                    this._modal.visible = false;
                };
                PopupManager.prototype.removeAll = function (destroy, silent) {
                    if (destroy === void 0) { destroy = true; }
                    if (silent === void 0) { silent = false; }
                    if (this._modal) {
                        this.sendToBack(this._modal);
                        this.hideModal();
                    }
                    while (this.children.length > 1) {
                        this.remove(this.getChildAt(1), destroy, silent);
                    }
                    this.mediator.clearLookup();
                };
                Object.defineProperty(PopupManager.prototype, "mediator", {
                    get: function () {
                        return this._mediator;
                    },
                    enumerable: true,
                    configurable: true
                });
                return PopupManager;
            }(display_5.Group));
            exports_22("default", PopupManager);
        }
    }
});
System.register("ui/PieProgressBar", ['dijon/application'], function(exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    var application_5;
    var PieProgressBar;
    return {
        setters:[
            function (application_5_1) {
                application_5 = application_5_1;
            }],
        execute: function() {
            PieProgressBar = (function (_super) {
                __extends(PieProgressBar, _super);
                function PieProgressBar(x, y, radius, weight, color, angle) {
                    if (radius === void 0) { radius = 2; }
                    if (weight === void 0) { weight = 0; }
                    if (color === void 0) { color = '#ffffff'; }
                    if (angle === void 0) { angle = -90; }
                    _super.call(this, application_5.Application.getInstance().game, x, y);
                    this.anchor.set(0.5);
                    this._weight = Phaser.Math.clamp(weight, 0, 1);
                    this._radius = radius;
                    this.angle = angle;
                    this._color = color;
                    if (this._weight > 0) {
                        this._bmp = this.game.add.bitmapData((this._radius * 2) + (this._weight * (this._radius * 0.6)), (this._radius * 2) + (this._weight * (this._radius * 0.6)));
                    }
                    else {
                        this._bmp = this.game.add.bitmapData(radius * 2, radius * 2);
                    }
                    this.loadTexture(this._bmp);
                    this.updateProgress(0);
                }
                PieProgressBar.prototype.updateProgress = function (percent) {
                    var progress = percent;
                    this._bmp.clear();
                    if (this._weight > 0) {
                        progress = Phaser.Math.clamp(percent, 0, 0.9999);
                        this._bmp.ctx.fillStyle = this._color;
                        this._bmp.ctx.strokeStyle = this._color;
                        this._bmp.ctx.lineWidth = this._weight * this._radius;
                        this._bmp.ctx.beginPath();
                        this._bmp.ctx.arc(this._bmp.width * 0.5, this._bmp.height * 0.5, this._radius - 15, 0, (Math.PI * 2) * progress, false);
                        this._bmp.ctx.stroke();
                    }
                    else {
                        progress = 1 - Phaser.Math.clamp(percent, 0.0001, 1);
                        this._bmp.ctx.fillStyle = this._color;
                        this._bmp.ctx.beginPath();
                        this._bmp.ctx.arc(this._radius, this._radius, this._radius, 0, (Math.PI * 2) * progress, true);
                        this._bmp.ctx.lineTo(this._radius, this._radius);
                        this._bmp.ctx.closePath();
                        this._bmp.ctx.fill();
                    }
                    this._bmp.dirty = true;
                };
                Object.defineProperty(PieProgressBar.prototype, "radius", {
                    get: function () {
                        return this._radius;
                    },
                    set: function (value) {
                        this._radius = (value > 0 ? value : 0);
                        this._bmp.resize(this._radius * 2, this._radius * 2);
                    },
                    enumerable: true,
                    configurable: true
                });
                return PieProgressBar;
            }(Phaser.Sprite));
            exports_23("default", PieProgressBar);
        }
    }
});
System.register("ui/Preloader", ['dijon/display', "ui/PieProgressBar", "utils/Globals"], function(exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    var display_6, PieProgressBar_1, Globals_14;
    var Preloader;
    return {
        setters:[
            function (display_6_1) {
                display_6 = display_6_1;
            },
            function (PieProgressBar_1_1) {
                PieProgressBar_1 = PieProgressBar_1_1;
            },
            function (Globals_14_1) {
                Globals_14 = Globals_14_1;
            }],
        execute: function() {
            Preloader = (function (_super) {
                __extends(Preloader, _super);
                function Preloader(x, y, name) {
                    _super.call(this, x, y, name, true);
                    this.transitionInComplete = new Phaser.Signal();
                    this.transitionOutComplete = new Phaser.Signal();
                    this.init();
                    this.buildInterface();
                    this.y = -this.game.height;
                }
                Preloader.prototype.buildInterface = function () {
                    this._loadText = this.addInternal.dText(50, 50, 'Loading ... ', Globals_14.Constants.FONT_VT323, 36, '#FFFFFF');
                    this._wiper = this.addInternal.image(0, 0, 'splash_screen');
                    this.alpha = 0;
                    this.visible = false;
                    this._progressBar1 = new PieProgressBar_1.default(this.game.width * 0.25, this.game.height * 0.75, 50);
                    this._progressBar2 = new PieProgressBar_1.default(this.game.width * 0.75, this.game.height * 0.75, 50, 0.15, '#ffaa00', 90);
                    this.addInternal.existing(this._progressBar1);
                    this.addInternal.existing(this._progressBar2);
                    this._inTween = this.game.add.tween(this).to({ y: 0, alpha: 1 }, 350, Phaser.Easing.Quadratic.Out);
                    this._outTween = this.game.add.tween(this).to({ y: this.game.height, alpha: 0 }, 300, Phaser.Easing.Quadratic.In);
                    this._inTween.onComplete.add(this._in, this);
                    this._outTween.onComplete.add(this._out, this);
                };
                Preloader.prototype.loadStart = function () {
                    this._progressBar1.updateProgress(0);
                    this._progressBar2.updateProgress(1);
                    console.log("starting preload");
                };
                Preloader.prototype.loadProgress = function (progress) {
                    this._progressBar1.updateProgress(progress / 100);
                    this._progressBar2.updateProgress(1 - (progress / 100));
                    var roundedProgress = Math.round(progress).toString();
                    this._loadText.setText('Loading ... ' + roundedProgress + '%');
                };
                Preloader.prototype.loadComplete = function () {
                };
                Preloader.prototype.transitionIn = function () {
                    console.log("Showing Preloader");
                    this.visible = true;
                    this._inTween.start();
                };
                Preloader.prototype.transitionOut = function () {
                    this._outTween.start();
                };
                Preloader.prototype._in = function () {
                    this.transitionInComplete.dispatch();
                };
                Preloader.prototype._out = function () {
                    this.visible = false;
                    this.y = -this.game.height;
                };
                return Preloader;
            }(display_6.Group));
            exports_24("default", Preloader);
        }
    }
});
System.register("RHGame", ['dijon/core', "RHAudioManager", "popups/PopupManager", "utils/Globals", "ui/Preloader"], function(exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    var core_3, RHAudioManager_1, PopupManager_1, Globals_15, Preloader_1;
    var RHGame;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (RHAudioManager_1_1) {
                RHAudioManager_1 = RHAudioManager_1_1;
            },
            function (PopupManager_1_1) {
                PopupManager_1 = PopupManager_1_1;
            },
            function (Globals_15_1) {
                Globals_15 = Globals_15_1;
            },
            function (Preloader_1_1) {
                Preloader_1 = Preloader_1_1;
            }],
        execute: function() {
            RHGame = (function (_super) {
                __extends(RHGame, _super);
                function RHGame(config) {
                    _super.call(this, config);
                    this._bgLoop = null;
                }
                RHGame.prototype.addLayers = function () {
                    _super.prototype.addLayers.call(this);
                    this.popup = new PopupManager_1.default();
                    this.add.existing(this.popup);
                };
                RHGame.prototype.boot = function () {
                    _super.prototype.boot.call(this);
                    this.audio = null;
                    this.audio = new RHAudioManager_1.default();
                };
                RHGame.prototype.musicToggled = function () {
                    if (this._bgLoop !== null) {
                        this._bgLoop.volume = Globals_15.Settings.MUSIC_ENABLED ? Globals_15.Settings.MUSIC_VOLUME : 0;
                    }
                };
                RHGame.prototype.initPreloader = function () {
                    this.preloader = new Preloader_1.default(0, 0, 'preload');
                    this.stageLayer.add(this.preloader);
                    this.transition.addAll(this.preloader);
                    this.transition.to(Globals_15.Constants.STATE_MENU);
                };
                RHGame.prototype.startBGLoop = function (name, crossfade) {
                    if (crossfade === void 0) { crossfade = false; }
                    if (this._bgLoop === null) {
                        this._bgLoop = this.audio.playSound(name, Globals_15.Settings.MUSIC_ENABLED ? Globals_15.Settings.MUSIC_VOLUME : 0);
                    }
                    else {
                        if (crossfade === true) {
                            this.crossfadeAudio(name);
                        }
                        else {
                            this._bgLoop.stop();
                            this._bgLoop = this.audio.playSound(name, 0, true);
                            if (Globals_15.Settings.MUSIC_ENABLED) {
                                this._bgLoop.fadeTo(Globals_15.Settings.MUSIC_VOLUME, 1000);
                            }
                        }
                    }
                };
                RHGame.prototype.crossfadeAudio = function (name) {
                    var _this = this;
                    this.add.tween(this._bgLoop).to({ volume: 0 }, 650, Phaser.Easing.Linear.None, true);
                    var newBG = this.audio.playSound(name, 0, true);
                    this.add.tween(newBG).to({ volume: Globals_15.Settings.MUSIC_ENABLED ? Globals_15.Settings.MUSIC_VOLUME : 0 }, 1000, Phaser.Easing.Linear.None, true).onComplete.add(function () { _this._bgLoop = newBG; });
                };
                return RHGame;
            }(core_3.Game));
            exports_25("default", RHGame);
        }
    }
});
System.register("mediator/ApplicationMediator", ["mediator/BaseMediator", "utils/Notifications"], function(exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    var BaseMediator_8, Notifications_12;
    var ApplicationMediator;
    return {
        setters:[
            function (BaseMediator_8_1) {
                BaseMediator_8 = BaseMediator_8_1;
            },
            function (Notifications_12_1) {
                Notifications_12 = Notifications_12_1;
            }],
        execute: function() {
            ApplicationMediator = (function (_super) {
                __extends(ApplicationMediator, _super);
                function ApplicationMediator() {
                    _super.apply(this, arguments);
                }
                ApplicationMediator.prototype.listNotificationInterests = function () {
                    return [
                        Notifications_12.default.BOOT_INIT,
                        Notifications_12.default.BOOT_COMPLETE,
                        Notifications_12.default.BEGIN_GAME,
                        Notifications_12.default.RESTART_RUN,
                        Notifications_12.default.BACK_TO_MENU,
                        Notifications_12.default.AUDIO_TOGGLED,
                        Notifications_12.default.MUSIC_TOGGLED
                    ];
                };
                ApplicationMediator.prototype.handleNotification = function (notification) {
                    var noteName = notification.getName();
                    var noteBody = notification.getBody();
                    switch (noteName) {
                        case Notifications_12.default.AUDIO_TOGGLED:
                            this.gameModel.updateMuteSettings();
                            break;
                        case Notifications_12.default.MUSIC_TOGGLED:
                            this.gameModel.updateMuteSettings();
                            this.rhGame.musicToggled();
                            break;
                        case Notifications_12.default.BOOT_INIT:
                            this.viewComponent.adjustScaleSettings();
                            this.viewComponent.adjustRendererSettings();
                            this.viewComponent.addPlugins();
                            break;
                        case Notifications_12.default.BOOT_COMPLETE:
                            this.game.asset.setData(this.game.cache.getJSON('assets'));
                            this.viewComponent.bootComplete();
                            break;
                        case Notifications_12.default.BEGIN_GAME:
                            this.gameModel.resetGameplayStats();
                            break;
                        case Notifications_12.default.RESTART_RUN:
                            this.gameModel.restartingRun = true;
                            break;
                        case Notifications_12.default.BACK_TO_MENU:
                            this.gameModel.restartingRun = false;
                            break;
                    }
                };
                Object.defineProperty(ApplicationMediator.prototype, "viewComponent", {
                    get: function () {
                        return this._viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ApplicationMediator.prototype, "name", {
                    get: function () {
                        return ApplicationMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ApplicationMediator.prototype, "rhGame", {
                    get: function () {
                        return this.game;
                    },
                    enumerable: true,
                    configurable: true
                });
                ApplicationMediator.MEDIATOR_NAME = 'applicationMediator';
                return ApplicationMediator;
            }(BaseMediator_8.default));
            exports_26("default", ApplicationMediator);
        }
    }
});
System.register("mediator/BootMediator", ["mediator/BaseMediator", "utils/Notifications"], function(exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var BaseMediator_9, Notifications_13;
    var BootMediator;
    return {
        setters:[
            function (BaseMediator_9_1) {
                BaseMediator_9 = BaseMediator_9_1;
            },
            function (Notifications_13_1) {
                Notifications_13 = Notifications_13_1;
            }],
        execute: function() {
            BootMediator = (function (_super) {
                __extends(BootMediator, _super);
                function BootMediator() {
                    _super.apply(this, arguments);
                }
                BootMediator.prototype.onRegister = function () {
                    this.sendNotification(Notifications_13.default.BOOT_INIT);
                };
                BootMediator.prototype.bootComplete = function () {
                    this.sendNotification(Notifications_13.default.BOOT_COMPLETE);
                };
                Object.defineProperty(BootMediator.prototype, "name", {
                    get: function () {
                        return BootMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                BootMediator.MEDIATOR_NAME = 'bootMediator';
                return BootMediator;
            }(BaseMediator_9.default));
            exports_27("default", BootMediator);
        }
    }
});
System.register("prefabs/RHLabelledButton", ['dijon/display', "prefabs/RHButton", "utils/Globals"], function(exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    var display_7, RHButton_5, Globals_16;
    var RHLabelledButton;
    return {
        setters:[
            function (display_7_1) {
                display_7 = display_7_1;
            },
            function (RHButton_5_1) {
                RHButton_5 = RHButton_5_1;
            },
            function (Globals_16_1) {
                Globals_16 = Globals_16_1;
            }],
        execute: function() {
            RHLabelledButton = (function (_super) {
                __extends(RHLabelledButton, _super);
                function RHLabelledButton(x, y, callback, context, assetKey, baseFrame, overFrame, downFrame, upFrame) {
                    _super.call(this, x, y, callback, context, assetKey, baseFrame, overFrame ? overFrame : baseFrame, downFrame ? downFrame : baseFrame, upFrame ? upFrame : baseFrame);
                    this._overSound = null;
                    this._downSound = null;
                    this._label = new display_7.Text(0, 0, "", "#ffffff", 1);
                }
                RHLabelledButton.CreateFromData = function (data) {
                    var self = new RHLabelledButton(data.position.x, data.position.y, null, null, data.key, data.frame, data.overFrame, data.downFrame, data.upFrame);
                    self.name = data.name;
                    if (data.anchor) {
                        self.anchor.setTo(data.anchor.x, data.anchor.y);
                    }
                    if (data.scale) {
                        self.scale.setTo(data.scale.x, data.scale.y);
                    }
                    self.alpha = data.alpha ? data.alpha : 1;
                    self.angle = data.angle ? data.angle : 0;
                    self._outLabelTint = data.outLabelColor ? Globals_16.Colours.floatRGBAToHex(data.outLabelColor) : 0xffffff;
                    self._overLabelTint = data.overLabelColor ? Globals_16.Colours.floatRGBAToHex(data.overLabelColor) : 0xffffff;
                    self._downLabelTint = data.downLabelColor ? Globals_16.Colours.floatRGBAToHex(data.downLabelColor) : 0xffffff;
                    self._upLabelTint = data.upLabelColor ? Globals_16.Colours.floatRGBAToHex(data.upLabelColor) : 0xffffff;
                    return self;
                };
                RHLabelledButton.prototype.assignPrefab = function (object) {
                    if (object instanceof display_7.Text) {
                        this._label.destroy();
                        this._label = object;
                        this.addChild(this._label);
                        this._label.setColor("#ffffff");
                        this._label.tint = this._outLabelTint;
                    }
                };
                RHLabelledButton.prototype._onDownTriggered = function () { };
                RHLabelledButton.prototype.onInputDownHandler = function (sprite, pointer) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputDownHandler.call(this, sprite, pointer);
                    this._label.tint = this._downLabelTint;
                };
                RHLabelledButton.prototype.onInputOverHandler = function (sprite, pointer) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputOverHandler.call(this, sprite, pointer);
                    this._label.tint = this._overLabelTint;
                };
                RHLabelledButton.prototype.onInputOutHandler = function (sprite, pointer) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputOutHandler.call(this, sprite, pointer);
                    this._label.tint = this._outLabelTint;
                };
                RHLabelledButton.prototype.onInputUpHandler = function (sprite, pointer, isOver) {
                    if (this.input.enabled === false) {
                        return;
                    }
                    _super.prototype.onInputUpHandler.call(this, sprite, pointer, isOver);
                    this._label.tint = this._upLabelTint;
                };
                RHLabelledButton.prototype.assignText = function (newText) {
                    if (newText !== null) {
                        this._label = newText;
                    }
                };
                return RHLabelledButton;
            }(RHButton_5.default));
            exports_28("default", RHLabelledButton);
        }
    }
});
System.register("state/Boot", ["state/BaseState", "mediator/BootMediator", "prefabs/RHButton", "prefabs/RHLabelledButton", "dijon/utils"], function(exports_29, context_29) {
    "use strict";
    var __moduleName = context_29 && context_29.id;
    var BaseState_2, BootMediator_1, RHButton_6, RHLabelledButton_1, utils_2;
    var Boot;
    return {
        setters:[
            function (BaseState_2_1) {
                BaseState_2 = BaseState_2_1;
            },
            function (BootMediator_1_1) {
                BootMediator_1 = BootMediator_1_1;
            },
            function (RHButton_6_1) {
                RHButton_6 = RHButton_6_1;
            },
            function (RHLabelledButton_1_1) {
                RHLabelledButton_1 = RHLabelledButton_1_1;
            },
            function (utils_2_1) {
                utils_2 = utils_2_1;
            }],
        execute: function() {
            Boot = (function (_super) {
                __extends(Boot, _super);
                function Boot() {
                    _super.apply(this, arguments);
                }
                Boot.prototype.init = function () {
                    this._mediator = new BootMediator_1.default(this);
                    utils_2.PrefabBuilder.addPrefabClass(RHButton_6.default, "button");
                    utils_2.PrefabBuilder.addPrefabClass(RHLabelledButton_1.default, "labelledbutton");
                };
                Boot.prototype.preload = function () {
                    if (window['version'] !== undefined) {
                        this.game.asset.cacheBustVersion = '@@version';
                    }
                    this.game.asset.loadJSON('game_data');
                    this.game.asset.loadJSON('assets');
                    this.game.asset.loadJSON('copy');
                    this.game.asset.loadImage('splash_screen.png', 1);
                };
                Boot.prototype.buildInterface = function () {
                    this.mediator.bootComplete();
                };
                Object.defineProperty(Boot.prototype, "mediator", {
                    get: function () {
                        return this._mediator;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Boot;
            }(BaseState_2.default));
            exports_29("default", Boot);
        }
    }
});
System.register("mediator/MenuMediator", ["utils/Globals", "mediator/BaseMediator", "utils/Notifications"], function(exports_30, context_30) {
    "use strict";
    var __moduleName = context_30 && context_30.id;
    var Globals_17, BaseMediator_10, Notifications_14;
    var MenuMediator;
    return {
        setters:[
            function (Globals_17_1) {
                Globals_17 = Globals_17_1;
            },
            function (BaseMediator_10_1) {
                BaseMediator_10 = BaseMediator_10_1;
            },
            function (Notifications_14_1) {
                Notifications_14 = Notifications_14_1;
            }],
        execute: function() {
            MenuMediator = (function (_super) {
                __extends(MenuMediator, _super);
                function MenuMediator() {
                    _super.apply(this, arguments);
                }
                MenuMediator.prototype.listNotificationInterests = function () {
                    return [];
                };
                MenuMediator.prototype.handleNotification = function (notification) {
                    var noteName = notification.getName();
                    var noteBody = notification.getBody();
                    switch (noteName) {
                    }
                };
                MenuMediator.prototype.addPopups = function () {
                    this.sendNotification(Notifications_14.default.ADD_ALL_POPUPS);
                };
                MenuMediator.prototype.showOptions = function () {
                    this.showPopup(Globals_17.Constants.POPUP_OPTIONS);
                };
                Object.defineProperty(MenuMediator.prototype, "name", {
                    get: function () {
                        return MenuMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MenuMediator.prototype, "menu", {
                    get: function () {
                        return this._viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                MenuMediator.MEDIATOR_NAME = 'menuMediator';
                return MenuMediator;
            }(BaseMediator_10.default));
            exports_30("default", MenuMediator);
        }
    }
});
System.register("state/Menu", ["state/BaseState", "mediator/MenuMediator"], function(exports_31, context_31) {
    "use strict";
    var __moduleName = context_31 && context_31.id;
    var BaseState_3, MenuMediator_1;
    var Menu;
    return {
        setters:[
            function (BaseState_3_1) {
                BaseState_3 = BaseState_3_1;
            },
            function (MenuMediator_1_1) {
                MenuMediator_1 = MenuMediator_1_1;
            }],
        execute: function() {
            Menu = (function (_super) {
                __extends(Menu, _super);
                function Menu() {
                    _super.apply(this, arguments);
                }
                Menu.prototype.init = function () {
                    this._mediator = MenuMediator_1.default.retrieveMediator(MenuMediator_1.default.MEDIATOR_NAME, this);
                    if (this._mediator === null) {
                        this._mediator = new MenuMediator_1.default(this);
                    }
                };
                Menu.prototype.preload = function () {
                    this.game.asset.loadAssets('mainmenu');
                };
                Menu.prototype.create = function () {
                    this._sceneData = this.game.cache.getJSON('mainmenu');
                    if (this._sceneData != null) {
                        _super.prototype.create.call(this);
                    }
                };
                Menu.prototype.listBuildSequence = function () {
                    return [
                        this._addButtons,
                        this._addPopups
                    ];
                };
                Menu.prototype.afterBuild = function () {
                    this.game.startBGLoop('zzp_happy_relaxing');
                };
                Menu.prototype._addButtons = function () {
                    var newBtn = this._findPrefab('NewGameBtn');
                    if (newBtn !== null) {
                        newBtn.events.onInputDown.add(this.newGamePressed, this);
                    }
                    var setBtn = this._findPrefab('SettingsBtn');
                    if (setBtn !== null) {
                        setBtn.events.onInputDown.add(this.settingsPressed, this);
                    }
                };
                Menu.prototype.newGamePressed = function () {
                    console.log('new game');
                    var image = this.add.image(Math.random() * this.game.width * 0.5, Math.random() * this.game.height * 0.5, 'scifi-landscape');
                };
                Menu.prototype.settingsPressed = function () {
                    this.mediator.showOptions();
                };
                Menu.prototype._addPopups = function () {
                    this.mediator.addPopups();
                };
                Object.defineProperty(Menu.prototype, "mediator", {
                    get: function () {
                        return this._mediator;
                    },
                    enumerable: true,
                    configurable: true
                });
                Menu.prototype._createDebugRect = function (rect) {
                    var gfx = this.game.add.graphics();
                    gfx.beginFill(0x00ff00, 0.5);
                    gfx.drawRect(rect.x, rect.y, rect.width, rect.height);
                    gfx.endFill();
                };
                return Menu;
            }(BaseState_3.default));
            exports_31("default", Menu);
        }
    }
});
System.register("RHApplication", ["dijon/application", "RHGame", "dijon/utils", "dijon/mvc", "mediator/ApplicationMediator", "utils/Globals", "state/Boot", "state/Gameplay", "state/Menu", "model/GameModel"], function(exports_32, context_32) {
    "use strict";
    var __moduleName = context_32 && context_32.id;
    var application_6, RHGame_1, utils_3, mvc_3, ApplicationMediator_1, Globals_18, Boot_1, Gameplay_1, Menu_1, GameModel_2;
    var ZZPApplication;
    return {
        setters:[
            function (application_6_1) {
                application_6 = application_6_1;
            },
            function (RHGame_1_1) {
                RHGame_1 = RHGame_1_1;
            },
            function (utils_3_1) {
                utils_3 = utils_3_1;
            },
            function (mvc_3_1) {
                mvc_3 = mvc_3_1;
            },
            function (ApplicationMediator_1_1) {
                ApplicationMediator_1 = ApplicationMediator_1_1;
            },
            function (Globals_18_1) {
                Globals_18 = Globals_18_1;
            },
            function (Boot_1_1) {
                Boot_1 = Boot_1_1;
            },
            function (Gameplay_1_1) {
                Gameplay_1 = Gameplay_1_1;
            },
            function (Menu_1_1) {
                Menu_1 = Menu_1_1;
            },
            function (GameModel_2_1) {
                GameModel_2 = GameModel_2_1;
            }],
        execute: function() {
            ZZPApplication = (function (_super) {
                __extends(ZZPApplication, _super);
                function ZZPApplication() {
                    _super.call(this);
                    this.gameId = null;
                }
                ZZPApplication.prototype.createGame = function () {
                    this.game = new RHGame_1.default({
                        width: this._getGameWidth(),
                        height: this._getGameHeight(),
                        parent: 'game-container',
                        renderer: utils_3.Device.cocoon ? Phaser.CANVAS : this._getRendererByDevice(),
                        transparent: false,
                        resolution: this._getResolution(),
                        plugins: utils_3.Device.mobile ? [] : ['Debug']
                    });
                    this._mediator = new ApplicationMediator_1.default(this);
                    this._addStates();
                };
                ZZPApplication.prototype.startGame = function () {
                    this.game.state.start(Globals_18.Constants.STATE_BOOT);
                };
                ZZPApplication.prototype.adjustScaleSettings = function () {
                    if (utils_3.Device.cocoon) {
                        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                        this.game.scale.pageAlignHorizontally = true;
                        this.game.scale.pageAlignVertically = true;
                    }
                    else {
                        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                        this.game.scale.setMinMax(256, 192, 1024, 768);
                        this.game.scale.pageAlignHorizontally = true;
                    }
                };
                ZZPApplication.prototype.adjustRendererSettings = function () {
                    this.game.stage.disableVisibilityChange = false;
                    this.game.forceSingleUpdate = true;
                    this.game.camera.roundPx = false;
                    this.game.renderer.renderSession.roundPixels = false;
                    this.game.antialias = true;
                    this.game.renderer.clearBeforeRender = this.game.renderType === Phaser.CANVAS;
                };
                ZZPApplication.prototype.bootComplete = function () {
                    var gameModel = new GameModel_2.default('game_data');
                    var copyModel = new mvc_3.CopyModel('copy');
                    gameModel.loadPlayerData();
                    this.game.initPreloader();
                };
                ZZPApplication.prototype._addStates = function () {
                    this.game.state.add(Globals_18.Constants.STATE_BOOT, Boot_1.default);
                    this.game.state.add(Globals_18.Constants.STATE_GAME, Gameplay_1.default);
                    this.game.state.add(Globals_18.Constants.STATE_MENU, Menu_1.default);
                };
                ZZPApplication.prototype._getGameWidth = function () {
                    return utils_3.Device.cocoon ? window.innerWidth : 1024;
                };
                ZZPApplication.prototype._getGameHeight = function () {
                    return utils_3.Device.cocoon ? window.innerHeight : 768;
                };
                ZZPApplication.prototype._getResolution = function () {
                    if (application_6.Application.queryVar('resolution') && !isNaN(application_6.Application.queryVar('resolution'))) {
                        return application_6.Application.queryVar('resolution');
                    }
                    if (utils_3.Device.cocoon) {
                        return (window.devicePixelRatio > 1 ? 2 : 1);
                    }
                    else {
                        return utils_3.Device.mobile ? 1 : (window.devicePixelRatio > 1 ? 2 : 1);
                    }
                };
                ZZPApplication.prototype._getRendererByDevice = function () {
                    return utils_3.Device.mobile && window.devicePixelRatio < 2 ? Phaser.CANVAS : Phaser.AUTO;
                };
                Object.defineProperty(ZZPApplication.prototype, "mediator", {
                    get: function () {
                        return this._mediator;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ZZPApplication.prototype, "gameModel", {
                    get: function () {
                        return this.retrieveModel(GameModel_2.default.MODEL_NAME);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ZZPApplication.prototype, "copyModel", {
                    get: function () {
                        return this.retrieveModel(mvc_3.CopyModel.MODEL_NAME);
                    },
                    enumerable: true,
                    configurable: true
                });
                return ZZPApplication;
            }(application_6.Application));
            exports_32("default", ZZPApplication);
        }
    }
});
System.register("bootstrap", ["RHApplication"], function(exports_33, context_33) {
    "use strict";
    var __moduleName = context_33 && context_33.id;
    var RHApplication_1;
    var app;
    return {
        setters:[
            function (RHApplication_1_1) {
                RHApplication_1 = RHApplication_1_1;
            }],
        execute: function() {
            exports_33("app", app = new RHApplication_1.default());
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0dsb2JhbHMudHMiLCJSSEF1ZGlvTWFuYWdlci50cyIsInV0aWxzL05vdGlmaWNhdGlvbnMudHMiLCJtb2RlbC9HYW1lTW9kZWwudHMiLCJtZWRpYXRvci9CYXNlTWVkaWF0b3IudHMiLCJwb3B1cHMvQmFzZVBvcHVwLnRzIiwic3RhdGUvQmFzZVN0YXRlLnRzIiwibWVkaWF0b3IvR2FtZXBsYXlNZWRpYXRvci50cyIsIm1lZGlhdG9yL0hVRE1lZGlhdG9yLnRzIiwicHJlZmFicy9SSEJ1dHRvbi50cyIsInVpL0hVRC50cyIsInVpL1RpbWVyLnRzIiwic3RhdGUvR2FtZXBsYXkudHMiLCJtZWRpYXRvci9wb3B1cC9Db25maXJtYXRpb25Qb3B1cE1lZGlhdG9yLnRzIiwicG9wdXBzL0NvbmZpcm1hdGlvblBvcHVwLnRzIiwibWVkaWF0b3IvcG9wdXAvSGVscFBvcHVwTWVkaWF0b3IudHMiLCJwb3B1cHMvSGVscFBvcHVwLnRzIiwibWVkaWF0b3IvcG9wdXAvT3B0aW9uc1BvcHVwTWVkaWF0b3IudHMiLCJwb3B1cHMvT3B0aW9uc1BvcHVwLnRzIiwibWVkaWF0b3IvcG9wdXAvUG9wdXBNYW5hZ2VyTWVkaWF0b3IudHMiLCJwb3B1cHMvUG9wdXBNYW5hZ2VyLnRzIiwidWkvUGllUHJvZ3Jlc3NCYXIudHMiLCJ1aS9QcmVsb2FkZXIudHMiLCJSSEdhbWUudHMiLCJtZWRpYXRvci9BcHBsaWNhdGlvbk1lZGlhdG9yLnRzIiwibWVkaWF0b3IvQm9vdE1lZGlhdG9yLnRzIiwicHJlZmFicy9SSExhYmVsbGVkQnV0dG9uLnRzIiwic3RhdGUvQm9vdC50cyIsIm1lZGlhdG9yL01lbnVNZWRpYXRvci50cyIsInN0YXRlL01lbnUudHMiLCJSSEFwcGxpY2F0aW9uLnRzIiwiYm9vdHN0cmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztZQUFBO2dCQUFBO2dCQTBCQSxDQUFDO2dCQXpCVSxvQkFBVSxHQUFXLE1BQU0sQ0FBQztnQkFD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RU8sNkNBQW9CLEdBQTVCO29CQUNJLE1BQU0sQ0FBQyxjQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUN0RixDQUFDO2dCQUdELHNCQUFXLG9DQUFRO3lCQUFuQjt3QkFDSSxNQUFNLENBQXNCLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQy9DLENBQUM7OzttQkFBQTtnQkFFRCxzQkFBVyxxQ0FBUzt5QkFBcEI7d0JBQ0ksTUFBTSxDQUFZLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDL0QsQ0FBQzs7O21CQUFBO2dCQUVELHNCQUFXLHFDQUFTO3lCQUFwQjt3QkFDSSxNQUFNLENBQVksSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQy9ELENBQUM7OzttQkFBQTtnQkFDTCxxQkFBQztZQUFELENBdEdBLEFBc0dDLENBdEcyQyx5QkFBVyxHQXNHdEQ7WUF0R0QscUNBc0dDLENBQUE7Ozs7Ozs7O1FDL0dZLEdBQUc7Ozs7Ozs7WUFBSCxrQkFBQSxHQUFHLEdBQUcsSUFBSSx1QkFBYSxFQUFFLENBQUEsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcbiAgICBzdGF0aWMgU1RBVEVfQk9PVDogc3RyaW5nID0gJ2Jvb3QnO1xuICAgIHN0YXRpYyBTVEFURV9QUkVMT0FEOiBzdHJpbmcgPSAncHJlbG9hZCc7XG4gICAgc3RhdGljIFNUQVRFX01FTlU6IHN0cmluZyA9ICdtZW51JztcbiAgICBzdGF0aWMgU1RBVEVfR0FNRTogc3RyaW5nID0gJ2dhbWVwbGF5JztcbiAgICBcbiAgICAvLyBmb250c1xuICAgIHN0YXRpYyBGT05UX1ZUMzIzOiBzdHJpbmcgPSAnVlQzMjMsIG1vbm9zcGFjZSc7XG4gICAgXG4gICAgLy8gUG9wdXBzXG4gICAgc3RhdGljIFBPUFVQX0JFR0lOR0FNRTogc3RyaW5nID0gJ2JlZ2luZ2FtZXBvcHVwJztcbiAgICBzdGF0aWMgUE9QVVBfT1BUSU9OUzogc3RyaW5nID0gJ29wdGlvbnNwb3B1cCc7XG4gICAgc3RhdGljIFBPUFVQX0hFTFA6IHN0cmluZyA9ICdoZWxwcG9wdXAnO1xuICAgIHN0YXRpYyBQT1BVUF9DT05GSVJNQVRJT046IHN0cmluZyA9ICdjb25maXJtYXRpb25wb3B1cCc7XG4gICAgc3RhdGljIFBPUFVQX0VOREdBTUU6IHN0cmluZyA9ICdlbmRnYW1lcG9wdXAnO1xuXG4gICAgc3RhdGljIEhFQURfU0xPVDogc3RyaW5nID0gJ2hlYWQnO1xuICAgIHN0YXRpYyBGQUNFX1NMT1Q6IHN0cmluZyA9ICdmYWNlJztcbiAgICBzdGF0aWMgV0FJU1RfU0xPVDogc3RyaW5nID0gJ3dhaXN0JztcbiAgICBzdGF0aWMgRk9PVF9TTE9UOiBzdHJpbmcgPSAnZm9vdCc7XG5cbiAgICBzdGF0aWMgS0VZX1NBVkVfREFUQTogc3RyaW5nID0gJ3p6cGNjc2F2ZWRhdGEnO1xuXG4gICAgc3RhdGljIFVJX09WRVJfU09VTkQ6IHN0cmluZyA9IFwiXCI7XG4gICAgc3RhdGljIFVJX0RPV05fU09VTkQ6IHN0cmluZyA9IFwiXCI7XG4gICAgc3RhdGljIE1VU0lDX0xPT1A6IHN0cmluZyA9ICd6enBfaGFwcHlfcmVsYXhpbmcnO1xufVxuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3Mge1xuICAgIHN0YXRpYyBTRlhfRU5BQkxFRDogYm9vbGVhbiA9IHRydWU7XG4gICAgc3RhdGljIE1VU0lDX0VOQUJMRUQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBfU0ZYX1ZPTFVNRTogbnVtYmVyID0gMC42O1xuICAgIHByb3RlY3RlZCBzdGF0aWMgX01VU0lDX1ZPTFVNRTogbnVtYmVyID0gMC4zNTtcblxuICAgIC8vIEdldHRlcnMgZm9yIHZvbHVtZSBsZXZlbHMuXG4gICAgLy8gSWYgU0ZYIGlzIG11dGVkIHJldHVybnMgMCBpbnN0ZWFkIG9mIGl0cyBjdXJyZW50IHZvbHVtZS4gICAgXG4gICAgcHVibGljIHN0YXRpYyBnZXQgU0ZYX1ZPTFVNRSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gU2V0dGluZ3MuU0ZYX0VOQUJMRUQgPyBTZXR0aW5ncy5fU0ZYX1ZPTFVNRSA6IDA7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgTVVTSUNfVk9MVU1FKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBTZXR0aW5ncy5fTVVTSUNfVk9MVU1FO1xuICAgIH1cblxuICAgIC8vIFNldHRlcnMgZm9yIHZvbHVtZSBsZXZlbHMuXG4gICAgLy8gSWYgdGhlIHNldHRlciByZWNlaXZlcyBhIHZhbHVlIGxlc3MgdGhhbiAwIG9yIGdyZWF0ZXIgdGhhbiAxLCBpdCB3aWxsIHNpbXBseVxuICAgIC8vIHNldCB0aGUgdm9sdW1lIHRvIGl0cyBwcmV2aW91cyBsZXZlbC4gICAgXG4gICAgcHVibGljIHN0YXRpYyBzZXQgU0ZYX1ZPTFVNRSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIFNldHRpbmdzLl9TRlhfVk9MVU1FID0gKHZhbHVlID4gMSAmJiB2YWx1ZSA8IDApID8gU2V0dGluZ3MuX1NGWF9WT0xVTUUgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldCBNVVNJQ19WT0xVTUUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBTZXR0aW5ncy5fTVVTSUNfVk9MVU1FID0gKHZhbHVlID4gMSAmJiB2YWx1ZSA8IDApID8gU2V0dGluZ3MuX01VU0lDX1ZPTFVNRSA6IHZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbG91cnMge1xuICAgIHN0YXRpYyBQSU5LOiBudW1iZXIgPSAweGZmODBmZjtcbiAgICBzdGF0aWMgVElNRVJfU1RST0tFOiBudW1iZXIgPSAweDEwNTRhMDtcblxuICAgIHN0YXRpYyBDT1BZX0dSRVk6IHN0cmluZyA9IFwiI2E2YTZhNlwiO1xuXG4gICAgc3RhdGljIFNLWV9HUkVZOiBudW1iZXIgPSAweGJjY2FkNjtcbiAgICBzdGF0aWMgU0tZX1NMQVRFX0JMVUU6IG51bWJlciA9IDB4OGQ5ZGI2O1xuICAgIHN0YXRpYyBTS1lfREFSS19CTFVFOiBudW1iZXIgPSAweDY2NzI5MjtcbiAgICBzdGF0aWMgU0tZX1NBTE1PTjogbnVtYmVyID0gMHhmMWUzZGQ7XG4gICAgc3RhdGljIFNLWV9MSUdIVF9CTFVFOiBudW1iZXIgPSAweGNmZTBlODtcbiAgICBzdGF0aWMgU0tZX1BPV0RFUl9CTFVFOiBudW1iZXIgPSAweGI3ZDdlODtcbiAgICBzdGF0aWMgU0tZX0JMVUU6IG51bWJlciA9IDB4ODdiZGQ4O1xuICAgIHN0YXRpYyBTS1lfVEVBTDogbnVtYmVyID0gMHhkYWViZTg7ICAgIFxuXG4gICAgc3RhdGljIE9SQU5HRV9IT1ZFUjogbnVtYmVyID0gMHhGREFBMTY7XG4gICAgc3RhdGljIEJHX0dSRVk6IG51bWJlciA9IDB4NTk1OTU5O1xuICAgIFxuICAgIHN0YXRpYyBoZXhUb1N0cmluZyhoZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnIycgKyBoZXgudG9TdHJpbmcoMTYpO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgcmdiYVRvSGV4KGNvbG9yOiB7IHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE6IG51bWJlciB9KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIFBoYXNlci5Db2xvci50b1JHQkEoY29sb3IuciwgY29sb3IuZywgY29sb3IuYiwgY29sb3IuYSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZsb2F0UkdCQVRvSGV4KGNvbG9yOiB7IHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE6IG51bWJlciB9KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIFBoYXNlci5Db2xvci5nZXRDb2xvcihjb2xvci5yICogMjU1LCBjb2xvci5nICogMjU1LCBjb2xvci5iICogMjU1KTtcbiAgICB9XG59IiwiaW1wb3J0IHtBdWRpb01hbmFnZXJ9IGZyb20gJ2Rpam9uL2NvcmUnO1xuaW1wb3J0IHtTZXR0aW5nc30gZnJvbSAnLi91dGlscy9HbG9iYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUkhBdWRpb01hbmFnZXIgZXh0ZW5kcyBBdWRpb01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgcGxheUF1ZGlvKG1hcmtlcjogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIHJldHVybiBzdXBlci5wbGF5QXVkaW8obWFya2VyLCBTZXR0aW5ncy5TRlhfRU5BQkxFRCA/IHZvbHVtZSA6IDAsIGxvb3AsIGZvcmNlUmVzdGFydCk7ICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5RGVsYXllZEF1ZGlvKGRlbGF5OiBudW1iZXIsIG1hcmtlcjogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIHJldHVybiBzdXBlci5wbGF5RGVsYXllZEF1ZGlvKGRlbGF5LCBtYXJrZXIsIFNldHRpbmdzLlNGWF9FTkFCTEVEID8gdm9sdW1lIDogMCwgbG9vcCwgZm9yY2VSZXN0YXJ0KTsgXG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlTb3VuZChrZXk6IHN0cmluZywgdm9sdW1lPzogbnVtYmVyLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmQge1xuICAgICAgICByZXR1cm4gc3VwZXIucGxheVNvdW5kKGtleSwgU2V0dGluZ3MuU0ZYX0VOQUJMRUQgPyB2b2x1bWUgOiAwLCBsb29wLCBmb3JjZVJlc3RhcnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGF5RGVsYXllZFNvdW5kKGRlbGF5OiBudW1iZXIsIGtleTogc3RyaW5nLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXN0YXJ0OiBib29sZWFuID0gdHJ1ZSk6IFBoYXNlci5Tb3VuZCB7XG4gICAgICAgIHJldHVybiBzdXBlci5wbGF5RGVsYXllZFNvdW5kKGRlbGF5LCBrZXksIFNldHRpbmdzLlNGWF9FTkFCTEVEID8gdm9sdW1lIDogMCwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheVNwcml0ZU1hcmtlcihtYXJrZXI6IHN0cmluZywgdm9sdW1lPzogbnVtYmVyLCBsb29wOiBib29sZWFuID0gZmFsc2UsIGZvcmNlUmVzdGFydDogYm9vbGVhbiA9IHRydWUpOiBQaGFzZXIuU291bmQge1xuICAgICAgICByZXR1cm4gc3VwZXIucGxheVNwcml0ZU1hcmtlcihtYXJrZXIsIFNldHRpbmdzLlNGWF9FTkFCTEVEID8gdm9sdW1lIDogMCwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheURlbGF5ZWRTcHJpdGVNYXJrZXIoZGVsYXk6IG51bWJlciwgbWFya2VyOiBzdHJpbmcsIHZvbHVtZT86IG51bWJlciwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZVJlc3RhcnQ6IGJvb2xlYW4gPSB0cnVlKTogUGhhc2VyLlNvdW5kIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnBsYXlEZWxheWVkU3ByaXRlTWFya2VyKGRlbGF5LCBtYXJrZXIsIFNldHRpbmdzLlNGWF9FTkFCTEVEID8gdm9sdW1lIDogMCwgbG9vcCwgZm9yY2VSZXN0YXJ0KTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpY2F0aW9ucyB7XG4gICAgc3RhdGljIEJPT1RfSU5JVDogc3RyaW5nID0gJ2Jvb3RJbml0JztcbiAgICBzdGF0aWMgQk9PVF9DT01QTEVURTogc3RyaW5nID0gJ2Jvb3Rjb21wbGV0ZSc7XG5cbiAgICBzdGF0aWMgQkVHSU5fR0FNRTogc3RyaW5nID0gJ2JlZ2luZ2FtZSc7ICAgIFxuICAgIHN0YXRpYyBQQVVTRV9HQU1FOiBzdHJpbmcgPSAncGF1c2VnYW1lJztcbiAgICBzdGF0aWMgUkVTVU1FX0dBTUU6IHN0cmluZyA9ICdyZXN1bWVnYW1lJztcbiAgICBzdGF0aWMgUkVTVEFSVF9SVU46IHN0cmluZyA9ICdyZXN0YXJ0cnVuJztcbiAgICBzdGF0aWMgQ09VTlRET1dOX0NPTVBMRVRFOiBzdHJpbmcgPSAnY291bnRkb3duY29tcGxldGUnO1xuICAgIHN0YXRpYyBFWElUSU5HX0dBTUU6IHN0cmluZyA9ICdleGl0aW5nZ2FtZSc7XG4gICAgc3RhdGljIEVYSVRfR0FNRV9DQU5DRUxMRUQ6IHN0cmluZyA9ICdleGl0Z2FtZWNhbmNlbCc7XG4gICAgXG4gICAgc3RhdGljIEFVRElPX1RPR0dMRUQ6IHN0cmluZyA9ICdhdWRpb3RvZ2dsZWQnO1xuICAgIHN0YXRpYyBNVVNJQ19UT0dHTEVEOiBzdHJpbmcgPSAnbXVzaWN0b2dnbGVkJztcblxuICAgIHN0YXRpYyBHQU1FX09WRVI6IHN0cmluZyA9ICdnYW1lb3Zlcic7XG4gICAgc3RhdGljIEJBQ0tfVE9fTUVOVTogc3RyaW5nID0gJ2JhY2t0b21lbnUnO1xuXG4gICAgc3RhdGljIEFERF9BTExfUE9QVVBTOiBzdHJpbmcgPSAnYWRkYWxscG9wdXBzJzsgICAgXG4gICAgc3RhdGljIFNIT1dfUE9QVVA6IHN0cmluZyA9ICdzaG93cG9wdXAnOyAgICBcbiAgICBzdGF0aWMgSElERV9QT1BVUDogc3RyaW5nID0gJ2hpZGVwb3B1cCc7XG4gICAgc3RhdGljIFJFR0lTVEVSX1BPUFVQOiBzdHJpbmcgPSAncmVnaXN0ZXJwb3B1cCc7XG4gICAgXG4gICAgc3RhdGljIFJFUVVFU1RfVFVUT1JJQUw6IHN0cmluZyA9ICdyZXF1ZXN0dHV0b3JpYWwnO1xuICAgIHN0YXRpYyBUVVRPUklBTF9SRVNPTFZFRDogc3RyaW5nID0gJ3R1dG9yaWFscmVzb2x2ZWQnO1xuICAgIHN0YXRpYyBDVVJSRU5UX1RJUF9SRVNPTFZFRDogc3RyaW5nID0gJ2N1cnJlbnR0aXByZXNvbHZlZCc7XG5cbiAgICBzdGF0aWMgU0hPV19SRU1JTkRFUjogc3RyaW5nID0gJ3Nob3dyZW1pbmRlcic7XG4gICAgc3RhdGljIERJU01JU1NfUkVNSU5ERVI6IHN0cmluZyA9ICdkaXNtaXNzcmVtaW5kZXInOyAgICBcbn0iLCJpbXBvcnQge01vZGVsfSBmcm9tICdkaWpvbi9tdmMnO1xuaW1wb3J0IHsgSVBsYXllclNhdmVEYXRhLCBJR2FtZXBsYXlEYXRhIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBDb25zdGFudHMsIFNldHRpbmdzIH0gZnJvbSAnLi4vdXRpbHMvR2xvYmFscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgICBwdWJsaWMgc3RhdGljIE1PREVMX05BTUU6IHN0cmluZyA9IFwiZ2FtZU1vZGVsXCI7XG4gICAgXG4gICAgcHVibGljIHJlc3RhcnRpbmdSdW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgc2NvcmU6IG51bWJlciA9IDA7XG5cbiAgICBwcm90ZWN0ZWQgX3NhdmVEYXRhOiBJUGxheWVyU2F2ZURhdGE7XG5cbiAgICBwdWJsaWMgaW5jcmVhc2VTY29yZShwb2ludHM6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNjb3JlICs9IHBvaW50cztcbiAgICB9ICAgIFxuXG4gICAgcHVibGljIHJlc2V0R2FtZXBsYXlTdGF0cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgfSAgIFxuICAgIFxuICAgIHB1YmxpYyBsb2FkUGxheWVyRGF0YSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2F2ZURhdGEgPSB0aGlzLmdhbWUuc3RvcmFnZS5nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5LRVlfU0FWRV9EQVRBLCB0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMuX3NhdmVEYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVEYXRhID0gdGhpcy5fY3JlYXRlUGxheWVyRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgU2V0dGluZ3MuU0ZYX0VOQUJMRUQgPSB0aGlzLl9zYXZlRGF0YS5zZnhFbmFibGVkO1xuICAgICAgICAgICAgU2V0dGluZ3MuTVVTSUNfRU5BQkxFRCA9IHRoaXMuX3NhdmVEYXRhLm11c2ljRW5hYmxlZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2V0R2FtZXBsYXlTdGF0cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzYXZlUGxheWVyRGF0YSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lLnN0b3JhZ2Uuc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5LRVlfU0FWRV9EQVRBLCB0aGlzLl9zYXZlRGF0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZU11dGVTZXR0aW5ncygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2F2ZURhdGEuc2Z4RW5hYmxlZCA9IFNldHRpbmdzLlNGWF9FTkFCTEVEO1xuICAgICAgICB0aGlzLl9zYXZlRGF0YS5tdXNpY0VuYWJsZWQgPSBTZXR0aW5ncy5NVVNJQ19FTkFCTEVEO1xuICAgICAgICB0aGlzLnNhdmVQbGF5ZXJEYXRhKCk7XG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCBfY3JlYXRlUGxheWVyRGF0YSgpOiBJUGxheWVyU2F2ZURhdGEge1xuICAgICAgICBsZXQgbmV3RGF0YTogSVBsYXllclNhdmVEYXRhID0gPElQbGF5ZXJTYXZlRGF0YT5uZXcgT2JqZWN0KCk7XG4gICAgICAgIG5ld0RhdGEuaGlnaHNjb3JlID0gMDtcbiAgICAgICAgbmV3RGF0YS5pc09uRmlyc3RSdW4gPSB0cnVlO1xuICAgICAgICBuZXdEYXRhLnNmeEVuYWJsZWQgPSBTZXR0aW5ncy5TRlhfRU5BQkxFRDtcbiAgICAgICAgbmV3RGF0YS5tdXNpY0VuYWJsZWQgPSBTZXR0aW5ncy5NVVNJQ19FTkFCTEVEO1xuICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhpZ2hTY29yZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZURhdGEuaGlnaHNjb3JlO1xuICAgIH0gICAgXG5cbiAgICBwdWJsaWMgZ2V0IGlzT25GaXJzdFJ1bigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVEYXRhLmlzT25GaXJzdFJ1bjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzT25GaXJzdFJ1bih2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fc2F2ZURhdGEuaXNPbkZpcnN0UnVuID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NhdmVEYXRhLmlzT25GaXJzdFJ1biA9IHZhbHVlO1xuICAgICAgICB0aGlzLnNhdmVQbGF5ZXJEYXRhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBHYW1lTW9kZWwuTU9ERUxfTkFNRTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdhbWVwbGF5RGF0YSgpOiBJR2FtZXBsYXlEYXRhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuZ2FtZTtcbiAgICB9XG59IiwiaW1wb3J0IHtNZWRpYXRvciwgQ29weU1vZGVsfSBmcm9tIFwiZGlqb24vbXZjXCI7XG5pbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tIFwiZGlqb24vYXBwbGljYXRpb25cIjtcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tICcuLi91dGlscy9HbG9iYWxzJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4uL3V0aWxzL05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IEdhbWVNb2RlbCBmcm9tIFwiLi4vbW9kZWwvR2FtZU1vZGVsXCI7XG5pbXBvcnQge0lHYW1lcGxheURhdGF9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTWVkaWF0b3IgZXh0ZW5kcyBNZWRpYXRvciB7XG4gICAgLyoqXG4gICAgICogQXR0ZW1wdCB0byByZXRyaWV2ZSBhbiBleGlzdGluZyBtZWRpYXRvciwgYmFzZWQgb24gdGhlIG1lZGlhdG9ycyBuYW1lLlxuICAgICAqIEBwYXJlbShuYW1lLCBzdHJpbmcpOiBUaGUgbmFtZSBvZiB0aGUgbWVkaWF0b3IgeW91IGFyZSB0cnlpbmcgdG8gcmV0cmlldmUuXG4gICAgICogQHBhcmVtKHZpZXdDb21wLCBhbnkpOiBUaGUgdmlldyBjb21wb25lbnQgeW91IHdpc2ggdG8gYmluZCB0byB0aGUgbWVkaWF0b3IgeW91IGFyZSByZXRyaWV2aW5nLlxuICAgICAqIFJldHVybnMgdGhlIG1lZGlhdG9yIGluIHF1ZXN0aW9uLCBpZiBmb3VuZCwgd2l0aCB0aGUgbmV3IHZpZXdDb21wb25lbnQgYm91bmQgdG8gaXQuIE51bGwgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmV0cmlldmVNZWRpYXRvcihuYW1lOiBzdHJpbmcsIHZpZXdDb21wOiBhbnkpOiBCYXNlTWVkaWF0b3Ige1xuICAgICAgICBsZXQgYmFzZU1lZDogQmFzZU1lZGlhdG9yID0gPEJhc2VNZWRpYXRvcj5BcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLnJldHJpZXZlTWVkaWF0b3IobmFtZSk7XG4gICAgICAgIGlmIChiYXNlTWVkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBiYXNlTWVkLl92aWV3Q29tcG9uZW50ID0gdmlld0NvbXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2VNZWQ7XG4gICAgfVxuXG4gICAgLy8gc28gYW55IG1lZGlhdG9yIGV4dGVuZGluZyBCYXNlTWVkaWF0b3IgY2FuIGdldCBjb3B5XG4gICAgcHVibGljIGdldENvcHkoZ3JvdXBJZDogc3RyaW5nLCB0ZXh0SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvcHlNb2RlbC5nZXRDb3B5KGdyb3VwSWQsIHRleHRJZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dQb3B1cChpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25zLlNIT1dfUE9QVVAsIGlkKTtcbiAgICB9XG5cdFx0XG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgLy8gb2ZmZXIgYWNjZXNzIHRvIHRoZSBHYW1lTW9kZWwgYW5kIENvcHlNb2RlbCBmcm9tIGFueSBtZWRpYXRvciBleHRlbmRpbmcgQmFzZU1lZGlhdG9yXG4gICAgcHVibGljIGdldCBnYW1lcGxheURhdGEoKTogSUdhbWVwbGF5RGF0YSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVNb2RlbC5nYW1lcGxheURhdGE7XG4gICAgfVxuIFxuICAgIHB1YmxpYyBwYXVzZUdhbWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25zLlBBVVNFX0dBTUUpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IGdhbWVNb2RlbCgpOiBHYW1lTW9kZWwge1xuICAgICAgICByZXR1cm4gPEdhbWVNb2RlbD5BcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLnJldHJpZXZlTW9kZWwoR2FtZU1vZGVsLk1PREVMX05BTUUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY29weU1vZGVsKCk6IENvcHlNb2RlbCB7XG4gICAgICAgIHJldHVybiA8Q29weU1vZGVsPkFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkucmV0cmlldmVNb2RlbChDb3B5TW9kZWwuTU9ERUxfTkFNRSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IFxuICAgICAgICByZXR1cm4gXCJiYXNlTWVkaWF0b3JfXCIgKyB0aGlzLmdhbWUucm5kLnV1aWQoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSBcImRpam9uL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQge0dyb3VwLCBOaW5lU2xpY2VJbWFnZX0gZnJvbSBcImRpam9uL2Rpc3BsYXlcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCIuLi91dGlscy9Ob3RpZmljYXRpb25zXCI7XG5pbXBvcnQgQmFzZU1lZGlhdG9yIGZyb20gXCIuLi9tZWRpYXRvci9CYXNlTWVkaWF0b3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUG9wdXAge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgc2hvdygpOiB2b2lkO1xuICAgIGhpZGUoKTogdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBvcHVwIGV4dGVuZHMgR3JvdXAgaW1wbGVtZW50cyBJUG9wdXAge1xuICAgIHByb3RlY3RlZCBfc2hvd1R3ZWVuOiBQaGFzZXIuVHdlZW47XG4gICAgcHJvdGVjdGVkIF9oaWRlVHdlZW46IFBoYXNlci5Ud2VlbjtcbiAgICBwcm90ZWN0ZWQgX3N0YXJ0UG9zaXRpb246IFBoYXNlci5Qb2ludDtcbiAgICBwcm90ZWN0ZWQgX2FsbG93SW5wdXQ6IGJvb2xlYW47XG4gICAgXG4gICAgcHVibGljIGJnOiBQaGFzZXIuSW1hZ2U7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHVibGljIGlkOiBzdHJpbmcsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApIHtcbiAgICAgICAgc3VwZXIoeCwgeSwgaWQpO1xuXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFscGhhID0gMDtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xuXG4gICAgICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIHRoaXMueSAtPSAyMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2FkZFR3ZWVucygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9hZGRNZWRpYXRvcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBidWlsZEludGVyZmFjZSgpOiB2b2lkIHsgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2hpZGVUd2Vlbi5vbkNvbXBsZXRlLnJlbW92ZUFsbCgpO1xuICAgICAgICB0aGlzLl9zaG93VHdlZW4gPSBudWxsO1xuICAgICAgICB0aGlzLl9oaWRlVHdlZW4gPSBudWxsO1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9zaG93VHdlZW4uaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xlYXJBY3RpdmVUd2VlbnMoKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2hvd1R3ZWVuLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9oaWRlVHdlZW4uaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYWxsb3dJbnB1dCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jbGVhckFjdGl2ZVR3ZWVucygpO1xuICAgICAgICB0aGlzLl9oaWRlVHdlZW4uc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2Nsb3NlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9tZWRpYXRvci5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuSElERV9QT1BVUCwgdGhpcy5pZCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9hZGRNZWRpYXRvcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbWVkaWF0b3IgPSBCYXNlUG9wdXAucmV0cmlldmVNZWRpYXRvcihCYXNlTWVkaWF0b3IuTUVESUFUT1JfTkFNRSwgdGhpcyk7XG4gICAgICAgIGlmICh0aGlzLl9tZWRpYXRvciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbWVkaWF0b3IgPSBuZXcgQmFzZU1lZGlhdG9yKHRoaXMsIHRydWUsIEJhc2VNZWRpYXRvci5NRURJQVRPUl9OQU1FKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZWdpc3RlcigpO1xuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgX2FkZFR3ZWVucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2hvd1R3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50byh7IGFscGhhOiAxLCB5OiB0aGlzLl9zdGFydFBvc2l0aW9uLnkgfSwgMzAwLCBQaGFzZXIuRWFzaW5nLkJvdW5jZS5PdXQpO1xuICAgICAgICB0aGlzLl9zaG93VHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5fc2hvd0NvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5faGlkZVR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50byh7IGFscGhhOiAwLCB5OiB0aGlzLl9zdGFydFBvc2l0aW9uLnkgKyA4MCB9LCAzMDAsIFBoYXNlci5FYXNpbmcuQ3ViaWMuSW4pO1xuICAgICAgICB0aGlzLl9oaWRlVHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5faGlkZUNvbXBsZXRlLCB0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIF9zaG93Q29tcGxldGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2FsbG93SW5wdXQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfaGlkZUNvbXBsZXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi55IC0gMjA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9zZW5kUmVzdW1lTm90aWZpY2F0aW9uKCk6IHZvaWR7XG4gICAgICAgIHRoaXMuX21lZGlhdG9yLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5SRVNVTUVfR0FNRSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9jbGVhckFjdGl2ZVR3ZWVucygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dUd2Vlbi5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dUd2Vlbi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9oaWRlVHdlZW4uaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlVHdlZW4uc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZXRyaWV2ZU1lZGlhdG9yKG5hbWU6IHN0cmluZywgdmlld0NvbXA6IGFueSk6IGFueSB7XG4gICAgICAgIHJldHVybiBCYXNlTWVkaWF0b3IucmV0cmlldmVNZWRpYXRvcihuYW1lLCB2aWV3Q29tcCk7XG4gICAgfSAgICBcbiAgICBwcm90ZWN0ZWQgX3JlZ2lzdGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9tZWRpYXRvci5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuUkVHSVNURVJfUE9QVVAsIHRoaXMpO1xuICAgIH1cbn0iLCJpbXBvcnQge1N0YXRlfSBmcm9tIFwiZGlqb24vY29yZVwiO1xuaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnZGlqb24vYXBwbGljYXRpb24nO1xuaW1wb3J0IFJIR2FtZSBmcm9tICcuLi9SSEdhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XG5cbiAgICBwdWJsaWMgZ2V0IGdhbWUoKTogUkhHYW1lIHtcbiAgICAgICAgcmV0dXJuPFJIR2FtZT5BcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWU7XG4gICAgfVxufSIsImltcG9ydCB7SU5vdGlmaWNhdGlvbn0gZnJvbSAnZGlqb24vaW50ZXJmYWNlcyc7XG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSBcIi4uL3V0aWxzL0dsb2JhbHNcIjtcbmltcG9ydCBCYXNlTWVkaWF0b3IgZnJvbSAnLi9CYXNlTWVkaWF0b3InO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vdXRpbHMvTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgR2FtZXBsYXkgZnJvbSAnLi4vc3RhdGUvR2FtZXBsYXknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lcGxheU1lZGlhdG9yIGV4dGVuZHMgQmFzZU1lZGlhdG9yIHtcbiAgICBwdWJsaWMgc3RhdGljIE1FRElBVE9SX05BTUU6IHN0cmluZyA9ICdnYW1lcGxheU1lZGlhdG9yJztcblx0XHRcbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBOb3RpZmljYXRpb25zLkJFR0lOX0dBTUUsXG4gICAgICAgICAgICBOb3RpZmljYXRpb25zLlBBVVNFX0dBTUUsXG4gICAgICAgICAgICBOb3RpZmljYXRpb25zLlJFU1VNRV9HQU1FLFxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucy5DT1VOVERPV05fQ09NUExFVEUsXG4gICAgICAgICAgICBOb3RpZmljYXRpb25zLkdBTUVfT1ZFUiwgXG4gICAgICAgICAgICBOb3RpZmljYXRpb25zLkJBQ0tfVE9fTUVOVSwgXG4gICAgICAgICAgICBOb3RpZmljYXRpb25zLlJFU1RBUlRfUlVOLFxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucy5BVURJT19UT0dHTEVEXG4gICAgICAgICBdO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IG5vdGVOYW1lID0gbm90aWZpY2F0aW9uLmdldE5hbWUoKTtcbiAgICAgICAgY29uc3Qgbm90ZUJvZHkgPSBub3RpZmljYXRpb24uZ2V0Qm9keSgpO1xuICAgICAgICBzd2l0Y2ggKG5vdGVOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIE5vdGlmaWNhdGlvbnMuR0FNRV9PVkVSOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU1vZGVsLmlzT25GaXJzdFJ1biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25zLkJFR0lOX0dBTUU6XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lcGxheS5zdGFydFJvdW5kKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE5vdGlmaWNhdGlvbnMuUEFVU0VfR0FNRTpcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVwbGF5LnRvZ2dsZVBhdXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25zLlJFU1VNRV9HQU1FOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXBsYXkudG9nZ2xlUGF1c2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIE5vdGlmaWNhdGlvbnMuUkVTVEFSVF9SVU46XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnRyYW5zaXRpb24udG8oQ29uc3RhbnRzLlNUQVRFX0dBTUUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGNhc2UgTm90aWZpY2F0aW9ucy5CQUNLX1RPX01FTlU6ICAgXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnRyYW5zaXRpb24udG8oQ29uc3RhbnRzLlNUQVRFX0dBTUUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25zLkNPVU5URE9XTl9DT01QTEVURTpcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVwbGF5LnRvZ2dsZVBhdXNlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTm90aWZpY2F0aW9ucy5BVURJT19UT0dHTEVEOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZXBsYXkudG9nZ2xlQkdNdXNpYygpO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIGFkZFBvcHVwcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuQUREX0FMTF9QT1BVUFMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93T3B0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93UG9wdXAoQ29uc3RhbnRzLlBPUFVQX09QVElPTlMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBub3RpZnlHYW1lT3ZlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuR0FNRV9PVkVSKTtcbiAgICAgICAgdGhpcy5zaG93UG9wdXAoQ29uc3RhbnRzLlBPUFVQX0VOREdBTUUpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgYWZ0ZXJHYW1lQnVpbHQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVNb2RlbC5yZXN0YXJ0aW5nUnVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93UG9wdXAoQ29uc3RhbnRzLlBPUFVQX0JFR0lOR0FNRSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5CRUdJTl9HQU1FKTtcbiAgICAgICAgfVxuICAgIH1cblx0XHRcbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiBHYW1lcGxheU1lZGlhdG9yLk1FRElBVE9SX05BTUU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBnYW1lcGxheSgpOiBHYW1lcGxheSB7XG4gICAgICAgIHJldHVybiA8R2FtZXBsYXk+dGhpcy5fdmlld0NvbXBvbmVudDtcbiAgICB9XG59IiwiaW1wb3J0IHtJTm90aWZpY2F0aW9ufSBmcm9tICdkaWpvbi9pbnRlcmZhY2VzJztcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tIFwiLi4vdXRpbHMvR2xvYmFsc1wiO1xuaW1wb3J0IEJhc2VNZWRpYXRvciBmcm9tICcuL0Jhc2VNZWRpYXRvcic7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuLi91dGlscy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBIVUQgZnJvbSAnLi4vdWkvSFVEJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFVETWVkaWF0b3IgZXh0ZW5kcyBCYXNlTWVkaWF0b3Ige1xuICAgIHB1YmxpYyBzdGF0aWMgTUVESUFUT1JfTkFNRTogc3RyaW5nID0gJ0hVRE1lZGlhdG9yJztcblxuICAgIGNvbnN0cnVjdG9yKHZpZXdDb21wOiBhbnkpIHtcbiAgICAgICAgc3VwZXIodmlld0NvbXAsIHRydWUsIEhVRE1lZGlhdG9yLk1FRElBVE9SX05BTUUpO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgTm90aWZpY2F0aW9ucy5CRUdJTl9HQU1FLFxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucy5DT1VOVERPV05fQ09NUExFVEUsXG4gICAgICAgICAgICBOb3RpZmljYXRpb25zLlNIT1dfUkVNSU5ERVIsIFxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucy5ESVNNSVNTX1JFTUlOREVSLFxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucy5SRVFVRVNUX1RVVE9SSUFMLCBcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnMuVFVUT1JJQUxfUkVTT0xWRUQsXG4gICAgICAgICAgICBOb3RpZmljYXRpb25zLlNIT1dfUE9QVVBcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogSU5vdGlmaWNhdGlvbikge1xuICAgICAgICBjb25zdCBub3RlTmFtZSA9IG5vdGlmaWNhdGlvbi5nZXROYW1lKCk7XG4gICAgICAgIGNvbnN0IG5vdGVCb2R5ID0gbm90aWZpY2F0aW9uLmdldEJvZHkoKTtcblxuICAgICAgICBzd2l0Y2ggKG5vdGVOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIE5vdGlmaWNhdGlvbnMuQkVHSU5fR0FNRTpcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25zLkNPVU5URE9XTl9DT01QTEVURTpcbiAgICAgICAgICAgICAgICB0aGlzLmh1ZC5zaG93TWFpbkhVRCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIE5vdGlmaWNhdGlvbnMuUkVRVUVTVF9UVVRPUklBTDpcbiAgICAgICAgICAgICAgICB0aGlzLmh1ZC50dXRvcmlhbE9uU2NyZWVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgTm90aWZpY2F0aW9ucy5UVVRPUklBTF9SRVNPTFZFRDpcbiAgICAgICAgICAgICAgICB0aGlzLmh1ZC50dXRvcmlhbE9uU2NyZWVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgTm90aWZpY2F0aW9ucy5TSE9XX1BPUFVQOiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgTm90aWZpY2F0aW9ucy5ESVNNSVNTX1JFTUlOREVSOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNvdW50ZG93bkNvbXBsZXRlKCk6IHZvaWQgeyBcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuQ09VTlRET1dOX0NPTVBMRVRFKTtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICBwcm90ZWN0ZWQgZ2V0IGh1ZCgpOiBIVUQge1xuICAgICAgICByZXR1cm4gPEhVRD50aGlzLl92aWV3Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIEhVRE1lZGlhdG9yLk1FRElBVE9SX05BTUU7XG4gICAgfVxufSIsImltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnZGlqb24vYXBwbGljYXRpb24nO1xuaW1wb3J0IHtHYW1lfSBmcm9tICdkaWpvbi9jb3JlJztcbmltcG9ydCB7IFRleHQgfSBmcm9tICdkaWpvbi9kaXNwbGF5JztcbmltcG9ydCB7IFNldHRpbmdzLCBDb25zdGFudHMgfSBmcm9tICcuLi91dGlscy9HbG9iYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUkhCdXR0b24gZXh0ZW5kcyBQaGFzZXIuQnV0dG9uIHtcblxuICAgIHByb3RlY3RlZCBfb3ZlclNvdW5kOiBzdHJpbmcgPSBudWxsO1xuICAgIHByb3RlY3RlZCBfZG93blNvdW5kOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNhbGxiYWNrOiBhbnksIGNvbnRleHQ6IGFueSwgYXNzZXRLZXk6IHN0cmluZywgYmFzZUZyYW1lOiBzdHJpbmcsIG92ZXJGcmFtZT86IHN0cmluZywgZG93bkZyYW1lPzogc3RyaW5nLCB1cEZyYW1lPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKEFwcGxpY2F0aW9uLmdldEluc3RhbmNlKCkuZ2FtZSxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgYXNzZXRLZXksXG4gICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBvdmVyRnJhbWUgPyBvdmVyRnJhbWUgOiBiYXNlRnJhbWUsXG4gICAgICAgICAgICBiYXNlRnJhbWUsXG4gICAgICAgICAgICBkb3duRnJhbWUgPyBkb3duRnJhbWUgOiBiYXNlRnJhbWUsXG4gICAgICAgICAgICB1cEZyYW1lID8gdXBGcmFtZSA6IGJhc2VGcmFtZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlucHV0LnVzZUhhbmRDdXJzb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmZvcmNlT3V0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZUZyb21EYXRhKGRhdGE6IGFueSk6IFJIQnV0dG9uIHtcbiAgICAgICAgbGV0IHNlbGY6IFJIQnV0dG9uID0gbmV3IFJIQnV0dG9uKGRhdGEucG9zaXRpb24ueCwgZGF0YS5wb3NpdGlvbi55LCBudWxsLCBudWxsLCBkYXRhLmtleSwgZGF0YS5mcmFtZSwgZGF0YS5vdmVyRnJhbWUsIGRhdGEuZG93bkZyYW1lLCBkYXRhLnVwRnJhbWUpO1xuICAgICAgICBzZWxmLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgIGlmIChkYXRhLmFuY2hvcikge1xuICAgICAgICAgICAgc2VsZi5hbmNob3Iuc2V0VG8oZGF0YS5hbmNob3IueCwgZGF0YS5hbmNob3IueSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuc2NhbGUpIHtcbiAgICAgICAgICAgIHNlbGYuc2NhbGUuc2V0VG8oZGF0YS5zY2FsZS54LCBkYXRhLnNjYWxlLnkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzZWxmLmFscGhhID0gZGF0YS5hbHBoYSA/IGRhdGEuYWxwaGEgOiAxO1xuICAgICAgICBzZWxmLmFuZ2xlID0gZGF0YS5hbmdsZSA/IGRhdGEuYW5nbGUgOiAwO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXNzaWduUHJlZmFiKG9iamVjdDogYW55KSB7IFxuICAgICAgICAvLyBPdmVycmlkZSB0aGlzIHRvIGhhbmRsZSBhc3NpZ25tZW50IG9mIGNoaWxkIHByZWZhYnMuXG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCBfb25Eb3duVHJpZ2dlcmVkKCk6IHZvaWQgeyB9ICAgXG5cbiAgICBwdWJsaWMgb25JbnB1dERvd25IYW5kbGVyKHNwcml0ZTogYW55LCBwb2ludGVyOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5vbklucHV0RG93bkhhbmRsZXIoc3ByaXRlLCBwb2ludGVyKTtcbiAgICAgICAgaWYgKFNldHRpbmdzLlNGWF9FTkFCTEVEID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmRnYW1lLmF1ZGlvLnBsYXlBdWRpbyh0aGlzLmRvd25Tb3VuZCwgMC41KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vbkRvd25UcmlnZ2VyZWQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JbnB1dE92ZXJIYW5kbGVyKHNwcml0ZTogYW55LCBwb2ludGVyOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5vbklucHV0T3ZlckhhbmRsZXIoc3ByaXRlLCBwb2ludGVyKTtcbiAgICAgICAgaWYgKFNldHRpbmdzLlNGWF9FTkFCTEVEID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmRnYW1lLmF1ZGlvLnBsYXlBdWRpbyh0aGlzLm92ZXJTb3VuZCwgMC41KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbklucHV0T3V0SGFuZGxlcihzcHJpdGU6IGFueSwgcG9pbnRlcjogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0LmVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25JbnB1dE91dEhhbmRsZXIoc3ByaXRlLCBwb2ludGVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JbnB1dFVwSGFuZGxlcihzcHJpdGU6IGFueSwgcG9pbnRlcjogYW55LCBpc092ZXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5vbklucHV0VXBIYW5kbGVyKHNwcml0ZSwgcG9pbnRlciwgaXNPdmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQmFzZUZyYW1lKG5ld0ZyYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRGcmFtZXMobmV3RnJhbWUgKyBcIl9ob3ZlclwiLCBuZXdGcmFtZSArIFwiX25vcm1hbFwiLCBuZXdGcmFtZSArICdfZG93bicsIG5ld0ZyYW1lICsgXCJfbm9ybWFsXCIpO1xuICAgIH0gICBcbiAgICBcbiAgICBwdWJsaWMgZ2V0IGRvd25Tb3VuZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZG93blNvdW5kICE9PSBudWxsID8gdGhpcy5fZG93blNvdW5kIDogQ29uc3RhbnRzLlVJX0RPV05fU09VTkQ7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgb3ZlclNvdW5kKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vdmVyU291bmQgIT09IG51bGwgPyB0aGlzLl9vdmVyU291bmQgOiBDb25zdGFudHMuVUlfT1ZFUl9TT1VORDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRvd25Tb3VuZCh2YWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kb3duU291bmQgPSB2YWw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBvdmVyU291bmQodmFsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fb3ZlclNvdW5kID0gdmFsO1xuICAgIH1cbiAgICAgICAgXG4gICAgcHVibGljIGdldCBkZ2FtZSgpOiBHYW1lIHtcbiAgICAgICAgcmV0dXJuIDxHYW1lPnRoaXMuZ2FtZTtcbiAgICB9XG59IiwiaW1wb3J0IHtHcm91cCwgU3ByaXRlLCBCaXRtYXBUZXh0fSBmcm9tICdkaWpvbi9kaXNwbGF5JztcbmltcG9ydCB7Q29sb3VycywgQ29uc3RhbnRzfSBmcm9tICcuLi91dGlscy9HbG9iYWxzJztcbmltcG9ydCBIVURNZWRpYXRvciBmcm9tICcuLi9tZWRpYXRvci9IVURNZWRpYXRvcic7XG5pbXBvcnQgUkhCdXR0b24gZnJvbSAnLi4vcHJlZmFicy9SSEJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhVRCBleHRlbmRzIEdyb3VwIHtcbiAgICBcbiAgICBwdWJsaWMgc3RhdGljIFRXRUVOX1RJTUU6IG51bWJlciA9IDMwMDtcbiAgICBcbiAgICBwdWJsaWMgdHV0b3JpYWxPblNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLy8gcGF1c2UgYnV0dG9uXG4gICAgcHJpdmF0ZSBfcGF1c2VCdXR0b246IFJIQnV0dG9uO1xuICAgIHByaXZhdGUgX3BhdXNlQnV0dG9uQ29ubmVjdG9yczogUGhhc2VyLkltYWdlO1xuXG4gICAgLy8gdGltZSBkaXNwbGF5XG4gICAgcHJpdmF0ZSBfdGltZVRleHQ6IEJpdG1hcFRleHQ7XG4gICAgcHJpdmF0ZSBfdGltZUJHOiBQaGFzZXIuSW1hZ2U7XG4gICAgXG4gICAgLy8gdHdlZW5zXG4gICAgcHJpdmF0ZSBfcGF1c2VCdXR0b25Ud2VlbjogUGhhc2VyLlR3ZWVuO1xuICAgIHByaXZhdGUgX3BhdXNlQ29ubmVjdGVyVHdlZW46IFBoYXNlci5Ud2VlbjtcbiAgICBwcml2YXRlIF90aW1lVGV4dFR3ZWVuOiBQaGFzZXIuVHdlZW47XG4gICAgcHJpdmF0ZSBfZGlzdGFuY2VCR1R3ZWVuOiBQaGFzZXIuVHdlZW47XG5cbiAgICAvLyB2aXN1YWwgZWZmZWN0c1xuICAgIHByaXZhdGUgX2l0ZW1WaXN1YWxzOiBQaGFzZXIuR3JvdXA7XG5cbmNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigwLCAwLCAnSFVEJyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuYnVpbGRJbnRlcmZhY2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbWVkaWF0b3IgPSBIVURNZWRpYXRvci5yZXRyaWV2ZU1lZGlhdG9yKEhVRE1lZGlhdG9yLk1FRElBVE9SX05BTUUsIHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5fbWVkaWF0b3IgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX21lZGlhdG9yID0gbmV3IEhVRE1lZGlhdG9yKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZHtcbiAgICAgICAgdGhpcy5fbWVkaWF0b3IuZGVzdHJveSgpO1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGJ1aWxkSW50ZXJmYWNlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9hZGRUaW1lRGlzcGxheSgpO1xuICAgICAgICB0aGlzLl9hZGRQYXVzZUJ1dHRvbigpO1xuICAgICAgICB0aGlzLl9hZGRFZmZlY3RzR3JvdXAoKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgbWV0aG9kcyBjYWxsZWQgZnJvbSBIVURNZWRpYXRvclxuICAgIHB1YmxpYyBzaG93TWFpbkhVRCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93VGltZXIoKTtcbiAgICAgICAgdGhpcy5zaG93UGF1c2VCdXR0b24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1BhdXNlQnV0dG9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXVzZUNvbm5lY3RlclR3ZWVuLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX3BhdXNlQnV0dG9uVHdlZW4uc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1RpbWVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9kaXN0YW5jZUJHVHdlZW4uc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fdGltZVRleHRUd2Vlbi5zdGFydCgpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgdXBkYXRlVGltZShyZW1haW5pbmc6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgbWludXRlczogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IHNlY29uZHM6IG51bWJlciA9IHJlbWFpbmluZyAlIDYwO1xuICAgICAgICBpZiAocmVtYWluaW5nID4gNTkpIHtcbiAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKHJlbWFpbmluZyAvIDYwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fdGltZVRleHQudGV4dCA9IChtaW51dGVzIDwgMTAgPyAnMCcgKyBtaW51dGVzLnRvU3RyaW5nKCkgOiBtaW51dGVzLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICArIFwiOlwiICsgKHNlY29uZHMgPCAxMCA/ICcwJyArIHNlY29uZHMudG9TdHJpbmcoKSA6IHNlY29uZHMudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgICAgICBcbiAgICBwcml2YXRlIF90b2dnbGVQYXVzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZWRpYXRvci5wYXVzZUdhbWUoKTtcbiAgICB9XG5cbiAgICAvLyBwYXVzZSBidXR0b25cbiAgICBwcml2YXRlIF9hZGRQYXVzZUJ1dHRvbigpOiB2b2lkIHtcbiAgICAvLyAgICB0aGlzLl9wYXVzZUJ1dHRvbkNvbm5lY3RvcnMgPSB0aGlzLmFkZEludGVybmFsLmltYWdlKHRoaXMuZ2FtZS53aWR0aCAqIDAuOTUsIHRoaXMuZ2FtZS5oZWlnaHQgKiAtMC4xNSwgJ3VpJywgJ3BhdXNlX2J1dHRvbl9jb25uZWN0b3InKTtcblxuICAgICAgICB0aGlzLl9wYXVzZUJ1dHRvbiA9IG5ldyBSSEJ1dHRvbih0aGlzLmdhbWUud2lkdGggKiAwLjkzNywgdGhpcy5nYW1lLmhlaWdodCAqIC0wLjE5LCB0aGlzLl90b2dnbGVQYXVzZSwgdGhpcywgJ3VpJywgJ3BhdXNlX2ljb24nKTtcbiAgICAgICAgdGhpcy5hZGRJbnRlcm5hbC5leGlzdGluZyh0aGlzLl9wYXVzZUJ1dHRvbik7XG5cbiAgICAvLyAgICB0aGlzLl9wYXVzZUNvbm5lY3RlclR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLl9wYXVzZUJ1dHRvbkNvbm5lY3RvcnMpLnRvKHsgeDogdGhpcy5nYW1lLndpZHRoICogMC45NSwgeTogdGhpcy5nYW1lLmhlaWdodCAqIDAuMDUgfSwgSFVELlRXRUVOX1RJTUUsIFBoYXNlci5FYXNpbmcuQmFjay5PdXQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fcGF1c2VCdXR0b25Ud2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5fcGF1c2VCdXR0b24pLnRvKHsgeDogdGhpcy5nYW1lLndpZHRoICogMC45MzcsIHk6IHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjA5IH0sIEhVRC5UV0VFTl9USU1FLCBQaGFzZXIuRWFzaW5nLkJhY2suT3V0LCBmYWxzZSk7XG5cbiAgICAgLy8gICB0aGlzLl9wYXVzZUJ1dHRvbkNvbm5lY3RvcnMuYW5jaG9yLnNldCgwLjUpO1xuICAgICAgICB0aGlzLl9wYXVzZUJ1dHRvbi5hbmNob3Iuc2V0KDAuNSk7XG4gICAgfVxuXG4gICAgLy8gZGlzdGFuY2VcbiAgICBwcml2YXRlIF9hZGRUaW1lRGlzcGxheSgpOiB2b2lkIHtcbiAgICAvLyAgICB0aGlzLl90aW1lQkcgPSB0aGlzLmFkZEludGVybmFsLmltYWdlKDAsIHRoaXMuZ2FtZS5oZWlnaHQgKiAtMC4xNSwgJ3VpJywgJ3RpbWVyX2JnJyk7XG4gICAgICAgIHRoaXMuX3RpbWVCRy54ID0gdGhpcy5fdGltZUJHLnJlYWxXaWR0aCAqIDAuNTtcbiAgICAgICAgdGhpcy5fdGltZUJHLmNlbnRlclBpdm90KCk7XG5cbiAgICAgICAgLy8gVGV4dFxuICAgICAgICB0aGlzLl90aW1lVGV4dCA9IG5ldyBCaXRtYXBUZXh0KHRoaXMuX3RpbWVCRy54ICsgNDAsIHRoaXMuZ2FtZS5oZWlnaHQgKiAtMC4xNSAtIDMwLCBDb25zdGFudHMuRk9OVF9WVDMyMywgJzAwOjAwJywgKHRoaXMuZ2FtZS5yZXNvbHV0aW9uID4gMS41KT8yNjo1MiwnY2VudGVyJywweGZmZmZmZik7XG4gICAgICAgIHRoaXMuYWRkSW50ZXJuYWwuZXhpc3RpbmcodGhpcy5fdGltZVRleHQpO1xuICAgICAgICB0aGlzLl90aW1lVGV4dC5hbmNob3Iuc2V0KDAuNSwgMCk7XG5cbiAgICAgICAgdGhpcy5fZGlzdGFuY2VCR1R3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLl90aW1lQkcpLnRvKHsgeTogdGhpcy5fdGltZUJHLnJlYWxIZWlnaHQgKiAwLjUgfSwgSFVELlRXRUVOX1RJTUUsIFBoYXNlci5FYXNpbmcuQmFjay5PdXQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fdGltZVRleHRUd2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5fdGltZVRleHQpLnRvKHsgeTogdGhpcy5fdGltZUJHLnJlYWxIZWlnaHQgKiAwLjUgLSAxOX0sIEhVRC5UV0VFTl9USU1FLCBQaGFzZXIuRWFzaW5nLkJhY2suT3V0LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRkRWZmZWN0c0dyb3VwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9pdGVtVmlzdWFscyA9IHRoaXMuYWRkSW50ZXJuYWwuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5faXRlbVZpc3VhbHMuY3JlYXRlTXVsdGlwbGUoNiwgJ3VpJywgJ2dyZXlfY3Jvc3MnKTtcbiAgICAgICAgdGhpcy5faXRlbVZpc3VhbHMuc2V0QWxsQ2hpbGRyZW4oJ2FuY2hvci54JywgMC41KTtcbiAgICAgICAgdGhpcy5faXRlbVZpc3VhbHMuc2V0QWxsQ2hpbGRyZW4oJ2FuY2hvci55JywgMC41KTtcbiAgICAgICAgdGhpcy5faXRlbVZpc3VhbHMuY2FsbEFsbCgna2lsbCcsIG51bGwpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgbWVkaWF0b3IoKTogSFVETWVkaWF0b3Ige1xuICAgICAgICByZXR1cm4gPEhVRE1lZGlhdG9yPnRoaXMuX21lZGlhdG9yO1xuICAgIH1cbn0iLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tICdkaWpvbi9hcHBsaWNhdGlvbic7XG5cbi8vIEEgYmFzaWMgdGltZXIsIG9wdGlvbmFsbHkgY2FuIGJlIGdpdmVuIGEgbWF4IHRpbWUgdG8gcnVuLlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIgZXh0ZW5kcyBQaGFzZXIuSW1hZ2Uge1xuXG4gICAgcHJvdGVjdGVkIF9lbGFwc2VkU2Vjb25kczogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfZWxhcHNlZE1TOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9ydW5uaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIF9jb3VudEZ1bmM6IGFueTtcblxuICAgIHB1YmxpYyBvbkNvbXBsZXRlOiBQaGFzZXIuU2lnbmFsO1xuICAgIHB1YmxpYyBvblBhdXNlOiBQaGFzZXIuU2lnbmFsO1xuICAgIHB1YmxpYyBvblJlc3VtZTogUGhhc2VyLlNpZ25hbDtcbiAgICBwdWJsaWMgb25UaWNrOiBQaGFzZXIuU2lnbmFsO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUsIC0xMDAsIC0xMDAsIG51bGwpO1xuICAgICAgICB0aGlzLl9lbGFwc2VkTVMgPSAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICAgICAgdGhpcy5vblBhdXNlID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICAgICAgdGhpcy5vblJlc3VtZSA9IG5ldyBQaGFzZXIuU2lnbmFsKCk7XG4gICAgICAgIHRoaXMub25UaWNrID0gbmV3IFBoYXNlci5TaWduYWwoKTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCBrZXkgdmFsdWVzLCBkb2VzIG5vdCBzdGFydC9zdG9wIHRoZSB0aW1lci4gICAgXG4gICAgcHVibGljIHJlc2V0VGltZSh0aW1lQWxsb3dlZD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9lbGFwc2VkTVMgPSAwO1xuICAgICAgICBpZiAodGltZUFsbG93ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvdW50RnVuYyA9IHRoaXMudXBkYXRlU2Vjb25kc1JlbWFpbmluZztcbiAgICAgICAgICAgIHRoaXMuX2VsYXBzZWRTZWNvbmRzID0gdGltZUFsbG93ZWQ7XG4gICAgICAgICAgICB0aGlzLl9lbGFwc2VkTVMgPSB0aW1lQWxsb3dlZCAqIDEwMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9jb3VudEZ1bmMgPSB0aGlzLnVwZGF0ZVNlY29uZHNFbGFwc2VkO1xuICAgICAgICAgICAgdGhpcy5fZWxhcHNlZFNlY29uZHMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25UaWNrLmRpc3BhdGNoKHRoaXMuX2VsYXBzZWRTZWNvbmRzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fcnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5fY291bnRGdW5jLmNhbGwodGhpcywgdGhpcy5nYW1lLnRpbWUuZWxhcHNlZE1TKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgdXBkYXRlU2Vjb25kc0VsYXBzZWQoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9lbGFwc2VkTVMgKz0gZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLl9lbGFwc2VkTVMgPiB0aGlzLl9lbGFwc2VkU2Vjb25kcyAqIDEwMDApIHtcbiAgICAgICAgICAgIHRoaXMuX2VsYXBzZWRTZWNvbmRzICs9IDE7XG4gICAgICAgICAgICB0aGlzLm9uVGljay5kaXNwYXRjaCh0aGlzLl9lbGFwc2VkU2Vjb25kcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU2Vjb25kc1JlbWFpbmluZyhkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2VsYXBzZWRNUyAtPSBkZWx0YTtcbiAgICAgICAgaWYgKHRoaXMuX2VsYXBzZWRNUyA8IHRoaXMuX2VsYXBzZWRTZWNvbmRzICogMTAwMCkge1xuICAgICAgICAgICAgdGhpcy5fZWxhcHNlZFNlY29uZHMgLT0gMTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbGFwc2VkU2Vjb25kcyA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGljay5kaXNwYXRjaCh0aGlzLl9lbGFwc2VkU2Vjb25kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUuZGlzcGF0Y2godGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGlzcGF0Y2hUaW1lVXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Db21wbGV0ZS5kaXNwYXRjaCgpO1xuICAgIH1cblxuICAgIFxuICAgIHB1YmxpYyBzZXQgcGF1c2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3J1bm5pbmcgPSAhdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLl9ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm9uUmVzdW1lLmRpc3BhdGNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uUGF1c2UuZGlzcGF0Y2goKTtcbiAgICAgICAgfVxuICAgIH0gICBcblxuICAgIHB1YmxpYyBnZXQgcGF1c2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuX3J1bm5pbmc7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXQgZWxhcHNlZFRpbWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsYXBzZWRTZWNvbmRzO1xuICAgIH0gICAgICBcbn0iLCJpbXBvcnQgQmFzZVN0YXRlIGZyb20gXCIuL0Jhc2VTdGF0ZVwiO1xuaW1wb3J0IEdhbWVwbGF5TWVkaWF0b3IgZnJvbSAnLi4vbWVkaWF0b3IvR2FtZXBsYXlNZWRpYXRvcic7XG5pbXBvcnQge0NvbnN0YW50cywgQ29sb3VycywgU2V0dGluZ3N9IGZyb20gJy4uL3V0aWxzL0dsb2JhbHMnO1xuaW1wb3J0IHtQbGFjZWhvbGRlcnN9IGZyb20gJ2Rpam9uL3V0aWxzJztcbmltcG9ydCB7R3JvdXAsIFNwcml0ZSwgVGV4dH0gZnJvbSAnZGlqb24vZGlzcGxheSc7XG5pbXBvcnQgSFVEIGZyb20gJy4uL3VpL0hVRCc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi4vdWkvVGltZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lcGxheSBleHRlbmRzIEJhc2VTdGF0ZSB7XG5cbiAgICBwdWJsaWMgdGltZXI6IFRpbWVyO1xuXG4gICAgcHJvdGVjdGVkIF9wYXVzZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHJvdGVjdGVkIF9iZ0xheWVyOiBHcm91cDtcbiAgICBwcm90ZWN0ZWQgX2dhbWVMYXllcjogR3JvdXA7XG4gICAgcHJvdGVjdGVkIF9idXR0b25MYXllcjogR3JvdXA7XG4gICAgcHJvdGVjdGVkIF9wYXRyb25zOiBHcm91cDtcblxuICAgIHByb3RlY3RlZCBfaHVkOiBIVUQ7XG5cbiAgICBwcm90ZWN0ZWQgX2JnTG9vcDogUGhhc2VyLlNvdW5kID0gbnVsbDsgICAgXG4gICAgLy8gUGhhc2VyLlN0YXRlIG92ZXJyaWRlc1xuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICB0aGlzLl9tZWRpYXRvciA9IEdhbWVwbGF5TWVkaWF0b3IucmV0cmlldmVNZWRpYXRvcihHYW1lcGxheU1lZGlhdG9yLk1FRElBVE9SX05BTUUsIHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5fbWVkaWF0b3IgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX21lZGlhdG9yID0gbmV3IEdhbWVwbGF5TWVkaWF0b3IodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWUub25QYXVzZS5hZGQodGhpcy5fZ2FtZUxvc3RGb2N1cywgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZS5vblJlc3VtZS5hZGQodGhpcy5fZ2FtZUdhaW5lZEZvY3VzLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0LmxvYWRBc3NldHMoJ2dhbWVwbGF5Jyk7XG4gICAgfVxuXG4gICAgLy8gZGlqb24uY29yZS5TdGF0ZSBvdmVycmlkZXNcbiAgICBwdWJsaWMgbGlzdEJ1aWxkU2VxdWVuY2UoKSB7XG4gICAgICAgIHJldHVybiBbIFxuICAgICAgICAgICAgdGhpcy5fYWRkTGF5ZXJzLCBcbiAgICAgICAgICAgIC8vIHRoaXMuX2FkZFBvcHVwcywgXG4gICAgICAgICAgICAvLyB0aGlzLl9hZGRIVUQsXG4gICAgICAgICAgICAvLyB0aGlzLl9idWlsZExldmVsXG4gICAgICAgIF1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWZ0ZXJCdWlsZCgpIHtcbiAgICAgICAgc3VwZXIuYWZ0ZXJCdWlsZCgpO1xuICAgICAgICB0aGlzLl9wcmVTdGFydFNldHVwKCk7XG4gICAgICAgIHRoaXMubWVkaWF0b3IuYWZ0ZXJHYW1lQnVpbHQoKTtcbiAgICAgICAgaWYgKHRoaXMuX2JnTG9vcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fYmdMb29wID0gdGhpcy5nYW1lLmF1ZGlvLnBsYXlTb3VuZChDb25zdGFudHMuTVVTSUNfTE9PUCwgMCwgdHJ1ZSk7XG4gICAgICAgIH0gICAgXG4gICAgICAgIGlmIChTZXR0aW5ncy5TRlhfRU5BQkxFRCkge1xuICAgICAgICAgICAgdGhpcy5fYmdMb29wLmZhZGVUbygzMDAwLCBTZXR0aW5ncy5NVVNJQ19WT0xVTUUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0Um91bmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZXBsYXlMYXllcnNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aW1lci5yZXNldFRpbWUoMTAwKTtcbiAgICB9IFxuICAgIFxuICAgIHB1YmxpYyByZXN0YXJ0UnVuKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wcmVTdGFydFNldHVwKCk7XG4gICAgICAgIHRoaXMubWVkaWF0b3IuYWZ0ZXJHYW1lQnVpbHQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlUGF1c2Uoc2hvd09wdGlvbnM6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BhdXNlZCA9ICF0aGlzLl9wYXVzZWQ7XG4gICAgICAgIHRoaXMudGltZXIucGF1c2VkID0gdGhpcy5fcGF1c2VkO1xuICAgICAgICBpZiAodGhpcy5fcGF1c2VkID09PSB0cnVlICYmIHNob3dPcHRpb25zID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLm1lZGlhdG9yLnNob3dPcHRpb25zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlQkdNdXNpYygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fYmdMb29wLnZvbHVtZSA9IFNldHRpbmdzLlNGWF9FTkFCTEVEID8gU2V0dGluZ3MuTVVTSUNfVk9MVU1FIDogMDtcbiAgICB9ICAgXG4gICAgXG4gICAgLy8gUHJpdmF0ZS9Qcm90ZWN0ZWQgICAgXG4gICAgcHJvdGVjdGVkIF9nYW1lTG9zdEZvY3VzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5nYW1lcGxheUxheWVyc1Zpc2libGUgPT09IHRydWUgJiYgdGhpcy5fcGF1c2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5tZWRpYXRvci5wYXVzZUdhbWUoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zb3VuZC5tdXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2FtZUdhaW5lZEZvY3VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWUuc291bmQubXV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfcHJlU3RhcnRTZXR1cCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lcGxheUxheWVyc1Zpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX29uU2Vjb25kRWxhcHNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faHVkLnVwZGF0ZVRpbWUodGhpcy50aW1lci5lbGFwc2VkVGltZSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgX2VuZE9mUm91bmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2h1ZC51cGRhdGVUaW1lKDApO1xuICAgICAgICB0aGlzLl9wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1lZGlhdG9yLm5vdGlmeUdhbWVPdmVyKCk7XG4gICAgfSAgIFxuXG4gICAgLy8gQnVpbGQgU2VxdWVuY2VcbiAgICBwcml2YXRlIF9hZGRMYXllcnMoKTogdm9pZCB7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMuYWRkLmRUZXh0KHRoaXMuZ2FtZS53aWR0aCAqIDAuNSwgdGhpcy5nYW1lLmhlaWdodCAqIDAuNSwgJ01haW4gTWVudScsIENvbnN0YW50cy5GT05UX1ZUMzIzLCAzMCwgQ29sb3Vycy5DT1BZX0dSRVksICdjZW50ZXInKTtcbiAgICAgICAgbGFiZWwuc2V0UGl2b3QoJ2NlbnRlcicpO1xuICAgICAgICB0aGlzLl9iZ0xheWVyID0gdGhpcy5hZGQuZEdyb3VwKDAsIDAsICdnYW1lQkcnKTtcbiAgICAgICAgdGhpcy5fZ2FtZUxheWVyID0gdGhpcy5hZGQuZEdyb3VwKDAsIDAsICdnYW1lJyk7XG4gICAgICAgIHRoaXMuX2J1dHRvbkxheWVyID0gdGhpcy5nYW1lLmFkZC5kR3JvdXAoMCwgMCwgJ3VpTGF5ZXInKTtcbiAgICAgICAgdGhpcy5nYW1lcGxheUxheWVyc1Zpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGRQb3B1cHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWVkaWF0b3IuYWRkUG9wdXBzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWRkSFVEKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9odWQgPSBuZXcgSFVEKCk7XG4gICAgICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuX2h1ZCk7XG5cbiAgICAgICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcigpO1xuICAgICAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLnRpbWVyKTtcblxuICAgICAgICB0aGlzLnRpbWVyLm9uVGljay5hZGQodGhpcy5fb25TZWNvbmRFbGFwc2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy50aW1lci5vbkNvbXBsZXRlLmFkZCh0aGlzLl9lbmRPZlJvdW5kLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9idWlsZExldmVsKCk6IHZvaWQge1xuICAgICAgIFxuICAgIH1cblxuICAgIC8vIEdldHRlci9TZXR0ZXJzXG4gICAgcHJvdGVjdGVkIGdldCBnYW1lcGxheUxheWVyc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lTGF5ZXIudmlzaWJsZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0IGdhbWVwbGF5TGF5ZXJzVmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9iZ0xheWVyLnZpc2libGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fZ2FtZUxheWVyLnZpc2libGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fYnV0dG9uTGF5ZXIudmlzaWJsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgbWVkaWF0b3IoKTogR2FtZXBsYXlNZWRpYXRvciB7XG4gICAgICAgIHJldHVybiA8R2FtZXBsYXlNZWRpYXRvcj50aGlzLl9tZWRpYXRvcjtcbiAgICB9ICBcbiAgICBcbiAgICBwdWJsaWMgX2NyZWF0ZURlYnVnUmVjdChyZWN0OiBQaGFzZXIuUmVjdGFuZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBnZnggPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKCk7XG4gICAgICAgIGdmeC5iZWdpbkZpbGwoMHgwMGZmMDAsIDAuNSk7XG4gICAgICAgIGdmeC5kcmF3UmVjdChyZWN0LngsIHJlY3QueSwgcmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgICAgICBnZnguZW5kRmlsbCgpO1xuICAgIH1cbn1cbiAgIiwiaW1wb3J0IEJhc2VNZWRpYXRvciBmcm9tICcuLi9CYXNlTWVkaWF0b3InO1xuaW1wb3J0IHtJTm90aWZpY2F0aW9ufSBmcm9tICdkaWpvbi9pbnRlcmZhY2VzJztcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tIFwiLi4vLi4vdXRpbHMvR2xvYmFsc1wiO1xuaW1wb3J0IENvbmZpcm1hdGlvblBvcHVwIGZyb20gXCIuLi8uLi9wb3B1cHMvQ29uZmlybWF0aW9uUG9wdXBcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4uLy4uL3V0aWxzL05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IEdhbWVwbGF5IGZyb20gXCIuLi8uLi9zdGF0ZS9HYW1lcGxheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maXJtYXRpb25Qb3B1cE1lZGlhdG9yIGV4dGVuZHMgQmFzZU1lZGlhdG9yIHtcbiAgICBwdWJsaWMgc3RhdGljIE1FRElBVE9SX05BTUU6IHN0cmluZyA9ICdDb25maXJtYXRpb25Qb3B1cE1lZGlhdG9yJztcblxuICAgIGNvbnN0cnVjdG9yKHZpZXdDb21wOiBhbnkpIHtcbiAgICAgICAgc3VwZXIodmlld0NvbXAsIHRydWUsIENvbmZpcm1hdGlvblBvcHVwTWVkaWF0b3IuTUVESUFUT1JfTkFNRSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gWyBdO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IG5vdGVOYW1lID0gbm90aWZpY2F0aW9uLmdldE5hbWUoKTtcbiAgICAgICAgY29uc3Qgbm90ZUJvZHkgPSBub3RpZmljYXRpb24uZ2V0Qm9keSgpO1xuXG4gICAgICAgIHN3aXRjaCAobm90ZU5hbWUpIHsgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgY2FuY2VsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5FWElUX0dBTUVfQ0FOQ0VMTEVEKTtcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuU0hPV19QT1BVUCwgQ29uc3RhbnRzLlBPUFVQX09QVElPTlMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25maXJtKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5nYW1lTW9kZWwucmVzdGFydGluZ1J1bikge1xuICAgICAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuUkVTVEFSVF9SVU4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuQkFDS19UT19NRU5VKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmlld0NvbXBvbmVudCgpOiBDb25maXJtYXRpb25Qb3B1cCB7XG4gICAgICAgIHJldHVybiA8Q29uZmlybWF0aW9uUG9wdXA+dGhpcy5fdmlld0NvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIENvbmZpcm1hdGlvblBvcHVwTWVkaWF0b3IuTUVESUFUT1JfTkFNRTtcbiAgICB9XG59IiwiaW1wb3J0IHtHcm91cCwgQml0bWFwVGV4dCwgTmluZVNsaWNlSW1hZ2V9IGZyb20gXCJkaWpvbi9kaXNwbGF5XCI7XG5pbXBvcnQge1BsYWNlaG9sZGVyc30gZnJvbSBcImRpam9uL3V0aWxzXCI7XG5pbXBvcnQgQmFzZVBvcHVwIGZyb20gXCIuL0Jhc2VQb3B1cFwiO1xuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gXCIuLi91dGlscy9HbG9iYWxzXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tIFwiLi4vdXRpbHMvTm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IENvbmZpcm1hdGlvblBvcHVwTWVkaWF0b3IgZnJvbSBcIi4uL21lZGlhdG9yL3BvcHVwL0NvbmZpcm1hdGlvblBvcHVwTWVkaWF0b3JcIjtcbmltcG9ydCBSSEJ1dHRvbiBmcm9tICcuLi9wcmVmYWJzL1JIQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybWF0aW9uUG9wdXAgZXh0ZW5kcyBCYXNlUG9wdXAge1xuICAgIHByaXZhdGUgX3RpdGxlOiBCaXRtYXBUZXh0O1xuICAgIHByaXZhdGUgX2NhbmNlbEJ1dHRvbjogUkhCdXR0b247XG4gICAgcHJpdmF0ZSBfY29uZmlybUJ1dHRvbjogUkhCdXR0b247XG4gICAgcHJpdmF0ZSBfaXNBdHRlbXB0aW5nVG9FeGl0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIF9jb250ZW50R3JvdXA6IEdyb3VwO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihDb25zdGFudHMuUE9QVVBfQ09ORklSTUFUSU9OLCAwLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRJbnRlcmZhY2UoKSB7XG4gICAgICAgIC8vIHRoaXMuX2FkZEJHKCk7XG4gICAgICAgIC8vIHRoaXMuX2FkZENvbnRlbnQoKTtcbiAgICAgICAgLy8gdGhpcy5fYWRkVGl0bGUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2FkZE1lZGlhdG9yKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9tZWRpYXRvciA9IEJhc2VQb3B1cC5yZXRyaWV2ZU1lZGlhdG9yKENvbmZpcm1hdGlvblBvcHVwTWVkaWF0b3IuTUVESUFUT1JfTkFNRSwgdGhpcyk7XG4gICAgICAgIGlmICh0aGlzLl9tZWRpYXRvciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbWVkaWF0b3IgPSBuZXcgQ29uZmlybWF0aW9uUG9wdXBNZWRpYXRvcih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tZWRpYXRvci5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuUkVHSVNURVJfUE9QVVAsIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYWRkQkcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmcgPSB0aGlzLmFkZChuZXcgUGhhc2VyLlNwcml0ZSh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53aWR0aCAqIDAuNSwgdGhpcy5nYW1lLmhlaWdodCAqIDAuNSwgJ3BvcHVwcycsICdjb25maXJtYXRpb25fYmcnKSk7XG4gICAgICAgIHRoaXMuYmcuYW5jaG9yLnNldCgwLjUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYWRkQ29udGVudCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29udGVudEdyb3VwID0gdGhpcy5hZGRJbnRlcm5hbC5kR3JvdXAodGhpcy5iZy54IC0gdGhpcy5iZy5yZWFsV2lkdGggKiAwLjUsIHRoaXMuYmcueSAtIHRoaXMuYmcucmVhbEhlaWdodCAqIDAuNSArIDUwKTtcblxuICAgICAgICB0aGlzLl9jYW5jZWxCdXR0b24gPSB0aGlzLl9jb250ZW50R3JvdXAuYWRkKG5ldyBSSEJ1dHRvbih0aGlzLmJnLnJlYWxXaWR0aCAqIDAuMywgdGhpcy5iZy5yZWFsSGVpZ2h0ICogMC41LCB0aGlzLl9jYW5jZWwsIHRoaXMsICdwb3B1cHMyJywgJ2NvbmZpcm1hdGlvbl9ubycpKTtcbiAgICAgICAgdGhpcy5fY29uZmlybUJ1dHRvbiA9IHRoaXMuX2NvbnRlbnRHcm91cC5hZGQobmV3IFJIQnV0dG9uKHRoaXMuYmcucmVhbFdpZHRoICogMC43LCB0aGlzLmJnLnJlYWxIZWlnaHQgKiAwLjUsIHRoaXMuX2NvbmZpcm0sIHRoaXMsICdwb3B1cHMyJywgJ2NvbmZpcm1hdGlvbl95ZXMnKSk7XG5cbiAgICAgICAgdGhpcy5fY2FuY2VsQnV0dG9uLmFuY2hvci5zZXQoMC41LCAwLjUpO1xuICAgICAgICB0aGlzLl9jb25maXJtQnV0dG9uLmFuY2hvci5zZXQoMC41LCAwLjUpO1xuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgX2FkZFRpdGxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl90aXRsZSA9IG5ldyBCaXRtYXBUZXh0KHRoaXMuYmcueCwgdGhpcy5iZy55IC0gdGhpcy5iZy5yZWFsSGVpZ2h0ICogMC41ICsgdGhpcy5iZy5yZWFsSGVpZ2h0ICogMC4zNSwgQ29uc3RhbnRzLkZPTlRfVlQzMjMsICdBUkUgWU9VIFNVUkU/JywgKHRoaXMuZ2FtZS5yZXNvbHV0aW9uID4gMS41KSA/IDI1IDogNTAsICdjZW50ZXInLCAweGZmZmZmZik7XG4gICAgICAgIHRoaXMuX3RpdGxlLmNlbnRlclBpdm90KCk7XG4gICAgICAgIHRoaXMuYWRkSW50ZXJuYWwuZXhpc3RpbmcodGhpcy5fdGl0bGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbmNlbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZWRpYXRvci5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuSElERV9QT1BVUCwgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMubWVkaWF0b3IuY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY29uZmlybSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZWRpYXRvci5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuSElERV9QT1BVUCwgdGhpcy5pZCk7XG4gICAgICAgIHRoaXMubWVkaWF0b3IuY29uZmlybSgpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGdldCBtZWRpYXRvcigpOiBDb25maXJtYXRpb25Qb3B1cE1lZGlhdG9yIHtcbiAgICAgICAgcmV0dXJuIDxDb25maXJtYXRpb25Qb3B1cE1lZGlhdG9yPnRoaXMuX21lZGlhdG9yO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0IGlzQXR0ZW1wdGluZ1RvRXhpdCgpIDogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0F0dGVtcHRpbmdUb0V4aXQ7XG4gICAgfVxuICAgIFxufSIsImltcG9ydCBCYXNlTWVkaWF0b3IgZnJvbSAnLi4vQmFzZU1lZGlhdG9yJztcbmltcG9ydCB7SU5vdGlmaWNhdGlvbn0gZnJvbSAnZGlqb24vaW50ZXJmYWNlcyc7XG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSBcIi4uLy4uL3V0aWxzL0dsb2JhbHNcIjtcbmltcG9ydCBIZWxwUG9wdXAgZnJvbSBcIi4uLy4uL3BvcHVwcy9IZWxwUG9wdXBcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4uLy4uL3V0aWxzL05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IEdhbWVwbGF5IGZyb20gXCIuLi8uLi9zdGF0ZS9HYW1lcGxheVwiO1xuaW1wb3J0IHsgSUhlbHBEYXRhIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscFBvcHVwTWVkaWF0b3IgZXh0ZW5kcyBCYXNlTWVkaWF0b3Ige1xuICAgIHB1YmxpYyBzdGF0aWMgTUVESUFUT1JfTkFNRTogc3RyaW5nID0gJ0hlbHBQb3B1cE1lZGlhdG9yJztcblxuICAgIHByaXZhdGUgX2dhbWVIYXNCZWd1bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHZpZXdDb21wOiBhbnkpIHtcbiAgICAgICAgc3VwZXIodmlld0NvbXAsIHRydWUsIEhlbHBQb3B1cE1lZGlhdG9yLk1FRElBVE9SX05BTUUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnMuQkVHSU5fR0FNRSxcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnMuRVhJVElOR19HQU1FLFxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucy5FWElUX0dBTUVfQ0FOQ0VMTEVEXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IElOb3RpZmljYXRpb24pIHtcbiAgICAgICAgY29uc3Qgbm90ZU5hbWUgPSBub3RpZmljYXRpb24uZ2V0TmFtZSgpO1xuICAgICAgICBjb25zdCBub3RlQm9keSA9IG5vdGlmaWNhdGlvbi5nZXRCb2R5KCk7XG5cbiAgICAgICAgc3dpdGNoIChub3RlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25zLkJFR0lOX0dBTUU6XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZUhhc0JlZ3VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTm90aWZpY2F0aW9ucy5FWElUSU5HX0dBTUU6XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZUhhc0JlZ3VuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE5vdGlmaWNhdGlvbnMuRVhJVF9HQU1FX0NBTkNFTExFRDpcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lSGFzQmVndW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEdlc3R1cmVQb3NpdGlvbnMoKTogSUhlbHBEYXRhW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lTW9kZWwuZ2FtZXBsYXlEYXRhLmhlbHBEYXRhO1xuICAgIH0gICAgXG5cbiAgICBwdWJsaWMgY2xvc2VIZWxwKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2dhbWVIYXNCZWd1bikge1xuICAgICAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuU0hPV19QT1BVUCwgQ29uc3RhbnRzLlBPUFVQX0JFR0lOR0FNRSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5TSE9XX1BPUFVQLCBDb25zdGFudHMuUE9QVVBfT1BUSU9OUyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SGVscENvcHkoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmdhbWUuZGV2aWNlLmRlc2t0b3ApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvcHlNb2RlbC5nZXRDb3B5R3JvdXAoJ2hlbHAtZGVza3RvcCcpW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvcHlNb2RlbC5nZXRDb3B5R3JvdXAoJ2hlbHAtbW9iaWxlJylbaW5kZXhdO1xuICAgICAgICB9XG4gICAgfSAgICBcbiAgICBcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIEhlbHBQb3B1cE1lZGlhdG9yLk1FRElBVE9SX05BTUU7XG4gICAgfVxufSIsImltcG9ydCB7R3JvdXAsIEJpdG1hcFRleHQsIE5pbmVTbGljZUltYWdlfSBmcm9tIFwiZGlqb24vZGlzcGxheVwiO1xuaW1wb3J0IHtQbGFjZWhvbGRlcnN9IGZyb20gXCJkaWpvbi91dGlsc1wiO1xuaW1wb3J0IEJhc2VQb3B1cCBmcm9tIFwiLi9CYXNlUG9wdXBcIjtcbmltcG9ydCB7Q29uc3RhbnRzLCBDb2xvdXJzfSBmcm9tIFwiLi4vdXRpbHMvR2xvYmFsc1wiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSBcIi4uL3V0aWxzL05vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCBIZWxwUG9wdXBNZWRpYXRvciBmcm9tIFwiLi4vbWVkaWF0b3IvcG9wdXAvSGVscFBvcHVwTWVkaWF0b3JcIjtcbmltcG9ydCBSSEJ1dHRvbiBmcm9tICcuLi9wcmVmYWJzL1JIQnV0dG9uJztcbmltcG9ydCB7IElIZWxwRGF0YSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwUG9wdXAgZXh0ZW5kcyBCYXNlUG9wdXAge1xuICAgIFxuICAgIHByaXZhdGUgX3RpdGxlOiBQaGFzZXIuU3ByaXRlO1xuICAgIHByaXZhdGUgX3ByZXZpb3VzQnV0dG9uOiBSSEJ1dHRvbjtcbiAgICBwcml2YXRlIF9uZXh0QnV0dG9uOiBSSEJ1dHRvbjtcbiAgICBwcml2YXRlIF9jbG9zZUJ1dHRvbjogUkhCdXR0b247XG4gICAgcHJpdmF0ZSBfc2xpZGVzOiBQaGFzZXIuU3ByaXRlW107XG4gICAgcHJpdmF0ZSBfZG90czogUGhhc2VyLlNwcml0ZVtdO1xuICAgIHByaXZhdGUgX2FjdGl2ZURvdHM6IFBoYXNlci5TcHJpdGVbXTtcbiAgICBwcml2YXRlIF9jb250ZW50R3JvdXA6IEdyb3VwO1xuICAgIHByaXZhdGUgX2lzU2xpZGluZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9jdXJyZW50U2xpZGU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9zbGlkZUNvdW50OiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKENvbnN0YW50cy5QT1BVUF9IRUxQLCAwLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRJbnRlcmZhY2UoKSB7XG4gICAgICAgIC8vIHRoaXMuX2N1cnJlbnRTbGlkZSA9IDA7XG4gICAgICAgIC8vIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLl9hZGRCRygpO1xuICAgICAgICAvLyB0aGlzLl9hZGRDb250ZW50KCk7XG4gICAgICAgIC8vIHRoaXMuX2FkZFNsaWRlcygpO1xuICAgICAgICAvLyB0aGlzLl9hZGRUaXRsZSgpO1xuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnNldCh0aGlzLmdhbWUud2lkdGggKiAwLjUsIHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYWRkTWVkaWF0b3IoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX21lZGlhdG9yID0gQmFzZVBvcHVwLnJldHJpZXZlTWVkaWF0b3IoSGVscFBvcHVwTWVkaWF0b3IuTUVESUFUT1JfTkFNRSwgdGhpcyk7XG4gICAgICAgIGlmICh0aGlzLl9tZWRpYXRvciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbWVkaWF0b3IgPSBuZXcgSGVscFBvcHVwTWVkaWF0b3IodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWVkaWF0b3Iuc2VuZE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25zLlJFR0lTVEVSX1BPUFVQLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2FkZEJHKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJnID0gdGhpcy5hZGQobmV3IFBoYXNlci5TcHJpdGUodGhpcy5nYW1lLCAwLCAwLCAncG9wdXBzJywncGF1c2VfcG9wdXBfYmFja2dyb3VuZCcpKTtcbiAgICAgICAgdGhpcy5iZy5hbmNob3Iuc2V0KDAuNSk7XG4gICAgICAgIHRoaXMuYmcuYW5nbGUgPSA5MDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2FkZENvbnRlbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbnRlbnRHcm91cCA9IHRoaXMuYWRkSW50ZXJuYWwuZEdyb3VwKHRoaXMuYmcueCAtICh0aGlzLmJnLnJlYWxIZWlnaHQgKiAwLjUpLCB0aGlzLmJnLnkgLSAodGhpcy5iZy5yZWFsV2lkdGggKiAwLjUpICsgNTApO1xuICAgICAgICBcbiAgICAgICAgbGV0IHByZXZpb3VzQ29ubmVjdG9yczogUGhhc2VyLlNwcml0ZSA9IHRoaXMuX2NvbnRlbnRHcm91cC5hZGQobmV3IFBoYXNlci5TcHJpdGUodGhpcy5nYW1lLCB0aGlzLmJnLnJlYWxIZWlnaHQgKiAwLjAyMywgdGhpcy5iZy5yZWFsV2lkdGggKiAwLjM1LCAndHV0b3JpYWxzJywgJ3R1dG9yaWFsX2JhY2tfY29ubmVjdG9yJykpO1xuICAgICAgICBsZXQgbmV4dENvbm5lY3RvcnM6IFBoYXNlci5TcHJpdGUgPSB0aGlzLl9jb250ZW50R3JvdXAuYWRkKG5ldyBQaGFzZXIuU3ByaXRlKHRoaXMuZ2FtZSwgdGhpcy5iZy5yZWFsSGVpZ2h0ICogMC45NzcsIHRoaXMuYmcucmVhbFdpZHRoICogMC4zNSwgJ3R1dG9yaWFscycsICd0dXRvcmlhbF9uZXh0X2Nvbm5lY3RvcicpKTtcbiAgICAgICAgbGV0IGNsb3NlQ29ubmVjdG9yczogUGhhc2VyLlNwcml0ZSA9IHRoaXMuX2NvbnRlbnRHcm91cC5hZGQobmV3IFBoYXNlci5TcHJpdGUodGhpcy5nYW1lLCB0aGlzLmJnLnJlYWxIZWlnaHQgKiAwLjk1LCB0aGlzLmJnLnJlYWxXaWR0aCAqIDAuMCAtIDE3LCAndHV0b3JpYWxzJywgJ3R1dG9yaWFsX2Nvbm5lY3RvcicpKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fcHJldmlvdXNCdXR0b24gPSB0aGlzLl9jb250ZW50R3JvdXAuYWRkKG5ldyBSSEJ1dHRvbih0aGlzLmJnLnJlYWxIZWlnaHQgKiAwLjAyMywgdGhpcy5iZy5yZWFsV2lkdGggKiAwLjM1LCB0aGlzLl9wcmV2aW91cywgdGhpcywgJ3R1dG9yaWFscycsICd0dXRvcmlhbF9iYWNrX2J1dHRvbicpKTtcbiAgICAgICAgdGhpcy5fbmV4dEJ1dHRvbiA9IHRoaXMuX2NvbnRlbnRHcm91cC5hZGQobmV3IFJIQnV0dG9uKHRoaXMuYmcucmVhbEhlaWdodCAqIDAuOTc3LCB0aGlzLmJnLnJlYWxXaWR0aCAqIDAuMzUsIHRoaXMuX25leHQsIHRoaXMsICd0dXRvcmlhbHMnLCAndHV0b3JpYWxfbmV4dF9idXR0b24nKSk7XG4gICAgICAgIHRoaXMuX2Nsb3NlQnV0dG9uID0gdGhpcy5fY29udGVudEdyb3VwLmFkZChuZXcgUkhCdXR0b24odGhpcy5iZy5yZWFsSGVpZ2h0ICogMC45NzcsIHRoaXMuYmcucmVhbFdpZHRoICogMC4wIC0gMzUsIHRoaXMuX2Nsb3NlSGVscCwgdGhpcywgJ3R1dG9yaWFscycsICd0dXRvcmlhbF9jbG9zZV9idXR0b24nKSk7XG5cbiAgICAgICAgdGhpcy5fcHJldmlvdXNCdXR0b24uY2VudGVyUGl2b3QoKTtcbiAgICAgICAgdGhpcy5fbmV4dEJ1dHRvbi5jZW50ZXJQaXZvdCgpO1xuICAgICAgICB0aGlzLl9jbG9zZUJ1dHRvbi5jZW50ZXJQaXZvdCgpO1xuICAgICAgICBwcmV2aW91c0Nvbm5lY3RvcnMuY2VudGVyUGl2b3QoKTtcbiAgICAgICAgbmV4dENvbm5lY3RvcnMuY2VudGVyUGl2b3QoKTtcbiAgICAgICAgY2xvc2VDb25uZWN0b3JzLmNlbnRlclBpdm90KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9hZGRUaXRsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl9jb250ZW50R3JvdXAuYWRkSW50ZXJuYWwuc3ByaXRlKHRoaXMuYmcucmVhbEhlaWdodCAqIDAuNSwgdGhpcy5iZy5yZWFsV2lkdGggKiAtMC4wMjUsICd0dXRvcmlhbHMnLCAnaG93X3RvX3BsYXlfdGV4dCcpO1xuICAgICAgICB0aGlzLl90aXRsZS5jZW50ZXJQaXZvdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FkZFNsaWRlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2xpZGVzID0gW107XG4gICAgICAgIHRoaXMuX2RvdHMgPSBbXTtcbiAgICAgICAgdGhpcy5fYWN0aXZlRG90cyA9IFtdO1xuICAgICAgICBsZXQgaGVscERhdGE6IElIZWxwRGF0YVtdID0gdGhpcy5tZWRpYXRvci5nZXRHZXN0dXJlUG9zaXRpb25zKCk7XG4gICAgICAgIHRoaXMuX3NsaWRlQ291bnQgPSBoZWxwRGF0YS5sZW5ndGg7XG5cbiAgICAgICAgbGV0IGRvdFN0YXJ0WCA9ICh0aGlzLmJnLnJlYWxIZWlnaHQgKiAwLjUpIC0gKHRoaXMuX3NsaWRlQ291bnQgKiAxOCAqIDAuNSkgKyA5O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fc2xpZGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2xpZGU6IFBoYXNlci5TcHJpdGUgPSB0aGlzLl9jb250ZW50R3JvdXAuYWRkSW50ZXJuYWwuc3ByaXRlKCh0aGlzLmJnLnJlYWxIZWlnaHQgKiAwLjUpICsgaGVscERhdGFbaV0uaW1hZ2VQT1MueCwgKHRoaXMuYmcucmVhbFdpZHRoICogMC41KSArIGhlbHBEYXRhW2ldLmltYWdlUE9TLnksIGhlbHBEYXRhW2ldLmltYWdlLmtleSwgaGVscERhdGFbaV0uaW1hZ2Uuc3ByaXRlKTtcbiAgICAgICAgICAgIHNsaWRlLmNlbnRlclBpdm90KCk7XG4gICAgICAgICAgICBzbGlkZS5hbHBoYSA9IDA7XG4gICAgICAgICAgICBzbGlkZS52aXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMuX3NsaWRlcy5wdXNoKHNsaWRlKTtcblxuICAgICAgICAgICAgLy8gbGV0IGNvcHk6IEJpdG1hcFRleHQgPSBuZXcgQml0bWFwVGV4dChzbGlkZS5yZWFsV2lkdGggKiAwLjUsIC00MiwgQ29uc3RhbnRzLkZPTlRfRElNQk9SRUdVTEFSLCB0aGlzLm1lZGlhdG9yLmdldEhlbHBDb3B5KGkpLCAodGhpcy5nYW1lLnJlc29sdXRpb24gPiAxLjUpPyAxNiA6IDMyLCAnY2VudGVyJywgMHhmZmZmZmYpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29weS5jZW50ZXJQaXZvdCgpO1xuICAgICAgICAgICAgLy8gdGhpcy5fY29udGVudEdyb3VwLmFkZEludGVybmFsLmV4aXN0aW5nKGNvcHkpO1xuICAgICAgICAgICAgLy8gc2xpZGUuYWRkQ2hpbGQoY29weSk7XG4gICAgICAgIFxuICAgICAgICAgICAgbGV0IGdlc3R1cmU6IFBoYXNlci5JbWFnZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWUuZGV2aWNlLmRlc2t0b3ApIHtcbiAgICAgICAgICAgICAgICBnZXN0dXJlID0gbmV3IFBoYXNlci5JbWFnZSh0aGlzLmdhbWUsIGhlbHBEYXRhW2ldLm1vdXNlUE9TLngsIGhlbHBEYXRhW2ldLm1vdXNlUE9TLnksICd0dXRvcmlhbHMnLCBcIm1vdXNlX3BvaW50ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnZXN0dXJlID0gbmV3IFBoYXNlci5JbWFnZSh0aGlzLmdhbWUsIGhlbHBEYXRhW2ldLmdlc3R1cmVQT1MueCwgaGVscERhdGFbaV0uZ2VzdHVyZVBPUy55LCAndHV0b3JpYWxzJywgXCJ0YXBfZ2VzdHVyZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBnZXN0dXJlLnNjYWxlLnNldFRvKC0xLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXN0dXJlLmNlbnRlclBpdm90KCk7XG4gICAgICAgICAgICBzbGlkZS5hZGRDaGlsZChnZXN0dXJlKTtcblxuICAgICAgICAgICAgbGV0IGRvdDogUGhhc2VyLlNwcml0ZSA9IHRoaXMuX2NvbnRlbnRHcm91cC5hZGRJbnRlcm5hbC5zcHJpdGUoZG90U3RhcnRYICsgKGkgKiAxOCksIHRoaXMuYmcucmVhbFdpZHRoICogMC43NzUsICd0dXRvcmlhbHMnLCAnaW5hY3RpdmVfZG90Jyk7XG4gICAgICAgICAgICBsZXQgYWN0aXZlRG90OiBQaGFzZXIuU3ByaXRlID0gdGhpcy5fY29udGVudEdyb3VwLmFkZEludGVybmFsLnNwcml0ZShkb3RTdGFydFggKyAoaSAqIDE4KSwgdGhpcy5iZy5yZWFsV2lkdGggKiAwLjc3NSwgJ3R1dG9yaWFscycsICdhY3RpdmVfZG90Jyk7XG4gICAgICAgICAgICBkb3QuY2VudGVyUGl2b3QoKTtcbiAgICAgICAgICAgIGFjdGl2ZURvdC5jZW50ZXJQaXZvdCgpO1xuICAgICAgICAgICAgYWN0aXZlRG90LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fZG90cy5wdXNoKGRvdCk7XG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVEb3RzLnB1c2goYWN0aXZlRG90KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NsaWRlc1t0aGlzLl9jdXJyZW50U2xpZGVdLmFscGhhID0gMTtcbiAgICAgICAgdGhpcy5fc2xpZGVzW3RoaXMuX2N1cnJlbnRTbGlkZV0udmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fYWN0aXZlRG90c1t0aGlzLl9jdXJyZW50U2xpZGVdLnZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zbGlkZXNbdGhpcy5fY3VycmVudFNsaWRlXS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBfaGlkZUNvbXBsZXRlKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5faGlkZUNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMuX2hpZGVTbGlkZXMoKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBfaGlkZVNsaWRlcygpOiB2b2lkIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLl9zbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3NsaWRlc1tpXS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9zbGlkZXNbaV0uYWxwaGEgPSAwO1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlRG90c1tpXS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY3VycmVudFNsaWRlID0gMDtcbiAgICAgICAgdGhpcy5fYWN0aXZlRG90c1t0aGlzLl9jdXJyZW50U2xpZGVdLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zbGlkZXNbdGhpcy5fY3VycmVudFNsaWRlXS5hbHBoYSA9IDE7XG4gICAgfVxuICBcbiAgICBwcml2YXRlIF9wcmV2aW91cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWU7XG4gICAgICAgIGxldCBvdXRUd2VlbjogUGhhc2VyLlR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLl9zbGlkZXNbdGhpcy5fY3VycmVudFNsaWRlXSkudG8oeyB4OiAnKzMwJywgYWxwaGE6IDAgfSwgMTAwLCBQaGFzZXIuRWFzaW5nLkRlZmF1bHQsIHRydWUpO1xuICAgICAgICBvdXRUd2Vlbi5vbkNvbXBsZXRlLmFkZCh0aGlzLl9kZWNyZW1lbnRTbGlkZU51bWJlciwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZURvdHNbdGhpcy5fY3VycmVudFNsaWRlXS52aXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHByZXZTbGlkZSA9IHRoaXMuX2N1cnJlbnRTbGlkZSAtIDE7XG4gICAgICAgIGlmIChwcmV2U2xpZGUgPT09IC0xKSB7XG4gICAgICAgICAgICBwcmV2U2xpZGUgPSB0aGlzLl9zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NsaWRlc1twcmV2U2xpZGVdLnggLT0gMzA7XG4gICAgICAgIHRoaXMuX3NsaWRlc1twcmV2U2xpZGVdLnZpc2libGUgPSB0cnVlO1xuICAgICAgICBsZXQgaW5Ud2VlbjogUGhhc2VyLlR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLl9zbGlkZXNbcHJldlNsaWRlXSkudG8oeyB4OiAnKzMwJywgYWxwaGE6IDEgfSwgMTAwLCBQaGFzZXIuRWFzaW5nLkRlZmF1bHQsIHRydWUpO1xuICAgICAgICB0aGlzLl9hY3RpdmVEb3RzW3ByZXZTbGlkZV0udmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbmV4dCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWU7XG4gICAgICAgIGxldCBvdXRUd2VlbjogUGhhc2VyLlR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLl9zbGlkZXNbdGhpcy5fY3VycmVudFNsaWRlXSkudG8oeyB4OiAnLTMwJywgYWxwaGE6IDAgfSwgMTAwLCBQaGFzZXIuRWFzaW5nLkRlZmF1bHQsIHRydWUpO1xuICAgICAgICBvdXRUd2Vlbi5vbkNvbXBsZXRlLmFkZCh0aGlzLl9pbmNyZW1lbnRTbGlkZU51bWJlciwgdGhpcyk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZURvdHNbdGhpcy5fY3VycmVudFNsaWRlXS52aXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IG5leHRTbGlkZSA9IHRoaXMuX2N1cnJlbnRTbGlkZSArIDE7XG4gICAgICAgIGlmIChuZXh0U2xpZGUgPT09IHRoaXMuX3NsaWRlQ291bnQpIHtcbiAgICAgICAgICAgIG5leHRTbGlkZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zbGlkZXNbbmV4dFNsaWRlXS54ICs9IDMwO1xuICAgICAgICB0aGlzLl9zbGlkZXNbbmV4dFNsaWRlXS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGluVHdlZW46IFBoYXNlci5Ud2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5fc2xpZGVzW25leHRTbGlkZV0pLnRvKHsgeDogJy0zMCcsIGFscGhhOiAxIH0sIDEwMCwgUGhhc2VyLkVhc2luZy5EZWZhdWx0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlRG90c1tuZXh0U2xpZGVdLnZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luY3JlbWVudFNsaWRlTnVtYmVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc2xpZGVzW3RoaXMuX2N1cnJlbnRTbGlkZV0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zbGlkZXNbdGhpcy5fY3VycmVudFNsaWRlXS54ICs9IDMwO1xuXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTbGlkZSsrO1xuICAgICAgICBpZiAodGhpcy5fY3VycmVudFNsaWRlID09PSB0aGlzLl9zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50U2xpZGUgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVjcmVtZW50U2xpZGVOdW1iZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zbGlkZXNbdGhpcy5fY3VycmVudFNsaWRlXS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3NsaWRlc1t0aGlzLl9jdXJyZW50U2xpZGVdLnggLT0gMzA7XG5cbiAgICAgICAgdGhpcy5fY3VycmVudFNsaWRlLS07XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50U2xpZGUgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50U2xpZGUgPSB0aGlzLl9zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2Nsb3NlSGVscCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2FsbG93SW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMubWVkaWF0b3IuY2xvc2VIZWxwKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZWRpYXRvci5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuSElERV9QT1BVUCwgdGhpcy5pZCk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgZ2V0IG1lZGlhdG9yKCk6IEhlbHBQb3B1cE1lZGlhdG9yIHtcbiAgICAgICAgcmV0dXJuIDxIZWxwUG9wdXBNZWRpYXRvcj50aGlzLl9tZWRpYXRvcjtcbiAgICB9XG59IiwiaW1wb3J0IEJhc2VNZWRpYXRvciBmcm9tICcuLi9CYXNlTWVkaWF0b3InO1xuaW1wb3J0IHtJTm90aWZpY2F0aW9ufSBmcm9tICdkaWpvbi9pbnRlcmZhY2VzJztcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tIFwiLi4vLi4vdXRpbHMvR2xvYmFsc1wiO1xuaW1wb3J0IE9wdGlvbnNQb3B1cCBmcm9tIFwiLi4vLi4vcG9wdXBzL09wdGlvbnNQb3B1cFwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vLi4vdXRpbHMvTm90aWZpY2F0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnNQb3B1cE1lZGlhdG9yIGV4dGVuZHMgQmFzZU1lZGlhdG9yIHtcbiAgICBwdWJsaWMgc3RhdGljIE1FRElBVE9SX05BTUU6IHN0cmluZyA9ICdPcHRpb25zUG9wdXBNZWRpYXRvcic7XG4gICAgXG4gICAgY29uc3RydWN0b3Iodmlld0NvbXA6IGFueSkge1xuICAgICAgICBzdXBlcih2aWV3Q29tcCwgdHJ1ZSwgT3B0aW9uc1BvcHVwTWVkaWF0b3IuTUVESUFUT1JfTkFNRSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gWyBdO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IG5vdGVOYW1lID0gbm90aWZpY2F0aW9uLmdldE5hbWUoKTtcbiAgICAgICAgY29uc3Qgbm90ZUJvZHkgPSBub3RpZmljYXRpb24uZ2V0Qm9keSgpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgaGVscCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuU0hPV19QT1BVUCwgQ29uc3RhbnRzLlBPUFVQX0hFTFApO1xuICAgIH0gXG5cbiAgICBwdWJsaWMgcmVzdGFydFJ1bigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYW1lTW9kZWwucmVzdGFydGluZ1J1biA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25zLlNIT1dfUE9QVVAsIENvbnN0YW50cy5QT1BVUF9DT05GSVJNQVRJT04pO1xuICAgIH1cblxuICAgIHB1YmxpYyBub3RpZnlNdXNpY1RvZ2dsZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihOb3RpZmljYXRpb25zLk1VU0lDX1RPR0dMRUQpO1xuICAgIH0gICBcbiAgICBcbiAgICBwdWJsaWMgbm90aWZ5QXVkaW9Ub2dnbGVkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5BVURJT19UT0dHTEVEKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBwb3B1cCgpOiBPcHRpb25zUG9wdXAge1xuICAgICAgICByZXR1cm4gPE9wdGlvbnNQb3B1cD50aGlzLl92aWV3Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gT3B0aW9uc1BvcHVwTWVkaWF0b3IuTUVESUFUT1JfTkFNRTtcbiAgICB9XG59IiwiaW1wb3J0IHtHcm91cCwgVGV4dCwgU3ByaXRlfSBmcm9tIFwiZGlqb24vZGlzcGxheVwiO1xuaW1wb3J0IEJhc2VQb3B1cCBmcm9tIFwiLi9CYXNlUG9wdXBcIjtcbmltcG9ydCB7Q29uc3RhbnRzLCBTZXR0aW5ncywgQ29sb3Vyc30gZnJvbSBcIi4uL3V0aWxzL0dsb2JhbHNcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCIuLi91dGlscy9Ob3RpZmljYXRpb25zXCI7XG5pbXBvcnQgT3B0aW9uc1BvcHVwTWVkaWF0b3IgZnJvbSBcIi4uL21lZGlhdG9yL3BvcHVwL09wdGlvbnNQb3B1cE1lZGlhdG9yXCI7XG5pbXBvcnQgUkhCdXR0b24gZnJvbSAnLi4vcHJlZmFicy9SSEJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnNQb3B1cCBleHRlbmRzIEJhc2VQb3B1cCB7XG4gICAgcHJpdmF0ZSBfdGl0bGU6IFBoYXNlci5TcHJpdGU7XG4gICAgcHJpdmF0ZSBfbXVzaWNCdXR0b246IFJIQnV0dG9uO1xuICAgIHByaXZhdGUgX3NvdW5kQnV0dG9uOiBSSEJ1dHRvbjtcbiAgICBwcml2YXRlIF9jbG9zZUJ1dHRvbjogUkhCdXR0b247XG5cbiAgICBwcml2YXRlIF9jb250ZW50R3JvdXA6IEdyb3VwO1xuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKENvbnN0YW50cy5QT1BVUF9PUFRJT05TLCAwLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYnVpbGRJbnRlcmZhY2UoKSB7XG4gICAgICAgIHRoaXMuX2FkZEJHKCk7XG4gICAgICAgIHRoaXMuX2FkZENvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2FkZE1lZGlhdG9yKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9tZWRpYXRvciA9IEJhc2VQb3B1cC5yZXRyaWV2ZU1lZGlhdG9yKE9wdGlvbnNQb3B1cE1lZGlhdG9yLk1FRElBVE9SX05BTUUsIHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5fbWVkaWF0b3IgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX21lZGlhdG9yID0gbmV3IE9wdGlvbnNQb3B1cE1lZGlhdG9yKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21lZGlhdG9yLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5SRUdJU1RFUl9QT1BVUCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9hZGRCRygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fd2lkdGggPSAzNTA7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IDQyMDtcblxuICAgICAgICBsZXQgZ2Z4ID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygpO1xuICAgICAgICBnZnguYmVnaW5GaWxsKENvbG91cnMuU0tZX1BPV0RFUl9CTFVFLCAxKTtcbiAgICAgICAgZ2Z4LmRyYXdSb3VuZGVkUmVjdCgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0LCAxMCk7XG4gICAgICAgIGdmeC5lbmRGaWxsKCk7XG4gICAgICAgIGdmeC5iZWdpbkZpbGwoQ29sb3Vycy5TS1lfU0xBVEVfQkxVRSwgMSk7XG4gICAgICAgIGdmeC5kcmF3Um91bmRlZFJlY3QoNSwgNSwgdGhpcy5fd2lkdGggLSAxMCwgdGhpcy5faGVpZ2h0IC0gMTAsIDEwKTtcbiAgICAgICAgZ2Z4LmVuZEZpbGwoKTtcblxuICAgICAgICB0aGlzLmJnID0gdGhpcy5hZGQobmV3IFBoYXNlci5TcHJpdGUodGhpcy5nYW1lLCAwLCAwLCBnZnguZ2VuZXJhdGVUZXh0dXJlKCkpKTtcbiAgICAgICAgdGhpcy5nYW1lLndvcmxkLnJlbW92ZShnZngpO1xuXG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2FtZS53aWR0aDtcbiAgICAgICAgdGhpcy55ID0gMTAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FkZENvbnRlbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbnRlbnRHcm91cCA9IHRoaXMuYWRkSW50ZXJuYWwuZEdyb3VwKDAsIDApO1xuXG4gICAgICAgIHRoaXMuX211c2ljQnV0dG9uID0gdGhpcy5fY29udGVudEdyb3VwLmFkZChuZXcgUkhCdXR0b24odGhpcy5iZy5yZWFsV2lkdGggKiAwLjMzLCB0aGlzLmJnLnJlYWxIZWlnaHQgKiAwLjYsIHRoaXMuX211c2ljLCB0aGlzLCAndWknLCAnbXVzaWNfaG92ZXInLCAnbXVzaWNfbm9ybWFsJywgJ211c2ljX2Rvd24nKSk7XG4gICAgICAgIHRoaXMuX3NvdW5kQnV0dG9uID0gdGhpcy5fY29udGVudEdyb3VwLmFkZChuZXcgUkhCdXR0b24odGhpcy5iZy5yZWFsV2lkdGggKiAwLjY2LCB0aGlzLmJnLnJlYWxIZWlnaHQgKiAwLjYsIHRoaXMuX3NvdW5kLCB0aGlzLCAndWknLCAnYXVkaW9faG92ZXInLCAnYXVkaW9fbm9ybWFsJywgJ2F1ZGlvX2Rvd24nKSk7XG4gICAgICAgIHRoaXMuX2Nsb3NlQnV0dG9uID0gdGhpcy5fY29udGVudEdyb3VwLmFkZChuZXcgUkhCdXR0b24odGhpcy5iZy5yZWFsV2lkdGggKiAwLjkxLCB0aGlzLmJnLnJlYWxIZWlnaHQgKiAtMC4wMjUsIHRoaXMuX2Nsb3NlU2V0dGluZ3MsIHRoaXMsICd1aScsICdyZWRfc21hbGxfbm9ybWFsJywgJ3JlZF9zbWFsbF9ub3JtYWwnLCAncmVkX3NtYWxsX2Rvd24nKSk7XG5cbiAgICAgICAgdGhpcy5fY2xvc2VCdXR0b24uY2VudGVyUGl2b3QoKTtcbiAgICAgICAgdGhpcy5fbXVzaWNCdXR0b24uY2VudGVyUGl2b3QoKTtcbiAgICAgICAgdGhpcy5fc291bmRCdXR0b24uY2VudGVyUGl2b3QoKTtcbiAgICAgICAgbGV0IGNsb3NlWCA9IG5ldyBTcHJpdGUodGhpcy5fY2xvc2VCdXR0b24ucmVhbFdpZHRoICogMC41LCB0aGlzLl9jbG9zZUJ1dHRvbi5yZWFsSGVpZ2h0ICogMC40NSwgJ3VpJywgJ2dyZXlfY3Jvc3MnKTtcbiAgICAgICAgdGhpcy5fY2xvc2VCdXR0b24uYWRkQ2hpbGQoY2xvc2VYKTtcbiAgICAgICAgY2xvc2VYLmNlbnRlclBpdm90KCk7XG4gICAgICAgIGNsb3NlWC5zY2FsZS5zZXRUbygyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3NvdW5kQnV0dG9uLnVwZGF0ZUJhc2VGcmFtZShTZXR0aW5ncy5TRlhfRU5BQkxFRCA/ICdhdWRpbycgOiAnYXVkaW9fbXV0ZScpO1xuICAgICAgICB0aGlzLl9tdXNpY0J1dHRvbi51cGRhdGVCYXNlRnJhbWUoU2V0dGluZ3MuTVVTSUNfRU5BQkxFRCA/ICdtdXNpYycgOiAnbXVzaWNfbXV0ZScpO1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRoaXMuX2NvbnRlbnRHcm91cC5hZGRJbnRlcm5hbC5kVGV4dCh0aGlzLmJnLnJlYWxXaWR0aCAqIDAuNSwgdGhpcy5iZy5yZWFsSGVpZ2h0ICogMC4xLCAnU0VUVElOR1MnLCBDb25zdGFudHMuRk9OVF9WVDMyMywgNTAsIFwiI2ZmZmZmZlwiLCAnY2VudGVyJyk7XG4gICAgICAgIHRoaXMuX3RpdGxlLmNlbnRlclBpdm90KCk7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgX2FkZFR3ZWVucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2hvd1R3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50byh7IGFscGhhOiAxLCB4OiB0aGlzLl9zdGFydFBvc2l0aW9uLnggLSB0aGlzLl93aWR0aCAtIDIwfSwgMzAwLCBQaGFzZXIuRWFzaW5nLkJvdW5jZS5PdXQpO1xuICAgICAgICB0aGlzLl9zaG93VHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5fc2hvd0NvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5faGlkZVR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50byh7IGFscGhhOiAwLCB4OiB0aGlzLl9zdGFydFBvc2l0aW9uLnggfSwgMzAwLCBQaGFzZXIuRWFzaW5nLkN1YmljLkluKTtcbiAgICAgICAgdGhpcy5faGlkZVR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuX2hpZGVDb21wbGV0ZSwgdGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgX2hlbHAoKTogdm9pZCB7XG4gICAgICAgIC8vIGlmICh0aGlzLl9hbGxvd0lucHV0KSB7XG4gICAgICAgIC8vICAgICB0aGlzLm1lZGlhdG9yLmhlbHAoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLm1lZGlhdG9yLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5ISURFX1BPUFVQLCB0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZXN1bWVHYW1lKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fYWxsb3dJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoNDAwLCB0aGlzLl9zZW5kUmVzdW1lTm90aWZpY2F0aW9uLCB0aGlzKTsgXG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgcHJpdmF0ZSBfcmVzdGFydFJ1bigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2FsbG93SW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMubWVkaWF0b3IucmVzdGFydFJ1bigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgX2Nsb3NlU2V0dGluZ3MoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9hbGxvd0lucHV0KSB7XG4gICAgICAgICAgICAgIHRoaXMuX21lZGlhdG9yLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5ISURFX1BPUFVQLCB0aGlzLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX211c2ljKCk6IHZvaWQge1xuICAgICAgICBTZXR0aW5ncy5NVVNJQ19FTkFCTEVEID0gIVNldHRpbmdzLk1VU0lDX0VOQUJMRUQ7XG4gICAgICAgIHRoaXMuX211c2ljQnV0dG9uLnVwZGF0ZUJhc2VGcmFtZShTZXR0aW5ncy5NVVNJQ19FTkFCTEVEID8gJ211c2ljJyA6ICdtdXNpY19tdXRlJyk7XG4gICAgICAgIHRoaXMubWVkaWF0b3Iubm90aWZ5TXVzaWNUb2dnbGVkKCk7XG4gICAgfSAgIFxuICAgIFxuICAgIHByaXZhdGUgX3NvdW5kKCk6IHZvaWQge1xuICAgICAgICBTZXR0aW5ncy5TRlhfRU5BQkxFRCA9ICFTZXR0aW5ncy5TRlhfRU5BQkxFRDtcbiAgICAgICAgdGhpcy5fc291bmRCdXR0b24udXBkYXRlQmFzZUZyYW1lKFNldHRpbmdzLlNGWF9FTkFCTEVEID8gJ2F1ZGlvJyA6ICdhdWRpb19tdXRlJyk7XG4gICAgICAgIHRoaXMubWVkaWF0b3Iubm90aWZ5QXVkaW9Ub2dnbGVkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgbWVkaWF0b3IoKTogT3B0aW9uc1BvcHVwTWVkaWF0b3Ige1xuICAgICAgICByZXR1cm4gPE9wdGlvbnNQb3B1cE1lZGlhdG9yPnRoaXMuX21lZGlhdG9yO1xuICAgIH1cbn0iLCJpbXBvcnQge01lZGlhdG9yLCBOb3RpZmljYXRpb259IGZyb20gXCJkaWpvbi9tdmNcIjtcbmltcG9ydCB7SU5vdGlmaWNhdGlvbn0gZnJvbSBcImRpam9uL2ludGVyZmFjZXNcIjtcbmltcG9ydCBCYXNlTWVkaWF0b3IgZnJvbSAnLi4vQmFzZU1lZGlhdG9yJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4uLy4uL3V0aWxzL05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gXCIuLi8uLi91dGlscy9HbG9iYWxzXCI7XG5cbi8vIHBvcHVwc1xuaW1wb3J0IElQb3B1cCBmcm9tICcuLi8uLi9wb3B1cHMvQmFzZVBvcHVwJztcbmltcG9ydCBDb25maXJtYXRpb25Qb3B1cCBmcm9tICcuLi8uLi9wb3B1cHMvQ29uZmlybWF0aW9uUG9wdXAnO1xuaW1wb3J0IEhlbHBQb3B1cCBmcm9tICcuLi8uLi9wb3B1cHMvSGVscFBvcHVwJztcbmltcG9ydCBPcHRpb25zUG9wdXAgZnJvbSAnLi4vLi4vcG9wdXBzL09wdGlvbnNQb3B1cCc7XG5pbXBvcnQgUG9wdXBNYW5hZ2VyIGZyb20gXCIuLi8uLi9wb3B1cHMvUG9wdXBNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwTWFuYWdlck1lZGlhdG9yIGV4dGVuZHMgQmFzZU1lZGlhdG9yIHtcbiAgICBwdWJsaWMgc3RhdGljIE1FRElBVE9SX05BTUU6IHN0cmluZyA9ICdwb3B1cE1hbmFnZXJNZWRpYXRvcic7XG5cbiAgICBwcml2YXRlIF9sb29rdXA6IHsgW3BvcHVwSUQ6IHN0cmluZ106IElQb3B1cCB9ID0ge307XG4gICAgcHJpdmF0ZSBfcG9wdXBzQWRkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9vcHRpb25zT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3Iodmlld0NvbXA6IGFueSkge1xuICAgICAgICBzdXBlcih2aWV3Q29tcCwgdHJ1ZSwgUG9wdXBNYW5hZ2VyTWVkaWF0b3IuTUVESUFUT1JfTkFNRSk7XG4gICAgfSAgICBcbiAgICBcbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBOb3RpZmljYXRpb25zLkFERF9BTExfUE9QVVBTLFxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucy5SRUdJU1RFUl9QT1BVUCxcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnMuU0hPV19QT1BVUCxcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnMuSElERV9QT1BVUFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IG5vdGVOYW1lID0gbm90aWZpY2F0aW9uLmdldE5hbWUoKTtcbiAgICAgICAgY29uc3Qgbm90ZUJvZHkgPSBub3RpZmljYXRpb24uZ2V0Qm9keSgpOyAgICAgICBcblxuICAgICAgICBzd2l0Y2ggKG5vdGVOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIE5vdGlmaWNhdGlvbnMuQUREX0FMTF9QT1BVUFM6XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkQWxsUG9wdXBzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIE5vdGlmaWNhdGlvbnMuUkVHSVNURVJfUE9QVVA6XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJQb3B1cChub3RlQm9keSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgTm90aWZpY2F0aW9ucy5TSE9XX1BPUFVQOiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2V0UG9wdXAobm90ZUJvZHkpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRQb3B1cChub3RlQm9keSkuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25zLkhJREVfUE9QVVA6XG4gICAgICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLmhpZGVNb2RhbCgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nZXRQb3B1cChub3RlQm9keSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRQb3B1cChub3RlQm9keSkuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckxvb2t1cCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9va3VwID0ge307XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbmROb3RpZmljYXRpb24oTm90aWZpY2F0aW9ucy5ISURFX1BPUFVQLCBDb25zdGFudHMuUE9QVVBfT1BUSU9OUyk7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc1BvcHVwV2l0aElkKHBvcHVwSUQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0UG9wdXAocG9wdXBJRCkgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgcHJpdmF0ZSBfYWRkQWxsUG9wdXBzKCk6IHZvaWR7XG4gICAgICAgIGlmICh0aGlzLl9wb3B1cHNBZGRlZCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9wdXA6IGFueSA9IG51bGw7XG4gICAgICAgIHBvcHVwID0gbmV3IENvbmZpcm1hdGlvblBvcHVwKCk7XG4gICAgICAgIHBvcHVwID0gbmV3IEhlbHBQb3B1cCgpO1xuICAgICAgICBwb3B1cCA9IG5ldyBPcHRpb25zUG9wdXAoKTtcblxuICAgICAgICB0aGlzLl9wb3B1cHNBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0UG9wdXAocG9wdXBJRDogc3RyaW5nKTogSVBvcHVwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvb2t1cFtwb3B1cElEXSB8fCBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3JlZ2lzdGVyUG9wdXAocG9wdXA6IElQb3B1cCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9sb29rdXBbcG9wdXAuaWRdID0gcG9wdXA7XG4gICAgICAgIHRoaXMubWFuYWdlci5hZGRNb2RhbCgpO1xuICAgICAgICB0aGlzLm1hbmFnZXIuYWRkKHBvcHVwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBtYW5hZ2VyKCk6IFBvcHVwTWFuYWdlciB7XG4gICAgICAgIHJldHVybiA8UG9wdXBNYW5hZ2VyPnRoaXMuX3ZpZXdDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBQb3B1cE1hbmFnZXJNZWRpYXRvci5NRURJQVRPUl9OQU1FO1xuICAgIH1cbn0iLCJpbXBvcnQge0dyb3VwfSBmcm9tICdkaWpvbi9kaXNwbGF5JztcbmltcG9ydCBQb3B1cE1hbmFnZXJNZWRpYXRvciBmcm9tICcuLi9tZWRpYXRvci9wb3B1cC9Qb3B1cE1hbmFnZXJNZWRpYXRvcic7XG5pbXBvcnQge0lQb3B1cH0gZnJvbSBcIi4vQmFzZVBvcHVwXCI7XG5pbXBvcnQgQmFzZVBvcHVwIGZyb20gXCIuL0Jhc2VQb3B1cFwiO1xuaW1wb3J0IHtUZXh0dXJlcywgUGxhY2Vob2xkZXJzfSBmcm9tICdkaWpvbi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwTWFuYWdlciBleHRlbmRzIEdyb3VwIHtcbiAgICBwdWJsaWMgX21vZGFsOiBQaGFzZXIuU3ByaXRlO1xuICAgIHByb3RlY3RlZCBfZnJvbU9wdGlvbnM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoMCwgMCwgJ1BvcHVwTWFuYWdlcicsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsYXNzVHlwZSA9IEJhc2VQb3B1cDtcbiAgICAgICAgdGhpcy5maXhlZFRvQ2FtZXJhID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbWVkaWF0b3IgPSBCYXNlUG9wdXAucmV0cmlldmVNZWRpYXRvcihQb3B1cE1hbmFnZXJNZWRpYXRvci5NRURJQVRPUl9OQU1FLCB0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuX21lZGlhdG9yID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9tZWRpYXRvciA9IG5ldyBQb3B1cE1hbmFnZXJNZWRpYXRvcih0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBidWlsZEludGVyZmFjZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRNb2RhbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRNb2RhbCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZGFsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9tb2RhbCA9IHRoaXMuYWRkKHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDAsIFRleHR1cmVzLnJlY3QodGhpcy5nYW1lLndpZHRoLCB0aGlzLmdhbWUuaGVpZ2h0LCAweDAwMDAwMCwgMC4yNSkpKTtcbiAgICAgICAgdGhpcy5fbW9kYWwubmFtZSA9ICdwb3B1cE1hbmFnZXJNb2RhbCc7XG4gICAgICAgIHRoaXMuX21vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX21vZGFsLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy5tZWRpYXRvci5jbG9zZSwgdGhpcy5tZWRpYXRvcik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9tb2RhbC5jYWNoZUFzQml0bWFwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbW9kYWwudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93TW9kYWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VuZFRvQmFjayh0aGlzLl9tb2RhbCk7XG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoMTAwLCAoKSA9PiB7IHRoaXMuX21vZGFsLnZpc2libGUgPSB0cnVlOyB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZU1vZGFsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9tb2RhbC52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUFsbChkZXN0cm95OiBib29sZWFuID0gdHJ1ZSwgc2lsZW50OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZGFsKSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRUb0JhY2sodGhpcy5fbW9kYWwpO1xuICAgICAgICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLmdldENoaWxkQXQoMSksIGRlc3Ryb3ksIHNpbGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZWRpYXRvci5jbGVhckxvb2t1cCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IG1lZGlhdG9yKCk6IFBvcHVwTWFuYWdlck1lZGlhdG9yIHtcbiAgICAgICAgcmV0dXJuIDxQb3B1cE1hbmFnZXJNZWRpYXRvcj50aGlzLl9tZWRpYXRvcjtcbiAgICB9XG59IiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAnZGlqb24vYXBwbGljYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVQcm9ncmVzc0JhciBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gICAgcHJvdGVjdGVkIF9ibXA6IFBoYXNlci5CaXRtYXBEYXRhO1xuICAgIHByb3RlY3RlZCBfcmFkaXVzOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9jb2xvcjogc3RyaW5nO1xuICAgIFxuICAgIC8vIFN1cHBseSBhIHdlaWdodCBwYXJhbWV0ZXIgaWYgeW91IGRvIG5vdCB3YW50IGEgZmlsbGVkIGNpcmNsZS4gRXhwZWN0cyAwIHRvIDEgZGVjaW1hbCB2YWx1ZVxuICAgIC8vIGJlY2F1c2UgaXQgaXMgdXNlZCBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIHJhZGl1cyBhcyB0aGUgY2lyY2xlIHRoaWNrbmVzcy5cbiAgICBwcm90ZWN0ZWQgX3dlaWdodDogbnVtYmVyO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlciA9IDIsIHdlaWdodDogbnVtYmVyID0gMCwgY29sb3I6IHN0cmluZyA9ICcjZmZmZmZmJywgYW5nbGU6IG51bWJlciA9IC05MCkge1xuICAgICAgICBzdXBlcihBcHBsaWNhdGlvbi5nZXRJbnN0YW5jZSgpLmdhbWUsIHgsIHkpO1xuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcbiAgICAgICAgdGhpcy5fd2VpZ2h0ID0gUGhhc2VyLk1hdGguY2xhbXAod2VpZ2h0LCAwLCAxKTtcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG5cbiAgICAgICAgaWYgKHRoaXMuX3dlaWdodCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2JtcCA9IHRoaXMuZ2FtZS5hZGQuYml0bWFwRGF0YSgodGhpcy5fcmFkaXVzICogMikgKyAodGhpcy5fd2VpZ2h0ICogKHRoaXMuX3JhZGl1cyAqIDAuNikpLCAodGhpcy5fcmFkaXVzICogMikgKyAodGhpcy5fd2VpZ2h0ICogKHRoaXMuX3JhZGl1cyAqIDAuNikpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2JtcCA9IHRoaXMuZ2FtZS5hZGQuYml0bWFwRGF0YShyYWRpdXMgKiAyLCByYWRpdXMgKiAyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRUZXh0dXJlKHRoaXMuX2JtcCk7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MoMCk7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyB1cGRhdGVQcm9ncmVzcyhwZXJjZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIHByb2dyZXNzOiBudW1iZXIgPSBwZXJjZW50O1xuICAgICAgICB0aGlzLl9ibXAuY2xlYXIoKTtcbiAgICAgICAgaWYgKHRoaXMuX3dlaWdodCA+IDApIHtcbiAgICAgICAgICAgIHByb2dyZXNzID0gUGhhc2VyLk1hdGguY2xhbXAocGVyY2VudCwgMCwgMC45OTk5KTtcbiAgICAgICAgICAgIHRoaXMuX2JtcC5jdHguZmlsbFN0eWxlID0gdGhpcy5fY29sb3I7XG4gICAgICAgICAgICB0aGlzLl9ibXAuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5fY29sb3I7XG4gICAgICAgICAgICB0aGlzLl9ibXAuY3R4LmxpbmVXaWR0aCA9IHRoaXMuX3dlaWdodCAqIHRoaXMuX3JhZGl1cztcbiAgICAgICAgICAgIHRoaXMuX2JtcC5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLl9ibXAuY3R4LmFyYyh0aGlzLl9ibXAud2lkdGggKiAwLjUsIHRoaXMuX2JtcC5oZWlnaHQgKiAwLjUsIHRoaXMuX3JhZGl1cyAtIDE1LCAwLCAoTWF0aC5QSSAqIDIpICogcHJvZ3Jlc3MsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuX2JtcC5jdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9ncmVzcyA9IDEgLSBQaGFzZXIuTWF0aC5jbGFtcChwZXJjZW50LCAwLjAwMDEsIDEpO1xuICAgICAgICAgICAgdGhpcy5fYm1wLmN0eC5maWxsU3R5bGUgPSB0aGlzLl9jb2xvcjtcbiAgICAgICAgICAgIHRoaXMuX2JtcC5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLl9ibXAuY3R4LmFyYyh0aGlzLl9yYWRpdXMsIHRoaXMuX3JhZGl1cywgdGhpcy5fcmFkaXVzLCAwLCAoTWF0aC5QSSAqIDIpICogcHJvZ3Jlc3MsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5fYm1wLmN0eC5saW5lVG8odGhpcy5fcmFkaXVzLCB0aGlzLl9yYWRpdXMpO1xuICAgICAgICAgICAgdGhpcy5fYm1wLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuX2JtcC5jdHguZmlsbCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9ibXAuZGlydHkgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcmFkaXVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fcmFkaXVzID0gKHZhbHVlID4gMCA/IHZhbHVlIDogMCk7XG4gICAgICAgIHRoaXMuX2JtcC5yZXNpemUodGhpcy5fcmFkaXVzICogMiwgdGhpcy5fcmFkaXVzICogMik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByYWRpdXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JhZGl1cztcbiAgICB9XG59IiwiaW1wb3J0IHtHcm91cCwgVGV4dH0gZnJvbSAnZGlqb24vZGlzcGxheSc7XG5pbXBvcnQge0lQcmVsb2FkSGFuZGxlcn0gZnJvbSAnZGlqb24vaW50ZXJmYWNlcyc7XG5pbXBvcnQgUGllUHJvZ3Jlc3NCYXIgZnJvbSAnLi9QaWVQcm9ncmVzc0Jhcic7XG5pbXBvcnQgeyBDb2xvdXJzLCBDb25zdGFudHMgfSBmcm9tICcuLi91dGlscy9HbG9iYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgR3JvdXAgaW1wbGVtZW50cyBJUHJlbG9hZEhhbmRsZXIge1xuICAgIHByaXZhdGUgX3dpcGVyOiBQaGFzZXIuSW1hZ2U7XG4gICAgcHJpdmF0ZSBfcHJvZ3Jlc3NCYXIxOiBQaWVQcm9ncmVzc0JhcjtcbiAgICBwcml2YXRlIF9wcm9ncmVzc0JhcjI6IFBpZVByb2dyZXNzQmFyO1xuXG4gICAgcHJpdmF0ZSBfbG9hZFRleHQ6IFRleHQ7XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkluQ29tcGxldGU6IFBoYXNlci5TaWduYWwgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuICAgIHB1YmxpYyB0cmFuc2l0aW9uT3V0Q29tcGxldGU6IFBoYXNlci5TaWduYWwgPSBuZXcgUGhhc2VyLlNpZ25hbCgpO1xuXG4gICAgcHJpdmF0ZSBfaW5Ud2VlbjogUGhhc2VyLlR3ZWVuO1xuICAgIHByaXZhdGUgX291dFR3ZWVuOiBQaGFzZXIuVHdlZW47XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKHgsIHksIG5hbWUsIHRydWUpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5idWlsZEludGVyZmFjZSgpO1xuICAgICAgICB0aGlzLnkgPSAtdGhpcy5nYW1lLmhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBHcm91cCBvdmVycmlkZXNcbiAgICBwcm90ZWN0ZWQgYnVpbGRJbnRlcmZhY2UoKSB7XG4gICAgICAgIHRoaXMuX2xvYWRUZXh0ID0gdGhpcy5hZGRJbnRlcm5hbC5kVGV4dCg1MCwgNTAsICdMb2FkaW5nIC4uLiAnLCBDb25zdGFudHMuRk9OVF9WVDMyMywgMzYsICcjRkZGRkZGJyk7XG5cbiAgICAgICAgdGhpcy5fd2lwZXIgPSB0aGlzLmFkZEludGVybmFsLmltYWdlKDAsIDAsICdzcGxhc2hfc2NyZWVuJyk7XG5cbiAgICAgICAgdGhpcy5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3Byb2dyZXNzQmFyMSA9IG5ldyBQaWVQcm9ncmVzc0Jhcih0aGlzLmdhbWUud2lkdGggKiAwLjI1LCB0aGlzLmdhbWUuaGVpZ2h0ICogMC43NSwgNTApO1xuICAgICAgICB0aGlzLl9wcm9ncmVzc0JhcjIgPSBuZXcgUGllUHJvZ3Jlc3NCYXIodGhpcy5nYW1lLndpZHRoICogMC43NSwgdGhpcy5nYW1lLmhlaWdodCAqIDAuNzUsIDUwLCAwLjE1LCAnI2ZmYWEwMCcsIDkwKTtcbiAgICAgICAgdGhpcy5hZGRJbnRlcm5hbC5leGlzdGluZyh0aGlzLl9wcm9ncmVzc0JhcjEpO1xuICAgICAgICB0aGlzLmFkZEludGVybmFsLmV4aXN0aW5nKHRoaXMuX3Byb2dyZXNzQmFyMik7XG5cbiAgICAgICAgdGhpcy5faW5Ud2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcykudG8oeyB5OiAwLCBhbHBoYTogMSB9LCAzNTAsIFBoYXNlci5FYXNpbmcuUXVhZHJhdGljLk91dCk7XG4gICAgICAgIHRoaXMuX291dFR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50byh7IHk6IHRoaXMuZ2FtZS5oZWlnaHQsIGFscGhhOiAwIH0sIDMwMCwgUGhhc2VyLkVhc2luZy5RdWFkcmF0aWMuSW4pO1xuXG4gICAgICAgIHRoaXMuX2luVHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5faW4sIHRoaXMpO1xuICAgICAgICB0aGlzLl9vdXRUd2Vlbi5vbkNvbXBsZXRlLmFkZCh0aGlzLl9vdXQsIHRoaXMpO1xuICAgIH1cblxuICAgIC8vIGlQcmVsb2FkSGFuZGxlciBpbXBsZW1lbnRhdGlvbnNcbiAgICBwdWJsaWMgbG9hZFN0YXJ0KCkge1xuICAgICAgICB0aGlzLl9wcm9ncmVzc0JhcjEudXBkYXRlUHJvZ3Jlc3MoMCk7XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzQmFyMi51cGRhdGVQcm9ncmVzcygxKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydGluZyBwcmVsb2FkXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkUHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wcm9ncmVzc0JhcjEudXBkYXRlUHJvZ3Jlc3MocHJvZ3Jlc3MvMTAwKTtcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NCYXIyLnVwZGF0ZVByb2dyZXNzKDEgLSAocHJvZ3Jlc3MvMTAwKSk7XG4gICAgICAgIGNvbnN0IHJvdW5kZWRQcm9ncmVzcyA9IE1hdGgucm91bmQocHJvZ3Jlc3MpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuX2xvYWRUZXh0LnNldFRleHQoJ0xvYWRpbmcgLi4uICcgKyByb3VuZGVkUHJvZ3Jlc3MgKyAnJScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkQ29tcGxldGUoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkluKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNob3dpbmcgUHJlbG9hZGVyXCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faW5Ud2Vlbi5zdGFydCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uT3V0KCkge1xuICAgICAgICB0aGlzLl9vdXRUd2Vlbi5zdGFydCgpO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuICAgIHByb3RlY3RlZCBfaW4oKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkluQ29tcGxldGUuZGlzcGF0Y2goKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX291dCgpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMueSA9IC10aGlzLmdhbWUuaGVpZ2h0O1xuICAgIC8vICAgIHRoaXMudHJhbnNpdGlvbk91dENvbXBsZXRlLmRpc3BhdGNoKCk7XG4gICAgfVxufSIsImltcG9ydCB7R2FtZX0gZnJvbSAnZGlqb24vY29yZSc7XG5pbXBvcnQgUkhBdWRpb01hbmFnZXIgZnJvbSAnLi9SSEF1ZGlvTWFuYWdlcic7XG5pbXBvcnQgUG9wdXBNYW5hZ2VyIGZyb20gJy4vcG9wdXBzL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQge0lHYW1lQ29uZmlnfSBmcm9tICdkaWpvbi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IENvbnN0YW50cywgU2V0dGluZ3MgfSBmcm9tICcuL3V0aWxzL0dsb2JhbHMnO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL3VpL1ByZWxvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJIR2FtZSBleHRlbmRzIEdhbWUge1xuICAgIHB1YmxpYyBwb3B1cDogUG9wdXBNYW5hZ2VyO1xuICAgIHB1YmxpYyBwcmVsb2FkZXI6IFByZWxvYWRlcjtcbiAgICBcbiAgICBwcm90ZWN0ZWQgX2JnTG9vcDogUGhhc2VyLlNvdW5kID0gbnVsbDtcbiAgIFxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJR2FtZUNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRMYXllcnMoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmFkZExheWVycygpO1xuICAgICAgICB0aGlzLnBvcHVwID0gbmV3IFBvcHVwTWFuYWdlcigpO1xuICAgICAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLnBvcHVwKTtcbiAgICB9ICBcbiAgICBcbiAgICBwdWJsaWMgYm9vdCgpIHtcbiAgICAgICAgc3VwZXIuYm9vdCgpO1xuICAgICAgICB0aGlzLmF1ZGlvID0gbnVsbDtcbiAgICAgICAgdGhpcy5hdWRpbyA9IG5ldyBSSEF1ZGlvTWFuYWdlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtdXNpY1RvZ2dsZWQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9iZ0xvb3AgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2JnTG9vcC52b2x1bWUgPSBTZXR0aW5ncy5NVVNJQ19FTkFCTEVEID8gU2V0dGluZ3MuTVVTSUNfVk9MVU1FIDogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgaW5pdFByZWxvYWRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKDAsIDAsICdwcmVsb2FkJyk7XG4gICAgICAgIHRoaXMuc3RhZ2VMYXllci5hZGQodGhpcy5wcmVsb2FkZXIpO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24uYWRkQWxsKHRoaXMucHJlbG9hZGVyKTsgIFxuICAgICAgICB0aGlzLnRyYW5zaXRpb24udG8oQ29uc3RhbnRzLlNUQVRFX01FTlUpOyAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRCR0xvb3AobmFtZTogc3RyaW5nLCBjcm9zc2ZhZGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fYmdMb29wID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9iZ0xvb3AgPSB0aGlzLmF1ZGlvLnBsYXlTb3VuZChuYW1lLCBTZXR0aW5ncy5NVVNJQ19FTkFCTEVEID8gU2V0dGluZ3MuTVVTSUNfVk9MVU1FIDogMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3Jvc3NmYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9zc2ZhZGVBdWRpbyhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JnTG9vcC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmdMb29wID0gdGhpcy5hdWRpby5wbGF5U291bmQobmFtZSwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKFNldHRpbmdzLk1VU0lDX0VOQUJMRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmdMb29wLmZhZGVUbyhTZXR0aW5ncy5NVVNJQ19WT0xVTUUsIDEwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjcm9zc2ZhZGVBdWRpbyhuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGQudHdlZW4odGhpcy5fYmdMb29wKS50byh7IHZvbHVtZTogMCB9LCA2NTAsIFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUsIHRydWUpO1xuICAgICAgICBsZXQgbmV3QkcgPSB0aGlzLmF1ZGlvLnBsYXlTb3VuZChuYW1lLCAwLCB0cnVlKTtcbiAgICAgICAgdGhpcy5hZGQudHdlZW4obmV3QkcpLnRvKHsgdm9sdW1lOiBTZXR0aW5ncy5NVVNJQ19FTkFCTEVEID8gU2V0dGluZ3MuTVVTSUNfVk9MVU1FIDogMCB9LCAxMDAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlKS5vbkNvbXBsZXRlLmFkZCgoKSA9PiB7IHRoaXMuX2JnTG9vcCA9IG5ld0JHOyB9KTsgXG4gICAgfVxufSIsImltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiZGlqb24vdXRpbHNcIjtcbmltcG9ydCB7SU5vdGlmaWNhdGlvbn0gZnJvbSBcImRpam9uL2ludGVyZmFjZXNcIjtcblxuaW1wb3J0IEJhc2VNZWRpYXRvciBmcm9tICcuL0Jhc2VNZWRpYXRvcic7XG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSAnLi4vdXRpbHMvR2xvYmFscyc7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuLi91dGlscy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBSSEFwcGxpY2F0aW9uIGZyb20gJy4uL1JIQXBwbGljYXRpb24nO1xuaW1wb3J0IFJIR2FtZSBmcm9tICcuLi9SSEdhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBsaWNhdGlvbk1lZGlhdG9yIGV4dGVuZHMgQmFzZU1lZGlhdG9yIHtcbiAgICBwdWJsaWMgc3RhdGljIE1FRElBVE9SX05BTUU6IHN0cmluZyA9ICdhcHBsaWNhdGlvbk1lZGlhdG9yJztcblxuICAgIC8vIGRpam9uLm12Yy5NZWRpYXRvciBvdmVycmlkZXNcbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBOb3RpZmljYXRpb25zLkJPT1RfSU5JVCxcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnMuQk9PVF9DT01QTEVURSxcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnMuQkVHSU5fR0FNRSxcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnMuUkVTVEFSVF9SVU4sIFxuICAgICAgICAgICAgTm90aWZpY2F0aW9ucy5CQUNLX1RPX01FTlUsXG4gICAgICAgICAgICBOb3RpZmljYXRpb25zLkFVRElPX1RPR0dMRUQsXG4gICAgICAgICAgICBOb3RpZmljYXRpb25zLk1VU0lDX1RPR0dMRURcbiAgICAgICAgXVxuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBJTm90aWZpY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IG5vdGVOYW1lID0gbm90aWZpY2F0aW9uLmdldE5hbWUoKTtcbiAgICAgICAgY29uc3Qgbm90ZUJvZHkgPSBub3RpZmljYXRpb24uZ2V0Qm9keSgpO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoIChub3RlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25zLkFVRElPX1RPR0dMRUQ6XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTW9kZWwudXBkYXRlTXV0ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE5vdGlmaWNhdGlvbnMuTVVTSUNfVE9HR0xFRDpcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNb2RlbC51cGRhdGVNdXRlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJoR2FtZS5tdXNpY1RvZ2dsZWQoKTtcbiAgICAgICAgICAgICAgICBicmVhazsgIFxuICAgICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25zLkJPT1RfSU5JVDpcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdDb21wb25lbnQuYWRqdXN0U2NhbGVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbXBvbmVudC5hZGp1c3RSZW5kZXJlclNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Q29tcG9uZW50LmFkZFBsdWdpbnMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTm90aWZpY2F0aW9ucy5CT09UX0NPTVBMRVRFOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5zZXREYXRhKHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKCdhc3NldHMnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Q29tcG9uZW50LmJvb3RDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25zLkJFR0lOX0dBTUU6XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTW9kZWwucmVzZXRHYW1lcGxheVN0YXRzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE5vdGlmaWNhdGlvbnMuUkVTVEFSVF9SVU46XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTW9kZWwucmVzdGFydGluZ1J1biA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgIFxuICAgICAgICAgICAgY2FzZSBOb3RpZmljYXRpb25zLkJBQ0tfVE9fTUVOVTpcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNb2RlbC5yZXN0YXJ0aW5nUnVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyIC8gc2V0dGVyXG4gICAgcHVibGljIGdldCB2aWV3Q29tcG9uZW50KCk6IFJIQXBwbGljYXRpb24ge1xuICAgICAgICByZXR1cm4gPFJIQXBwbGljYXRpb24+dGhpcy5fdmlld0NvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gQXBwbGljYXRpb25NZWRpYXRvci5NRURJQVRPUl9OQU1FO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmhHYW1lKCk6IFJIR2FtZSB7XG4gICAgICAgIHJldHVybiA8UkhHYW1lPnRoaXMuZ2FtZTtcbiAgICB9XG59IiwiaW1wb3J0IEJhc2VNZWRpYXRvciBmcm9tICcuL0Jhc2VNZWRpYXRvcic7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuLi91dGlscy9Ob3RpZmljYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vdE1lZGlhdG9yIGV4dGVuZHMgQmFzZU1lZGlhdG9yIHtcbiAgICBwdWJsaWMgc3RhdGljIE1FRElBVE9SX05BTUU6IHN0cmluZyA9ICdib290TWVkaWF0b3InO1xuXHRcdFxuICAgIC8vIGRpam9uLm12Yy5NZWRpYXRvciBvdmVycmlkZXNcbiAgICBwdWJsaWMgb25SZWdpc3RlcigpIHtcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuQk9PVF9JTklUKTtcbiAgICB9XG5cdFx0XG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICAvLyBjYWxsZWQgZnJvbSB2aWV3Q29tcG9uZW50XG4gICAgcHVibGljIGJvb3RDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuQk9PVF9DT01QTEVURSk7XG4gICAgfVxuXHRcdFxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBCb290TWVkaWF0b3IuTUVESUFUT1JfTkFNRTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdkaWpvbi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0dhbWV9IGZyb20gJ2Rpam9uL2NvcmUnO1xuaW1wb3J0IHsgVGV4dCwgU3ByaXRlIH0gZnJvbSAnZGlqb24vZGlzcGxheSc7XG5pbXBvcnQgUkhCdXR0b24gZnJvbSAnLi9SSEJ1dHRvbic7XG5pbXBvcnQgeyBTZXR0aW5ncywgQ29uc3RhbnRzLCBDb2xvdXJzIH0gZnJvbSAnLi4vdXRpbHMvR2xvYmFscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJITGFiZWxsZWRCdXR0b24gZXh0ZW5kcyBSSEJ1dHRvbiB7XG5cbiAgICBwcm90ZWN0ZWQgX2xhYmVsOiBUZXh0O1xuICAgIHByb3RlY3RlZCBfb3V0TGFiZWxUaW50OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9vdmVyTGFiZWxUaW50OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9kb3duTGFiZWxUaW50OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF91cExhYmVsVGludDogbnVtYmVyO1xuXG4gICAgcHJvdGVjdGVkIF9vdmVyU291bmQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHJvdGVjdGVkIF9kb3duU291bmQ6IHN0cmluZyA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgY2FsbGJhY2s6IGFueSwgY29udGV4dDogYW55LCBhc3NldEtleTogc3RyaW5nLCBiYXNlRnJhbWU6IHN0cmluZywgb3ZlckZyYW1lPzogc3RyaW5nLCBkb3duRnJhbWU/OiBzdHJpbmcsIHVwRnJhbWU/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBhc3NldEtleSxcbiAgICAgICAgICAgIGJhc2VGcmFtZSxcbiAgICAgICAgICAgIG92ZXJGcmFtZSA/IG92ZXJGcmFtZSA6IGJhc2VGcmFtZSxcbiAgICAgICAgICAgIGRvd25GcmFtZSA/IGRvd25GcmFtZSA6IGJhc2VGcmFtZSxcbiAgICAgICAgICAgIHVwRnJhbWUgPyB1cEZyYW1lIDogYmFzZUZyYW1lKTtcbiAgICAgICAgdGhpcy5fbGFiZWwgPSBuZXcgVGV4dCgwLCAwLCBcIlwiLCBcIiNmZmZmZmZcIiwgMSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGVGcm9tRGF0YShkYXRhOiBhbnkpOiBSSExhYmVsbGVkQnV0dG9uIHtcbiAgICAgICAgbGV0IHNlbGY6IFJITGFiZWxsZWRCdXR0b24gPSBuZXcgUkhMYWJlbGxlZEJ1dHRvbihkYXRhLnBvc2l0aW9uLngsIGRhdGEucG9zaXRpb24ueSwgbnVsbCwgbnVsbCwgZGF0YS5rZXksIGRhdGEuZnJhbWUsIGRhdGEub3ZlckZyYW1lLCBkYXRhLmRvd25GcmFtZSwgZGF0YS51cEZyYW1lKTtcbiAgICAgICAgc2VsZi5uYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICBpZiAoZGF0YS5hbmNob3IpIHtcbiAgICAgICAgICAgIHNlbGYuYW5jaG9yLnNldFRvKGRhdGEuYW5jaG9yLngsIGRhdGEuYW5jaG9yLnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLnNjYWxlKSB7XG4gICAgICAgICAgICBzZWxmLnNjYWxlLnNldFRvKGRhdGEuc2NhbGUueCwgZGF0YS5zY2FsZS55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuYWxwaGEgPSBkYXRhLmFscGhhID8gZGF0YS5hbHBoYSA6IDE7XG4gICAgICAgIHNlbGYuYW5nbGUgPSBkYXRhLmFuZ2xlID8gZGF0YS5hbmdsZSA6IDA7XG4gICAgICAgIFxuICAgICAgICBzZWxmLl9vdXRMYWJlbFRpbnQgPSBkYXRhLm91dExhYmVsQ29sb3IgPyBDb2xvdXJzLmZsb2F0UkdCQVRvSGV4KGRhdGEub3V0TGFiZWxDb2xvcikgOiAweGZmZmZmZjtcbiAgICAgICAgc2VsZi5fb3ZlckxhYmVsVGludCA9IGRhdGEub3ZlckxhYmVsQ29sb3IgPyBDb2xvdXJzLmZsb2F0UkdCQVRvSGV4KGRhdGEub3ZlckxhYmVsQ29sb3IpIDogMHhmZmZmZmY7XG4gICAgICAgIHNlbGYuX2Rvd25MYWJlbFRpbnQgPSBkYXRhLmRvd25MYWJlbENvbG9yID8gQ29sb3Vycy5mbG9hdFJHQkFUb0hleChkYXRhLmRvd25MYWJlbENvbG9yKSA6IDB4ZmZmZmZmO1xuICAgICAgICBzZWxmLl91cExhYmVsVGludCA9IGRhdGEudXBMYWJlbENvbG9yID8gQ29sb3Vycy5mbG9hdFJHQkFUb0hleChkYXRhLnVwTGFiZWxDb2xvcikgOiAweGZmZmZmZjtcblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXNzaWduUHJlZmFiKG9iamVjdDogYW55KSB7IFxuICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgVGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fbGFiZWwuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fbGFiZWwgPSBvYmplY3Q7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuX2xhYmVsKTtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsLnNldENvbG9yKFwiI2ZmZmZmZlwiKTtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsLnRpbnQgPSB0aGlzLl9vdXRMYWJlbFRpbnQ7XG4gICAgICAgICAgICAvL3RoaXMuX2xhYmVsLnggKz0gTWF0aC5yb3VuZCh0aGlzLnJlYWxXaWR0aCAqIDAuNSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIF9vbkRvd25UcmlnZ2VyZWQoKTogdm9pZCB7IH0gICBcblxuICAgIHB1YmxpYyBvbklucHV0RG93bkhhbmRsZXIoc3ByaXRlOiBhbnksIHBvaW50ZXI6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbnB1dC5lbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLm9uSW5wdXREb3duSGFuZGxlcihzcHJpdGUsIHBvaW50ZXIpO1xuICAgICAgICB0aGlzLl9sYWJlbC50aW50ID0gdGhpcy5fZG93bkxhYmVsVGludDtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG9uSW5wdXRPdmVySGFuZGxlcihzcHJpdGU6IGFueSwgcG9pbnRlcjogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0LmVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25JbnB1dE92ZXJIYW5kbGVyKHNwcml0ZSwgcG9pbnRlcik7XG4gICAgICAgIHRoaXMuX2xhYmVsLnRpbnQgPSB0aGlzLl9vdmVyTGFiZWxUaW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBvbklucHV0T3V0SGFuZGxlcihzcHJpdGU6IGFueSwgcG9pbnRlcjogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0LmVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25JbnB1dE91dEhhbmRsZXIoc3ByaXRlLCBwb2ludGVyKTtcbiAgICAgICAgdGhpcy5fbGFiZWwudGludCA9IHRoaXMuX291dExhYmVsVGludDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JbnB1dFVwSGFuZGxlcihzcHJpdGU6IGFueSwgcG9pbnRlcjogYW55LCBpc092ZXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQuZW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5vbklucHV0VXBIYW5kbGVyKHNwcml0ZSwgcG9pbnRlciwgaXNPdmVyKTtcbiAgICAgICAgdGhpcy5fbGFiZWwudGludCA9IHRoaXMuX3VwTGFiZWxUaW50O1xuICAgIH0gICBcbiAgICBcbiAgICBwdWJsaWMgYXNzaWduVGV4dChuZXdUZXh0OiBUZXh0KTogdm9pZCB7XG4gICAgICAgIGlmIChuZXdUZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9sYWJlbCA9IG5ld1RleHQ7XG4gICAgICAgIH1cbiAgICB9ICAgXG59IiwiaW1wb3J0IEJhc2VTdGF0ZSBmcm9tIFwiLi9CYXNlU3RhdGVcIjtcbmltcG9ydCBCb290TWVkaWF0b3IgZnJvbSBcIi4uL21lZGlhdG9yL0Jvb3RNZWRpYXRvclwiO1xuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL3V0aWxzL0dsb2JhbHNcIjtcbmltcG9ydCBSSEJ1dHRvbiBmcm9tICcuLi9wcmVmYWJzL1JIQnV0dG9uJztcbmltcG9ydCBSSExhYmVsbGVkQnV0dG9uIGZyb20gJy4uL3ByZWZhYnMvUkhMYWJlbGxlZEJ1dHRvbic7XG5pbXBvcnQge1ByZWZhYkJ1aWxkZXJ9IGZyb20gXCJkaWpvbi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb290IGV4dGVuZHMgQmFzZVN0YXRlIHtcbiAgICAvLyBQaGFzZXIuU3RhdGUgb3ZlcnJpZGVzXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX21lZGlhdG9yID0gbmV3IEJvb3RNZWRpYXRvcih0aGlzKTtcbiAgICAgICAgUHJlZmFiQnVpbGRlci5hZGRQcmVmYWJDbGFzcyhSSEJ1dHRvbiwgXCJidXR0b25cIik7XG4gICAgICAgIFByZWZhYkJ1aWxkZXIuYWRkUHJlZmFiQ2xhc3MoUkhMYWJlbGxlZEJ1dHRvbiwgXCJsYWJlbGxlZGJ1dHRvblwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHdpbmRvd1sndmVyc2lvbiddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hc3NldC5jYWNoZUJ1c3RWZXJzaW9uID0gJ0BAdmVyc2lvbic7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0LmxvYWRKU09OKCdnYW1lX2RhdGEnKTtcbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0LmxvYWRKU09OKCdhc3NldHMnKTtcbiAgICAgICAgdGhpcy5nYW1lLmFzc2V0LmxvYWRKU09OKCdjb3B5Jyk7XG4gICAgICAgIHRoaXMuZ2FtZS5hc3NldC5sb2FkSW1hZ2UoJ3NwbGFzaF9zY3JlZW4ucG5nJywgMSk7XG4gICAgfVxuXG4gICAgLy8gZGlqb24uY29yZS5TdGF0ZSBvdmVycmlkZXNcbiAgICBwdWJsaWMgYnVpbGRJbnRlcmZhY2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWVkaWF0b3IuYm9vdENvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG5cbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICBwcm90ZWN0ZWQgZ2V0IG1lZGlhdG9yKCk6IEJvb3RNZWRpYXRvciB7XG4gICAgICAgIHJldHVybiA8Qm9vdE1lZGlhdG9yPnRoaXMuX21lZGlhdG9yO1xuICAgIH1cbn0iLCJpbXBvcnQge0lOb3RpZmljYXRpb259IGZyb20gJ2Rpam9uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gXCIuLi91dGlscy9HbG9iYWxzXCI7XG5pbXBvcnQgQmFzZU1lZGlhdG9yIGZyb20gJy4vQmFzZU1lZGlhdG9yJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4uL3V0aWxzL05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vc3RhdGUvTWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVNZWRpYXRvciBleHRlbmRzIEJhc2VNZWRpYXRvciB7XG4gICAgcHVibGljIHN0YXRpYyBNRURJQVRPUl9OQU1FOiBzdHJpbmcgPSAnbWVudU1lZGlhdG9yJztcblx0XHRcbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiBbXG5cbiAgICAgICAgIF07XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IElOb3RpZmljYXRpb24pIHtcbiAgICAgICAgY29uc3Qgbm90ZU5hbWUgPSBub3RpZmljYXRpb24uZ2V0TmFtZSgpO1xuICAgICAgICBjb25zdCBub3RlQm9keSA9IG5vdGlmaWNhdGlvbi5nZXRCb2R5KCk7XG4gICAgICAgIHN3aXRjaCAobm90ZU5hbWUpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHB1YmxpYyBtZXRob2RzXG4gICAgcHVibGljIGFkZFBvcHVwcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKE5vdGlmaWNhdGlvbnMuQUREX0FMTF9QT1BVUFMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93T3B0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93UG9wdXAoQ29uc3RhbnRzLlBPUFVQX09QVElPTlMpO1xuICAgIH1cblx0XHRcbiAgICAvLyBnZXR0ZXIgLyBzZXR0ZXJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiBNZW51TWVkaWF0b3IuTUVESUFUT1JfTkFNRTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG1lbnUoKTogTWVudSB7XG4gICAgICAgIHJldHVybiA8TWVudT50aGlzLl92aWV3Q29tcG9uZW50O1xuICAgIH1cbn0iLCJpbXBvcnQgQmFzZVN0YXRlIGZyb20gXCIuL0Jhc2VTdGF0ZVwiO1xuaW1wb3J0IE1lbnVNZWRpYXRvciBmcm9tICcuLi9tZWRpYXRvci9NZW51TWVkaWF0b3InO1xuaW1wb3J0IHtDb25zdGFudHMsIENvbG91cnMsIFNldHRpbmdzfSBmcm9tICcuLi91dGlscy9HbG9iYWxzJztcbmltcG9ydCB7R3JvdXAsIFNwcml0ZSwgVGV4dH0gZnJvbSAnZGlqb24vZGlzcGxheSc7XG5pbXBvcnQgUkhCdXR0b24gZnJvbSAnLi4vcHJlZmFicy9SSEJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBCYXNlU3RhdGUge1xuICAgIFxuICAgIC8vIFBoYXNlci5TdGF0ZSBvdmVycmlkZXNcbiAgICBwdWJsaWMgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5fbWVkaWF0b3IgPSBNZW51TWVkaWF0b3IucmV0cmlldmVNZWRpYXRvcihNZW51TWVkaWF0b3IuTUVESUFUT1JfTkFNRSwgdGhpcyk7XG4gICAgICAgIGlmICh0aGlzLl9tZWRpYXRvciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbWVkaWF0b3IgPSBuZXcgTWVudU1lZGlhdG9yKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZS5hc3NldC5sb2FkQXNzZXRzKCdtYWlubWVudScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3NjZW5lRGF0YSA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKCdtYWlubWVudScpO1xuICAgICAgICBpZiAodGhpcy5fc2NlbmVEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGlqb24uY29yZS5TdGF0ZSBvdmVycmlkZXNcbiAgICBwdWJsaWMgbGlzdEJ1aWxkU2VxdWVuY2UoKSB7XG4gICAgICAgIHJldHVybiBbIFxuICAgICAgICAgICAgdGhpcy5fYWRkQnV0dG9ucyxcbiAgICAgICAgICAgIHRoaXMuX2FkZFBvcHVwc1xuICAgICAgICBdXG4gICAgfVxuXG4gICAgcHVibGljIGFmdGVyQnVpbGQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFydEJHTG9vcCgnenpwX2hhcHB5X3JlbGF4aW5nJyk7XG4gICAgfSAgIFxuICAgIFxuICAgIHByaXZhdGUgX2FkZEJ1dHRvbnMoKTogdm9pZCB7XG4gICAgICAgIGxldCBuZXdCdG46IGFueSA9IHRoaXMuX2ZpbmRQcmVmYWIoJ05ld0dhbWVCdG4nKTtcbiAgICAgICAgaWYgKG5ld0J0biAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3QnRuLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy5uZXdHYW1lUHJlc3NlZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNldEJ0bjogYW55ID0gdGhpcy5fZmluZFByZWZhYignU2V0dGluZ3NCdG4nKTtcbiAgICAgICAgaWYgKHNldEJ0biAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0QnRuLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy5zZXR0aW5nc1ByZXNzZWQsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5ld0dhbWVQcmVzc2VkKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnbmV3IGdhbWUnKTtcbiAgICAgICAgbGV0IGltYWdlID0gdGhpcy5hZGQuaW1hZ2UoTWF0aC5yYW5kb20oKSAqIHRoaXMuZ2FtZS53aWR0aCAqIDAuNSwgTWF0aC5yYW5kb20oKSAqIHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjUsICdzY2lmaS1sYW5kc2NhcGUnKTtcbiAgICB9ICAgXG4gICAgXG4gICAgcHVibGljIHNldHRpbmdzUHJlc3NlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZWRpYXRvci5zaG93T3B0aW9ucygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FkZFBvcHVwcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZWRpYXRvci5hZGRQb3B1cHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IG1lZGlhdG9yKCk6IE1lbnVNZWRpYXRvciB7XG4gICAgICAgIHJldHVybiA8TWVudU1lZGlhdG9yPnRoaXMuX21lZGlhdG9yO1xuICAgIH0gIFxuICAgIFxuICAgIHB1YmxpYyBfY3JlYXRlRGVidWdSZWN0KHJlY3Q6IFBoYXNlci5SZWN0YW5nbGUpOiB2b2lkIHtcbiAgICAgICAgbGV0IGdmeCA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoKTtcbiAgICAgICAgZ2Z4LmJlZ2luRmlsbCgweDAwZmYwMCwgMC41KTtcbiAgICAgICAgZ2Z4LmRyYXdSZWN0KHJlY3QueCwgcmVjdC55LCByZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICAgIGdmeC5lbmRGaWxsKCk7XG4gICAgfVxufVxuICAiLCJpbXBvcnQge0FwcGxpY2F0aW9ufSBmcm9tIFwiZGlqb24vYXBwbGljYXRpb25cIjtcbmltcG9ydCBSSEdhbWUgZnJvbSAnLi9SSEdhbWUnO1xuaW1wb3J0IHtEZXZpY2V9IGZyb20gXCJkaWpvbi91dGlsc1wiO1xuaW1wb3J0IHtDb3B5TW9kZWx9IGZyb20gXCJkaWpvbi9tdmNcIjtcblxuaW1wb3J0IEFwcGxpY2F0aW9uTWVkaWF0b3IgZnJvbSBcIi4vbWVkaWF0b3IvQXBwbGljYXRpb25NZWRpYXRvclwiO1xuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gXCIuL3V0aWxzL0dsb2JhbHNcIjtcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCIuL3V0aWxzL05vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCBCb290IGZyb20gXCIuL3N0YXRlL0Jvb3RcIjtcbmltcG9ydCBHYW1lcGxheSBmcm9tICcuL3N0YXRlL0dhbWVwbGF5JztcbmltcG9ydCBNZW51IGZyb20gJy4vc3RhdGUvTWVudSc7XG5pbXBvcnQgR2FtZU1vZGVsIGZyb20gXCIuL21vZGVsL0dhbWVNb2RlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaWlBBcHBsaWNhdGlvbiBleHRlbmRzIEFwcGxpY2F0aW9uIHtcbiAgICBwdWJsaWMgZ2FtZUlkOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLy8gb3ZlcnJpZGVzXG4gICAgcHVibGljIGNyZWF0ZUdhbWUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBSSEdhbWUoe1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMuX2dldEdhbWVXaWR0aCgpLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLl9nZXRHYW1lSGVpZ2h0KCksXG4gICAgICAgICAgICBwYXJlbnQ6ICdnYW1lLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAvL3JlbmRlcmVyOiBQaGFzZXIuQ0FOVkFTLFxuICAgICAgICAgICAgcmVuZGVyZXI6IERldmljZS5jb2Nvb24gPyBQaGFzZXIuQ0FOVkFTIDogdGhpcy5fZ2V0UmVuZGVyZXJCeURldmljZSgpLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IGZhbHNlLFxuICAgICAgICAgICAgLy8gdXNlIHRoaXMgaWYgeW91IHdhbnQgdG8gc3dpdGNoIGJldHdlZW4gQDJ4IGFuZCBAMXggZ3JhcGhpY3NcbiAgICAgICAgICAgIHJlc29sdXRpb246IHRoaXMuX2dldFJlc29sdXRpb24oKSxcbiAgICAgICAgICAgIHBsdWdpbnM6IERldmljZS5tb2JpbGUgPyBbXSA6IFsnRGVidWcnXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9tZWRpYXRvciA9IG5ldyBBcHBsaWNhdGlvbk1lZGlhdG9yKHRoaXMpO1xuICAgICAgICB0aGlzLl9hZGRTdGF0ZXMoKTtcbiAgICB9XG4gICAgLy8gcHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgc3RhcnRHYW1lKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoQ29uc3RhbnRzLlNUQVRFX0JPT1QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGp1c3RTY2FsZVNldHRpbmdzKCk6IHZvaWQge1xuICAgICAgICBpZiAoRGV2aWNlLmNvY29vbikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xuICAgICAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnNldE1pbk1heCgyNTYsIDE5MiwgMTAyNCwgNzY4KTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFkanVzdFJlbmRlcmVyU2V0dGluZ3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWUuZm9yY2VTaW5nbGVVcGRhdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmdhbWUuY2FtZXJhLnJvdW5kUHggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nYW1lLnJlbmRlcmVyLnJlbmRlclNlc3Npb24ucm91bmRQaXhlbHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nYW1lLmFudGlhbGlhcyA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZS5yZW5kZXJlci5jbGVhckJlZm9yZVJlbmRlciA9IHRoaXMuZ2FtZS5yZW5kZXJUeXBlID09PSBQaGFzZXIuQ0FOVkFTO1xuICAgIH1cblxuICAgIC8vIGNhbGxlZCBmcm9tIHRoZSBib290IHN0YXRlIGFzIHdlIGNhbid0IGluaXRpYWxpemUgcGx1Z2lucyB1bnRpbCB0aGUgZ2FtZSBpcyBib290ZWRcbiAgICBwdWJsaWMgYm9vdENvbXBsZXRlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBnYW1lTW9kZWwgPSBuZXcgR2FtZU1vZGVsKCdnYW1lX2RhdGEnKTtcbiAgICAgICAgY29uc3QgY29weU1vZGVsID0gbmV3IENvcHlNb2RlbCgnY29weScpO1xuICAgICAgICBnYW1lTW9kZWwubG9hZFBsYXllckRhdGEoKTtcbiAgICAgICAgKDxSSEdhbWU+dGhpcy5nYW1lKS5pbml0UHJlbG9hZGVyKCk7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBtZXRob2RzXG4gICAgLy8gYWRkcyBzdGF0ZXNcbiAgICBwcml2YXRlIF9hZGRTdGF0ZXMoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5hZGQoQ29uc3RhbnRzLlNUQVRFX0JPT1QsIEJvb3QpO1xuICAgICAgICB0aGlzLmdhbWUuc3RhdGUuYWRkKENvbnN0YW50cy5TVEFURV9HQU1FLCBHYW1lcGxheSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5hZGQoQ29uc3RhbnRzLlNUQVRFX01FTlUsIE1lbnUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEdhbWVXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gRGV2aWNlLmNvY29vbiA/IHdpbmRvdy5pbm5lcldpZHRoIDogMTAyNDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRHYW1lSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBEZXZpY2UuY29jb29uID8gd2luZG93LmlubmVySGVpZ2h0IDogNzY4O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFJlc29sdXRpb24oKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKEFwcGxpY2F0aW9uLnF1ZXJ5VmFyKCdyZXNvbHV0aW9uJykgJiYgIWlzTmFOKEFwcGxpY2F0aW9uLnF1ZXJ5VmFyKCdyZXNvbHV0aW9uJykpKSB7XG4gICAgICAgICAgICByZXR1cm4gQXBwbGljYXRpb24ucXVlcnlWYXIoJ3Jlc29sdXRpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoRGV2aWNlLmNvY29vbikge1xuICAgICAgICAgICAgcmV0dXJuICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEgPyAyIDogMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gRGV2aWNlLm1vYmlsZSA/IDEgOiAod2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxID8gMiA6IDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0UmVuZGVyZXJCeURldmljZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gRGV2aWNlLm1vYmlsZSAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA8IDIgPyBQaGFzZXIuQ0FOVkFTIDogUGhhc2VyLkFVVE87XG4gICAgfVxuICAgIFxuICAgIC8vIGdldHRlciAvIHNldHRlclxuICAgIHB1YmxpYyBnZXQgbWVkaWF0b3IoKTogQXBwbGljYXRpb25NZWRpYXRvciB7XG4gICAgICAgIHJldHVybiA8QXBwbGljYXRpb25NZWRpYXRvcj50aGlzLl9tZWRpYXRvcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGdhbWVNb2RlbCgpOiBHYW1lTW9kZWwge1xuICAgICAgICByZXR1cm4gPEdhbWVNb2RlbD50aGlzLnJldHJpZXZlTW9kZWwoR2FtZU1vZGVsLk1PREVMX05BTUUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY29weU1vZGVsKCk6IENvcHlNb2RlbCB7XG4gICAgICAgIHJldHVybiA8Q29weU1vZGVsPnRoaXMucmV0cmlldmVNb2RlbChDb3B5TW9kZWwuTU9ERUxfTkFNRSk7XG4gICAgfVxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9lbmdpbmUvZGlqb24vYnVpbGQvZGlqb24uZC50c1wiLz4gIFxuaW1wb3J0IFJIQXBwbGljYXRpb24gZnJvbSAnLi9SSEFwcGxpY2F0aW9uJztcblxuLy8gYm9vdHN0cmFwIHRoZSBhcHBcbmV4cG9ydCBjb25zdCBhcHAgPSBuZXcgUkhBcHBsaWNhdGlvbigpOyJdfQ==
