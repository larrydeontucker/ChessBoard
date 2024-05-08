/*
 * Chessboard
 * 
 * An 8 by 8 grid using spaces, hastags, and newline characters. 
 * 
 */
let size = 8;
let chessBoard = "";

for(let x = 0; x < size ; x++) {
    for(let y = 0; y < size; y++) {
        if((x + y) % 2) {
            chessBoard += "_";
        } else {
            chessBoard += "#"; 
        }
    }
    chessBoard += "\n";
}

console.log(chessBoard);