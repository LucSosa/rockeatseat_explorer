// actions.js
import state from './state.js';
import * as timer from './timer.js';
import * as el from './elements.js';
import * as sounds from './sounds.js';

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');

    timer.countdown();
    sounds.buttonPressAudio.play();
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
    sounds.buttonPressAudio.play();
}

export function set() {
    el.minutes.setAttribute('contenteditable', true);
    el.minutes.focus();
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on');

    if (state.isMute) {
        sounds.bgAudio.play();
        return;
    }

    sounds.bgAudio.pause();
}

export function addFiveMinutes() {
    const currentMinutes = Number(el.minutes.textContent);
    const newMinutes = currentMinutes + 2.5;
    el.minutes.textContent = String(newMinutes).padStart(2, '0');
    timer.updateDisplay(newMinutes, state.seconds);
}

export function minusFiveMinutes() {
    const currentMinutes = Number(el.minutes.textContent);
    const newMinutes = currentMinutes - 2.5;
    el.minutes.textContent = String(newMinutes).padStart(2, '0');
    timer.updateDisplay(newMinutes, state.seconds);
}

