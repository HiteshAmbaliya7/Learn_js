// arrow function
const sayhello=()=>{
    console.log("hayy hitesh");

};// also and with samycolon(;)
//arguments only use in normal function
sayhello();
const add =(a,b)=>{
    return a+b;
};
let ans=add(10,12);
console.log(ans);

const mul=(...num)=>{
    let ans=1;
    for(let i=0;i<num.length;i++)
    {
        ans=ans*num[i];
    }
    return ans;
    
}
let d=mul(10,20,12,23,45);
console.log(d);

// hoisting
//=> hoisting not avaliable in arrow function
const hayy=()=>{
    let a="hyyy";
    return a;
}

hayy();
//this key word
//this key word in arrow  function => not avaliable
const obj={
    value :20,
    myfunction:function(){
        console.log(this); // this function point to the value
    }
};
// in arrow function this key word refers window
obj.myfunction();

