import moment from 'moment';

/**
 * select the timeframe via date inputs
 * @param {*} startDate use the format MMDDYYYY 
 * @param {*} endDate use the format MMDDYYYY
 * x,y, coordinates are based on a W: 3840, H: 1600 screen
 */
export function selectTimeframeRecipe(startDate = _defaultStart().format('MMDDYYYY'), endDate = _defaultEnd()) {
    const actions = [
        {type: 'mouse', action: 'move', x: 3507, y: 178},
        {type: 'mouse', action: 'click'},
        {type: 'mouse', action: 'wait', x: 0, y: 0, value: 2000},
        {type: 'mouse', action: 'move', x: 3419, y: 480},
        {type: 'mouse', action: 'click'},
        {type: 'mouse', action: 'wait', x: 0, y: 0, value: 2000},
        {type: 'keyboard', action: 'type', value: startDate},
        {type: 'keyboard', action: 'key', value: 'tab'},
        {type: 'keyboard', action: 'type', value: endDate},
        {type: 'keyboard', action: 'key', value: 'tab'},
        {type: 'mouse', action: 'move', x: 3625, y: 682},
        {type: 'mouse', action: 'click'},
        {type: 'mouse', action: 'wait', x: 0, y: 0, value: 2000},
    ];
    return {
        actions
    };
}

export const _defaultStart = () => {
    // get last month
    const lastMonth = moment().subtract(1, 'months');
    // get the last day of the month
    let lastDay = lastMonth.endOf('month');
    
    const lastWeekday = lastDay.weekday(); // Output: 6 (Saturday) or 5 (Friday) depending on the last day

    // correct for weekends
    switch (lastWeekday) {
        case 0: // Sunday
            lastDay = lastDay.subtract(2, 'days');
            break;
        case 6: // Saturday
            lastDay = lastDay.subtract(1, 'days');
            break;
        default:
            break
    }   
    return lastDay;
}

const _defaultEnd = () => {
    const thisMonth = moment().endOf('month');
    return thisMonth.format('MMDDYYYY');
}