
cc.Class({
    extends: cc.Component,

    properties: {
        playingIndex: 0,
        _animation: null,
        _clips: null,
    },

    onLoad() {
        this._animation = this.getComponent(cc.Animation);
        this._clips = this._animation.getClips();
    },

    start () {
        this.playNextAnimation();
    },

    playNextAnimation () {
        if (!this._clips[this.playingIndex]) {
            this.playingIndex = 0;
        }

        this._animation.play(this._clips[this.playingIndex].name);
        this.playingIndex++;
    },

    walk () {
        let animation = this.getComponent(cc.Animation);
        let state = animation.getAnimationState(this._clips[2].name);
        
        if(null != state) {
            let isPlaying = state.isPlaying;
            if(!isPlaying) {
                animation.play(this._clips[2].name);
            }
        }
        else {
            animation.play(this._clips[2].name);
        }
    },

    idel () {
        let state = this._animation.getAnimationState(this._clips[1].name);
        let isPlaying = state.isPlaying;
        if(!isPlaying) {
            this._animation.play(this._clips[1].name);
        }
    }

});
