import {Application} from 'dijon/application';

export default class PieProgressBar extends Phaser.Sprite {

    protected _bmp: Phaser.BitmapData;
    protected _radius: number;
    protected _color: string;
    
    // Supply a weight parameter if you do not want a filled circle. Expects 0 to 1 decimal value
    // because it is used as a percentage of the radius as the circle thickness.
    protected _weight: number;
    
    constructor(x: number, y: number, radius: number = 2, weight: number = 0, color: string = '#ffffff', angle: number = -90) {
        super(Application.getInstance().game, x, y);
        this.anchor.set(0.5);
        this._weight = Phaser.Math.clamp(weight, 0, 1);
        this._radius = radius;
        this.angle = angle;
        this._color = color;

        if (this._weight > 0) {
            this._bmp = this.game.add.bitmapData((this._radius * 2) + (this._weight * (this._radius * 0.6)), (this._radius * 2) + (this._weight * (this._radius * 0.6)));
        }
        else {
            this._bmp = this.game.add.bitmapData(radius * 2, radius * 2);
        }
        this.loadTexture(this._bmp);
        this.updateProgress(0);
    }
    
    public updateProgress(percent: number): void {
        var progress: number = percent;
        this._bmp.clear();
        if (this._weight > 0) {
            progress = Phaser.Math.clamp(percent, 0, 0.9999);
            this._bmp.ctx.fillStyle = this._color;
            this._bmp.ctx.strokeStyle = this._color;
            this._bmp.ctx.lineWidth = this._weight * this._radius;
            this._bmp.ctx.beginPath();
            this._bmp.ctx.arc(this._bmp.width * 0.5, this._bmp.height * 0.5, this._radius - 15, 0, (Math.PI * 2) * progress, false);
            this._bmp.ctx.stroke();
        }
        else {
            progress = 1 - Phaser.Math.clamp(percent, 0.0001, 1);
            this._bmp.ctx.fillStyle = this._color;
            this._bmp.ctx.beginPath();
            this._bmp.ctx.arc(this._radius, this._radius, this._radius, 0, (Math.PI * 2) * progress, true);
            this._bmp.ctx.lineTo(this._radius, this._radius);
            this._bmp.ctx.closePath();
            this._bmp.ctx.fill();
        }
        
        this._bmp.dirty = true;
    }

    public set radius(value: number) {
        this._radius = (value > 0 ? value : 0);
        this._bmp.resize(this._radius * 2, this._radius * 2);
    }

    public get radius(): number {
        return this._radius;
    }
}