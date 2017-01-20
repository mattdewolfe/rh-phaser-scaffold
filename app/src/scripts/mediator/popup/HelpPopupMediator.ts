import BaseMediator from '../BaseMediator';
import {INotification} from 'dijon/interfaces';
import {Constants} from "../../utils/Globals";
import HelpPopup from "../../popups/HelpPopup";
import Notifications from '../../utils/Notifications';
import Gameplay from "../../state/Gameplay";
import { IHelpData } from "../../interfaces";

export default class HelpPopupMediator extends BaseMediator {
    public static MEDIATOR_NAME: string = 'HelpPopupMediator';

    private _gameHasBegun: boolean = false;
    
    constructor(viewComp: any) {
        super(viewComp, true, HelpPopupMediator.MEDIATOR_NAME);
    }

    public listNotificationInterests(): string[] {
        return [
            Notifications.BEGIN_GAME,
            Notifications.EXITING_GAME,
            Notifications.EXIT_GAME_CANCELLED
        ];
    }

    public handleNotification(notification: INotification) {
        const noteName = notification.getName();
        const noteBody = notification.getBody();

        switch (noteName) {
            case Notifications.BEGIN_GAME:
                this._gameHasBegun = true;
                break;
            case Notifications.EXITING_GAME:
                this._gameHasBegun = false;
                break;
            case Notifications.EXIT_GAME_CANCELLED:
                this._gameHasBegun = true;
                break;
        }
    }

    public getGesturePositions(): IHelpData[] {
        return this.gameModel.gameplayData.helpData;
    }    

    public closeHelp(): void {
        if (!this._gameHasBegun) {
            this.sendNotification(Notifications.SHOW_POPUP, Constants.POPUP_BEGINGAME);
        } else {
            this.sendNotification(Notifications.SHOW_POPUP, Constants.POPUP_OPTIONS);
        }
    }

    public getHelpCopy(index: number): string {
        if (this.game.device.desktop) {
            return this.copyModel.getCopyGroup('help-desktop')[index];
        }
        else {
            return this.copyModel.getCopyGroup('help-mobile')[index];
        }
    }    
    
    public get name(): string {
        return HelpPopupMediator.MEDIATOR_NAME;
    }
}