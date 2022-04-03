// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const hi = new Audio('sounds/hi-hat.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const snare = new Audio('sounds/snare-drum.mp3');

let Metronome = document.querySelector("#metronome")
// This function is called every 600ms
let count = 1

function update() { 
count ++
if (Metronome.checked === true)
if (count % 4 === 0){
    tock.play()
}else{
    tick.play()
}


}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
