import {Model} from 'dijon/mvc';
import { IPlayerSaveData, IGameplayData } from '../interfaces';
import { Constants, Settings } from '../utils/Globals';

export default class GameModel extends Model {
    public static MODEL_NAME: string = "gameModel";
    
    public restartingRun: boolean = false;
    public score: number = 0;

    protected _saveData: IPlayerSaveData;

    public increaseScore(points: number) {
        this.score += points;
    }    

    public resetGameplayStats(): void {
        this.score = 0;
    }   
    
    public loadPlayerData(): void {
        this._saveData = this.game.storage.getFromLocalStorage(Constants.KEY_SAVE_DATA, true);
        if (this._saveData == null) {
            this._saveData = this._createPlayerData();
        }
        else {
            Settings.SFX_ENABLED = this._saveData.sfxEnabled;
            Settings.MUSIC_ENABLED = this._saveData.musicEnabled;
        }
        this.resetGameplayStats();
    }

    public savePlayerData(): void {
        this.game.storage.saveToLocalStorage(Constants.KEY_SAVE_DATA, this._saveData);
    }

    public updateMuteSettings(): void {
        this._saveData.sfxEnabled = Settings.SFX_ENABLED;
        this._saveData.musicEnabled = Settings.MUSIC_ENABLED;
        this.savePlayerData();
    }
    
    protected _createPlayerData(): IPlayerSaveData {
        let newData: IPlayerSaveData = <IPlayerSaveData>new Object();
        newData.highscore = 0;
        newData.isOnFirstRun = true;
        newData.sfxEnabled = Settings.SFX_ENABLED;
        newData.musicEnabled = Settings.MUSIC_ENABLED;
        return newData;
    }

    public get highScore(): number {
        return this._saveData.highscore;
    }    

    public get isOnFirstRun(): boolean {
        return this._saveData.isOnFirstRun;
    }

    public set isOnFirstRun(value: boolean) {
        if (this._saveData.isOnFirstRun === value) {
            return;
        }
        this._saveData.isOnFirstRun = value;
        this.savePlayerData();
    }

    public get name(): string {
        return GameModel.MODEL_NAME;
    }

    public get gameplayData(): IGameplayData {
        return this._data.game;
    }
}