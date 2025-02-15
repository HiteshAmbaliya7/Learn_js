
// var c=300; var is glogel scope
let a=300; 

if(true){
    let a=10;   // let and const use local or block scope 
    const b=20;
    var c=30;
    console.log("innter :",a); // this variable a  give output 10 because this a is declare in if statement and this a use block statement
    
}

console.log(a);  // this ia prints 300 because this use variable a that declare aboue if statement 
// console.log(b);
// console.log(c);   out put value will be 30 because of globle scope
//  this scopes provide programmer to write programs bug free .


function one()
{
    const user="hitesh";

    function two()
    {
        const web="youtube";
        console.log(user);
        
    }
    // console.log(web);  // don't access value 
    // twoj();
    
}
// one();

if(true)
{
    const user = "hitesh";
    if(user==="hitesh")
    {
        const web=" youtube";
        console.log(user+web);    
    }
    // console.log(web);  //don't access web here becaue of block scope    
}
// console.log(user); //don't Access user here because of block scope


// calling a function aboue hte declaretion is call Hoisting.
console.log(addOne(5));  //see the function calling is above dclarection of function ,and run successfully declarection of this type of function works 
function addOne(num)
{
    return num+1;
}
// some code you see this type of declaretion of functions :
// console.log(addTwo(5)); // this function calling above the declaretion ,it's not works because the declaretion of function and holding with a veriable .
const addTwo =function (num){
    return num+2;
}
console.log(addTwo(5));
