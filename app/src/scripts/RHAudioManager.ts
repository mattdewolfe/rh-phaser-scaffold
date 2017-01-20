import {AudioManager} from 'dijon/core';
import {Settings} from './utils/Globals';

export default class RHAudioManager extends AudioManager {
    constructor() {
        super();
    }
    public playAudio(marker: string, volume?: number, loop: boolean = false, forceRestart: boolean = true): Phaser.Sound {
        return super.playAudio(marker, Settings.SFX_ENABLED ? volume : 0, loop, forceRestart);    
    }

    public playDelayedAudio(delay: number, marker: string, volume?: number, loop: boolean = false, forceRestart: boolean = true): Phaser.Sound {
        return super.playDelayedAudio(delay, marker, Settings.SFX_ENABLED ? volume : 0, loop, forceRestart); 
    }

    public playSound(key: string, volume?: number, loop: boolean = false, forceRestart: boolean = true): Phaser.Sound {
        return super.playSound(key, Settings.SFX_ENABLED ? volume : 0, loop, forceRestart);
    }

    public playDelayedSound(delay: number, key: string, volume?: number, loop: boolean = false, forceRestart: boolean = true): Phaser.Sound {
        return super.playDelayedSound(delay, key, Settings.SFX_ENABLED ? volume : 0, loop, forceRestart);
    }

    public playSpriteMarker(marker: string, volume?: number, loop: boolean = false, forceRestart: boolean = true): Phaser.Sound {
        return super.playSpriteMarker(marker, Settings.SFX_ENABLED ? volume : 0, loop, forceRestart);
    }

    public playDelayedSpriteMarker(delay: number, marker: string, volume?: number, loop: boolean = false, forceRestart: boolean = true): Phaser.Sound {
        return super.playDelayedSpriteMarker(delay, marker, Settings.SFX_ENABLED ? volume : 0, loop, forceRestart);
    }
}