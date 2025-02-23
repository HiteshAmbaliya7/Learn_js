// simple syntax of forEach loop :
// Array.forEach(callback(Element,indexed,array)
// {
//     do operatin with any arguments;
//     example console.log(Element,indexedDB,array);
    
// });



const coding = ["java","python","ruby","php","javascript","cpp"];

// simple function
coding.forEach(function (val){
    console.log(val);
})

// arrow function
coding.forEach((val)=>{
    console.log(val);
    
})
function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe); //only give reference not Execute
// coding.forEach(printMe()) // NOt do like This

// also access index and hole array:
coding.forEach((item,index,coding)=>{
    console.log(item,index,coding);
    
})
const Coding=[
    {
        languageNeme : "javaScript",
        languageafileName : "js"
    },
    {
        languageNeme : "java",
        languageafileName : "java"
    },
    {
        languageNeme : "python",
        languageafileName : "py"
    }
];
Coding.forEach((item) =>{
    console.log(item.languageafileName);
    
})


// in foreach loop if caheck any condition :
const myNums= [1,2,3,4,5,6,7,8,9];
const newNums =[];          // this is extra array to store values 

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num);
    }
})
console.log(newNums);  // insted of using this we use filter method to esay to code and easy to understand . 


