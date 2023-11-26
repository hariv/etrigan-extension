var codeToInject = 'Object.defineProperty(navigator, "platform", {value: "EtriganPlatform"; });';
//var codeToInject = 'Object.defineProperty(navigator,"platform", { \
//  get: function () { return "EtriganPlatform"; }, \
//  set: function (a) {} \
// });';

var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.innerHTML = codeToInject;
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
