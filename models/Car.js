export class Car{
    constructor(roadUser, location){
        this.sign = "C";
        this.speed = "5";
        this.location = location;
        this.move = roadUser.move;
    }
}