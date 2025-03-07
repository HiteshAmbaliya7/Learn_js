const start=document.getElementById('start');
const stop=document.getElementById('stop');
const colorid=document.getElementById('colorid');

const randomcolor=()=>{
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i =0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color ;
}
// console.log(rendomcolor());
let intervalId;
const startChangingColor =()=>{
    let changebg=()=>{
        document.body.style.backgroundColor=randomcolor();
        colorid.innerHTML=randomcolor();
    };
    intervalId=setInterval(changebg,1000);
};
const stopChanging=()=>{
    clearInterval(intervalId);
    intervalId=null;
};
start.addEventListener('click',startChangingColor);
stop.addEventListener('click',stopChanging);
