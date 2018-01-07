// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

window.Global={
    zjshp:100,
    yphp:100
}

var code;
cc.Class({
    extends: cc.Component,

    properties: {
       button: cc.Button,
       music: cc.AudioClip
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.button.node.on('click',this.startGame,this);
        code=cc.audioEngine.play(this.music,true,0.5);
    },

    startGame:function(event){
        cc.director.loadScene('ZJS');
        cc.audioEngine.stop(code);
    }
    // update (dt) {},
});
