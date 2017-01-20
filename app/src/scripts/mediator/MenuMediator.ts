import {INotification} from 'dijon/interfaces';
import {Constants} from "../utils/Globals";
import BaseMediator from './BaseMediator';
import Notifications from '../utils/Notifications';
import Menu from '../state/Menu';

export default class MenuMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'menuMediator';
		
    public listNotificationInterests(): string[] {
        return [

         ];
    }

    public handleNotification(notification: INotification) {
        const noteName = notification.getName();
        const noteBody = notification.getBody();
        switch (noteName) {
                
        }
    }

    // public methods
    public addPopups(): void {
        this.sendNotification(Notifications.ADD_ALL_POPUPS);
    }

    public showOptions(): void {
        this.showPopup(Constants.POPUP_OPTIONS);
    }
		
    // getter / setter
    public get name() {
        return MenuMediator.MEDIATOR_NAME;
    }

    public get menu(): Menu {
        return <Menu>this._viewComponent;
    }
}