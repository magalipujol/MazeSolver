let e = "entrada"
let s = "salida"
let w = "wall"
let c = 'corridor'
let p = 'path'
let f = 'final path'


// TODO add mazes
let mazes = {
    // this maze doesn't have any loops or dead ends
    maze1: {
        matrix:
            [[w, w, w, w, w, w, w],
             [e, c, w, c, c, c, w],
             [w, c, w, c, w, c, w],
             [w, c, c, c, c, c, w],
             [w, w, w, c, w, c, w],
             [w, c, c, c, w, c, s],
             [w, w, w, w, w, w, w]],
        startRow: 1,
        startColumn: 0,
        endRow: 5,
        endColumn: 6 
    },
    // this maze has one dead end
    maze2: {
        matrix: [[w, w, w, w, w, w, w],
                 [e, c, w, c, c, c, w],
                 [w, c, w, c, w, c, w],
                 [w, c, c, c, w, c, w],
                 [w, w, w, c, w, c, w],
                 [w, c, c, c, w, c, s],
                 [w, w, w, w, w, w, w]],
        startRow: 1,
        startColumn: 0,
        endRow: 5,
        endColumn: 6 
    }
}

