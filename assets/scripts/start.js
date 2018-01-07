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
        count:10,
        target:cc.Prefab,
        //layout:cc.Layout
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad(){
        console.log("Running");
        this.schedule(function(){
            var ds=cc.instantiate(this.target);
            this.node.addChild(ds);
            ds.setPosition(1e8,1e8,0);
            console.log("Created!");
        },0.05,this.count);
    },

    start () {

    },

    // update (dt) {},
});
