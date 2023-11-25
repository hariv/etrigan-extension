// Spoof Touch Screen Conditions
// Based on this: https://github.com/fingerprintjs/fingerprintjs/blob/master/src/sources/touch_support.ts

const puppeteer = require('puppeteer');
const withUtils = require('puppeteer-extra-plugin-stealth/evasions/_utils/withUtils.js');


export function touchScreen(touchPoint = 5,){
    // maxTouch Point return anything greater than 0
    Object.defineProperty(navigator, 'maxTouchPoints', {
        value: touchPoint,
    });

    //  document.createEvent('TouchEvent') should return True 

}


// The remaining a forceful code injections
function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time);
    });
}
  
  
  (async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
  
    // Apply stealth modifications
    await withUtils(page).evaluateOnNewDocument(() => {
      Object.defineProperty(document, 'createEvent', {
        value: function(type) {
          if (type === 'TouchEvent') {
            console.log("JISAJISOA")
            return true;
          }
          return new Event(type);
        },
      });
    });
  
    // Navigate to example.com
    await page.goto('https://example.com');
  
    // Additional testing steps or assertions if needed
    await delay(100000);
    await browser.close();
  
    // Close the browser
    await browser.close();
  })();
  