import { Application } from 'dijon/application';
import {Game} from 'dijon/core';
import { Text, Sprite } from 'dijon/display';
import RHButton from './RHButton';
import { Settings, Constants, Colours } from '../utils/Globals';

export default class RHLabelledButton extends RHButton {

    protected _label: Text;
    protected _outLabelTint: number;
    protected _overLabelTint: number;
    protected _downLabelTint: number;
    protected _upLabelTint: number;

    protected _overSound: string = null;
    protected _downSound: string = null;

    constructor(x: number, y: number, callback: any, context: any, assetKey: string, baseFrame: string, overFrame?: string, downFrame?: string, upFrame?: string) {
        super(x,
            y,
            callback,
            context,
            assetKey,
            baseFrame,
            overFrame ? overFrame : baseFrame,
            downFrame ? downFrame : baseFrame,
            upFrame ? upFrame : baseFrame);
        this._label = new Text(0, 0, "", "#ffffff", 1);
    }

    public static CreateFromData(data: any): RHLabelledButton {
        let self: RHLabelledButton = new RHLabelledButton(data.position.x, data.position.y, null, null, data.key, data.frame, data.overFrame, data.downFrame, data.upFrame);
        self.name = data.name;
        if (data.anchor) {
            self.anchor.setTo(data.anchor.x, data.anchor.y);
        }
        if (data.scale) {
            self.scale.setTo(data.scale.x, data.scale.y);
        }

        self.alpha = data.alpha ? data.alpha : 1;
        self.angle = data.angle ? data.angle : 0;
        
        self._outLabelTint = data.outLabelColor ? Colours.floatRGBAToHex(data.outLabelColor) : 0xffffff;
        self._overLabelTint = data.overLabelColor ? Colours.floatRGBAToHex(data.overLabelColor) : 0xffffff;
        self._downLabelTint = data.downLabelColor ? Colours.floatRGBAToHex(data.downLabelColor) : 0xffffff;
        self._upLabelTint = data.upLabelColor ? Colours.floatRGBAToHex(data.upLabelColor) : 0xffffff;

        return self;
    }

    public assignPrefab(object: any) { 
        if (object instanceof Text) {
            this._label.destroy();
            this._label = object;
            this.addChild(this._label);
            this._label.setColor("#ffffff");
            this._label.tint = this._outLabelTint;
            //this._label.x += Math.round(this.realWidth * 0.5);
        }
    }
    
    protected _onDownTriggered(): void { }   

    public onInputDownHandler(sprite: any, pointer: any): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputDownHandler(sprite, pointer);
        this._label.tint = this._downLabelTint;
    }
    
    public onInputOverHandler(sprite: any, pointer: any): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputOverHandler(sprite, pointer);
        this._label.tint = this._overLabelTint;
    }

    public onInputOutHandler(sprite: any, pointer: any): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputOutHandler(sprite, pointer);
        this._label.tint = this._outLabelTint;
    }

    public onInputUpHandler(sprite: any, pointer: any, isOver: boolean): void {
        if (this.input.enabled === false) {
            return;
        }
        super.onInputUpHandler(sprite, pointer, isOver);
        this._label.tint = this._upLabelTint;
    }   
    
    public assignText(newText: Text): void {
        if (newText !== null) {
            this._label = newText;
        }
    }   
}