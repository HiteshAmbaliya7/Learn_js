function calculateCartPrice(num1){
    return num1;
}
// console.log(calculateCartPrice(2));  // this case function runs fine 
// console.log(calculateCartPrice(200,100,50));   //but this case multiple arguments but function tack onlys first argument because aboue this function we define only one perameter.


// to avoid this type of situation we use spread oprator
// case 1
function calculateCartPrice(...num){
    return num;
}
// console.log(calculateCartPrice(12,13,14,15,16)); // this will return array of given arguments 
// case 2
function calculatevals(val1,val2,...vals){
    return vals;
}
// console.log(calculatevals(12,23,14,15,16,18)); //this will give arry of given arguments but skips first two values because of function define 2 perameter then use spread operator 

// object passing in function 

const user ={
    uname:"hitesh",
    price:199,

}
// case 1 :
function handleObject1(user){
    console.log(` User Name ${user.uname} and Price is ${user.price}`);
    
}
// accept we use passing perameter "anyobject" 
// case 2:
function handleobject2(anyobject){
    console.log(`user name is ${anyobject.uname} and price is ${anyobject.price}`);   
}
// handleobject2(user);
handleobject2({
    uname:"jayesh",
    price:200,
});
// function that accepts array as perameter
const array =[ 200,400,100,600];
function Returnsecond(getarray)
{
    return getarray[1];
}
// console.log(Returnsecond(array));
//  we can call this function like this
console.log(Returnsecond([200,100,500,600])); 

