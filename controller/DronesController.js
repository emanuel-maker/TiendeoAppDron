import Validator from '../service/Validator.js';

export default class DronesController {

    constructor(perimeter,dronList){
        this.perimeter = perimeter;
        this.dronList = dronList;
        this.coord = 'ones';
    }

    changeDronDirection(direction,dron){

        let direcPosition = this.coord.indexOf(dron.direc);

        if(direction == 'r'){
            (direcPosition == (this.coord.length-1)) ?  
                direcPosition = 0 : 
                direcPosition++;
        }else{
            (direcPosition == 0) ? 
                direcPosition = (this.coord.length-1) :
                direcPosition--;
        }

        dron.direc = this.coord[direcPosition]; // update position
    }

    changeDronPosition(dron){

        let coordValue = [-1,1,1,-1];
        let coordYX = 'xyxy';

        let value = coordValue[this.coord.indexOf(dron.direc)];
        let posXY = coordYX[this.coord.indexOf(dron.direc)];
        let newposX = dron.x;
        let newposY = dron.y;

        (posXY == 'x') ? newposX += value : newposY += value;
        let newPosition = newposX +' '+ newposY +' '+ dron.direc;

        if(new Validator().validatePosition(newPosition,this.perimeter))
            dron.setPosition(newposX,newposY,dron.direc);
    }

    showDronList(){
        this.dronList.forEach(dron => {
            const dronInfo = dron.x +' '+ dron.y +' '+ dron.direc;
            console.log(dronInfo.toUpperCase());
        });
    }

    run(){
         
        this.dronList.forEach(dron => {
            [...dron.nextMovement].forEach(mov => {
                (mov == 'r' || mov == 'l') ? 
                this.changeDronDirection(mov,dron) : 
                this.changeDronPosition(dron);
            })
        });

    }
}