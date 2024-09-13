import robotjs from 'robotjs';
import { logAction } from './utility-monitor.js';

export async function runRecipe(recipe, debug = false, default_delay = 768) {
    for (let action of recipe) {
        switch (action.type + action.action) {
            case 'mousemove':
                robotjs.moveMouse(action.x, action.y);
                logAction(action, debug);
                break;
            case 'mouseclick':
                robotjs.mouseClick();
                logAction(action, debug);
                break;    
            case 'keyboardtype':
                robotjs.typeString(action.value);
                logAction(action, debug);
                break;
            case 'keyboardkey':
                robotjs.keyTap(action.value);
                logAction(action, debug);
                break;
            case 'mousewait':
                robotjs.setMouseDelay(action.value);
                robotjs.moveMouse(action.x, action.y);
                robotjs.setMouseDelay(default_delay);
                logAction(action, debug);
                break;
        }
    }

}