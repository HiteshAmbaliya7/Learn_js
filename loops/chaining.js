const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums=myNums
                    .map((num)=>{ return num+1})
                    .map((num)=>{return num *10})
                    .filter((num)=>{return num >=40})

console.log(newNums);
/*
in above code use multipale function .
step:1 - create new array (const newNums)
        step:1 - map(return num +1)
        step:2 - map(return num*10)
        step:3 - filter(return num>=40 values)
step:2 - assign retun values in new array(const newNums) 
step:3 - console log the new array(console.log(newanums))

*/
