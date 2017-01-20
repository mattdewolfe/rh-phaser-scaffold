import BaseState from "./BaseState";
import MenuMediator from '../mediator/MenuMediator';
import {Constants, Colours, Settings} from '../utils/Globals';
import {Group, Sprite, Text} from 'dijon/display';
import RHButton from '../prefabs/RHButton';

export default class Menu extends BaseState {
    
    // Phaser.State overrides
    public init() {
        this._mediator = MenuMediator.retrieveMediator(MenuMediator.MEDIATOR_NAME, this);
        if (this._mediator === null) {
            this._mediator = new MenuMediator(this);
        }
    }

    public preload(): void {
        this.game.asset.loadAssets('mainmenu');
    }

    public create(): void {
        this._sceneData = this.game.cache.getJSON('mainmenu');
        if (this._sceneData != null) {
            super.create();
        }
    }

    // dijon.core.State overrides
    public listBuildSequence() {
        return [ 
            this._addButtons,
            this._addPopups
        ]
    }

    public afterBuild(): void {
        this.game.startBGLoop('zzp_happy_relaxing');
    }   
    
    private _addButtons(): void {
        let newBtn: any = this._findPrefab('NewGameBtn');
        if (newBtn !== null) {
            newBtn.events.onInputDown.add(this.newGamePressed, this);
        }
        let setBtn: any = this._findPrefab('SettingsBtn');
        if (setBtn !== null) {
            setBtn.events.onInputDown.add(this.settingsPressed, this);
        }
    }

    public newGamePressed(): void {
        console.log('new game');
        let image = this.add.image(Math.random() * this.game.width * 0.5, Math.random() * this.game.height * 0.5, 'scifi-landscape');
    }   
    
    public settingsPressed(): void {
        this.mediator.showOptions();
    }

    private _addPopups(): void {
        this.mediator.addPopups();
    }

    protected get mediator(): MenuMediator {
        return <MenuMediator>this._mediator;
    }  
    
    public _createDebugRect(rect: Phaser.Rectangle): void {
        let gfx = this.game.add.graphics();
        gfx.beginFill(0x00ff00, 0.5);
        gfx.drawRect(rect.x, rect.y, rect.width, rect.height);
        gfx.endFill();
    }
}
  