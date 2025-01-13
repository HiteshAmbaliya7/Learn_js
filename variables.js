// variables in javascript
//three types var ,let ,const 
// var  scope is globle -> re-assign is possiable 
//  let scope is local -> if you can choose between let or ver then you scelet let
// const scpe is local ->not avalible to re-asign a valve
// imp: production we use only const 


//DATA TYPES:
 //->numbers
 //->strings 
    //you can use single'' or duble "" cots of define value in string
    //example:
        let name="hello";
        let name1='hitesh';
        console.log(name+ ' '+name1);// use to concat(join) strings
 //->booleans
   // it represent true or false condition
   // let logedin=true;
    true=1;
    false=0;
 //->NUll
   // null is refer empty 
    let lastLogedinDate=null;
   // it use some space in memory
// ->undefine
 //   it not any  in  memory
    let lastLogedInDate=undefine;
// ->objects
   // sapert valuse by coma(,) else error
    const persion={
        fname:"hitesh",
        lname:"ambaliya",
        age:20,
        islogedIn:false
    }
        console.log(persion.firstname);
        console.log(persion.lname);
        console.log(persion.age);


//operators:
//    in javascript we can use * operator for num string convert in integer
   console.log("1"+11);
//    in this case out put will be 11
    console.log("123"+1);
    //inthis case output will be 123 in int
    //str+str=str;
    //str+num=str;
    //str*num=num;// this mins you multiplay string with num then data type will 
    console.log("a"+1);// output is NaN not a number means error 

    //typeof operator:
    console.log(typeof("123"*1));// output will number
   // means typeof operator is basically use to know the type of variable 


 
