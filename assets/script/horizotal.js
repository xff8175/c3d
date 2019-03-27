
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
        let suby = (sender.progress - this._preProgress) * 500;
        this.target.y += suby;
        this._preProgress = sender.progress;
        this.camera.node.y += suby;
    },
});
