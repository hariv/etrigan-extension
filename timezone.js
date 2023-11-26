const puppeteer = require("puppeteer");
const withUtils = require("puppeteer-extra-plugin-stealth/evasions/_utils/withUtils.js");

export async function timezone(time = 'Asia/Tokyo'){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
  
    await withUtils(page).evaluateOnNewDocument(() => {
        Object.defineProperty(Intl.DateTimeFormat.prototype, 'resolvedOptions', {
            value: function() {
              return { timeZone: time }; 
            },
          });
    });
}