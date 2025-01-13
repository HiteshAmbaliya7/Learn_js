function sayhello(){
    console.log(" hitesh hello")
}
sayhello();// calling of function
sayhello();

function add(a,b){
    console.log(a+b);//arguments is a, b;
}

add(15,12);// in this ( paremeter1 ,parameter2,.........parametern)
function mul(a,b)
{
    //console.log(a*b);// bad parctic
    //instad of we writing 
    return a*b;
}
let a=mul(10,2);
console.log(a);
 unlimited
function unl(a,b)
{
    //console.log(arguments);
    let ans=0;
    for(let i=0;i<arguments.length;i=i+1){
        ans = ans+arguments[i];
    }
    return ans;
}

let result=unl(10,20,30,40,50);
console.log(result);
function spread(...num)
{
    let ans=0;
    for(let i=0;i<num.length;i++)
    {
        ans=ans+num[i];
    }
    return ans;
}
let res=spread(10,10,200,300,400);
console.log(res);
//this key word in normal function
const obj={
    value :20,
    myfunction:function(){
        console.log(this); // this function point to the value
    }
};
obj.myfunction();