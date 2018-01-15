export class Board {
    constructor(size, ...roadUsers) {

        //create [][] and fill it with *
        this.placement = new Array(size)
        for (let i = 0; i < size; i++) {
            this.placement[i] = new Array(size).fill("*")
        }

        this.roadUsers = [...roadUsers];
        this.moves = 0;
        this.placeRoadUsers();
        this.showBoard();


    }

    placeRoadUsers() {
        this.roadUsers.forEach(e => {
            const {x, y} = e.location;
            this.placement[x][y] = e.sign;
        })
    }

    showBoard() {
        console.log(this.placement);
        console.log("\n");
    }

    next() {
        for (let e of this.roadUsers) {
            this.moves++;
            const {x, y} = e.location;
            const {sign} = e;
            this.placement[x][y] = "*";

            e.move();
            const destination = this.placement[e.location.x][e.location.y];

            if (destination !== "*") {
                this.placement[e.location.x][e.location.y] = sign + destination;
                this.showBoard();
                console.log("Game Over. %s crashed into %s. %s Moves Occurred.", sign, destination, this.moves);
                return true;
            }

            this.placement[e.location.x][e.location.y] = sign;
            this.showBoard();
        }
        return false;

    }

}