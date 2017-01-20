import {Mediator, CopyModel} from "dijon/mvc";
import {Application} from "dijon/application";
import {Constants} from '../utils/Globals';
import Notifications from '../utils/Notifications';
import GameModel from "../model/GameModel";
import {IGameplayData} from '../interfaces';

export default class BaseMediator extends Mediator {
    /**
     * Attempt to retrieve an existing mediator, based on the mediators name.
     * @parem(name, string): The name of the mediator you are trying to retrieve.
     * @parem(viewComp, any): The view component you wish to bind to the mediator you are retrieving.
     * Returns the mediator in question, if found, with the new viewComponent bound to it. Null otherwise.
     */
    public static retrieveMediator(name: string, viewComp: any): BaseMediator {
        let baseMed: BaseMediator = <BaseMediator>Application.getInstance().retrieveMediator(name);
        if (baseMed !== null) {
            baseMed._viewComponent = viewComp;
        }
        return baseMed;
    }

    // so any mediator extending BaseMediator can get copy
    public getCopy(groupId: string, textId: string): string {
        return this.copyModel.getCopy(groupId, textId);
    }

    public showPopup(id: string): void {
        this.sendNotification(Notifications.SHOW_POPUP, id);
    }
		
    // getter / setter
    // offer access to the GameModel and CopyModel from any mediator extending BaseMediator
    public get gameplayData(): IGameplayData {
        return this.gameModel.gameplayData;
    }
 
    public pauseGame(): void {
        this.sendNotification(Notifications.PAUSE_GAME);
    }
    
    public get gameModel(): GameModel {
        return <GameModel>Application.getInstance().retrieveModel(GameModel.MODEL_NAME);
    }

    public get copyModel(): CopyModel {
        return <CopyModel>Application.getInstance().retrieveModel(CopyModel.MODEL_NAME);
    }

    public get name(): string { 
        return "baseMediator_" + this.game.rnd.uuid();
    }
}