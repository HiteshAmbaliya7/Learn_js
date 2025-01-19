const button=document.getElementById('button');
const input=document.getElementById('city-input');
const cityname=document.getElementById('city-name');
const citytemp=document.getElementById('city-temp');
const citytime=document.getElementById('city-time');
async function getdata(cityname){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?{inthis place give :weatherapi } &q=${cityname}&aqi=yes`);
    return await promise.json()
}
button.addEventListener('click',async()=>{
    const value=input.value;
    const result=await getdata(value);
    // console.log(result);
    cityname.innerText=`${result.location.name},${result.location.region}-${result.location.country}`
    citytime.innerText=result.location.localtime;
    citytemp.innerText=result.current.temp_c;
});
