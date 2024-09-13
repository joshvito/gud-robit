/**
 * click the workforce management button in ukg and then open my timecard
 * x,y, coordinates are based on a W: 3840, H: 1600 screen
 */
export function openTimecardRecipe() {
    const actions = [
        {type: 'mouse', action: 'move', x: 2018, y: 450},
        {type: 'mouse', action: 'click'},
        {type: 'mouse', action: 'wait', x: 0, y: 0, value: 8000},
        {type: 'mouse', action: 'move', x: 2624, y: 316},
        {type: 'mouse', action: 'click'},
        {type: 'mouse', action: 'wait', x: 0, y: 0, value: 2000},
    ];
    return {
        actions
    };
}