function GLInstance(canvasID) {
  var canvas = document.getElementById(canvasID),
    gl = canvas.getContext('webgl2');

  if (!gl) {
    console.error('WebGL context is not available.');
    return null;
  }

  // Set background color to white
  gl.clearColor(1.0, 1.0, 1.0, 1.0);

  // Reset each frame from drawing with the background color set above
  gl.fClear = function() {
    this.clear(this.COLOR_BUFFER_BIT | this.DEPTH_BUFFER_BIT);
    return this;
  };

  gl.fSetSize = function(w, h) {
    //set the size of the canvas, on chrome we need to set it 3 ways to make it work perfectly.
    this.canvas.style.width = w + 'px';
    this.canvas.style.height = h + 'px';
    this.canvas.width = w;
    this.canvas.height = h;

    //when updating the canvas size, must reset the viewport of the canvas
    //else the resolution webgl renders at will not change
    this.viewport(0, 0, w, h);
    return this;
  };

  return gl;
}