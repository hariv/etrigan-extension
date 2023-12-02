let featureIndex = 0;
let etrigan = '';
let spoof = ["deviceMemory", "hardwareConcurrency", "languages", "platform", "timezone","touchSupportMaxTouchPoints", "touchSupportTouchStart", "touchSupportTouchEvent", "fontPreferencesSystem","webdriver"];
for (let i = 0; i < spoof.length; i++){
    let feature = spoof[i];
   //  console.log(`Spoofing Feature: ${feature}`);
    featureIndex = globalThis.featureMap[feature];
    console.log(feature, featureIndex, i, spoof[i], spoof.length)
    let tmp = globalThis.config[featureIndex].code
    if (feature ==  "deviceMemory") {
        tmp = tmp.replace("etrigan_placeholder", 2);
    } else if (feature == "languages") {
        tmp = tmp.replace("etrigan_placeholder", "zh-CN");
    } else if (feature == "platform") {
        tmp = tmp.replace("etrigan_placeholder", "Win32");
    } else if (feature == "timezone"){
        tmp = tmp.replace("etrigan_placeholder", "Asia/Shanghai");
    } else if (feature = "touchSupportMaxTouchPoints") {
        tmp = tmp.replace("etrigan_placeholder", [4]);
     } else if (feature == "fontPreferencesSystem") {
             tmp = tmp.replace("etrigan_placeholder", 161.296875);
     }else {
        console.log(`feature id is ${featureIndex}, ${feature}`)
        tmp = tmp.replace("etrigan_placeholder", globalThis.config[featureIndex].value);
    }     
    etrigan += tmp;
}
console.log(etrigan);
// Script injection 
var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.innerHTML = etrigan;
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);