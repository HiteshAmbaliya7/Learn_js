const user={
    userName :"hitesh",
    price:999,


    welcomeMassage:function(){
        console.log(`${this.userName},Welocle to the Website`);
        // this is using to refer current context
        console.log(this);
        
        
    }

}
user.welcomeMassage();
user.userName="jatin";
user.welcomeMassage();
// in node environment this refers empty objects.
// in the browser this will refers to the window.because in past times javascript only runs in browser and globel object in browser refers to window."some times asks in interviews"

console.log(this);
function one(){
    let usernae="hitesh";
    console.log(this.userName);
    // above console.log return undefine value 
    
}
one();
const one =()=>{
    userName="hitesh ambaliya";
    console.log(this.userName);//this statement give undifine
    console.log(this);// this statement give empty object
    
    
};
one();
const add=(num1,num2)=>{
    return num1+num2
}
const add=(num1,num2)=>num1+num2
const add=(num1,num2)=>(num1+num2)
console.log(add(3,4));
const objreturn=()=>({username:"hitesh"})
console.log(objreturn());
