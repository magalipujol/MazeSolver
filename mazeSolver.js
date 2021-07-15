//TODO seleccionar un array aleatorio de mazes object
let maze = mazes.maze1.matrix
let deadEnds = []
// TODO check if I need a newPosition array, or if only a camino array it's okay
let newPosition = []
let actualRow = mazes.maze1.starRow
let actualColumn = mazes.maze1.startColumn
let path = [[actualRow, actualColumn]];

// if the position is the same as the exit, the function returns the path
// if not, the position changes, and check again if it's the exit
function solveMaze() {
    if (maze[actualRow][actualColumn] == s) {
        return path
    }
    else {
        move()
        solveMaze()
    }
}

// I check if I can move right, and if so, I move, else I try doing down, left and up
// If all four positions have a wall, doesn't exist or are on the path, that position is a 
// dead end
function move() {
    // TODO esto puede entrar en un loop infinito en el que no encuentra dead ends
    // siempre va a poder volver a donde vino
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
        console.log("wtf")
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

// this function adds the current position to an array called Path, where
// I store the path to reach the exit
// Alto, it calls another function, addPathToMaze 
function addPositionToPath() {
    newPosition = [actualRow, actualColumn]
    // addPathToMaze()
    return path.push([actualRow, actualColumn])
}

// When I uncomment this, "too much recursion" :(
// this function changes the number of the positions of the path
// to avoid going back through the path
// function addPathToMaze() {
//     maze[actualRow][actualColumn] = 2
//     return maze
// }


