
cc.Class({
    extends: cc.Component,

    properties: {
        target: cc.Node,
        camera: cc.Camera,
        _preProgress: Number
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this._preProgress = 0.5;
    }, 

    onSliderVEvent (sender, eventType) {
        // if(sender.progress > this._preProgress) {
        //     this.target.y += (sender.progress - this._preProgress) * 10;
        // }
        // else {
        //     this.target.y += sender.progress - this._preProgress;
        // }
        // console.log("1 this._preProgress:" + this._preProgress + " sender.progress:" + sender.progress + " y1:" + this.target.y);
        // this.target.y += sender.progress - this._preProgress;
        console.log("1 this._preProgress:" + this._preProgress);
        let suby = (sender.progress - this._preProgress) * 500;
        console.log("suby:" + suby);
        this.target.y += suby;
        console.log("y:" + this.target.y);
        this._preProgress = sender.progress;
        this.camera.node.y += suby;

        console.log("2 this._preProgress:" + this._preProgress);
        // console.log("2 this._preProgress:" + this._preProgress + " sender.progress:" + sender.progress + " y2:" + this.target.y);
    },
});
