export class RoadUser{
    constructor(){
        this.sign = "R";
        this.speed = "2";
        this.location = {
            x:0,
            y:0
        }
    }

    move(){
        const locationXRnd = Math.floor(Math.random() * this.speed)
        const locationYRnd = Math.floor(Math.random() * this.speed)
        this.location.x = locationXRnd;
        this.location.y = locationYRnd;
    }
}