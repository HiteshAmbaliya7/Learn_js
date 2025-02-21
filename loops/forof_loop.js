
// forof loop on array
const arr=[1,2,3,4,5];
for (const value of arr) {
    console.log(value);
    
}
// forof loop on map
const map =new Map();
map.set('IN','India');
map.set('US','United States of america');
map.set('FR','france');
console.log(map);
for (const [key,val] of map) {
    console.log(key,':-',val);
    
}
// forof loop don't work on object in below we check, this code give you an error  
const myobj={
    'game1':'NFS',
    'game2':'spyderman',
 }
 for (const {key,value} of myobj) {
    console.log(key,":-",value);  // it not works give error object is not itrable  
 }
