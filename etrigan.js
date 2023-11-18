var codeToInject = 'Object.defineProperty(navigator,"platform", { \
  get: function () { return "EtriganPlatform"; }, \
  set: function (a) {} \
 });';

var script = document.createElement('script');
script.appendChild(document.createTextNode(codeToInject));
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
