import {Mediator, Notification} from "dijon/mvc";
import {INotification} from "dijon/interfaces";
import BaseMediator from '../BaseMediator';
import Notifications from '../../utils/Notifications';
import {Constants} from "../../utils/Globals";

// popups
import IPopup from '../../popups/BasePopup';
import ConfirmationPopup from '../../popups/ConfirmationPopup';
import HelpPopup from '../../popups/HelpPopup';
import OptionsPopup from '../../popups/OptionsPopup';
import PopupManager from "../../popups/PopupManager";

export default class PopupManagerMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'popupManagerMediator';

    private _lookup: { [popupID: string]: IPopup } = {};
    private _popupsAdded: boolean = false;
    private _optionsOpen: boolean = false;

    constructor(viewComp: any) {
        super(viewComp, true, PopupManagerMediator.MEDIATOR_NAME);
    }    
    
    public listNotificationInterests(): string[] {
        return [
            Notifications.ADD_ALL_POPUPS,
            Notifications.REGISTER_POPUP,
            Notifications.SHOW_POPUP,
            Notifications.HIDE_POPUP
        ];
    }

    public handleNotification(notification: INotification) {
        const noteName = notification.getName();
        const noteBody = notification.getBody();       

        switch (noteName) {
            case Notifications.ADD_ALL_POPUPS:
                this._addAllPopups();
                break;
                
            case Notifications.REGISTER_POPUP:
                this._registerPopup(noteBody);
                break;
            
            case Notifications.SHOW_POPUP:                
                if (this._getPopup(noteBody) != null) {
                    this.manager.showModal();
                    this._getPopup(noteBody).show();
                }
                break;
            
            case Notifications.HIDE_POPUP:
                this.manager.hideModal();
                if (this._getPopup(noteBody) != null) {
                    this._getPopup(noteBody).hide();
                }
                break;
        }
    }

    public clearLookup(): void {
        this._lookup = {};
    }

    public close(): void {
        this.sendNotification(Notifications.HIDE_POPUP, Constants.POPUP_OPTIONS);
    }

    public hasPopupWithId(popupID: string): boolean {
        return this._getPopup(popupID) ? true : false;
    }

    // private methods
    private _addAllPopups(): void{
        if (this._popupsAdded){
            return;
        }

        let popup: any = null;
        popup = new ConfirmationPopup();
        popup = new HelpPopup();
        popup = new OptionsPopup();

        this._popupsAdded = true;
    }

    private _getPopup(popupID: string): IPopup {
        return this._lookup[popupID] || null;
    }

    private _registerPopup(popup: IPopup): void {
        this._lookup[popup.id] = popup;
        this.manager.addModal();
        this.manager.add(popup);
    }

    private get manager(): PopupManager {
        return <PopupManager>this._viewComponent;
    }

    public get name(): string {
        return PopupManagerMediator.MEDIATOR_NAME;
    }
}