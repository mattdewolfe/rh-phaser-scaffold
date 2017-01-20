import {Group, Text} from 'dijon/display';
import {IPreloadHandler} from 'dijon/interfaces';
import PieProgressBar from './PieProgressBar';
import { Colours, Constants } from '../utils/Globals';

export default class Preloader extends Group implements IPreloadHandler {
    private _wiper: Phaser.Image;
    private _progressBar1: PieProgressBar;
    private _progressBar2: PieProgressBar;

    private _loadText: Text;

    public transitionInComplete: Phaser.Signal = new Phaser.Signal();
    public transitionOutComplete: Phaser.Signal = new Phaser.Signal();

    private _inTween: Phaser.Tween;
    private _outTween: Phaser.Tween;

    constructor(x: number, y: number, name: string) {
        super(x, y, name, true);
        this.init();
        this.buildInterface();
        this.y = -this.game.height;
    }

    // Group overrides
    protected buildInterface() {
        this._loadText = this.addInternal.dText(50, 50, 'Loading ... ', Constants.FONT_VT323, 36, '#FFFFFF');

        this._wiper = this.addInternal.image(0, 0, 'splash_screen');

        this.alpha = 0;
        this.visible = false;

        this._progressBar1 = new PieProgressBar(this.game.width * 0.25, this.game.height * 0.75, 50);
        this._progressBar2 = new PieProgressBar(this.game.width * 0.75, this.game.height * 0.75, 50, 0.15, '#ffaa00', 90);
        this.addInternal.existing(this._progressBar1);
        this.addInternal.existing(this._progressBar2);

        this._inTween = this.game.add.tween(this).to({ y: 0, alpha: 1 }, 350, Phaser.Easing.Quadratic.Out);
        this._outTween = this.game.add.tween(this).to({ y: this.game.height, alpha: 0 }, 300, Phaser.Easing.Quadratic.In);

        this._inTween.onComplete.add(this._in, this);
        this._outTween.onComplete.add(this._out, this);
    }

    // iPreloadHandler implementations
    public loadStart() {
        this._progressBar1.updateProgress(0);
        this._progressBar2.updateProgress(1);
        console.log("starting preload");
    }

    public loadProgress(progress: number) {
        this._progressBar1.updateProgress(progress/100);
        this._progressBar2.updateProgress(1 - (progress/100));
        const roundedProgress = Math.round(progress).toString();
        this._loadText.setText('Loading ... ' + roundedProgress + '%');
    }

    public loadComplete() {

    }

    public transitionIn() {
        console.log("Showing Preloader");
        
        this.visible = true;
        this._inTween.start();
    }

    public transitionOut() {
        this._outTween.start();
    }

    // private methods
    protected _in() {
        this.transitionInComplete.dispatch();
    }

    protected _out() {
        this.visible = false;
        this.y = -this.game.height;
    //    this.transitionOutComplete.dispatch();
    }
}