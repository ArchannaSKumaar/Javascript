const array = ['1', '2', '3', '4', '5', '6', '7'];
console.log(` Length of array ${array.length}`);

// a. Remove number "6" from the array and console the length of the array
array.slice(5, 1);
console.log(` Length of array ${array.splice(5, 1)} \n`);

// b. Convert all the items of the array to data type number and console each items data type,
//  use any of the array iteration methods provided by JS for iteration.
const numarray = array.map(Number);
console.log(typeof numarray);
// c. Remove last three items of the array, use JS provided array method,then console the array
// and then add "one" and "two"  temps) to the beginning of the array and console the array.
const lastarray = array.splice(0, 3);
console.log(lastarray);
array.unshift('one', 'two');
console.log(array);
// d. Using any one of the array iteration methods console the temp concatenation of all items
// of the array and also console the sum of all the items ( convert to integer before calculating)
const Array1 = [1, 2, 3, 4];
const Array2 = [5, 6, 7, 8];
const Array3 = Array1.concat(Array2);
console.log(Array3);
for (let i = 0; i < Array3.length; i + 1) {
  const j = Array3[i] + Array3[i + 1];
  console.log(j);
}

// e. Filter out item "3" from the array and console the array (use any array method)
const arr = [1, 2, 3, 4, 5, 6, 7];
const newArray = arr.filter((item) => item !== 3);
console.log(newArray);
// f.Iterate the array and console the item, when item is either "3", "6" or "7"
const arry1 = [1, 2, 3, 7, 5, 6, 8];
arry1.forEach((item) => {
  if (item === 3 || item === 6 || item === 7) {
    console.log(item);
  }
});

// g. [1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and console
// only if both items of the array have same data type. (Compare each item of this array
// with each item of the other array)
const Arraynew = [1, 2, '3', 4, 5, 6, '7'];
arry1.forEach((item1) => {
  Arraynew.forEach((item2) => {
    if (typeof item1 === typeof item2) {
      console.log(`${item2}`);
    }
  });
});
// h. [0,2,3,7,5,6,8] iterate the array and multiply each item by its index value and console
//  the result only if result is greater than 40.
const ar = ['0', '2', '3', '7', '5', '6', '8'];
ar.forEach((item, index) => {
  const result = item * index;
  if (result > 40) {
    console.log(`index = ${index}`);
  }
});
// i. Create two arrays with five items each and merge the array into a
// single array and then console it.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
console.log(array1.concat(array2));

// pattern printing
let temp = '';
for (let i = 1; i <= 5; i + 1) {
  for (let j = 1; j <= 5 - i; j + 1) {
    temp += ' ';
  }
  for (let k = 0; k < i; k + 1) {
    temp += ' *';
  }
  temp += '\n';
}
console.log(temp);