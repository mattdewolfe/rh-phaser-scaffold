import {Logger} from "dijon/utils";
import {INotification} from "dijon/interfaces";

import BaseMediator from './BaseMediator';
import {Constants} from '../utils/Globals';
import Notifications from '../utils/Notifications';
import RHApplication from '../RHApplication';
import RHGame from '../RHGame';

export default class ApplicationMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'applicationMediator';

    // dijon.mvc.Mediator overrides
    public listNotificationInterests(): string[] {
        return [
            Notifications.BOOT_INIT,
            Notifications.BOOT_COMPLETE,
            Notifications.BEGIN_GAME,
            Notifications.RESTART_RUN, 
            Notifications.BACK_TO_MENU,
            Notifications.AUDIO_TOGGLED,
            Notifications.MUSIC_TOGGLED
        ]
    }

    public handleNotification(notification: INotification) {
        const noteName = notification.getName();
        const noteBody = notification.getBody();
        
        switch (noteName) {
            case Notifications.AUDIO_TOGGLED:
                this.gameModel.updateMuteSettings();
                break;
            case Notifications.MUSIC_TOGGLED:
                this.gameModel.updateMuteSettings();
                this.rhGame.musicToggled();
                break;  
            case Notifications.BOOT_INIT:
                this.viewComponent.adjustScaleSettings();
                this.viewComponent.adjustRendererSettings();
                this.viewComponent.addPlugins();
                break;
            case Notifications.BOOT_COMPLETE:
                this.game.asset.setData(this.game.cache.getJSON('assets'));
                this.viewComponent.bootComplete();
                break;
            case Notifications.BEGIN_GAME:
                this.gameModel.resetGameplayStats();
                break;
            case Notifications.RESTART_RUN:
                this.gameModel.restartingRun = true;
                break;    
            case Notifications.BACK_TO_MENU:
                this.gameModel.restartingRun = false;
                break;    
        }
    }

    // getter / setter
    public get viewComponent(): RHApplication {
        return <RHApplication>this._viewComponent;
    }

    public get name():string {
        return ApplicationMediator.MEDIATOR_NAME;
    }

    public get rhGame(): RHGame {
        return <RHGame>this.game;
    }
}