// for (let i = 0; i < mazes.maze1.matrix.length; i++) {
//     var div = document.createElement('div')
//     div.innerHTML += mazes.maze1.matrix.length[i]
// }

// document.getElementById("maze").appendChild(div)

// let arrayOfRows = ["row1", "row2", "row3", "row4", "row5", "row6", 
//                    "row7", "row8", "row9", "row10", "row11", "row12"]

// let row1
// let row2

// let rows = []

// for (let i = 0; i < )

// var row1 = document.getElementById(arrayOfRows[0])
// var row2 = document.getElementById(arrayOfRows[1])
// var row3 = document.getElementById(arrayOfRows[2])
// var row4 = document.getElementById(arrayOfRows[3])
// var row5 = document.getElementById(arrayOfRows[4])
// var row6 = document.getElementById(arrayOfRows[5])
// var row7 = document.getElementById(arrayOfRows[6])

// for (let i = 0; i < 2; i++) {
//     arrayOfVars.push (document)
// }

// for (let rowIndex = 0; rowIndex = maze.length; rowIndex++) {
    
// }


// function addRow (rowID, amount) {
//     amount = 
// }

// function addColumns (amount) {

// }

function addColorToHTML(htmlObject, tileValue) {
    switch (tileValue) {
        // TODO me tengo que decidir si usar numeros o strings
        case e:
        case s:
        case c:
            htmlObject.style.background = 'var(--empty)';
            htmlObject.style.color = 'var(--empty)'
            break;
        case w:
            htmlObject.style.background = 'var(--walls)';
            htmlObject.style.color = 'var(--walls)'
            break;
        case p: 
            htmlObject.style.background = 'var(--wrongPath)';
            htmlObject.style.color = 'var(--wrongPath)'
            break;
        // this is the correct path, the final path
        // TODO add this number in mazeSolver.js 
        case f: 
            htmlObject.style.background = 'var(--correctPath)';
            htmlObject.style.color = 'var(--correctPath)'
            break;
        default:
            break;
    }
}

function printMazeInHTML(maze, id) {
    for (let row of maze) {
        parent = document.getElementById(id)
        rowHTML = createDiv('pure-g')
        parent.appendChild(rowHTML)
        for (column of row) {
            columnHTML = createDiv('pure-u-1-12')
            tileValue = column
            var newP = document.createElement('p')
            columnHTML.appendChild(newP)
            addColorToHTML(columnHTML, tileValue)
            rowHTML.appendChild(columnHTML)
        }
    }
}


function createDiv(className) {
    var newDiv = document.createElement("div")
    newDiv.classList.add(className)
    return newDiv
}

 printMazeInHTML(mazes.maze1.matrix, 'maze')
