import {Group, BitmapText, NineSliceImage} from "dijon/display";
import {Placeholders} from "dijon/utils";
import BasePopup from "./BasePopup";
import {Constants, Colours} from "../utils/Globals";
import Notifications from "../utils/Notifications";
import HelpPopupMediator from "../mediator/popup/HelpPopupMediator";
import RHButton from '../prefabs/RHButton';
import { IHelpData } from '../interfaces';

export default class HelpPopup extends BasePopup {
    
    private _title: Phaser.Sprite;
    private _previousButton: RHButton;
    private _nextButton: RHButton;
    private _closeButton: RHButton;
    private _slides: Phaser.Sprite[];
    private _dots: Phaser.Sprite[];
    private _activeDots: Phaser.Sprite[];
    private _contentGroup: Group;
    private _isSliding: boolean;
    private _currentSlide: number;
    private _slideCount: number;
    
    constructor() {
        super(Constants.POPUP_HELP, 0, 0);
    }

    public buildInterface() {
        // this._currentSlide = 0;
        // this._isSliding = false;
        // this._addBG();
        // this._addContent();
        // this._addSlides();
        // this._addTitle();
        // this.position.set(this.game.width * 0.5, this.game.height * 0.5);
    }

    protected _addMediator(): void {
        this._mediator = BasePopup.retrieveMediator(HelpPopupMediator.MEDIATOR_NAME, this);
        if (this._mediator === null) {
            this._mediator = new HelpPopupMediator(this);
        }
        this._mediator.sendNotification(Notifications.REGISTER_POPUP, this);
    }

    protected _addBG(): void {
        this.bg = this.add(new Phaser.Sprite(this.game, 0, 0, 'popups','pause_popup_background'));
        this.bg.anchor.set(0.5);
        this.bg.angle = 90;
    }

    protected _addContent(): void {
        this._contentGroup = this.addInternal.dGroup(this.bg.x - (this.bg.realHeight * 0.5), this.bg.y - (this.bg.realWidth * 0.5) + 50);
        
        let previousConnectors: Phaser.Sprite = this._contentGroup.add(new Phaser.Sprite(this.game, this.bg.realHeight * 0.023, this.bg.realWidth * 0.35, 'tutorials', 'tutorial_back_connector'));
        let nextConnectors: Phaser.Sprite = this._contentGroup.add(new Phaser.Sprite(this.game, this.bg.realHeight * 0.977, this.bg.realWidth * 0.35, 'tutorials', 'tutorial_next_connector'));
        let closeConnectors: Phaser.Sprite = this._contentGroup.add(new Phaser.Sprite(this.game, this.bg.realHeight * 0.95, this.bg.realWidth * 0.0 - 17, 'tutorials', 'tutorial_connector'))
        
        this._previousButton = this._contentGroup.add(new RHButton(this.bg.realHeight * 0.023, this.bg.realWidth * 0.35, this._previous, this, 'tutorials', 'tutorial_back_button'));
        this._nextButton = this._contentGroup.add(new RHButton(this.bg.realHeight * 0.977, this.bg.realWidth * 0.35, this._next, this, 'tutorials', 'tutorial_next_button'));
        this._closeButton = this._contentGroup.add(new RHButton(this.bg.realHeight * 0.977, this.bg.realWidth * 0.0 - 35, this._closeHelp, this, 'tutorials', 'tutorial_close_button'));

        this._previousButton.centerPivot();
        this._nextButton.centerPivot();
        this._closeButton.centerPivot();
        previousConnectors.centerPivot();
        nextConnectors.centerPivot();
        closeConnectors.centerPivot();
    }

    protected _addTitle(): void {
        this._title = this._contentGroup.addInternal.sprite(this.bg.realHeight * 0.5, this.bg.realWidth * -0.025, 'tutorials', 'how_to_play_text');
        this._title.centerPivot();
    }

    private _addSlides(): void {
        this._slides = [];
        this._dots = [];
        this._activeDots = [];
        let helpData: IHelpData[] = this.mediator.getGesturePositions();
        this._slideCount = helpData.length;

        let dotStartX = (this.bg.realHeight * 0.5) - (this._slideCount * 18 * 0.5) + 9;

        for (var i = 0; i < this._slideCount; i++) {
            let slide: Phaser.Sprite = this._contentGroup.addInternal.sprite((this.bg.realHeight * 0.5) + helpData[i].imagePOS.x, (this.bg.realWidth * 0.5) + helpData[i].imagePOS.y, helpData[i].image.key, helpData[i].image.sprite);
            slide.centerPivot();
            slide.alpha = 0;
            slide.visible = false;

            this._slides.push(slide);

            // let copy: BitmapText = new BitmapText(slide.realWidth * 0.5, -42, Constants.FONT_DIMBOREGULAR, this.mediator.getHelpCopy(i), (this.game.resolution > 1.5)? 16 : 32, 'center', 0xffffff);            
            // copy.centerPivot();
            // this._contentGroup.addInternal.existing(copy);
            // slide.addChild(copy);
        
            let gesture: Phaser.Image;
            if (this.game.device.desktop) {
                gesture = new Phaser.Image(this.game, helpData[i].mousePOS.x, helpData[i].mousePOS.y, 'tutorials', "mouse_pointer");
            }
            else {
                gesture = new Phaser.Image(this.game, helpData[i].gesturePOS.x, helpData[i].gesturePOS.y, 'tutorials', "tap_gesture");
                if (i === 4) {
                    gesture.scale.setTo(-1, 1);
                }
            }
            gesture.centerPivot();
            slide.addChild(gesture);

            let dot: Phaser.Sprite = this._contentGroup.addInternal.sprite(dotStartX + (i * 18), this.bg.realWidth * 0.775, 'tutorials', 'inactive_dot');
            let activeDot: Phaser.Sprite = this._contentGroup.addInternal.sprite(dotStartX + (i * 18), this.bg.realWidth * 0.775, 'tutorials', 'active_dot');
            dot.centerPivot();
            activeDot.centerPivot();
            activeDot.visible = false;
            
            this._dots.push(dot);
            this._activeDots.push(activeDot);
        }

        this._slides[this._currentSlide].alpha = 1;
        this._slides[this._currentSlide].visible = true;

        this._activeDots[this._currentSlide].visible = true;
    }

    public show(): void {
        this._slides[this._currentSlide].visible = true;
        super.show();
    }

    public _hideComplete(): void {
        super._hideComplete();
        this._hideSlides();
    }
    
    private _hideSlides(): void {
        for (var i = 1; i < this._slides.length; i++) {
            this._slides[i].visible = false;
            this._slides[i].alpha = 0;
            this._activeDots[i].visible = false;
        }
        this._currentSlide = 0;
        this._activeDots[this._currentSlide].visible = true;
        this._slides[this._currentSlide].alpha = 1;
    }
  
    private _previous(): void {
        if (this._isSliding === true) {
            return;
        }
        this._isSliding = true;
        let outTween: Phaser.Tween = this.game.add.tween(this._slides[this._currentSlide]).to({ x: '+30', alpha: 0 }, 100, Phaser.Easing.Default, true);
        outTween.onComplete.add(this._decrementSlideNumber, this);
        this._activeDots[this._currentSlide].visible = false;

        let prevSlide = this._currentSlide - 1;
        if (prevSlide === -1) {
            prevSlide = this._slideCount - 1;
        }

        this._slides[prevSlide].x -= 30;
        this._slides[prevSlide].visible = true;
        let inTween: Phaser.Tween = this.game.add.tween(this._slides[prevSlide]).to({ x: '+30', alpha: 1 }, 100, Phaser.Easing.Default, true);
        this._activeDots[prevSlide].visible = true;
    }

    private _next(): void {
        if (this._isSliding === true) {
            return;
        }
        this._isSliding = true;
        let outTween: Phaser.Tween = this.game.add.tween(this._slides[this._currentSlide]).to({ x: '-30', alpha: 0 }, 100, Phaser.Easing.Default, true);
        outTween.onComplete.add(this._incrementSlideNumber, this);
        this._activeDots[this._currentSlide].visible = false;

        let nextSlide = this._currentSlide + 1;
        if (nextSlide === this._slideCount) {
            nextSlide = 0;
        }

        this._slides[nextSlide].x += 30;
        this._slides[nextSlide].visible = true;
        let inTween: Phaser.Tween = this.game.add.tween(this._slides[nextSlide]).to({ x: '-30', alpha: 1 }, 100, Phaser.Easing.Default, true);
        this._activeDots[nextSlide].visible = true;
    }

    private _incrementSlideNumber(): void {
        this._isSliding = false;
        this._slides[this._currentSlide].visible = false;
        this._slides[this._currentSlide].x += 30;

        this._currentSlide++;
        if (this._currentSlide === this._slideCount) {
            this._currentSlide = 0;
        }
    }

    private _decrementSlideNumber(): void {
        this._isSliding = false;
        this._slides[this._currentSlide].visible = false;
        this._slides[this._currentSlide].x -= 30;

        this._currentSlide--;
        if (this._currentSlide === -1) {
            this._currentSlide = this._slideCount - 1;
        }
    }

    private _closeHelp(): void {
        if (this._allowInput) {
            this.mediator.closeHelp();
        }
        this.mediator.sendNotification(Notifications.HIDE_POPUP, this.id);
    }
    
    private get mediator(): HelpPopupMediator {
        return <HelpPopupMediator>this._mediator;
    }
}