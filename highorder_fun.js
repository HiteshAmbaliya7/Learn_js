    //high order function is accepts function as a arguments like follwing:
    function add (a,b,cb){
        return a+b;
        cb(result);
    }
    // add(2,4 ,function(val){
    //     console.log(val);
    // });
    // function returnfun(result){
    //     console.log(result);

    // }

add(2,4,(val)=>console.log(val));
console.log("hi hitesh");
//high order function is call back function;