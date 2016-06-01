/*
Combine two already-sorted arrays into a new sorted containing the multiset union. Example: Given [1, 2, 2, 7]
and [2, 6, 6, 7] return [1, 2, 2, 6, 6, 7]
*/

function unionSortedArrays(arr1, arr2){
	if(!(arr1 instanceof Array) || !(arr2 instanceof Array)){
        return [];
    }
    var arr3 = [];
    var i = 0; 
    var j = 0;
  
    while( i < arr1.length || j < arr2.length){
        if(j == arr2.length){
            arr3.push(arr1[i++]);            
        } else if(i == arr1.length || arr2[j] < arr1[i]){
            arr3.push(arr2[j++]);
        } else {
            if(arr1[i] === arr2[j]){
                j++;
            }
            arr3.push(arr1[i++]);
        }
    }
    return arr3;
}


console.log(unionSortedArrays([1, 2, 2, 7], [2, 6, 6, 7]));