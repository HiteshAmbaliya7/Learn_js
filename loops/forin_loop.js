//  forin loop in object
const myobject={
    js : 'javascript',
    cpp : 'C++',
    py : 'python',
    php :'php',
    C : 'c language',
 }
 for (const key in myobject) {
    console.log(key); // it prints keys of this given object
    console.log(myobject[key]);  // it prints the value of given keys
    console.log(`${key} sortcut for ${myobject[key]} `); // this print key and value toughter
}

// forin loop in array
const programming =['js','rb','py','java','cpp'];

for (const key in programming) {
    console.log(programming[key]);       
}