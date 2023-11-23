// ColorDepth
// Issue: Can only spoof this object for once, redeclaring would raise error cannorDefine Property
export function colorDepth(depthValue) {
    Object.defineProperty(window.screen, 'colorDepth', {
      value: depthValue,
    });
}

// Vendor default to Google Inc 
// Always "Google Inc.", "Apple Computer, Inc.", or empty string being Gecko or firefox
export function vendor(vendorName = "Google Inc.") {
  Object.defineProperty(navigator, 'vendor', {
    value: vendorName,
  });
}

// OsCpu Value default to Windows 6.0
// Note: Testing result indicated default being undefined 
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/oscpu 
export function oscpu(oscpuInfo = "Windows NT 6.0") {
  Object.defineProperty(navigator, 'oscpu', {
    value: oscpuInfo,
  });
}

// Hardware Concurrency default to 4 
export function hardwareConcurrency(hardwareConcurrency = 4) {
  Object.defineProperty(navigator, 'hardwareConcurrency', {
    value: hardwareConcurrency,
  });
}

export function platform(platform = "Win32") {
  Object.defineProperty(navigator, 'platform', {
    value: platform,
  });
}





