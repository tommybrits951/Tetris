let canvas
let ctx
let gArrHeight = 20
let gArrWidth = 12
let startX = 4
let startY = 0
let coordArray = [...Array(gArrHeight)].map(e => Array(gArrWidth).fill(0))

let curTetro = [[1, 0], [0, 1], [1,1], [2,1]]

let tTetro = [[1,0], [0,1], [1,1], [2,1]]
let sqTetro = [[0,0], [0,1], [1,0], [1,1]]
let lnTetro = [[0,0], [0,1], [0,2], [0,3]]
let zrTetro = [[0,1], [0,2], [1,0], [1,1]]
let zlTetro = [[0,0], [0,1], [1,1], [1,2]]
let llTetro = [[0,0], [1,0], [1,1], [1,2]]
let lrTetro = [[0,2], [1,0], [1,1], [1,2]]

let tetros = []
let tetroColors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink']
let curTetroColor
let gameBoardArray = [...Array(gArrHeight)].map(e => Array(gArrWidth).fill(0))


class Coords {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

document.addEventListener('DOMContentLoaded', SetupCanvas)


function CreateCoordArray() {
    let i = 0, j = 0;

    for (let y = 9; y <= 446; y += 23) {
        for (let x = 11; x <= 264; x += 23) {
            coordArray[i][j] = new Coords(x, y)
            i++
        }
        j++
        i = 0
    }
}

function SetupCanvas() {
    canvas = document.querySelector("#myCan")
    ctx = canvas.getContext('2d')
    canvas.width = 936
    canvas.height = 956

    ctx.scale(2, 2)
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black"
    ctx.strokeRect(8, 8, 280, 462)
    CreateCoordArray()
    DrawTetro()
}


function DrawTetro() {
    for (let i = 0; i < curTetro.length, i++) {

    }
}
