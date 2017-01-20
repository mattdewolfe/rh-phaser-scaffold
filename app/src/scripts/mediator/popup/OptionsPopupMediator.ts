import BaseMediator from '../BaseMediator';
import {INotification} from 'dijon/interfaces';
import {Constants} from "../../utils/Globals";
import OptionsPopup from "../../popups/OptionsPopup";
import Notifications from '../../utils/Notifications';

export default class OptionsPopupMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'OptionsPopupMediator';
    
    constructor(viewComp: any) {
        super(viewComp, true, OptionsPopupMediator.MEDIATOR_NAME);
    }

    public listNotificationInterests(): string[] {
        return [ ];
    }

    public handleNotification(notification: INotification) {
        const noteName = notification.getName();
        const noteBody = notification.getBody();
    }
    
    public help(): void {
        this.sendNotification(Notifications.SHOW_POPUP, Constants.POPUP_HELP);
    } 

    public restartRun(): void {
        this.gameModel.restartingRun = true;
        this.sendNotification(Notifications.SHOW_POPUP, Constants.POPUP_CONFIRMATION);
    }

    public notifyMusicToggled(): void {
        this.sendNotification(Notifications.MUSIC_TOGGLED);
    }   
    
    public notifyAudioToggled(): void {
        this.sendNotification(Notifications.AUDIO_TOGGLED);
    }

    private get popup(): OptionsPopup {
        return <OptionsPopup>this._viewComponent;
    }

    public get name(): string {
        return OptionsPopupMediator.MEDIATOR_NAME;
    }
}