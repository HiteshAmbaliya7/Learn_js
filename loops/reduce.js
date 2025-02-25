const myNums=[1,2,3,4];
// const newNums=myNums.reduce((acc,currval)=>{
//     console.log(`acc:${acc} , currentval ${currval}`);
//     return acc+currval;
    
// },0)
const newNums=myNums.reduce((acc,currval)=>acc+currval,0)
    // console.log(`acc:${acc} , currentval ${currval}`);
 
// console.log(newNums);

const shopigCart =[
    {
        itemName:"js",
        price :199
    },
    {
        itemName:"py",
        price :299
    },{
        itemName:"data scince",
        price :599
    },{
        itemName:"java",
        price :99
    },{
        itemName:"js",
        price :20000
    },
]


const pricePay=shopigCart.reduce((acc,item)=>(acc+item.price),0)
console.log(pricePay);

