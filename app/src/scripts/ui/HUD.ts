import {Group, Sprite, BitmapText} from 'dijon/display';
import {Colours, Constants} from '../utils/Globals';
import HUDMediator from '../mediator/HUDMediator';
import RHButton from '../prefabs/RHButton';

export default class HUD extends Group {
    
    public static TWEEN_TIME: number = 300;
    
    public tutorialOnScreen: boolean = false;

    // pause button
    private _pauseButton: RHButton;
    private _pauseButtonConnectors: Phaser.Image;

    // time display
    private _timeText: BitmapText;
    private _timeBG: Phaser.Image;
    
    // tweens
    private _pauseButtonTween: Phaser.Tween;
    private _pauseConnecterTween: Phaser.Tween;
    private _timeTextTween: Phaser.Tween;
    private _distanceBGTween: Phaser.Tween;

    // visual effects
    private _itemVisuals: Phaser.Group;

constructor() {
        super(0, 0, 'HUD');

        this.init();
        this.buildInterface();
    }

    public init(): void {
        this._mediator = HUDMediator.retrieveMediator(HUDMediator.MEDIATOR_NAME, this);
        if (this._mediator === null) {
            this._mediator = new HUDMediator(this);
        }
    }

    public destroy(): void{
        this._mediator.destroy();
        super.destroy();
    }

    public buildInterface(): void {
        this._addTimeDisplay();
        this._addPauseButton();
        this._addEffectsGroup();
    }

    // public methods called from HUDMediator
    public showMainHUD(): void {
        this.showTimer();
        this.showPauseButton();
    }

    public showPauseButton(): void {
        this._pauseConnecterTween.start();
        this._pauseButtonTween.start();
    }

    public showTimer(): void {
        this._distanceBGTween.start();
        this._timeTextTween.start();
    }
    
    public updateTime(remaining: number): void {
        let minutes: number = 0;
        let seconds: number = remaining % 60;
        if (remaining > 59) {
            minutes = Math.floor(remaining / 60);
        }
        
        this._timeText.text = (minutes < 10 ? '0' + minutes.toString() : minutes.toString())
            + ":" + (seconds < 10 ? '0' + seconds.toString() : seconds.toString());
    }
        
    private _togglePause(): void {
        this.mediator.pauseGame();
    }

    // pause button
    private _addPauseButton(): void {
    //    this._pauseButtonConnectors = this.addInternal.image(this.game.width * 0.95, this.game.height * -0.15, 'ui', 'pause_button_connector');

        this._pauseButton = new RHButton(this.game.width * 0.937, this.game.height * -0.19, this._togglePause, this, 'ui', 'pause_icon');
        this.addInternal.existing(this._pauseButton);

    //    this._pauseConnecterTween = this.game.add.tween(this._pauseButtonConnectors).to({ x: this.game.width * 0.95, y: this.game.height * 0.05 }, HUD.TWEEN_TIME, Phaser.Easing.Back.Out, false);
        this._pauseButtonTween = this.game.add.tween(this._pauseButton).to({ x: this.game.width * 0.937, y: this.game.height * 0.09 }, HUD.TWEEN_TIME, Phaser.Easing.Back.Out, false);

     //   this._pauseButtonConnectors.anchor.set(0.5);
        this._pauseButton.anchor.set(0.5);
    }

    // distance
    private _addTimeDisplay(): void {
    //    this._timeBG = this.addInternal.image(0, this.game.height * -0.15, 'ui', 'timer_bg');
        this._timeBG.x = this._timeBG.realWidth * 0.5;
        this._timeBG.centerPivot();

        // Text
        this._timeText = new BitmapText(this._timeBG.x + 40, this.game.height * -0.15 - 30, Constants.FONT_VT323, '00:00', (this.game.resolution > 1.5)?26:52,'center',0xffffff);
        this.addInternal.existing(this._timeText);
        this._timeText.anchor.set(0.5, 0);

        this._distanceBGTween = this.game.add.tween(this._timeBG).to({ y: this._timeBG.realHeight * 0.5 }, HUD.TWEEN_TIME, Phaser.Easing.Back.Out, false);
        this._timeTextTween = this.game.add.tween(this._timeText).to({ y: this._timeBG.realHeight * 0.5 - 19}, HUD.TWEEN_TIME, Phaser.Easing.Back.Out, false);
    }

    private _addEffectsGroup(): void {
        this._itemVisuals = this.addInternal.group();
        this._itemVisuals.createMultiple(6, 'ui', 'grey_cross');
        this._itemVisuals.setAllChildren('anchor.x', 0.5);
        this._itemVisuals.setAllChildren('anchor.y', 0.5);
        this._itemVisuals.callAll('kill', null);
    }

    protected get mediator(): HUDMediator {
        return <HUDMediator>this._mediator;
    }
}