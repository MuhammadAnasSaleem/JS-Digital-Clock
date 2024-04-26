let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

setInterval(()=>{
    let currentTime = new Date();

hrs.innerHTML = (currentTime.getHours()<10?"0":"")  + currentTime.getHours();
if(hrs.innerHTML > 12){
    hrs.innerHTML = hrs.innerHTML - 12
}
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)