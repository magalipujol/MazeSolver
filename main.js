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


// TODO print maze should only print the maze, not create it
// printMazeInHTML should be addMazeToHTML or createMaze
// and I should add another function that prints the maze

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

//  const printMazeInLoop = setInterval(() => {
//    //this doesn't work
//     document.getElementById('iframeid').src = document.getElementById('iframeid').src
//     // printMazeInHTML(mazes.maze1.matrix, 'maze')
//     console.log("jeje")
//  }, 1000);

//  setTimeout(() => clearInterval(printMazeInLoop), 4000)
