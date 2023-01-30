let timeHour = document.querySelector('#hour-hand')
let timeMinut = document.querySelector('#min-hand')
let timeSecond = document.querySelector('#second-hand')

setInterval( () => {

    const now = new Date();
    let hour = now.getHours()
    let minuts = now.getUTCMinutes()
    let seconds = now.getUTCSeconds()
    
    timeHour.innerHTML = hour + ':';
    timeMinut.innerHTML = minuts + ':';
    timeSecond.innerHTML = seconds;
    
}, 1000)

