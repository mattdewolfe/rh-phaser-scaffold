import BaseMediator from '../BaseMediator';
import {INotification} from 'dijon/interfaces';
import {Constants} from "../../utils/Globals";
import ConfirmationPopup from "../../popups/ConfirmationPopup";
import Notifications from '../../utils/Notifications';
import Gameplay from "../../state/Gameplay";

export default class ConfirmationPopupMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'ConfirmationPopupMediator';

    constructor(viewComp: any) {
        super(viewComp, true, ConfirmationPopupMediator.MEDIATOR_NAME);
    }

    public listNotificationInterests(): string[] {
        return [ ];
    }

    public handleNotification(notification: INotification) {
        const noteName = notification.getName();
        const noteBody = notification.getBody();

        switch (noteName) { }
    }
    
    public cancel(): void {
        this.sendNotification(Notifications.EXIT_GAME_CANCELLED);
        this.sendNotification(Notifications.SHOW_POPUP, Constants.POPUP_OPTIONS);
    }

    public confirm(): void {
        if (this.gameModel.restartingRun) {
            this.sendNotification(Notifications.RESTART_RUN);
        }
        else {
            this.sendNotification(Notifications.BACK_TO_MENU);
        }
    }

    public get viewComponent(): ConfirmationPopup {
        return <ConfirmationPopup>this._viewComponent;
    }

    public get name(): string {
        return ConfirmationPopupMediator.MEDIATOR_NAME;
    }
}