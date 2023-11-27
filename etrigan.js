//import { config } from './config.js';

//console.log(globalThis);
//console.log(config);
var etrigan = globalThis.config[1].code;
etrigan = etrigan.replace("etrigan_placeholder", globalThis.config[1].value);
//var etrigan = 'Object.defineProperty(navigator,"platform", { \
//  get: function () { return "EtriganPlatform"; }, \
//  set: function (a) {} \
//});';

var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.innerHTML = etrigan;
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
//Object.defineProperty(navigator, "platform", { value: "YourCustomPlatform" });
