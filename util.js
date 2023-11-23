// ColorDpeth 
export function colorDepth(depthValue) {
    Object.defineProperty(window.screen, 'colorDepth', {
      value: depthValue,
    });
}
