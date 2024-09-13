import moment from "moment";
import { previousPayWeekBtn } from "./utility-landmarks.js";

/**
 * Locates the previous pay week button and clicks it a number of times
 * @param {*} clicks defaults to 4
 * @returns list of actions
 * x,y, coordinates are based on a W: 3840, H: 1600 screen
 */
export function goToBeginningOfTimeframe(clicks = _defaultClicks()) {
    const actions = [
        {type: 'mouse', action: 'move', x: previousPayWeekBtn.x, y: previousPayWeekBtn.y},
    ];

    while(clicks--) {
        // @ts-ignore
        actions.push({type: 'mouse', action: 'click'});
        actions.push({type: 'mouse', action: 'wait', x: 0, y: 0, value: 1000});
    }

    return {
        actions
    };
}

const _defaultClicks = () => {
    const date = moment().date();
    return Math.ceil((date+2)/7);
}