// index.js
import state from './state.js';
import * as events from './events.js';
import * as timer from './timer.js';
import * as actions from './actions.js';

export function start(minutes, seconds) {
    state.minutes = minutes;
    state.seconds = seconds;

    timer.updateDisplay();

    events.registerControls();
    events.setMinutes();
}

document.querySelector('[data-action="addFiveMinutes"]').addEventListener('click', actions.addFiveMinutes);
document.querySelector('[data-action="minusFiveMinutes"]').addEventListener('click', actions.minusFiveMinutes);
