var side = 30;
var xotArr = []; //խոտերի զանգված
var xotakerArr = []; //խոտակերների զանգված
var gishatichArr = []; //գիշատիչների զանգված
var amenakerArr = []; //ամենակերների զանգված
var megaArr = [];

// Մատրից, կազմված 0-ներով, 1-երով, 2-ներով, 3-ներով, 4-երով և 5-երով
// var matrix = [];
// for (var y = 0 ; y < 30; y++) {
//     matrix[y] = []; 
//     for (var x = 0; x < 30; x++) { 
//         matrix[y][x] = Math.floor(Math.random() * Math.floor(6));;
//     }
// } 

// function genetareMatrix(lengthY, lengthX, number) {

//     let matrix = [];

//     function getRandomInt(max) {
//         return Math.floor(Math.random() * Math.floor(max));
//     }

//     for (let y = 0; y < 30; y++) {
//         matrix.push([]);
//         for (let x = 0; x < 30; x++) {
//             let randomCount = getRandomInt(5);
//             matrix[y].push(randomCount);
//         }
//     }
//     return matrix;

// }

// let matrix = genetareMatrix(30, 30, 5);
let matrix = []; // Մատրիցի ստեղծում
let rows = 30; // Տողերի քանակ
let columns = 30; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
for (let x = 0; x < columns; x++) {
let a = Math.floor(Math.random()*100);
if (a >= 0 && a < 20) {
matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
} 
if (a >= 20 && a < 40) {
matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
} 
else if (a >= 40 && a < 50) {
matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
} 
else if (a >= 50 && a < 70) {
matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
} 
else if(a >= 70 && a < 90) {
matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
} 
else if(a >= 90 && a < 100) {
matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
} 
}
}

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#EDF1F0');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var xotaker = new Xotaker(x, y);
                xotakerArr.push(xotaker);
            } else if (matrix[y][x] == 1) {
                var xot = new Xot(x, y);
                xotArr.push(xot);
            } else if (matrix[y][x] == 4) {
                var amenaker = new Amenaker(x, y);
                amenakerArr.push(amenaker);
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
            }
            else if (matrix[y][x] == 5) {
                var mega = new Mega(x, y);
                megaArr.push(mega);
            }
        }
    }
}
function draw() {
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill('#008749');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill('#fc9e00');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill('#fc002a');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill('#0919ed');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill("#0fffd7");
                rect(j * side, i * side, side, side);
            }
        }
    }
    //յուրաքանչյուր խոտ փորձում է բազմանալ
    for (var i in xotArr) {
        xotArr[i].mul();
    }
    //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
    for (var i in xotakerArr) {
        xotakerArr[i].eat();
    }
    //յուրաքանչյուր գիշատիչ փորձում է ուտել խոտակեր
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
    //յուրաքանչյուր ամենակեր փորձում է ուտել խոտ, խոտակեր և գիշատիչ
    for (var i in amenakerArr) {
        amenakerArr[i].eat();
    }
    for (var i in megaArr) {
        megaArr[i].eat();
    }
}