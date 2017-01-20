import {Game} from 'dijon/core';
import RHAudioManager from './RHAudioManager';
import PopupManager from './popups/PopupManager';
import {IGameConfig} from 'dijon/interfaces';
import { Constants, Settings } from './utils/Globals';
import Preloader from './ui/Preloader';

export default class RHGame extends Game {
    public popup: PopupManager;
    public preloader: Preloader;
    
    protected _bgLoop: Phaser.Sound = null;
   

    constructor(config: IGameConfig) {
        super(config);
    }

    public addLayers(): void {
        super.addLayers();
        this.popup = new PopupManager();
        this.add.existing(this.popup);
    }  
    
    public boot() {
        super.boot();
        this.audio = null;
        this.audio = new RHAudioManager();
    }

    public musicToggled(): void {
        if (this._bgLoop !== null) {
            this._bgLoop.volume = Settings.MUSIC_ENABLED ? Settings.MUSIC_VOLUME : 0;
        }
    }
    
    public initPreloader(): void {
        this.preloader = new Preloader(0, 0, 'preload');
        this.stageLayer.add(this.preloader);
        this.transition.addAll(this.preloader);  
        this.transition.to(Constants.STATE_MENU);    
    }

    public startBGLoop(name: string, crossfade: boolean = false): void {
        if (this._bgLoop === null) {
            this._bgLoop = this.audio.playSound(name, Settings.MUSIC_ENABLED ? Settings.MUSIC_VOLUME : 0);
        }
        else {
            if (crossfade === true) {
                this.crossfadeAudio(name);
            }
            else {
                this._bgLoop.stop();
                this._bgLoop = this.audio.playSound(name, 0, true);
                if (Settings.MUSIC_ENABLED) {
                    this._bgLoop.fadeTo(Settings.MUSIC_VOLUME, 1000);
                }
            }
        }
    }

    public crossfadeAudio(name: string): void {
        this.add.tween(this._bgLoop).to({ volume: 0 }, 650, Phaser.Easing.Linear.None, true);
        let newBG = this.audio.playSound(name, 0, true);
        this.add.tween(newBG).to({ volume: Settings.MUSIC_ENABLED ? Settings.MUSIC_VOLUME : 0 }, 1000, Phaser.Easing.Linear.None, true).onComplete.add(() => { this._bgLoop = newBG; }); 
    }
}