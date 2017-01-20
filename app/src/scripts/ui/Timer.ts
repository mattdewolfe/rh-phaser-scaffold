import {Application} from 'dijon/application';

// A basic timer, optionally can be given a max time to run.
export default class Timer extends Phaser.Image {

    protected _elapsedSeconds: number;
    protected _elapsedMS: number;
    protected _running: boolean = false;
    protected _countFunc: any;

    public onComplete: Phaser.Signal;
    public onPause: Phaser.Signal;
    public onResume: Phaser.Signal;
    public onTick: Phaser.Signal;
    
    constructor() {
        super(Application.getInstance().game, -100, -100, null);
        this._elapsedMS = 0;
        
        this.onComplete = new Phaser.Signal();
        this.onPause = new Phaser.Signal();
        this.onResume = new Phaser.Signal();
        this.onTick = new Phaser.Signal();
    }

    // Reset key values, does not start/stop the timer.    
    public resetTime(timeAllowed?: number): void {
        this._elapsedMS = 0;
        if (timeAllowed) {
            this._countFunc = this.updateSecondsRemaining;
            this._elapsedSeconds = timeAllowed;
            this._elapsedMS = timeAllowed * 1000;
        }
        else {
            this._countFunc = this.updateSecondsElapsed;
            this._elapsedSeconds = 0;
        }
        this.onTick.dispatch(this._elapsedSeconds);
    }

    public update(): void {
        if (this._running) {
            this._countFunc.call(this, this.game.time.elapsedMS);
        }
    }
    
    protected updateSecondsElapsed(delta: number): void {
        this._elapsedMS += delta;
        if (this._elapsedMS > this._elapsedSeconds * 1000) {
            this._elapsedSeconds += 1;
            this.onTick.dispatch(this._elapsedSeconds);
        }
    }

    protected updateSecondsRemaining(delta: number): void {
        this._elapsedMS -= delta;
        if (this._elapsedMS < this._elapsedSeconds * 1000) {
            this._elapsedSeconds -= 1;
            if (this._elapsedSeconds > 0) {
                this.onTick.dispatch(this._elapsedSeconds);
            }
            else {
                this.onComplete.dispatch(this);
                this._running = false;
            }
        }
    }

    private _dispatchTimeUp(): void {
        this.onComplete.dispatch();
    }

    
    public set paused(value: boolean) {
        this._running = !value;
        if (this._running) {
            this.onResume.dispatch();
        }
        else {
            this.onPause.dispatch();
        }
    }   

    public get paused(): boolean {
        return !this._running;
    }
    
    public get elapsedTime(): number {
        return this._elapsedSeconds;
    }      
}