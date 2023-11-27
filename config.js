var config = [
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
	    "if (q == \"(color-gamut: " + etriganTarget + ")\") { " +
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
    }
];
globalThis.config = config;

