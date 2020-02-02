var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Mega extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.energy = 3;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    move() {
        var fundCords = this.getDirections(0);
        var fundCords2 = this.getDirections(1);
        fundCords = fundCords.concat(fundCords2)
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }

    }
    eat() {
        var fundCords = this.getDirections(4);
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 1;
            var norXot = new Xot (this.x, this.y);
            xotArr.push(norXot);
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;
            for (var i in amenakerArr) {
                if (x == amenakerArr[i].x && y == amenakerArr[i].y) {
                    amenakerArr.splice(i, 1);
                }
            }
            if (this.energy >= 3) {
                this.mul();
            }
        } else {
            this.move();
            this.energy--;
            if (this.energy <= -2) {
                this.die();
            }
        }
    }
    mul() {
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            var norMega = new Mega(x, y);
            megaArr.push(norMega);
            matrix[y][x] = 2;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in megaArr) {
            if (this.x == megaArr[i].x && this.y == megaArr[i].y) {
                megaArr.splice(i, 1);
            }
        }
    }
}