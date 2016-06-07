function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            var temp = arr[i];
            var j = i - 1;
            
            while(arr[j] > temp && j >=0){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = temp;
        }
    }
    return arr;
}

console.log(insertionSort([3,5,2,9,7]));