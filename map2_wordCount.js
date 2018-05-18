/**

The classic word-count algorithm: given an array of strings, return a Map<String, Integer>
with a key for each different string, with the value the number of times that string appears in the array.


wordCount(["a", "b", "a", "c", "b"]) → {"a": 2, "b": 2, "c": 1}
wordCount(["c", "b", "a"]) → {"a": 1, "b": 1, "c": 1}
wordCount(["c", "c", "c", "c"]) → {"c": 4}
 */

function wordCount(arr) {
    var mapped = {};

    for (var i = 0; i < arr.length; i++ ) {
        if ( !mapped[arr[i]]) {
            mapped[arr[i]] = 1;
        } else {
            mapped[arr[i]] = ++mapped[arr[i]];
        }
    }

    console.log(mapped);
}

wordCount(["a", "b", "a", "c", "b"]);
wordCount(["c", "b", "a"]);
wordCount(["c", "c", "c", "c"]);