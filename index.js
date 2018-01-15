import {RoadUser} from "./models/RoadUser";
import {Bike} from "./models/Bike";
import {Pedestrian} from "./models/Pedestrian";
import {Car} from "./models/Car";
import {Board} from "./Board";

const roadUser = new RoadUser();

const bike = new Bike(roadUser,{x:1,y:2});
const car = new Car(roadUser,{x:3,y:4});
const pedestrian = new Pedestrian(roadUser,{x:1,y:4});

const board = new Board(5,bike,car,pedestrian);

while(!board.next());