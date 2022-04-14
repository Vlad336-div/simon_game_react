const red = require("./assets/sounds/red.mp3");
const blue = require("./assets/sounds/blue.mp3");
const yellow = require("./assets/sounds/yellow.mp3");
const green = require("./assets/sounds/green.mp3");

const playSound = (color: color) => {
    const audio = new Audio();
    switch(color) {
        case 'red':
            audio.src = red;
            break;
        case 'blue':
            audio.src = blue;
            break;
        case 'yellow':
            audio.src = yellow;
            break;
        case 'green':
            audio.src = green;
            break;
        default:
            audio.src = green;
            break;
    }
    audio.autoplay = true;
}

export {playSound}