/*

A “word square” is an ordered sequence of K different words of length K that, when written one word per line,
reads the same horizontally and vertically. For example:

In this exercise you're going to create a way to find word squares.

wordSquare([AREA, BALL, DEAR, LADY, LEAD, YARD]) -> [(BALL, AREA, LEAD, LADY), (LADY, AREA, DEAR, YARD)]
 */

// First, design a way to return true if a given sequence of words is a word square.
function isWordSquare(arr) {
    // count the number of words and length of words, if the same then possible to be wordSquare
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length != arr.length) {
            return false;
        } else {
            for (var j = 0; j < arr.length; j++) {
                if (arr[i][j] != arr[j][i]) {
                    return false;
                }
            }
        }
    }
    return true;
}

function createWordSquare(arr) {
    
}

console.log(isWordSquare(['AREA', 'BALL', 'DEAR', 'LADY', 'LEAD', 'YARD']));
console.log(isWordSquare(['AREA', 'BALL', 'DEAR', 'LADY']));
console.log(isWordSquare(['BALL', 'AREA', 'LEAD', 'LADY']));