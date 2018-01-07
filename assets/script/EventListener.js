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
        atk: cc.Button,
        hel: cc.Button,
        forZJS: true, //If the operator was done by ZJS??
        ypbar : cc.ProgressBar,
        yplabel: cc.Label,
        jsbar : cc.ProgressBar,
        jslabel : cc.Label
        //music: cc.AudioClip
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad(){
        this.atk.node.on('click',this.attack,this);
        this.hel.node.on('click',this.heal,this);
        
        
    },
    
    updateBar:function(){
        var jshp=Global.zjshp;
        var yphp=Global.yphp;
        this.ypbar.progress=yphp/100;
        this.jsbar.progress=jshp/100;
        this.jslabel.string=jshp;
        this.yplabel.string=yphp;
    },

    attack: function(event){
        if(this.forZJS){
            Global.yphp--;
            if(Global.yphp<=0){
                cc.director.loadScene('zjs win');
            }
        }else{
            Global.zjshp--;
            if(Global.zjshp<=0){
                cc.director.loadScene('yp win');
            }
        }
        this.updateBar();
    },
    heal:function(event){
        if(this.forZJS){
            Global.zjshp++;
        }else{
            Global.yphp++;
        }
        if(Global.zjshp>100){
            Global.zjshp=100;
        }
        if(Global.yphp>100){
            Global.yphp=100;
        }
        
        this.updateBar();
    }
    // update (dt) {},
});
