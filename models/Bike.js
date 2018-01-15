export class Bike{
    constructor(roadUser, location){
        this.sign = "B";
        this.speed = "4";
        this.location = location;
        this.move = roadUser.move;
    }
}