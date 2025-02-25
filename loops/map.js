const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
const newNums = myNums.map((num) => {
  return num + 10;
});
console.log(newNums);
/*  

map function is also like forloop .it apply each element of original array.

syntex of map() function in array : arr.map((element, index, array) => {" return code "});
it create new array that's why it dosent effect on original array.(don't change original array)
also use chaining on this .

*/

