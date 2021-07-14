//TODO seleccionar un array aleatorio de mazes object
let maze = mazes.maze1.matrix
//TODO path tiene que tener la posicion de entrada y salida ya puestas
let path = []
let deadEnds = []
// TODO check if I need a newPosition array, or if only a camino array it's okay
let newPosition = []
let actualRow = mazes.maze1.starRow
let actualColumn = mazes.maze1.startColumn

function solveMaze() {
    if (maze[actualRow][actualColumn] == s) {
        return path
    }
    else {
        move()
        solveMaze()
    }
}

//this doesn't work :(
function move() {
    // TODO esto puede entrar en un loop infinito en el que no encuentra dead ends
    // siempre va a poder volver a donde vino
    console.log(actualRow + ", " + actualColumn)
    if (canMoveRight()) {
        moveRight()
        console.log("derecha")
    } else if (canMoveDown()) {
        moveDown()
        console.log("abajo")
    } else if (canMoveLeft()) {
        moveLeft()
        console.log("izquierda")
    } else if (canMoveUp()) {
        moveUp()
        console.log("arriba ")
    } else {
        // TODO chequear que pasa cuando entra acá
        deadEnds.push([actualRow, actualColumn])
    }
    return newPosition
}

function canMoveRight() {
    return (maze[actualRow][actualColumn + 1] == 0 || maze[actualRow][actualColumn + 1] == s)
}

function canMoveDown() {
    return (maze[actualRow + 1][actualColumn] == 0)
}

function canMoveLeft() {
    return (maze[actualRow][actualColumn - 1] == 0)
}

function canMoveUp() {
    return (maze[actualRow - 1][actualColumn] == 0)
}

function moveRight() {
    actualColumn += 1
    addPositionToPath()
}

function moveDown() {
    actualRow += 1
    addPositionToPath()
}

function moveLeft() {
    actualColumn -= 1
    addPositionToPath()
}

function moveUp() {
    actualRow -= 1
    addPositionToPath()
}

function addPositionToPath() {
    newPosition = [actualRow, actualColumn]
    return path.push([actualRow, actualColumn])
}

// this function changes the number of the positions of the path
// to avoid going back through the path
function addPathToMaze() {

}
