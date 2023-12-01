var featureIndex = globalThis.featureMap["plugins"]; // Change to desired feature

var etrigan = globalThis.config[featureIndex].code;
etrigan = etrigan.replace("etrigan_placeholder", globalThis.config[featureIndex].value);

var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.innerHTML = etrigan;
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
