var config = [
    {
	featureName: "fontPreferencesMono",
	code: "const originalBoundingClientRect = "+
	    "Element.prototype.getBoundingClientRect;" +
	    "Element.prototype.getBoundingClientRect = function() {" +
	    "const originalResult = originalGetBoundingClientRect.call(this);" +
	    "if (this instanceof Element && this.tagName.toLowerCase() == \"span\") {" +
	    "const computedStyle = window.getComputedStyle(this);" +
	    "if (computedStyle.fontFamily == \"monospace\") {" +
	    "const modifiedResult = {" +
	    "top: originalResult.top," +
	    "right: originalResult.right," +
	    "bottom: originalResult.bottom," +
	    "left: originalResult.left," +
	    "width: etrigan_placeholder" +
	    "height: originalResult.height};" +
	    "return modifiedResult;" +
	    "}}" +
	    "return originalResult;}",
	value: 140
    },
    {
	featureName: "fontPreferencesSans",
	code: "const originalBoundingClientRect = "+
            "Element.prototype.getBoundingClientRect;" +
            "Element.prototype.getBoundingClientRect = function() {" +
            "const originalResult = originalGetBoundingClientRect.call(this);" +
            "if (this instanceof Element && this.tagName.toLowerCase() == \"span\") {" +
            "const computedStyle = window.getComputedStyle(this);" +
            "if (computedStyle.fontFamily == \"sans-serif\") {" +
            "const modifiedResult = {" +
            "top: originalResult.top," +
            "right: originalResult.right," +
            "bottom: originalResult.bottom," +
            "left: originalResult.left," +
            "width: etrigan_placeholder" +
            "height: originalResult.height};" +
            "return modifiedResult;" +
            "}}" +
            "return originalResult;}",
        value: 140
    },
    {
        featureName: "fontPreferencesSerif",
        code: "const originalBoundingClientRect = "+
            "Element.prototype.getBoundingClientRect;" +
            "Element.prototype.getBoundingClientRect = function() {" +
            "const originalResult = originalGetBoundingClientRect.call(this);" +
            "if (this instanceof Element && this.tagName.toLowerCase() == \"span\") {" +
            "const computedStyle = window.getComputedStyle(this);" +
            "if (computedStyle.fontFamily == \"serif\") {" +
            "const modifiedResult = {" +
            "top: originalResult.top," +
            "right: originalResult.right," +
            "bottom: originalResult.bottom," +
            "left: originalResult.left," +
            "width: etrigan_placeholder" +
            "height: originalResult.height};" +
            "return modifiedResult;" +
            "}}" +
            "return originalResult;}",
        value: 140
    },
    {
        featureName: "fontPreferencesSystem",
        code: "const originalBoundingClientRect = "+
            "Element.prototype.getBoundingClientRect;" +
            "Element.prototype.getBoundingClientRect = function() {" +
            "const originalResult = originalGetBoundingClientRect.call(this);" +
            "if (this instanceof Element && this.tagName.toLowerCase() == \"span\") {" +
            "const computedStyle = window.getComputedStyle(this);" +
            "if (computedStyle.fontFamily == \"system-ui\") {" +
            "const modifiedResult = {" +
            "top: originalResult.top," +
            "right: originalResult.right," +
            "bottom: originalResult.bottom," +
            "left: originalResult.left," +
            "width: etrigan_placeholder" +
            "height: originalResult.height};" +
            "return modifiedResult;" +
            "}}" +
            "return originalResult;}",
        value: 140
    },
    {
        featureName: "fontPreferencesMin",
        code: "const originalBoundingClientRect = "+
            "Element.prototype.getBoundingClientRect;" +
            "Element.prototype.getBoundingClientRect = function() {" +
            "const originalResult = originalGetBoundingClientRect.call(this);" +
            "if (this instanceof Element && this.tagName.toLowerCase() == \"span\") {" +
            "const computedStyle = window.getComputedStyle(this);" +
            "if (computedStyle.fontSize == \"1px\") {" +
            "const modifiedResult = {" +
            "top: originalResult.top," +
            "right: originalResult.right," +
	    "bottom: originalResult.bottom," +
            "left: originalResult.left," +
            "width: etrigan_placeholder" +
            "height: originalResult.height};" +
            "return modifiedResult;" +
            "}}" +
            "return originalResult;}",
        value: 140
    },
    {
        featureName: "fontPreferencesDefault",
        code: "const originalBoundingClientRect = "+
            "Element.prototype.getBoundingClientRect;" +
            "Element.prototype.getBoundingClientRect = function() {" +
            "const originalResult = originalGetBoundingClientRect.call(this);" +
            "if (this instanceof Element && this.tagName.toLowerCase() == \"span\") {" +
            "const modifiedResult = {" +
            "top: originalResult.top," +
            "right: originalResult.right," +
	    "bottom: originalResult.bottom," +
            "left: originalResult.left," +
            "width: etrigan_placeholder" +
            "height: originalResult.height};" +
            "return modifiedResult;" +
            "}" +
            "return originalResult;}",
        value: 140
    },
    {
	featureName: "platform",
	code: "Object.defineProperty(navigator, \"platform\", " +
	    "{ value: \"etrigan_placeholder\"});",
	value: "etriganPlatform"
    },
    {
	featureName: "vendor",
	code: "Object.defineProperty(navigator, \"vendor\", " +
	    "{ value: \"etrigan_placeholder\"});",
	value: "Google Inc."
    },
    {
	featureName: "oscpu",
	code: "Object.defineProperty(navigator, \"oscpu\", " +
	    "{ value : \"etrigan_placeholder\"});",
	value: "Windows NT 6.0"
    },
    {
	featureName: "hardwareConcurrency",
	code: "Object.defineProperty(navigator, \"hardwareConcurrency\", " +
	    "{ value: etrigan_placeholder});",
	value: 4
    },
    {
	featureName: "deviceMemory",
	code: "Object.defineProperty(navigator, \"deviceMemory\", " +
	    "{value: etrigan_placeholder});",
	value: 8
    },
    {
	featureName: "mathacos",
	code: "let fallbackfn = function() {return 0;}" +
	    "let originalFunction = Math.acos || fallbackfn;" +
	    "Math.acos = function(i) { " +
	    "let ans = originalFunction(i);" +
	    "if (i == 0.123124234234234242) { " +
	    "ans = etrigan_placeholder; } " +
	    "return ans; }",
	value: 0 
    },
    {
	featureName: "mathacosh",
	code: "let fallbackfn = function() {return 0;}" +
	    "let originalFunction = Math.acosh || fallbackfn;" +
	    "Math.acosh = function(i) { " +
	    "let ans = originalFunction(i);" +
	    "if (i == 1e308) { " +
	    "ans = etrigan_placeholder; } " +
	    "return ans; }",
	value: 0
    },
    {
	featureName: "mathasin",
        code: "let fallbackfn = function() {return 0;}"	+
            "let originalFunction = Math.asin || fallbackfn;" +
            "Math.acosh = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 0.123124234234234242) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathasinh",
        code: "let fallbackfn = function() {return 0;}" +
            "let originalFunction = Math.asinh || fallbackfn;" +
            "Math.acosh = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 1) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathatan",
        code: "let fallbackfn = function() {return 0;}" +
            "let originalFunction = Math.atan || fallbackfn;" +
            "Math.acosh = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 0.5) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathatanh",
        code: "let fallbackfn = function() {return 0;}" +
            "let originalFunction = Math.atanh || fallbackfn;" +
            "Math.acosh = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 0.5) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathsin",
        code: "let fallbackfn = function() {return 0;}" +
            "let originalFunction = Math.sin || fallbackfn;" +
            "Math.acosh = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == -1e300) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathsinh",
        code: "let fallbackfn = function() {return 0;}" +
            "let originalFunction = Math.sinh || fallbackfn;" +
            "Math.acosh = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 1) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathcos",
        code: "let fallbackfn = function() {return 0;}" +
            "let originalFunction = Math.cos || fallbackfn;" +
            "Math.acosh = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 10.000000000123) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathcosh",
        code: "let fallbackfn = function() {return 0;}" +
            "let originalFunction = Math.cosh || fallbackfn;" +
            "Math.acosh = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 1) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathtan",
        code: "let fallbackfn = function() {return 0;}" +
            "let originalFunction = Math.tan || fallbackfn;" +
            "Math.acosh = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == -1e300) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathtanh",
        code: "let fallbackfn = function() {return 0;}" +
            "let originalFunction = Math.tanh || fallbackfn;" +
            "Math.acosh = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 1) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathexp",
        code: "let fallbackfn = function() {return 0;}" +
            "let originalFunction = Math.exp || fallbackfn;" +
            "Math.acosh = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 1) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathexpm1",
        code: "let fallbackfn = function() {return 0;}" +
            "let originalFunction = Math.expm1 || fallbackfn;" +
            "Math.acosh = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 1) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathlog1p",
        code: "let fallbackfn = function() {return 0;}" +
            "let originalFunction = Math.log1p || fallbackfn;" +
            "Math.acosh = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 10) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathpowpi",
        code: "let originalFunction = Math.pow;" +
            "Math.pow = function(i, j) { " +
            "let ans = originalFunction(i, j);" +
            "if (j == -100) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
	featureName: "mathacoshpf",
	code: "let originalFunction = Math.log;" +
	    "Math.log = function(i) { " +
	    "let ans = originalFunction(i);" +
	    "if (i == 2e154) { " +
	    "ans = etrigan_placeholder; } " +
	    "return ans; }",
	value: 0
    },
    {
	featureName: "mathasinhpf",
        code: "let originalFunction = Math.log;" +
            "Math.log = function(i) { "	+
            "let ans = originalFunction(i);" +
            "if (Math.floor(i) == 2) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
	featureName: "mathatanhpf",
        code: "let originalFunction = Math.log;" +
            "Math.log = function(i) { "	+
            "let ans = originalFunction(i);" +
            "if (i == 3) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
	featureName: "mathsinhpf",
        code: "let originalFunction = Math.exp;" +
            "Math.exp = function(i) { "	+
            "let ans = originalFunction(i);" +
            "if (i == 1) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
	featureName: "mathcoshpf",
        code: "let originalFunction = Math.exp;" +
            "Math.exp = function(i) { "	+
            "let ans = originalFunction(i);" +
            "if (i == 1) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathtanhpf",
        code: "let originalFunction = Math.exp;" +
            "Math.exp = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 2) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathexpm1pf",
        code: "let originalFunction = Math.exp;" +
            "Math.exp = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 1) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "mathexpm1pf",
        code: "let originalFunction = Math.exp;" +
            "Math.exp = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 1) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
        featureName: "log1ppf",
        code: "let originalFunction = Math.exp;" +
            "Math.exp = function(i) { " +
            "let ans = originalFunction(i);" +
            "if (i == 2) { " +
            "ans = etrigan_placeholder; } " +
            "return ans; }",
        value: 0
    },
    {
	featureName: "openDatabase",
	code: "Object.defineProperty(window, " +
	    "\"openDatabase\", {value: " +
	    "etrigan_placeholder});",
	value: true
    },
    {
	featureName: "indexedDB", // does not support undefined for now
	code: "Object.defineProperty(window, " +
	    "\"indexedDB\", {value: " +
	    "etrigan_placeholder});",
	value: true
    },
    {
	featureName: "sessionStorage",
	code: "Object.defineProperty(window, " +
	    "\"sessionStorage\", {value: " +
	    "etrigan_placeholder});",
	value: true
    },
    {
	featureName: "localStorage",
	code: "Object.defineProperty(window, " +
	    "\"sessionStorage\", {value: " +
	    "etrigan_placeholder});",
	value: true
    },
    {
	featureName: "contrast",
	code: "let originalMatchMedia = window.matchMedia;" +
	    "let etriganTarget = \"etrigan_placeholder\";" +
	    "window.matchMedia = function(q) { " +
	    "let res = originalMatchMedia(q);" +
	    "if (etriganTarget == \"-1\") { " +
	    "if (q == \"(prefers-contrast: less)\" || q == \"(prefers-contrast: low)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" +
	    "if (etriganTarget == \"0\") { " +
	    "if (q == \"(prefers-contrast: no-preference)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" +
	    "if (etriganTarget == \"1\") { " +
	    "if (q == \"(prefers-contrast: more)\" || q == \"(prefers-contrast: high)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" +
	    "if (etriganTarget == \"10\") { " +
	    "if (q == \"(prefers-contrast: forced)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" +
	    "if (etriganTarget == \"undefined\") { " +
	    "res.matches = false;" +
	    "}" +
	    "return res;" +
	    "}",
	value: "-1"
    },
    {
	featureName: "forcedColors",
	code: "let originalMatchMedia = window.matchMedia;" +
	    "let etriganTarget = \"etrigan_placeholder\";" +
	    "window.matchMedia = function(q) { " +
	    "let res = originalMatchMedia(q);" +
	    "if (etriganTarget == \"1\") { " +
	    "if (q == \"(forced-colors: active)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" +
	    "if (etriganTest == \"0\") { " +
	    "if (q == \"(forced-colors: none)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" +
	    "if (etriganTarget == \"undefined\") { " +
	    "res.matches = false;" +
	    "}" +
	    "return res;" +
	    "}",
	value: "1"
    },
    {
	featureName: "hdr",
	code: "let originalMatchMedia = window.matchMedia;" +
	    "let etriganTarget = \"etrigan_placeholder\";" +
	    "window.matchMedia = function(q) { " +
	    "let res = originalMatchMedia(q);" +
	    "if (etriganTarget == \"1\") { " +
	    "if (q == \"(dynamic-range: high)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" +
	    "if (etriganTarget == \"0\") { " +
	    "if (q == \"(dynamic-range: standard)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" +
	    "if (etriganTarget == \"undefined\") { " +
	    "res.matches = false;" +
	    "}" +
	    "return res;" +
	    "}",
	value: "1"
    },
    {
	featureName: "invertedColors",
	code: "let originalMatchMedia = window.matchMedia;" +
	    "let etriganTarget = \"etrigan_placeholder\";" +
	    "window.matchMedia = function(q) { " +
	    "let res = originalMatchMedia(q);" +
	    "if (etriganTarget == \"1\") { " +
	    "if (q == \"(inverted-colors: inverted)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" +
	    "if (etriganTarget == \"0\") { " +
	    "if (q == \"(inverted-colors: none)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" +
	    "if (etriganTarget == \"undefined\") { " +
	    "res.matches = false;" +
	    "}" +
	    "return res;"+
	    "}",
	value: "1"
    },
    {
	featureName: "reducedMotion",
	code: "let originalMatchMedia = window.matchMedia;" +
	    "let etriganTarget = \"etrigan_placeholder\";" +
	    "window.matchMedia = function(q) { " +
	    "let res = originalMatchMedia(q);" +
	    "if (etriganTarget == \"1\") { " +
	    "if (q == \"(prefers-reduced-motion: reduce)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" +
	    "if (etriganTarget == \"0\") { " +
	    "if (q == \"(prefers-reduced-motion: no-preference)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" +
	    "if (etriganTarget == \"undefined\") { " +
	    "res.matches = false;" +
	    "}" +
	    "return res;" +
	    "}",
	value: "1"
    },
    {
	featureName: "monochrome",
	code: "let originalMatchMedia = window.matchMedia;" +
	    "let etriganTarget = \"etrigan_placeholder\";" +
	    "window.matchMedia = function(q) { " +
	    "let res = originalMatchMedia(q);" +
	    "if (etriganTarget == \"undefined\") { " +
	    "if (q == \"(min-monochrome: 0)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" +
	    "else {" +
	    "for (let i = 0; i < parseInt(etriganTarget); i++) { " +
	    "if (q == \"(min-monochrome: i.toString())\") { " +
	    "res.matches = false;" +
	    "}" +
	    "}" +
	    "if (q == \"(min-monochrome: etriganTarget)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" + 
	    "return res;" +
	    "}",
	value: "10"
	
    },
    {
	featureName: "colorGamut",
	code: "let originalMatchMedia = window.matchMedia;" +
	    "let etriganTarget = \"etrigan_placeholder\";" +
	    "window.matchMedia = function(q) { " +
	    "if (etriganTarget == \"undefined\") { " +
	    "res.matches = false;" +
	    "}" +
	    "else {" +
	    "if (q == \"(color-gamut: etriganTarget)\") { " +
	    "res.matches = true;" +
	    "}" +
	    "}" +
	    "return res;" +
	    "}",
	value: "rec2020"	
    },
    {
	featureName: "timezone",
	code: "Object.defineProperty(Intl.DateTimeFormat.prototype, " +
	    "\"resolvedOptions\", { value: function() { " +
	    "return {timeZone: \"etrigan_placeholder\"}; },});",
	value: "Asia/Tokyo"
    },
    {
	featureName: "colorDepth",
	code: "Object.defineProperty(window, \"colorDepth\", {" +
	    "value: etrigan_placeholder});",
	value: "24"
    },
    {
	featureName: "plugins",
	code: "Object.defineProperty(navigator, \"plugins\", { " +
	    "value: etrigan_placeholder});",
	value: "let plugins = [];" +
	    "let p = {};" +
	    "p.name = \"Etrigan Plugin\";" +
	    "p.description = \"Etrigan Plugin for Paper\";"+
	    "p[0] = {};" +
	    "p[0].suffixes = \"pdf\";" +
	    "p[0].type = \"application/pdf\";" +
	    "p[1] = {};" +
	    "p[1].suffixes = \"pdf\";" +
	    "p[1].type = \"text/pdf\";" +
	    "plugins.push(p);",
    },
    {
	featureName: "vendorFlavors",
	code: "Object.defineProperty(window, " +
	    "\"etrigan_placeholder\", {value: {}});",
	value: "puffinDevice"
    },
    {
	featureName: "languages",
	code: "Object.defineProperty(navigator, " +
	    "\"language\", {value: undefined});" +
	    "Object.defineProperty(navigator, " +
	    "\"userLanguage\", {value: undefined});" +
	    "Object.defineProperty(navigator, " +
	    "\"browserLanguage\", {value: undefined});" +
	    "Object.defineProperty(navigator, " +
	    "\"systemLanguage\", {value: undefined});" +
	    "Object.defineProperty(navigator, " +
	    "\"languages\", {value: \"etrigan_placeholder\"});",
	value: "en-US,zh-CN,ja-JP"
    },
    {
	featureName: "screenResolution",
	code: "Object.defineProperty(screen, " +
	    "\"width\", {value: etrigan_placeholder_1});" +
	    "Object.defineProperty(screen, " +
	    "\"height\", {value: etrigan_placeholder_2});",
	value: [1920, 1080]
    },
    {
	featureName: "screenFrame",
	code: "Object.defineProperty(screen, " +
	    "\"availTop\", {value: etrigan_placeholder_1});" +
	    "Object.defineProperty(screen, " +
	    "\"availLeft\", {value: etrigan_placeholder_2});" +
	    "Object.defineProperty(screen, " +
	    "\"availWidth\", {value: etrigan_placeholder_3});" +
	    "Object.defineProperty(screen, " +
	    "\"availHeight\", {value: etrigan_placeholder_4});" +
	    "Object.defineProperty(screen, " +
	    "\"width\", {value: etrigan_placeholder_5});" +
	    "Object.defineProperty(screen, " +
	    "\"height\", {value: etrigan_placeholder_6});",
	value: [1, 2, 3, 4, 5, 6]
    },
    {
	featureName: "touchSupportMaxTouchPoints",
	code: "Object.defineProperty(navigator, " +
	    "\"maxTouchPoints\", {value: etrigan_placeholder});",
	value: [10]
    },
    {
	featureName: "touchSupportTouchEvent",
	code: "Object.defineProperty(document, " +
	    "\"createEvent\", { value: function(type) {" +
	    "if (type === \"TouchEvent\") { return etrigan_placeholder; }" +
	    "return new Event(type);}" +
	    "});",
	value: true
    },
    {
	featureName: "touchSupportTouchStart",
	code: "Object.defineProperty(window, " +
	    "\"ontouchstart\", {value: etrigan_placeholder, });",
	value: true
    }
];
globalThis.config = config;

