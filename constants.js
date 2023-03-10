class Constants{
    constructor(){
        this.ROOT = document.querySelector(':root');
        this.MENU = document.getElementById("menu");
        this.SPEED = 5000;
    }   
}
CONSTANTS = new Constants()




function setCSSVariable(property, value){
    if(property.startsWith("--")){
        
        CONSTANTS.ROOT.style.setProperty(property , value)
    }else{
        CONSTANTS.ROOT.style.setProperty("--" + property , value)
    }
}




let keyMap = {}


document.onkeydown = document.onkeyup = function(e){
    if(e.repeat)return;
    keyMap[e.key] = e.type == "keydown"
}