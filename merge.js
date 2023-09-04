/**merge
Given two sorted arrays, write a function called merge which accepts two sorted arrays and returns a new array with values 
from both arrays sorted.

This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
Also, do not use the built-in .sort() method! We’re going to use this function to implement a sort, 
so the helper itself shouldn’t depend on a sort.

let arr1 = [1,3,4,5];
let arr2 = [2,4,6,8];
merge(arr1,arr2) // [1,2,3,4,4,5,6,8]

arr1 // [1,3,4,5];
arr2 // [2,4,6,8];

let arr3 = [-2,-1,0,4,5,6];
let arr4 = [-3,-2,-1,2,3,5,7,8];

merge(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

let arr5 = [3,4,5]
let arr6 = [1,2]

merge(arr5,arr6) // [1,2,3,4,5] */


function merge(arr1,arr2) {//it accepts two sorted arrays arr1 and arr2
    const results =[];     //create an empty OUT array to store the result
    let i = 0;             //create a pointer for arr1
    let j = 0;            //create a pointer for arr2

    while(i < arr1.length && j< arr2.length){          //loop through the array until the pointer reaches the end of the array
        if(arr1[i] < arr2[j]){             //if the element in the first array is smaller than the element in the second array 
            results.push(arr1[i]);          //push the element in the first array to the OUT array
            i++; //increment the pointer for the first array
        } else { //if the element in the second array is smaller than the element in the first array
            results.push(arr2[j]);//push the element in the second array to the OUT array
            j++;//increment the pointer for the second array
        }
    }
    //When the pointer of one of the arrays reaches the end of the array, the rest of the second array will remain and will not be added
    //to OUT array. So we need to add the rest of the second array to the OUT array(and the first)
    while(i<arr1.length){ //if the pointer for the first array is less than the length of the first array
        results.push(arr1[i]); //push the element in the first array to the OUT array
        i++; //increment the pointer for the first array
    }
    while(j< arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results; //return the OUT array

}

/**Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array.
 *  Here’s some guidance for how merge sort should work:
Break up the array into halves until you can compare one value with another
Once you have smaller sorted arrays, merge those with other sorted pairs until you are back at the full length of the array
Once the array is merged back together, return the merged (and sorted!) array
In order to implement this function, you’ll also need to implement a merge function that takes in 
two sorted arrays and returns a new sorted array. You implemented this function in the previous exercise, so use that function!
let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35,
                 //  43, 67, 75, 232, 232, 453, 546, 4342] */
function mergeSort(arr) {//it accepts an array
    //base-case:when we have an array length of 0 or 1
    if ( arr.length <=1 ) return arr;
    //or not: then we need to split the array into two halves. For that, I need a midpoint
    const midPoint = Math.floor( arr.length/2 ); //i needed math. floor because the midpoint is not always a whole number
    //Now I'll split it into two arrays as left and right
    //then I'll mergeSort them
    const left = mergeSort(arr.slice(0,midPoint)); //slice the array from the beginning to the mid point
    const right = mergeSort(arr.slice(midPoint)); //slice the array from the midpoint to the end

//Then at the end I need to merge left and right by using the merge function above
    return merge(left,right);//return the merged array
}

module.exports = { merge, mergeSort};
