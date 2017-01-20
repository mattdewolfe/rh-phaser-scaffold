import BaseState from "./BaseState";
import GameplayMediator from '../mediator/GameplayMediator';
import {Constants, Colours, Settings} from '../utils/Globals';
import {Placeholders} from 'dijon/utils';
import {Group, Sprite, Text} from 'dijon/display';
import HUD from '../ui/HUD';
import Timer from '../ui/Timer';

export default class Gameplay extends BaseState {

    public timer: Timer;

    protected _paused: boolean = true;

    protected _bgLayer: Group;
    protected _gameLayer: Group;
    protected _buttonLayer: Group;
    protected _patrons: Group;

    protected _hud: HUD;

    protected _bgLoop: Phaser.Sound = null;    
    // Phaser.State overrides
    public init() {
        this._mediator = GameplayMediator.retrieveMediator(GameplayMediator.MEDIATOR_NAME, this);
        if (this._mediator === null) {
            this._mediator = new GameplayMediator(this);
        }

        this.game.onPause.add(this._gameLostFocus, this);
        this.game.onResume.add(this._gameGainedFocus, this);
    }

    public preload(): void {
        this.game.asset.loadAssets('gameplay');
    }

    // dijon.core.State overrides
    public listBuildSequence() {
        return [ 
            this._addLayers, 
            // this._addPopups, 
            // this._addHUD,
            // this._buildLevel
        ]
    }

    public afterBuild() {
        super.afterBuild();
        this._preStartSetup();
        this.mediator.afterGameBuilt();
        if (this._bgLoop === null) {
            this._bgLoop = this.game.audio.playSound(Constants.MUSIC_LOOP, 0, true);
        }    
        if (Settings.SFX_ENABLED) {
            this._bgLoop.fadeTo(3000, Settings.MUSIC_VOLUME);
        }
    }

    public startRound(): void {
        this.gameplayLayersVisible = true;
        this.timer.resetTime(100);
    } 
    
    public restartRun(): void {
        this._preStartSetup();
        this.mediator.afterGameBuilt();
    }

    public update(): void {
        
    }

    public togglePause(showOptions: boolean = true): void {
        this._paused = !this._paused;
        this.timer.paused = this._paused;
        if (this._paused === true && showOptions === true) {
            this.mediator.showOptions();
        }
    }

    public toggleBGMusic(): void {
        this._bgLoop.volume = Settings.SFX_ENABLED ? Settings.MUSIC_VOLUME : 0;
    }   
    
    // Private/Protected    
    protected _gameLostFocus(): void {
        if (this.gameplayLayersVisible === true && this._paused === false) {
            this.mediator.pauseGame();
            this.game.sound.mute = true;
        }
    }

    protected _gameGainedFocus(): void {
        this.game.sound.mute = false;
    }

    protected _preStartSetup(): void {
        this.gameplayLayersVisible = false;
    }

    protected _onSecondElapsed(): void {
        this._hud.updateTime(this.timer.elapsedTime);
        
    }
    
    protected _endOfRound(): void {
        this._hud.updateTime(0);
        this._paused = true;
        this.mediator.notifyGameOver();
    }   

    // Build Sequence
    private _addLayers(): void {
        let label = this.add.dText(this.game.width * 0.5, this.game.height * 0.5, 'Main Menu', Constants.FONT_VT323, 30, Colours.COPY_GREY, 'center');
        label.setPivot('center');
        this._bgLayer = this.add.dGroup(0, 0, 'gameBG');
        this._gameLayer = this.add.dGroup(0, 0, 'game');
        this._buttonLayer = this.game.add.dGroup(0, 0, 'uiLayer');
        this.gameplayLayersVisible = false;
    }

    private _addPopups(): void {
        this.mediator.addPopups();
    }

    private _addHUD(): void {
        this._hud = new HUD();
        this.add.existing(this._hud);

        this.timer = new Timer();
        this.add.existing(this.timer);

        this.timer.onTick.add(this._onSecondElapsed, this);
        this.timer.onComplete.add(this._endOfRound, this);
    }

    private _buildLevel(): void {
       
    }

    // Getter/Setters
    protected get gameplayLayersVisible(): boolean {
        return this._gameLayer.visible;
    }

    protected set gameplayLayersVisible(value: boolean) {
        this._bgLayer.visible = value;
        this._gameLayer.visible = value;
        this._buttonLayer.visible = value;
    }

    protected get mediator(): GameplayMediator {
        return <GameplayMediator>this._mediator;
    }  
    
    public _createDebugRect(rect: Phaser.Rectangle): void {
        let gfx = this.game.add.graphics();
        gfx.beginFill(0x00ff00, 0.5);
        gfx.drawRect(rect.x, rect.y, rect.width, rect.height);
        gfx.endFill();
    }
}
  