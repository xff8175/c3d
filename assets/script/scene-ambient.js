
cc.Class({
    extends: cc.Component,

    editor: {
        executeInEditMode: false,
    },

    properties: {
        _ambient: cc.Color,
        ambient: {
            get () {
                return this._ambient;
            },
            set (val) {
                this._ambient = val;
                this._updateSceneAmbient();
            }
        }
    },

    start () {
        this._updateSceneAmbient();
    },
    
    _updateSceneAmbient () {
        cc.renderer._forward.sceneAmbient = this.ambient;
    }
});
