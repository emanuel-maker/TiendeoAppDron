
import promptIm from 'prompt-sync';
import Validator from './service/Validator.js';
import Dron from './model/Dron.js';
import DronesController from './controller/DronesController.js';

class Main {

    constructor(){
        this.prompt = promptIm();
        this.validator = new Validator(); // object to validate dron information inputs
        this.conmuter = 'p'; // p = position or m = movement
        this.dronsList = [];
        this.dron = new Dron();
        this.perimeter = '';
    }

    /**
     * This method check if input it's a position or movements
     * @param {*} input 
     */
    checkTypeOfData(input){ 

        if(this.conmuter == 'p'){ 
            if(this.validator.validatePosition(input,this.perimeter)){
                this.dron.setPosition(parseInt(input[0]),parseInt(input[2]),input[4]);
                this.conmuter = 'm'; // get input movement
            }else{
                console.log('>> Info error: Set again position');
            } 
        }else{    
            if(this.validator.validateMovement(input)){
                this.dron.setNextMovement(input);
                this.dronsList.push(this.dron); // adding actual dron
                this.conmuter = 'p'; // get input next dron position
                this.dron = new Dron(); // next instance dron
            }else{
                console.log('>> Info: Set again movement');
            } 
        }
    }

    run(){
    
        console.log('Input:');
        this.perimeter = this.prompt();
        let input = '';

        if(this.validator.validatePerimeter(this.perimeter)){
            while(input != 's'){ 
                input = this.prompt().toLowerCase();
                if(input != 's') this.checkTypeOfData(input);
            }  
        }else{
            console.log('>> Info error: Error perimeter');
        }

        if(this.dronsList.length > 0){
            const dronesController = new DronesController(this.perimeter,this.dronsList);
            dronesController.run();
            console.log('Output:');
            dronesController.showDronList();
        }   
    }
}


new Main().run();






