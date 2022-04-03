// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const hi = new Audio('sounds/hi-hat.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const snare = new Audio('sounds/snare-drum.mp3');

let Metronome = document.querySelector("#metronome");
let counter = document.querySelector("#count");
let kickDrum = document.querySelector("#kick-drum");
let snareDrum = document.querySelector("#snare-drum");
let hiHat = document.querySelector("#hi-hat");

// This function is called every 600ms
let count = 1

function update() { 
count ++
if (Metronome.checked === true)
if (count % 4 === 0){
    tock.play()
}else{
    tick.play()
}counter.innerText = count;
if (count >= 4){
    count = 0;
}
else if (kickDrum.checked === true){
    kick.play()
counter.innerText = count;
if (count >= 4){
    count = 0;
}}
else if (snareDrum.checked === true)
{
    snare.play()
counter.innerText = count;
if (count >= 4){
    count = 0;
}}
else if (hiHat.checked === true){
    hi.play();
counter.innerText = count;
if (count >= 4){
    count = 0;
}
}

}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
