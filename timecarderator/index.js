import open from 'open';
import robotjs from 'robotjs';
import { runRecipe } from './run-recipe.js';
import { monitorMousePosition } from './utility-monitor.js';
import { openTimecardRecipe } from './recipe-open-timecard.js';
import { selectTimeframeRecipe } from './recipe-select-time.js';
import { goToBeginningOfTimeframe } from './recipe-payperiods.js';

const __default_mouse_delay = 768;
const __default_keyboard_delay = 768;
const __debug_mode = false;

const openUrlSnapRight = async (/** @type {string} */ url, debug = false) => {
    await open(url, {wait: true});
    robotjs.setKeyboardDelay(__default_keyboard_delay);
    robotjs.setMouseDelay(__default_mouse_delay);
    robotjs.keyTap('right', 'command');
    robotjs.keyTap('escape');

    if (debug) {
        const screenSize = robotjs.getScreenSize();
        console.info(`W: ${screenSize.width}, H: ${screenSize.height}`);
        monitorMousePosition();
    }
}

let recipe = [
    ...openTimecardRecipe().actions,
    ...selectTimeframeRecipe().actions,
    ...goToBeginningOfTimeframe().actions
];

await openUrlSnapRight('https://e23.ultipro.com/default.aspx', __debug_mode);
await runRecipe(recipe, __debug_mode, __default_mouse_delay);