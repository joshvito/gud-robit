/**
 * the timecard has n rows and n columns, defaults to whay I need;
 * @param {*} rows number of rows to fill in the timecard
 * @param {*} columns number of columns to fill in the timecard
 * @returns 
 */
export function inputTimeRecipe(rows = 2, columns = 7) {
    const startX = 2322;
    const startY = 509;

    
    
    const actions = [
        {type: 'mouse', action: 'move', x: startX, y: startY},
        {type: 'mouse', action: 'click'}
    ];

    return {
        actions
    };
}