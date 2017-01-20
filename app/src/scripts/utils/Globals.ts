export class Constants {
    static STATE_BOOT: string = 'boot';
    static STATE_PRELOAD: string = 'preload';
    static STATE_MENU: string = 'menu';
    static STATE_GAME: string = 'gameplay';
    
    // fonts
    static FONT_VT323: string = 'VT323, monospace';
    
    // Popups
    static POPUP_BEGINGAME: string = 'begingamepopup';
    static POPUP_OPTIONS: string = 'optionspopup';
    static POPUP_HELP: string = 'helppopup';
    static POPUP_CONFIRMATION: string = 'confirmationpopup';
    static POPUP_ENDGAME: string = 'endgamepopup';

    static HEAD_SLOT: string = 'head';
    static FACE_SLOT: string = 'face';
    static WAIST_SLOT: string = 'waist';
    static FOOT_SLOT: string = 'foot';

    static KEY_SAVE_DATA: string = 'zzpccsavedata';

    static UI_OVER_SOUND: string = "";
    static UI_DOWN_SOUND: string = "";
    static MUSIC_LOOP: string = 'zzp_happy_relaxing';
}

export class Settings {
    static SFX_ENABLED: boolean = true;
    static MUSIC_ENABLED: boolean = true;

    protected static _SFX_VOLUME: number = 0.6;
    protected static _MUSIC_VOLUME: number = 0.35;

    // Getters for volume levels.
    // If SFX is muted returns 0 instead of its current volume.    
    public static get SFX_VOLUME(): number {
        return Settings.SFX_ENABLED ? Settings._SFX_VOLUME : 0;
    }

    public static get MUSIC_VOLUME(): number {
        return Settings._MUSIC_VOLUME;
    }

    // Setters for volume levels.
    // If the setter receives a value less than 0 or greater than 1, it will simply
    // set the volume to its previous level.    
    public static set SFX_VOLUME(value: number) {
        Settings._SFX_VOLUME = (value > 1 && value < 0) ? Settings._SFX_VOLUME : value;
    }

    public static set MUSIC_VOLUME(value: number) {
        Settings._MUSIC_VOLUME = (value > 1 && value < 0) ? Settings._MUSIC_VOLUME : value;
    }
}

export class Colours {
    static PINK: number = 0xff80ff;
    static TIMER_STROKE: number = 0x1054a0;

    static COPY_GREY: string = "#a6a6a6";

    static SKY_GREY: number = 0xbccad6;
    static SKY_SLATE_BLUE: number = 0x8d9db6;
    static SKY_DARK_BLUE: number = 0x667292;
    static SKY_SALMON: number = 0xf1e3dd;
    static SKY_LIGHT_BLUE: number = 0xcfe0e8;
    static SKY_POWDER_BLUE: number = 0xb7d7e8;
    static SKY_BLUE: number = 0x87bdd8;
    static SKY_TEAL: number = 0xdaebe8;    

    static ORANGE_HOVER: number = 0xFDAA16;
    static BG_GREY: number = 0x595959;
    
    static hexToString(hex: number): string {
        return '#' + hex.toString(16);
    }
    
    static rgbaToHex(color: { r: number, g: number, b: number, a: number }): number {
        return Phaser.Color.toRGBA(color.r, color.g, color.b, color.a);
    }

    static floatRGBAToHex(color: { r: number, g: number, b: number, a: number }): number {
        return Phaser.Color.getColor(color.r * 255, color.g * 255, color.b * 255);
    }
}