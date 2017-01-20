export interface IHelpData {
    image: {key: string, sprite: string}
    imagePOS: { x: number, y: number }
    mousePOS: { x: number, y: number }
    gesturePOS: { x: number, y: number }
}

export interface IPlayerSaveData {
    isOnFirstRun: boolean;
    highscore: number;
    sfxEnabled: boolean;
    musicEnabled: boolean;
}

export interface IGameplayData {
    helpData: IHelpData[];
}

export interface ISceneData {
    prefabs: any[];
}