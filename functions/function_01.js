function addTwoNumer(number1,number2){
    // let result =number1+number2; // consolelog don,t return data we write seperet return declare seperat variable for it
    let result= number1+number2;
    // return number1+number2 // we can also do this to save memory space
    return;
    console.log("hii hitesh"); // this code is not rechable function will exicute code that write above return key word.

}
let a =addTwoNumer(12,5);
// console.log(a);


function userLogin(user){
    if(user===undefined){
        console.log("Plese Enter Value");
        return ;    
    }
    return `${user } is Just Logedin.`;
    
}
//userLogin("hitesh"); // run this function console output nothing. because of return keyword and we not declareany consolelog in function.
console.log(userLogin());
//if you don't give any argument in function then function give undefine return valve
// we also define if else condition to check value is not undefine 
// wealso define default value for the function that use when Argument not given.
