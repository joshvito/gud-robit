// 1. go to https://blackboardinc-sso.prd.mykronos.com/timekeeping#/myTimecard?ctxt=myTimecard

//// 1.a jquery trigger with built in delay
const triggerWithDelay = ([selector, action, value], index, array) => {
    const _delay = 500;
    const performAction = () => {
        if (action === 'click') {
            $(selector).trigger('click');
        } else if (action === 'prop') {
            $(selector).prop('value', value);
        }
        const newIndex = index + 1;
        if (newIndex < array.length) {
            setTimeout(() => triggerWithDelay(array[newIndex], newIndex, array), _delay);
        }
    };
    setTimeout(performAction, _delay);
};


// 2. select a pay period, depends on when you are entering your time. 
const selectMonthToDate = () => {
    const actions = [
        ['button[title="Select Timeframe"]', 'click', ''],
        ['li[title="Month to Date"]', 'click', ''],
    ];
    triggerWithDelay(actions[0], 0, actions);
}

const selectPrevPayPeriod = () => {
    const actions = [
        ['button[title="Select Timeframe"]', 'click', ''],
        ['li[title="Previous Pay Period"]', 'click', ''],
    ];
    triggerWithDelay(actions[0], 0, actions);
}
const selectCurrentPayPeriod = () => {
    const actions = [
        ['button[title="Select Timeframe"]', 'click', ''],
        ['li[title="Current Pay Period"]', 'click', ''],
    ];
    triggerWithDelay(actions[0], 0, actions);
}

// 3. go to the start of the pay period
const repeatClickBtn = ($btn, isDisabled, limit) => {
    $btn.trigger('click');
    if (!isDisabled || limit > 5) {
        setTimeout(() => {
            isDisabled = getDisabled($btn);
            limit++;
            repeatClickBtn($btn, isDisabled, limit);
        }, 750);
    }
}

const getDisabled = ($btn) => {
    return $btn.prop('disabled') || false;;
}

const goToPeriodStart = () => {
    const $previousButton = $('button[aria-label="Previous Pay Week"]');
    let prevDisabled = getDisabled($previousButton);
    let i = 0;
    repeatClickBtn($previousButton, prevDisabled, i);
}


// 4. add activities

const addActivity = () => {
    const actions = [
        // Engage-FY25Q1-cx/Documentation
        ['button[aria-label="Add Activity"]', 'click', ''],
        // ['#activitySearchInput', 'prop', 'Engage*'],
        ['button[type="submit"],button[title="Search]', 'click', ''],
        ['#hierarchical-search-list-item-9 > div.list-item-actions > button.btn.btn-link.icon-k-caret-right', 'click', ''],
        ['#hierarchical-search-list-item-3 > div.list-item-body > div.list-item-body-selector__wrapper > div', 'click', ''],
        ['#activitySelectApply', 'click', ''],
        // Engage-FY25Q1-cx/Maintenance
        ['button[aria-label="Add Activity"]', 'click', ''],
        ['button[type="submit"],button[title="Search]', 'click', ''],
        ['#hierarchical-search-list-item-9 > div.list-item-actions > button.btn.btn-link.icon-k-caret-right', 'click', ''],
        ['#hierarchical-search-list-item-4 > div.list-item-body > div.list-item-body-selector__wrapper > div', 'click', ''],
        ['#activitySelectApply', 'click', ''],
        // Engage-FY25Q1-Design and Development
        ['button[aria-label="Add Activity"]', 'click', ''],
        ['button[type="submit"],button[title="Search]', 'click', ''],
        ['#hierarchical-search-list-item-9 > div.list-item-actions > button.btn.btn-link.icon-k-caret-right', 'click', ''],
        ['#hierarchical-search-list-item-2 > div.list-item-body > div.list-item-body-selector__wrapper > div', 'click', ''],
        ['#activitySelectApply', 'click', ''],
        // Non Project Time
        ['button[aria-label="Add Activity"]', 'click', ''],
        ['button[type="submit"],button[title="Search"]', 'click', ''],
        ['#hierarchical-search-list-item-16 > div.list-item-actions > button.btn.btn-link.icon-k-caret-right', 'click', ''],
        ['#hierarchical-search-list-item-0 > div.list-item-body > div.list-item-body-selector__wrapper > div', 'click', ''],
        ['#activitySelectApply', 'click', ''],
    ];

    triggerWithDelay(actions[0], 0, actions);
}

// 5. add time for each day that is not disabled
    const editableCells = $('span.ui-grid-cell-contents.cell-edit[name="content"]');
    // class="ui-grid-cell ui-grid-coluiGrid-000B cell-style-Dates7"
// $('#5_dates3 > span[name="value"]').trigger('click')


let testKeyboard = new KeyboardEvent('keypress', {
    key: '2'
});



// `queryObjects(WebSocket)` will eventually log the WebSockets, but it returns undefined.

// LIST VIEW

// select a list item 
$('#krn-slat-3 > div').trigger('click')
// cheeck if the day has 'hours worked' todo: if not exit
$('div.paycode-title:contains("Hours Worked") + input').prop('value') // should == '8.0';
// select activity tab
$('form#dayDetails a.nav-link > [title="Activities"]').trigger('click')
// add activity
$('button.activity-button[title="Add Activity Event"]').trigger('click');
$('button#activity-selector-btn-keyboard-nav').trigger('click');
$('button.activity-select-button[title="Select Activity"]').trigger('click')
// ---> use the list of activities from the array above
// send the value
$('input[name="activityDuration"]').prop('value', 2)
// save the activity
$('button#activity_apply').trigger('click')

const testRoutine = () => {
    let actions = [
        ['#krn-slat-3 > div', 'click', ''],
        ['form#dayDetails a.nav-link > [title="Activities"]', 'click', ''],
        ['button.activity-button[title="Add Activity Event"]', 'click', ''],
        ['button#activity-selector-btn-keyboard-nav', 'click', ''],
        ['button.activity-select-button[title="Select Activity"]', 'click'],
        ['form#searchActivity button[title="Search"]', 'click', ''],
        ['#hierarchical-search-list-item-16 > div.list-item-actions > button.btn.btn-link.icon-k-caret-right', 'click', ''],
        ['#hierarchical-search-list-item-0 > div.list-item-body > div.list-item-body-selector__wrapper > div', 'click', ''],
        ['#activitySelectApply', 'click', ''],
        ['input[name="activityDuration"]', 'prop', '2.0'], // can't get the value to sent or run through the ng validation
    ];
    triggerWithDelay(actions[0], 0, actions);
}
