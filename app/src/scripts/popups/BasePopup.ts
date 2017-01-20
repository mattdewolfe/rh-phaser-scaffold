import {Application} from "dijon/application";
import {Group, NineSliceImage} from "dijon/display";
import Notifications from "../utils/Notifications";
import BaseMediator from "../mediator/BaseMediator";

export interface IPopup {
    id: string;
    show(): void;
    hide(): void;
}

export default class BasePopup extends Group implements IPopup {
    protected _showTween: Phaser.Tween;
    protected _hideTween: Phaser.Tween;
    protected _startPosition: Phaser.Point;
    protected _allowInput: boolean;
    
    public bg: Phaser.Image;
    
    constructor(public id: string, x: number = 0, y: number = 0) {
        super(x, y, id);

        this.visible = false;
        this.alpha = 0;

        this.init();
        this.buildInterface();

        this._startPosition = this.position.clone();
        this.y -= 20;
        
        this._addTweens();
    }

    public init(): void {
        this._addMediator();
    }

    public buildInterface(): void { }

    public destroy(): void {
        this._hideTween.onComplete.removeAll();
        this._showTween = null;
        this._hideTween = null;
        super.destroy();
    }

    public show(): void {
        if (this._showTween.isRunning) {
            return;
        }
        this._clearActiveTweens();
        this.visible = true;
        this._showTween.start();
    }

    public hide(): void {
        if (this._hideTween.isRunning) {
            return;
        }
        this._allowInput = false;
        this._clearActiveTweens();
        this._hideTween.start();
    }

    protected _close(): void {
        this._mediator.sendNotification(Notifications.HIDE_POPUP, this.id);
    }

    protected _addMediator(): void {
        this._mediator = BasePopup.retrieveMediator(BaseMediator.MEDIATOR_NAME, this);
        if (this._mediator === null) {
            this._mediator = new BaseMediator(this, true, BaseMediator.MEDIATOR_NAME);
        }
        this._register();
    }
    
    protected _addTweens(): void {
        this._showTween = this.game.add.tween(this).to({ alpha: 1, y: this._startPosition.y }, 300, Phaser.Easing.Bounce.Out);
        this._showTween.onComplete.add(this._showComplete, this);
        this._hideTween = this.game.add.tween(this).to({ alpha: 0, y: this._startPosition.y + 80 }, 300, Phaser.Easing.Cubic.In);
        this._hideTween.onComplete.add(this._hideComplete, this);
    }
    
    protected _showComplete(): void {
        this._allowInput = true;
    }

    protected _hideComplete(): void {
        this.visible = false;
        this.y = this._startPosition.y - 20;
    }

    protected _sendResumeNotification(): void{
        this._mediator.sendNotification(Notifications.RESUME_GAME);
    }

    protected _clearActiveTweens(): void {
        if (this._showTween.isRunning) {
            this._showTween.stop();
        }
        
        if (this._hideTween.isRunning) {
            this._hideTween.stop();
        }
    }

    public static retrieveMediator(name: string, viewComp: any): any {
        return BaseMediator.retrieveMediator(name, viewComp);
    }    
    protected _register(): void {
        this._mediator.sendNotification(Notifications.REGISTER_POPUP, this);
    }
}