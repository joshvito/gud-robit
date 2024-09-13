import robotjs from 'robotjs';

export function monitorMousePosition(
    delay = 2000) {
    let lastMousePos = robotjs.getMousePos();
    let timeout;
    let lastLoggedMousePos = {x: -1, y: -1};

    const logMousePosition = () => {
        const currentMousePos = robotjs.getMousePos();
        if (currentMousePos.x === lastMousePos.x 
            && currentMousePos.y === lastMousePos.y 
            && lastLoggedMousePos.x !== currentMousePos.x
            && lastLoggedMousePos.y !== currentMousePos.y
        ) {
            console.info(`Mouse has not moved for ${delay/2000} seconds. Position - X: ${currentMousePos.x}, Y: ${currentMousePos.y}`);
            lastLoggedMousePos = currentMousePos;
        }
        lastMousePos = currentMousePos;
    };

    const resetTimeout = () => {
        clearTimeout(timeout);
        timeout = setTimeout(logMousePosition, delay);
    };

    setInterval(resetTimeout, delay + 5);
};

export function logAction(
    /** @type {{type: string, action: string, x?: number, y?: number, value?: string}} */ action,
    /** @type {boolean} */ debug) {
    if (debug) {
        console.info(`Action: ${action.type + action.action}, Value: ${action.value}, X: ${action.x}, Y: ${action.y}`);
    }
}