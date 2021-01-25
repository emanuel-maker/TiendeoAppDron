export default class Dron {
    
    constructor (x,y, direc,movement) {
        this.x = x;
        this.y = y;
        this.direc = direc;
        this.nextMovement = movement;
    }

    setPosition(x,y,direc){
        this.x = x;
        this.y = y;
        this.direc = direc;
    }

    setNextMovement(movement){
        this.nextMovement = movement;
    }
    
}


