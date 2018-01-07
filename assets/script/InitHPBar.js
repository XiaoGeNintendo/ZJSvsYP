// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        ypbar : cc.ProgressBar,
        yplabel: cc.Label,
        jsbar : cc.ProgressBar,
        jslabel : cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad(){
        var jshp=Global.zjshp;
        var yphp=Global.yphp;
        this.ypbar.progress=yphp/100;
        this.jsbar.progress=jshp/100;
        this.jslabel.string=jshp;
        this.yplabel.string=yphp;

    },
    start () {

    },

    // update (dt) {},
});
