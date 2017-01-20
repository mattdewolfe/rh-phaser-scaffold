import {INotification} from 'dijon/interfaces';
import {Constants} from "../utils/Globals";
import BaseMediator from './BaseMediator';
import Notifications from '../utils/Notifications';
import HUD from '../ui/HUD';

export default class HUDMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'HUDMediator';

    constructor(viewComp: any) {
        super(viewComp, true, HUDMediator.MEDIATOR_NAME);
    }

    // public methods
    public listNotificationInterests(): string[] {
        return [
            Notifications.BEGIN_GAME,
            Notifications.COUNTDOWN_COMPLETE,
            Notifications.SHOW_REMINDER, 
            Notifications.DISMISS_REMINDER,
            Notifications.REQUEST_TUTORIAL, 
            Notifications.TUTORIAL_RESOLVED,
            Notifications.SHOW_POPUP
        ];
    }

    public handleNotification(notification: INotification) {
        const noteName = notification.getName();
        const noteBody = notification.getBody();

        switch (noteName) {
            case Notifications.BEGIN_GAME:
                
                break;

            case Notifications.COUNTDOWN_COMPLETE:
                this.hud.showMainHUD();
                break;

            case Notifications.REQUEST_TUTORIAL:
                this.hud.tutorialOnScreen = true;
                break;
                
            case Notifications.TUTORIAL_RESOLVED:
                this.hud.tutorialOnScreen = false;
                break;

            case Notifications.SHOW_POPUP:                
            case Notifications.DISMISS_REMINDER:
                break;
        }
    }

    public countdownComplete(): void { 
        this.sendNotification(Notifications.COUNTDOWN_COMPLETE);
    }

    // getter / setter
    protected get hud(): HUD {
        return <HUD>this._viewComponent;
    }

    public get name() {
        return HUDMediator.MEDIATOR_NAME;
    }
}