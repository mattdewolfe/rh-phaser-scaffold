import { Application } from 'dijon/application';
import {Game} from 'dijon/core';
import { Text } from 'dijon/display';
import { Settings, Constants } from '../utils/Globals';

export default class RHButton extends Phaser.Button {

    protected _overSound: string = null;
    protected _downSound: string = null;

    constructor(x: number, y: number, callback: any, context: any, assetKey: string, baseFrame: string, overFrame?: string, downFrame?: string, upFrame?: string) {
        super(Application.getInstance().game,
            x,
            y,
            assetKey,
            callback,
            context,
            overFrame ? overFrame : baseFrame,
            baseFrame,
            downFrame ? downFrame : baseFrame,
            upFrame ? upFrame : baseFrame);
        
        this.input.useHandCursor = true;
        this.forceOut = true;
    }

    public static CreateFromData(data: any): RHButton {
        let self: RHButton = new RHButton(data.position.x, data.position.y, null, null, data.key, data.frame, data.overFrame, data.downFrame, data.upFrame);
        self.name = data.name;
        if (data.anchor) {
            self.anchor.setTo(data.anchor.x, data.anchor.y);
        }
        if (data.scale) {
            self.scale.setTo(data.scale.x, data.scale.y);
        }
        
        self.alpha = data.alpha ? data.alpha : 1;
        self.angle = data.angle ? data.angle : 0;
        return self;
    }

    public assignPrefab(object: any) { 
        // Override this to handle assignment of child prefabs.
    }
    
    protected _onDownTriggered(): void { }   

    public onInputDownHandler(sprite: any, pointer: any): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputDownHandler(sprite, pointer);
        if (Settings.SFX_ENABLED === true) {
            this.dgame.audio.playAudio(this.downSound, 0.5);
        }
        this._onDownTriggered();
    }

    public onInputOverHandler(sprite: any, pointer: any): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputOverHandler(sprite, pointer);
        if (Settings.SFX_ENABLED === true) {
            this.dgame.audio.playAudio(this.overSound, 0.5);
        }
    }

    public onInputOutHandler(sprite: any, pointer: any): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputOutHandler(sprite, pointer);
    }

    public onInputUpHandler(sprite: any, pointer: any, isOver: boolean): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputUpHandler(sprite, pointer, isOver);
    }

    public updateBaseFrame(newFrame: string): void {
        this.setFrames(newFrame + "_hover", newFrame + "_normal", newFrame + '_down', newFrame + "_normal");
    }   
    
    public get downSound(): string {
        return this._downSound !== null ? this._downSound : Constants.UI_DOWN_SOUND;
    }
    
    public get overSound(): string {
        return this._overSound !== null ? this._overSound : Constants.UI_OVER_SOUND;
    }

    public set downSound(val: string) {
        this._downSound = val;
    }

    public set overSound(val: string) {
        this._overSound = val;
    }
        
    public get dgame(): Game {
        return <Game>this.game;
    }
}