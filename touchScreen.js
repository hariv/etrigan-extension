// Spoof Touch Screen Conditions
// Based on this: https://github.com/fingerprintjs/fingerprintjs/blob/master/src/sources/touch_support.ts
export function touchScreen(touchPoint = 5,){
    // maxTouch Point return anything greater than 0
    Object.defineProperty(navigator, 'maxTouchPoints', {
        value: touchPoint,
    });


    //  document.createEvent('TouchEvent') should return True 

}