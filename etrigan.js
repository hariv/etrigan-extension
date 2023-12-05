let featureIndex = 0;
let etrigan = '';
//let spoof = ["platform", "vendor", "oscpu","hardwareConcurrency","deviceMemory","timezone", "plugins","vendorFlavors", "contrast",
//	     "languages", "screenResolution", "screenFrame","touchSupportMaxTouchPoints", "touchSupportTouchStart", "touchSupportTouchEvent",
//	     "fontPreferencesMono", "fontPreferencesSans", "fontPreferencesSerif", "fontPreferencesSystem", "fontPreferencesMin", "fontPreferencesDefault","webdriver"];
let spoof = ["contrast", "reducedMotion"];
//let spoof = ["reducedMotion", "contrast"];
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
    } else if (feature == "touchSupportMaxTouchPoints") {
        tmp = tmp.replace("etrigan_placeholder", [4]);
     } else if (feature == "fontPreferencesSystem") {
             tmp = tmp.replace("etrigan_placeholder", 10);
     } else if (feature == "vendor") {
        tmp = tmp.replace("etrigan_placeholder", "etriganVendor");
     } else if (feature == "screenResolution") {
        tmp = tmp.replace("etrigan_placeholder_1", 10).replace("etrigan_placeholder_2", 10);
     } else if (feature == "screenFrame") {
        tmp = tmp.replace("etrigan_placeholder_1", 10).replace("etrigan_placeholder_2", 10).replace("etrigan_placeholder_3", 10).replace("etrigan_placeholder_4", 10).replace("etrigan_placeholder_5", 10).replace("etrigan_placeholder_6", 10);
     } else {
         console.log(`feature id is ${featureIndex}, ${feature}`)
         tmp = tmp.replace("etrigan_placeholder", globalThis.config[featureIndex].value);
	 //tmp = tmp.replace("etrigan_placeholder", "0");
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
