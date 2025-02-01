const button = document.getElementById("stop_btn");

function show_time() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  // console.log(time);
  document.getElementById("time").innerText = time;
}
// show_time();
let intervel = setInterval(show_time, 1000);
button.addEventListener("click", () => {
  clearInterval(intervel);
});
// setintervel is the method that can call function repetedly in given time (millisecon) intervel. It continuos calling function until clearintervel() function calling or window close.