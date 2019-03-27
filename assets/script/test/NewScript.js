cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node,
        enemy: cc.Node,
        collisionDamage: 0.1,
        collisionDistance: 15
    },


    start () {

    },

    update (dt) {
        this.cc();
    },
    cc () {
        let zeroPos = cc.v2();
        let playerPos = cc.v2();
        let enemyPos = cc.v2();
        let dif = cc.v2();              
        playerPos = this.player.convertToWorldSpaceAR(zeroPos, playerPos);

        if(this.enemy != null) {
            enemyPos = this.enemy.convertToWorldSpaceAR(zeroPos, enemyPos);
            let distance = playerPos.sub(enemyPos, dif).mag();
            if (distance < this.collisionDistance) {
                this.enemy.removeFromParent(true);//
                this.enemy = null;  //.removeFromParent(true);//
                // let en = this.enemy;
                // this.en.destroy();
                // this.enemy = null;

                console.log('collide-----------!');
                // this.node.emit('collide-enemy', {dif, enemy, distance});
                // if(this.enemy.active) {
                //     this.enemy.active = false;
                //     this.enemy.removeFromParent(true);// = null;
                // }
                // else {
                //     this.enemy.active = true;
                // }
            }
        }
    }

    // update (dt) {},
});
