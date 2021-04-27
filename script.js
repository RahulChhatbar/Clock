var hidden = false;
function display24time() {
    function tfh(){
        var date = new Date();
        var hrs = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var ms = date.getMilliseconds();
        if (hrs < 10){
            hrs = '0' + hrs;
        }
        if (min < 10){
            min = "0" + min;
        }
        if (sec < 10){
            sec = '0' + sec;
        }
        if (ms < 10){
            ms = '00' + ms;
        }
        var fullTime = hrs + ":" + min + ":" + sec + ":" + ms;
        
        document.getElementById("24clock").innerText = fullTime;
        document.getElementById("24clock").textContent = fullTime;
        document.getElementById("24clock").style.padding = '50px';
        document.getElementById("12clock").style.visibility = 'hidden';
        document.getElementById("12clock").style.position = 'absolute';
        document.getElementById("reload").style.visibility = 'visible';
        // document.getElementById("12clock").onclick = function revertt(){
        //     document.getElementById("24clock").innerHTML = '<button class="button" onclick="display24time()">24-hour Format</button>'
        // }
        // revertt();
        setTimeout(display24time, 1)
}
tfh();
}


function display12time() {
    function ttfh(){
        var date = new Date();
        var hrs = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var ms = date.getMilliseconds();
        var ap = "AM"
        if (hrs >= 12){
            hrs = hrs - 12;
            ap = "PM";
        }
        if (hrs == 0){
            hrs = 12;
        }
        if (hrs < 10){
            hrs = '0' + hrs;
        }
        if (min < 10){
            min = "0" + min;
        }
        if (sec < 10){
            sec = '0' + sec;
        }
        if (ms < 10){
            ms = '00' + ms;
        }
        var fullTime = hrs + ":" + min + ":" + sec + ":" + ms + " " + ap;
        
        document.getElementById("12clock").innerText = fullTime;
        document.getElementById("12clock").textContent = fullTime;
        document.getElementById("12clock").style.padding = '50px';
        document.getElementById("24clock").style.visibility = 'hidden';
        document.getElementById("24clock").style.position = 'absolute';
        document.getElementById("reload").style.visibility = 'visible';
        // document.getElementById("24clock").onclick = function revertw(){
        //     document.getElementById("12clock").innerHTML = '<button class="button" onclick="display12time()">12-hour Format</button>'
        // }
        // revertt();
        setTimeout(display12time, 1)
}
ttfh();
}

setInterval(setClock, 1)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
