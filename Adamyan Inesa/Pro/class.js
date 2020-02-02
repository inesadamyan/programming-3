class Xot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.multiply = 0;
        this.directions = [];

    }
    newDirections() {
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
    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        if (this.multiply >= 2) {
            var fundCords = this.getDirections(0);
            var cord = random(fundCords);
            if (cord) {
                var x = cord[0];
                var y = cord[1];
                var norXot = new Xot(x, y);
                xotArr.push(norXot);
                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }
}
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 3;
        this.directions = [];
    }
    newDirections() {
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
    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }

    }
    eat() {
        var fundCords = this.getDirections(1);
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;
            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
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
            var norXotaker = new Xotaker(x, y);
            xotakerArr.push(norXotaker);
            matrix[y][x] = 2;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in xotakerArr) {
            if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                xotakerArr.splice(i, 1);
            }
        }
    }

}

class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 3;
        this.directions = [];
    }
    newDirections() {
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
    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        }
    }
    eat() {
        var fundCords = this.getDirections(2);
        var cord = random(fundCords);
        if (cord) {
            var x = cord[0];
            var y = cord[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            this.multiply++;
            this.energy++;
            for (var i in xotakerArr) {
                if (x == xotakerArr[i].x && y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1);
                }
            }
            if (this.energy >= 6) {
                this.mul();

            }
        } else {
            this.move();
            this.energy--;
            if (this.energy < -2) {
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
            var norGishatich = new Gishatich(x, y);
            gishatichArr.push(norGishatich);
            matrix[y][x] = 3;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
            }
        }
    }
}
class Amenaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 10;
        this.directions = [];
    }
    newDirections() {
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
    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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

class Mega {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.multiply = 0;
        this.directions = [];

    }
    newDirections() {
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
    getDirections() {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 5) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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