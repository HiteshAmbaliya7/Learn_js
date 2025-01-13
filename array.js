const a =[1,2,3,4,5];
a.push("hitesh");//push method aad values in arry in last position
a.push("rakesh");
a.reverse();// reverse method is use to reverse the array.
a.pop();// pop method is use to remove last value of array .
// in javascript arry we add different type of data type values that other language in not support.
console.log(a);
// for (let i=0;i<=a.length-1;i++){
//     console.log(a[i]);
//     document.writeln(a[i]);
// }
console.log(a.indexOf("hitesh"));// indexof methon or function use to know given vales possition in arry.



//high order funnctions:
const students=['hitesh','pratik','maulik','jayesh','dilip'];
function print(n){
    console.log(n);
}
// students.forEach(print);
// students.forEach((val)=>{console.log(val)});//arrow function.
// students.map((val)=>console.log(val));

let num =[1,2,3,4,5,6,7,8,9,10];
// num.forEach((n)=>console.log(n*2));// foreach is not return any thing thats way we not perform tast on new array. and chane on present array
// num.map((n)=>console.log(n*2));// return new array.dont change original array
let ans= num.find((num)=>num===4);
console.log(ans);// use to find the particular valve.
// console.log(num.includes(3)); //that use to check the value is present or not in array.
const newarr=num.filter((num)=>num%2==0);
console.log(newarr);
let arr=num.slice(1,6);// slice use to slice (part) to the pirticular arry.
console.log(arr);
const ar=num.splice(1,4);// use to dilit pirtecular elements in array it take two arguments(starting index,delet num of elements).
console.log(ar);