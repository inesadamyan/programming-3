var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Amenaker extends LiveForm {
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
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }
    }
    eat() {
        var fundCords1 = this.getDirections(1);
        var fundCords2 = this.getDirections(2);
        var fundCords3 = this.getDirections(3);
        var fundCords = fundCords3.concat(fundCords2, fundCords1)
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            let c = matrix[y][x];
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;
            if (c == 3) {
                for (var i in gishatichArr) {
                    if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                        gishatichArr.splice(i, 1);
                    }
                }
            }
            if (c == 2) {
                for (var i in xotakerArr) {
                    if (x == xotakerArr[i].x && y == xotakerArr[i].y) {
                        xotakerArr.splice(i, 1);
                    }
                }
            }
            if (c == 1) {
                for (var i in xotArr) {
                    if (x == xotArr[i].x && y == xotArr[i].y) {
                        xotArr.splice(i, 1);
                    }
                }
            }

            if (this.energy >= 2) {
                this.mul();

            }
        } else {
            this.move();
            this.energy--;
            if (this.energy <= 5) {
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
            var norAmenaker = new Amenaker(x, y);
            amenakerArr.push(norAmenaker);
            matrix[y][x] = 4;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in amenakerArr) {
            if (this.x == amenakerArr[i].x && this.y == amenakerArr[i].y) {
                amenakerArr.splice(i, 1);
            }
        }
    }
}