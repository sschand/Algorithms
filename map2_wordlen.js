/*

Given an array of strings, return a Map<String, Integer> containing a key 
for every different string in the array, and the value is that string's length.

wordLen(["a", "bb", "a", "bb"]) → {"bb": 2, "a": 1}
wordLen(["this", "and", "that", "and"]) → {"that": 4, "and": 3, "this": 4}
wordLen(["code", "code", "code", "bug"]) → {"code": 4, "bug": 3}

 */

function wordLen(arr) {
    var mappedObj = {};

    for (var i = 0; i < arr.length; i++) {
        if ( !mappedObj[arr[i]]) {
            mappedObj[arr[i]] = arr[i].length;
        }
    }

    console.log(mappedObj);
}

wordLen(["a", "bb", "a", "bb"]);
wordLen(["this", "and", "that", "and"]);
wordLen(["code", "code", "code", "bug"]);