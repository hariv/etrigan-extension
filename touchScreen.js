// Spoof Touch Screen Conditions
// Based on this: https://github.com/fingerprintjs/fingerprintjs/blob/master/src/sources/touch_support.ts

const puppeteer = require("puppeteer");
const withUtils = require("puppeteer-extra-plugin-stealth/evasions/_utils/withUtils.js");

export async function touchScreen(touchPoint = 5) {
  // maxTouch Point return anything greater than 0
  Object.defineProperty(navigator, "maxTouchPoints", {
    value: touchPoint,
  });

  //  document.createEvent('TouchEvent') should return True
  // Apply stealth modifications
  await withUtils(page).evaluateOnNewDocument(() => {
    Object.defineProperty(document, "createEvent", {
      value: function (type) {
        if (type === "TouchEvent") {
          return true;
        }
        return new Event(type);
      },
    });
  });

  // On touch start is evaulated to true 
  Object.defineProperty(window, 'ontouchstart', {
    value: true,
  });
}
