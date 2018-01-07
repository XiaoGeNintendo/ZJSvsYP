// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

var mode=-1;
cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.ParticleSystem
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad(){
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,function(event){
            var c=event.keyCode;
            var player=this.player.node;
            if(c==cc.KEY.a){
                mode=0;
            }
            if(c==cc.KEY.d){
                mode=1;
            }
            if(c==cc.KEY.w){
                mode=2;
            }
            if(c==cc.KEY.s){
                mode=3;
            }
        },this);

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,function(event){
            mode=-1;
        },this);
    },

    start () {

    },

    update (dt) {
        var p=this.player.node;
        if(mode==0){
            p.x--;
        }
        if(mode==1){
            p.x++;
        }
        if(mode==2){
            p.y++;
        }
        if(mode==3){
            p.y--;
        }
    },
});
