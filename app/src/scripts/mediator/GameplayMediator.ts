import {INotification} from 'dijon/interfaces';
import {Constants} from "../utils/Globals";
import BaseMediator from './BaseMediator';
import Notifications from '../utils/Notifications';
import Gameplay from '../state/Gameplay';

export default class GameplayMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'gameplayMediator';
		
    public listNotificationInterests(): string[] {
        return [
            Notifications.BEGIN_GAME,
            Notifications.PAUSE_GAME,
            Notifications.RESUME_GAME,
            Notifications.COUNTDOWN_COMPLETE,
            Notifications.GAME_OVER, 
            Notifications.BACK_TO_MENU, 
            Notifications.RESTART_RUN,
            Notifications.AUDIO_TOGGLED
         ];
    }

    public handleNotification(notification: INotification) {
        const noteName = notification.getName();
        const noteBody = notification.getBody();
        switch (noteName) {
            case Notifications.GAME_OVER:
                this.gameModel.isOnFirstRun = false;
                break;
            case Notifications.BEGIN_GAME:
                this.gameplay.startRound();
                break;
            case Notifications.PAUSE_GAME:
                this.gameplay.togglePause();
                break;
             case Notifications.RESUME_GAME:
                this.gameplay.togglePause();
                break;
             case Notifications.RESTART_RUN:
                this.game.transition.to(Constants.STATE_GAME);
                break;
             case Notifications.BACK_TO_MENU:   
                this.game.transition.to(Constants.STATE_GAME);
                break;
            case Notifications.COUNTDOWN_COMPLETE:
                this.gameplay.togglePause(false);
                break;
            case Notifications.AUDIO_TOGGLED:
                this.gameplay.toggleBGMusic();
                break;    
        }
    }

    // public methods
    public addPopups(): void {
        this.sendNotification(Notifications.ADD_ALL_POPUPS);
    }

    public showOptions(): void {
        this.showPopup(Constants.POPUP_OPTIONS);
    }

    public notifyGameOver(): void {
        this.sendNotification(Notifications.GAME_OVER);
        this.showPopup(Constants.POPUP_ENDGAME);
    }
    
    public afterGameBuilt(): void {
        if (this.gameModel.restartingRun === false) {
            this.showPopup(Constants.POPUP_BEGINGAME);
        }
        else {
            this.sendNotification(Notifications.BEGIN_GAME);
        }
    }
		
    // getter / setter
    public get name() {
        return GameplayMediator.MEDIATOR_NAME;
    }

    public get gameplay(): Gameplay {
        return <Gameplay>this._viewComponent;
    }
}