// TODO if I change this, main.js should display this maze
let mazeObject = mazes.maze1
//TODO seleccionar un array aleatorio de mazes object
let maze = mazeObject.matrix
let deadEnds = []
// TODO check if I need a newPosition array, or if only a camino array it's okay
let newPosition = []
let actualRow = mazeObject.startRow
let actualColumn = mazeObject.startColumn
let path = [[actualRow, actualColumn]];
let finishRow = mazeObject.endRow
let finishColumn = mazeObject.endColumn



// if the position is the same as the exit, the function returns the path
// if not, the position changes, and check again if it's the exit
function solveMaze(intento) { 
    // this prevents infinite loop
    if (intento == 1000) {
        console.log("plop")
        return 
    }
    if (actualRow == finishRow && actualColumn == finishColumn) {
        return path
    }
    else {
        move()
        setTimeout(() => solveMaze(intento + 1), 500)
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
        resetPositionToStart()
        clearPath()
    }
    return newPosition
}

function canMoveRight() {
    return (maze[actualRow][actualColumn + 1] == c || maze[actualRow][actualColumn + 1] == s)
}

// TODO tiene que quedar igual que canMoveRight
function canMoveDown() {
    return (maze[actualRow + 1][actualColumn] == c)
}

function canMoveLeft() {
    return (maze[actualRow][actualColumn - 1] == c)
}

function canMoveUp() {
    return (maze[actualRow - 1][actualColumn] == c)
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
    addPathToMaze()
    return path.push([actualRow, actualColumn])
}

function addPathToMaze() {
    maze[actualRow][actualColumn] = p
    return maze
}

function clearPath() {
    for (let i = 0; i < path.length - 1; i++) {
        maze[path[i][0]][path[i][1]] = c
    }
    path.length = 1
}

function resetPositionToStart() {
    actualRow = mazeObject.startRow
    actualColumn = mazeObject.startColumn
}

solveMaze(0)

