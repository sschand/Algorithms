/*
Merge two already-sorted arrays into a new sorted array containing the multiset of all elements.
Example: Given [1, 2, 2, 7] and [2, 6, 6, 7] return [1, 2, 2, 2, 6, 6, 7, 7]
*/

function mergeSortedArrays(arr1, arr2){
    if(!(arr1 instanceof Array) || !(arr2 instanceof Array)){
        return [];
    }
    var arr3 = [];
    var i = 0; 
    var j = 0;
  
    while( i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            arr3.push(arr1[i++]);
        }else{
            arr3.push(arr2[j++]);
        } 
    }
  
    while(i < arr1.length){
        arr3.push(arr1[i++]);
    }
    while(j < arr2.length){
        arr3.push(arr2[j++]);
    }
    return arr3;
}

console.log(mergeSortedArrays([1, 2, 2, 7], [2, 6, 6, 7]));