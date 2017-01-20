export default class Notifications {
    static BOOT_INIT: string = 'bootInit';
    static BOOT_COMPLETE: string = 'bootcomplete';

    static BEGIN_GAME: string = 'begingame';    
    static PAUSE_GAME: string = 'pausegame';
    static RESUME_GAME: string = 'resumegame';
    static RESTART_RUN: string = 'restartrun';
    static COUNTDOWN_COMPLETE: string = 'countdowncomplete';
    static EXITING_GAME: string = 'exitinggame';
    static EXIT_GAME_CANCELLED: string = 'exitgamecancel';
    
    static AUDIO_TOGGLED: string = 'audiotoggled';
    static MUSIC_TOGGLED: string = 'musictoggled';

    static GAME_OVER: string = 'gameover';
    static BACK_TO_MENU: string = 'backtomenu';

    static ADD_ALL_POPUPS: string = 'addallpopups';    
    static SHOW_POPUP: string = 'showpopup';    
    static HIDE_POPUP: string = 'hidepopup';
    static REGISTER_POPUP: string = 'registerpopup';
    
    static REQUEST_TUTORIAL: string = 'requesttutorial';
    static TUTORIAL_RESOLVED: string = 'tutorialresolved';
    static CURRENT_TIP_RESOLVED: string = 'currenttipresolved';

    static SHOW_REMINDER: string = 'showreminder';
    static DISMISS_REMINDER: string = 'dismissreminder';    
}