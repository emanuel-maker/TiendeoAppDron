import DronesController from '../controller/DronesController.js';
import Dron from '../model/Dron.js';
import assert from 'assert';


/* -------- TEST 1 ---------- */
console.log("--> Test 1");
const dronListOne = [new Dron(3,3,'e','l'),new Dron(3,3,'e','mmrmmrmrrm'),new Dron(1,2,'n','lmlmlmlmmlmlmlmlmm') ];
const dronListResultOne = [new Dron(3,3,'n','l'),new Dron(5,1,'e','mmrmmrmrrm'),new Dron(1,4,'n','lmlmlmlmmlmlmlmlmm') ];
const dronesControllerOne = new DronesController('5 5', dronListOne);
dronesControllerOne.run();
assert.deepStrictEqual(dronesControllerOne.dronList,dronListResultOne);


/* -------- TEST 2 ---------- */
console.log("--> Test 2");
const dronListTwo = [new Dron(2,2,'n','mmmmmmr')];
const dronListResultTwo = [new Dron(2,2,'e','mmmmmmr') ];
const dronesControllerTwo = new DronesController('2 2', dronListTwo);
dronesControllerTwo.run();
assert.deepStrictEqual(dronesControllerTwo.dronList,dronListResultTwo);
