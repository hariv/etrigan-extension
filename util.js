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
// To see other format, check: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/oscpu 
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

export function screenFrame(aTop, aLeft, aWidth, aHeight, width, height) {
  // Representing the top edge 
  // frame[0] = width - aWidth - aLeft
  // frame[1] = height - aHeight - aTop

  Object.defineProperty(screen, 'availTop', {
    value: aTop,
  });

  Object.defineProperty(screen, 'availLeft', {
    value: aLeft,
  });

  Object.defineProperty(screen, 'availWidth', {
    value: aWidth,
  });

  Object.defineProperty(screen, 'availHeight', {
    value: aHeight,
  });

  Object.defineProperty(screen, 'width', {
    value: width,
  });

  Object.defineProperty(screen, 'height', {
    value: height,
  });
}

// Device Memory 
export function deviceMemory(memory = 8){
  Object.defineProperty(navigator, 'deviceMemory', {
    value: memory,
  });
}


// Language 
// If there are only one languages -> Chromium 
export function language(lang = "en-US", langArr = ["en-US", "zh-CN", "ja-JP"]){
  Object.defineProperty(navigator, 'language', {
    value: lang,
  });

  // languages
  Object.defineProperty(navigator, 'languages', {
    value: langArr,
  });
}

