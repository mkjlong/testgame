const gravity = new class{
    
    constructor(){
        this.interval = null;
        this.gravitE = 0;
    }

    start = () => {
        this.gravitE=0;
        //console.log(this.gravitE, "asdf")
        this.interval = setInterval(() => {
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