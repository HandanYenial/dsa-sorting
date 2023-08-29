/**Implement a function called bubbleSort. Given an array, bubbleSort will sort the values
 *  in the array.

Bubble sort is an O(n^2) algorithm. 
It works by starting at the beginning of an unsorted array and 
'bubbling up' unsorted values towards the end, iterating through the 
array until it is completely sorted. It does this by comparing adjacent
items and swapping them if they are out of order. The method continues 
looping through the array until no swaps occur at which point the array
is sorted.

bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
bubbleSort([1, 2, 3]); // [1, 2, 3]
bubbleSort([]);

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
    23, 2, 453, 546, 75, 67, 4342, 32
];

bubbleSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67,
                  // 75, 232, 232, 453, 546, 4342] */



function bubbleSort(arr) {
   
    for(let i=0; i < arr.length; i++){ //loop through the array
        let swapped = false; //check if the array is swapped
        for (let j=0; j<arr.length-i; j++){
          

            if(arr[j] > arr[j+1]){ //check if the current element is greater than the next element
                let temp = arr[j]; //let temporary variable to store the current element
                arr[j] = arr[j+1]; //swap the current element with the next element
                arr[j+1] = temp; //swap the next element with the current element
                swapped = true; //set the swapped to true
            }
        }
        if(!swapped) break; //if the array is not swapped, break the loop}
    }
    return arr;
}

module.exports = bubbleSort;
