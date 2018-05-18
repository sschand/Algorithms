/*
Consider the leftmost and righmost appearances of some value in an array.
We'll say that the "span" is the number of elements between the two inclusive.
A single value has a span of 1. Returns the largest span found in the given array.
(Efficiency is not a priority.)

maxSpan([1, 2, 1, 1, 3]) → 4
maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6
 */

function maxSpan(arr) {
    var valIndexMap = [];

    for (var i = 0; i < arr.length; i++) {
        if (checkKeyInArr(arr[i], valIndexMap)) {
            valIndexMap[arr[i]].push(i);
        } else {
            valIndexMap[arr[i]] = [i];
        }
    }
    
    console.log(findNumberAndLowHighIndexes(valIndexMap, arr));
}

function checkKeyInArr(key, arr) {
    return (arr[key]) ? true : false;
}

function findNumberAndLowHighIndexes(valIndexMap, arr) {
    var currentMaxArr = [];
    var maxCount = 0;

    for (var k in valIndexMap) {
        var count = 0;

        for (var min = valIndexMap[k][0]; min <= valIndexMap[k][valIndexMap[k].length -1]; min++) {
            count++;
        
            if (count > maxCount) {
                maxCount = count;
            }
        }
    }
    return maxCount;
}

maxSpan([1, 2, 1, 1, 3]);
maxSpan([1, 4, 2, 1, 4, 1, 4]);
maxSpan([1, 4, 2, 1, 4, 4, 4]);