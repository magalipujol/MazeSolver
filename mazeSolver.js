//TODO seleccionar un array aleatorio de mazes object
// let maze = mazes.maze1.matrix
let path = []
let deadEnds = []
// TODO check if I need a newPosition array, or if only a camino array it's okay
let newPosition = []
let actualRow = mazes.maze1.starRow
let actualColumn = mazes.maze1.startColumn

function solveMaze() {
    if (mazeArray[actualRow][actualColumn] == s) {
        return path
    }
    else {
        move()
    }
}

//this doesn't work :(
function move() {
    console.log(actualRow + ", " + actualColumn)
    if (canMoveRight) {
        moveRight()
        console.log("derecha")
    } else if (canMoveDown) {
        moveDown()
        console.log("abajo")
    } else if (canMoveLeft) {
        moveLeft()
        console.log("izquierda")
    } else if (canMoveUp) {
        moveUp()
        console.log("arriba ")
    } else {
        // TODO chequear que pasa cuando entra acá
        deadEnds.push([i, j])
    }
    return newPosition
}

function canMoveRight(maze) {
// TODO change this variable in all functions canMove (line 2 let maze = mazes.maze1.matrix) 
    maze = mazes.maze1.matrix
    return (maze[actualRow][actualColumn + 1] == 0)
}

function canMoveDown(maze) {
    maze = mazes.maze1.matrix
    return (maze[actualRow + 1][actualColumn] == 0)
}

function canMoveLeft(maze) {
    maze = mazes.maze1.matrix
    return (maze[actualRow][actualColumn - 1] == 0)
}

function canMoveUp(maze) {
    maze = mazes.maze1.matrix
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