import {Group} from 'dijon/display';
import PopupManagerMediator from '../mediator/popup/PopupManagerMediator';
import {IPopup} from "./BasePopup";
import BasePopup from "./BasePopup";
import {Textures, Placeholders} from 'dijon/utils';

export default class PopupManager extends Group {
    public _modal: Phaser.Sprite;
    protected _fromOptions: boolean = false;
    
    constructor() {
        super(0, 0, 'PopupManager', false);

        this.init();
        this.buildInterface();
    }

    public init(): void {
        this.classType = BasePopup;
        this.fixedToCamera = true;
        this._mediator = BasePopup.retrieveMediator(PopupManagerMediator.MEDIATOR_NAME, this);
        if (this._mediator === null) {
            this._mediator = new PopupManagerMediator(this);
        }
    }

    public buildInterface(): void {
        this.addModal();
    }

    public addModal(): void {
        if (this._modal) {
            return;
        }

        this._modal = this.add(this.game.add.sprite(0, 0, Textures.rect(this.game.width, this.game.height, 0x000000, 0.25)));
        this._modal.name = 'popupManagerModal';
        this._modal.inputEnabled = true;
        this._modal.events.onInputDown.add(this.mediator.close, this.mediator);
        
        this._modal.cacheAsBitmap = true;
        this._modal.visible = false;
    }

    public showModal(): void {
        this.sendToBack(this._modal);
        this.game.time.events.add(100, () => { this._modal.visible = true; }, this);
    }

    public hideModal(): void {
        this._modal.visible = false;
    }

    public removeAll(destroy: boolean = true, silent: boolean = false): void {
        if (this._modal) {
            this.sendToBack(this._modal);
            this.hideModal();
        }
        while (this.children.length > 1) {
            this.remove(this.getChildAt(1), destroy, silent);
        }
        this.mediator.clearLookup();
    }

    private get mediator(): PopupManagerMediator {
        return <PopupManagerMediator>this._mediator;
    }
}