class Constants{
    constructor(){
        this.ROOT = document.querySelector(':root');
        this.MENU = document.getElementById("menu")
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

