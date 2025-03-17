// function that get Array and return all Elements in the even place of the array
// input: [1,2,3,4,5,6,7,8,9,10]
// output: [2,4,6,8,10]

function evenPlace(arr) {
    return arr.filter((el, index) => index % 2 == 0);

}

console.log(evenPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2,4,6,8,10]

//function that get object and return all Elements in the even place of the object

function evenPlaceObj(obj) {
    return Object.entries(obj).filter((el, index) => index % 2 == 0);
}

console.log(evenPlaceObj({ a: 1, b: 2, c: 3, d: 4, e: 5 })); // [ [ 'b', 2 ], [ 'd', 4 ] ]