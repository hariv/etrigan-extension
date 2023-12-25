chrome.runtime.onInstalled.addListener(function() {
    console.log("Iframe Tracker Extension installed");
    changePlatform("etrigan");
});

function changePlatform(targetPlatform) {
    Object.defineProperty(navigator, "platform", {value: targetPlatform, writable: false});
}

/*chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    //console.log("Page is about to navigate:", details.url);
    if(details.url === "https://example.com/") {
	console.log("changing platform");
	changePlatform("etriganPlatform");
    }
    });*/

//chrome.tabs.query({active: true,
