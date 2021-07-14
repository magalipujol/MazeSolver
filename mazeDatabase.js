let e = "entrada"
let s = "salida"


// TODO add mazes
let mazes = { 
                // this maze doesn't have any loops or dead ends
                maze1: {
                    matrix: [[1, 1, 1, 1, 1, 1, 1],
                             [e, 0, 1, 0, 0, 0, 1],
                             [1, 0, 1, 0, 1, 0, 1],
                             [1, 0, 0, 0, 0, 0, 1],
                             [1, 1, 1, 0, 1, 0, 1],
                             [1, 0, 0, 0, 1, 0, s],
                             [1, 1, 1, 1, 1, 1, 1]],
                    starRow: 1,
                    startColumn: 0
                },
                // this maze has one dead end
                maze2: {
                    matrix: [[1, 1, 1, 1, 1, 1, 1],
                             [e, 0, 1, 0, 0, 0, 1],
                             [1, 0, 1, 0, 1, 0, 1],
                             [1, 0, 0, 0, 1, 0, 1],
                             [1, 1, 1, 0, 1, 0, 1],
                             [1, 0, 0, 0, 1, 0, s],
                             [1, 1, 1, 1, 1, 1, 1]],
                    starRow: 1,
                    startColumn: 0
                }
}

