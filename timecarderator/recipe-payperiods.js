import moment from "moment";
import { previousPayWeekBtn } from "./utility-landmarks.js";
import { _defaultStart } from "./recipe-select-time.js";

/**
 * Locates the previous pay week button and clicks it a number of times
 * @param {*} clicks defaults to 4
 * @returns list of actions
 * x,y, coordinates are based on a W: 3840, H: 1600 screen
 */
export function goToBeginningRecipe(clicks = _defaultClicks()) {
    const actions = [
        {type: 'mouse', action: 'move', x: previousPayWeekBtn.x, y: previousPayWeekBtn.y},
    ];

    while(clicks--) {
        // @ts-ignore
        actions.push({type: 'mouse', action: 'click', description: 'clicking previous pay week'});
        actions.push({type: 'mouse', action: 'wait', x: 1, y: 1, value: 1024});
        actions.push({type: 'mouse', action: 'move', x: previousPayWeekBtn.x, y: previousPayWeekBtn.y})
    }

    return {
        actions
    };
}

const _defaultClicks = () => {
    const startDate = _defaultStart();
    const numOfWeeks = moment().diff(startDate, 'weeks', true);
    return Math.ceil(numOfWeeks);
}