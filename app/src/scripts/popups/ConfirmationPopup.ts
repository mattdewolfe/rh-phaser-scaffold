import {Group, BitmapText, NineSliceImage} from "dijon/display";
import {Placeholders} from "dijon/utils";
import BasePopup from "./BasePopup";
import {Constants} from "../utils/Globals";
import Notifications from "../utils/Notifications";
import ConfirmationPopupMediator from "../mediator/popup/ConfirmationPopupMediator";
import RHButton from '../prefabs/RHButton';

export default class ConfirmationPopup extends BasePopup {
    private _title: BitmapText;
    private _cancelButton: RHButton;
    private _confirmButton: RHButton;
    private _isAttemptingToExit: boolean = false;

    private _contentGroup: Group;
    
    constructor() {
        super(Constants.POPUP_CONFIRMATION, 0, 0);
    }

    public buildInterface() {
        // this._addBG();
        // this._addContent();
        // this._addTitle();
    }

    protected _addMediator(): void {
        this._mediator = BasePopup.retrieveMediator(ConfirmationPopupMediator.MEDIATOR_NAME, this);
        if (this._mediator === null) {
            this._mediator = new ConfirmationPopupMediator(this);
        }
        this._mediator.sendNotification(Notifications.REGISTER_POPUP, this);
    }

    protected _addBG(): void {
        this.bg = this.add(new Phaser.Sprite(this.game, this.game.width * 0.5, this.game.height * 0.5, 'popups', 'confirmation_bg'));
        this.bg.anchor.set(0.5);
    }

    protected _addContent(): void {
        this._contentGroup = this.addInternal.dGroup(this.bg.x - this.bg.realWidth * 0.5, this.bg.y - this.bg.realHeight * 0.5 + 50);

        this._cancelButton = this._contentGroup.add(new RHButton(this.bg.realWidth * 0.3, this.bg.realHeight * 0.5, this._cancel, this, 'popups2', 'confirmation_no'));
        this._confirmButton = this._contentGroup.add(new RHButton(this.bg.realWidth * 0.7, this.bg.realHeight * 0.5, this._confirm, this, 'popups2', 'confirmation_yes'));

        this._cancelButton.anchor.set(0.5, 0.5);
        this._confirmButton.anchor.set(0.5, 0.5);
    }
    
    protected _addTitle(): void {
        this._title = new BitmapText(this.bg.x, this.bg.y - this.bg.realHeight * 0.5 + this.bg.realHeight * 0.35, Constants.FONT_VT323, 'ARE YOU SURE?', (this.game.resolution > 1.5) ? 25 : 50, 'center', 0xffffff);
        this._title.centerPivot();
        this.addInternal.existing(this._title);
    }

    private _cancel(): void {
        this.mediator.sendNotification(Notifications.HIDE_POPUP, this.id);
        this.mediator.cancel();
    }

    private _confirm(): void {
        this.mediator.sendNotification(Notifications.HIDE_POPUP, this.id);
        this.mediator.confirm();
    }
    
    private get mediator(): ConfirmationPopupMediator {
        return <ConfirmationPopupMediator>this._mediator;
    }
    
    public get isAttemptingToExit() : boolean {
        return this._isAttemptingToExit;
    }
    
}