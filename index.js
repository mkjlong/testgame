
let player = new Player(100, 100, 50, 50, 0, 0)


document.addEventListener("keydown",function(e){
    if(e.repeat)return;
    if(e.key=="w"){
        gravity.start();
        gravity.gravitE = -20;
    }
    if(e.key=="a"){
        (moveLeft=()=>{
            if(!keyMap[e.key])return;
            move(-1,0)
            setTimeout(moveLeft,12.5)
        })
        moveLeft();
    }
    if(e.key=="s"){
        (moveDown=()=>{
            if(!keyMap[e.key])return;
            move(0,1)
            setTimeout(moveDown,12.5)
        })
        moveDown();
    }
    if(e.key=="d"){
        (moveRight=()=>{
            if(!keyMap[e.key])return;
            move(1,0)
            setTimeout(moveRight,12.5)
        })
        moveRight();
    }
})


move = (x,y) => {
    player.setXpos(player.x + x)
    player.setYpos(player.y + y)
}