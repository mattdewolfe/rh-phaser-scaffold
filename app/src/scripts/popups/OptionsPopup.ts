import {Group, Text, Sprite} from "dijon/display";
import BasePopup from "./BasePopup";
import {Constants, Settings, Colours} from "../utils/Globals";
import Notifications from "../utils/Notifications";
import OptionsPopupMediator from "../mediator/popup/OptionsPopupMediator";
import RHButton from '../prefabs/RHButton';

export default class OptionsPopup extends BasePopup {
    private _title: Phaser.Sprite;
    private _musicButton: RHButton;
    private _soundButton: RHButton;
    private _closeButton: RHButton;

    private _contentGroup: Group;
    private _width: number;
    private _height: number;
    constructor() {
        super(Constants.POPUP_OPTIONS, 0, 0);
    }

    public buildInterface() {
        this._addBG();
        this._addContent();
    }

    protected _addMediator(): void {
        this._mediator = BasePopup.retrieveMediator(OptionsPopupMediator.MEDIATOR_NAME, this);
        if (this._mediator === null) {
            this._mediator = new OptionsPopupMediator(this);
        }
        this._mediator.sendNotification(Notifications.REGISTER_POPUP, this);
    }

    protected _addBG(): void {
        this._width = 350;
        this._height = 420;

        let gfx = this.game.add.graphics();
        gfx.beginFill(Colours.SKY_POWDER_BLUE, 1);
        gfx.drawRoundedRect(0, 0, this._width, this._height, 10);
        gfx.endFill();
        gfx.beginFill(Colours.SKY_SLATE_BLUE, 1);
        gfx.drawRoundedRect(5, 5, this._width - 10, this._height - 10, 10);
        gfx.endFill();

        this.bg = this.add(new Phaser.Sprite(this.game, 0, 0, gfx.generateTexture()));
        this.game.world.remove(gfx);

        this.x = this.game.width;
        this.y = 100;
    }

    private _addContent(): void {
        this._contentGroup = this.addInternal.dGroup(0, 0);

        this._musicButton = this._contentGroup.add(new RHButton(this.bg.realWidth * 0.33, this.bg.realHeight * 0.6, this._music, this, 'ui', 'music_hover', 'music_normal', 'music_down'));
        this._soundButton = this._contentGroup.add(new RHButton(this.bg.realWidth * 0.66, this.bg.realHeight * 0.6, this._sound, this, 'ui', 'audio_hover', 'audio_normal', 'audio_down'));
        this._closeButton = this._contentGroup.add(new RHButton(this.bg.realWidth * 0.91, this.bg.realHeight * -0.025, this._closeSettings, this, 'ui', 'red_small_normal', 'red_small_normal', 'red_small_down'));

        this._closeButton.centerPivot();
        this._musicButton.centerPivot();
        this._soundButton.centerPivot();
        let closeX = new Sprite(this._closeButton.realWidth * 0.5, this._closeButton.realHeight * 0.45, 'ui', 'grey_cross');
        this._closeButton.addChild(closeX);
        closeX.centerPivot();
        closeX.scale.setTo(2);
        
        this._soundButton.updateBaseFrame(Settings.SFX_ENABLED ? 'audio' : 'audio_mute');
        this._musicButton.updateBaseFrame(Settings.MUSIC_ENABLED ? 'music' : 'music_mute');
        this._title = this._contentGroup.addInternal.dText(this.bg.realWidth * 0.5, this.bg.realHeight * 0.1, 'SETTINGS', Constants.FONT_VT323, 50, "#ffffff", 'center');
        this._title.centerPivot();
    }


    protected _addTweens(): void {
        this._showTween = this.game.add.tween(this).to({ alpha: 1, x: this._startPosition.x - this._width - 20}, 300, Phaser.Easing.Bounce.Out);
        this._showTween.onComplete.add(this._showComplete, this);
        this._hideTween = this.game.add.tween(this).to({ alpha: 0, x: this._startPosition.x }, 300, Phaser.Easing.Cubic.In);
        this._hideTween.onComplete.add(this._hideComplete, this);
    }
    
    private _help(): void {
        // if (this._allowInput) {
        //     this.mediator.help();
        // }
        // this.mediator.sendNotification(Notifications.HIDE_POPUP, this.id);
    }

    private _resumeGame(): void {
        if (this._allowInput) {
            this._close();
            this.game.time.events.add(400, this._sendResumeNotification, this); 
        }
    } 

    private _restartRun(): void {
        if (this._allowInput) {
            this.mediator.restartRun();
        }
    }
    
    private _closeSettings(): void {
        if (this._allowInput) {
              this._mediator.sendNotification(Notifications.HIDE_POPUP, this.id);
        }
    }

    private _music(): void {
        Settings.MUSIC_ENABLED = !Settings.MUSIC_ENABLED;
        this._musicButton.updateBaseFrame(Settings.MUSIC_ENABLED ? 'music' : 'music_mute');
        this.mediator.notifyMusicToggled();
    }   
    
    private _sound(): void {
        Settings.SFX_ENABLED = !Settings.SFX_ENABLED;
        this._soundButton.updateBaseFrame(Settings.SFX_ENABLED ? 'audio' : 'audio_mute');
        this.mediator.notifyAudioToggled();
    }

    private get mediator(): OptionsPopupMediator {
        return <OptionsPopupMediator>this._mediator;
    }
}