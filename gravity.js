const gravity = new class{
    
    constructor(){
        this.interval = null;
        this.gravitE = 0;
    }

    start = () => {
        //console.log(this.gravitE, "asdf")
        this.interval = setInterval(() => {
            if(player.y >= 540){
                gravity.end();
                this.gravitE=0;
                player.setYpos(540)
                return;
            };
            //console.log(this.gravitE, "jlfas")
            this.gravitE += 2
            player.setYpos(player.y + this.gravitE)
        },50)
    }

    end = () => {
        clearInterval(this.interval);
        this.interval = null;
    }
}()