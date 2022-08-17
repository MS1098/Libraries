// let x;
// let a;
// let b;
// let c;
// let d;

export const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
export const lerp = (a, b, n) => (1 - n) * a + n * b;

export const calcWinsize = () => {
    return { width: window.innerWidth, height: window.innerHeight };
};

export const distance = (x1, y1, x2, y2) => {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.hypot(a, b);
}

// Gets the mouse position
export const getMousePos = e => {
    return {
        x: e.clientX,
        y: e.clientY
    };
};

export const getDistance = (element1, element2) => {
    const elCenter = { x: element1.offsetLeft + element1.offsetWidth / 2, y: element1.offsetTop + element1.offsetHeight / 2 };
    const elCenter2 = { x: element2.offsetLeft + element2.offsetWidth / 2, y: element2.offsetTop + element2.offsetHeight / 2 };
    return Math.hypot(elCenter.x - elCenter2.x, elCenter.y - elCenter2.y);
}