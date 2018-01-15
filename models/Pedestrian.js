export class Pedestrian{
    constructor(roadUser, location){
        this.sign = "P";
        this.speed = "3";
        this.location = location;
        this.move = roadUser.move;
    }
}