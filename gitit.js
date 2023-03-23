var robot = require("robotjs");

const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const goRight = (/** @type {number} */ _t) => {
    return setInterval(() => {
        robot.keyTap('tab', 'command');
        setTimeout(() => {
            robot.keyTap('tab', ['command']);
        }, 1000)
    }, _t);
}

goRight(randomInteger(50009, 60003));