var etrigan = globalThis.config[1].code;
etrigan = etrigan.replace("etrigan_placeholder", globalThis.config[1].value);

var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.innerHTML = etrigan;
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
