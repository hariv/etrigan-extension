// ColorDpeth 
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
