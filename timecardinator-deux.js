import open from 'open';
import robotjs from 'robotjs';

const openUrlandGoRight = async (url) => {
    await open(url, {wait: true});
    robotjs.setKeyboardDelay(500);
    robotjs.keyTap('right', 'command');
    robotjs.keyTap('escape');
}

openUrlandGoRight('https://sindresorhus.com');