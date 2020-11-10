var http = require('http');

http.createServer(function (req, res) {
  var html = buildHtml(req);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(80);

function buildHtml(req) {
  var header = '';
  var body = req.query

  // concatenate header string
  // concatenate body string

  return `<!DOCTYPE html>
<html>
  <body>
    <!-- As if this Glitch were a typical HTML CodePen... -->
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>

    <!-- Use components defined in separate files. -->
    <script src="arrow-key-rotation.js"></script>
    <script src="play-on-window-click.js"></script>
    <script src="play-on-vrdisplayactivate-or-enter-vr.js"></script>
    <script src="hide-once-playing.js"></script>

    <!-- Specify our scene. -->
    <a-scene>
      <!-- The original example also has this 180 degree rotation, to appear to be going forward. -->
      <a-videosphere
        rotation="0 180 0"
        src="#video"
        play-on-window-click
        play-on-vrdisplayactivate-or-enter-vr
      >
      </a-videosphere>

      <!-- Define camera with zero user height, movement disabled and arrow key rotation added. -->
      <a-camera
        user-height="0"
        wasd-controls-enabled="false"
        arrow-key-rotation
      >
        <!-- Text element for display messaging.  Hide once video is playing. -->
        <a-entity
          id="msg"
          position="0 -0.3 -1.5"
          text="align:center; 
                width:3;
                wrapCount:100;
                color:red;
                value:Click window to make the video play, if needed."
          hide-once-playing="#video"
        >
        </a-entity>
      </a-camera>

      <!-- Wait for the video to load. -->
      <a-assets>
        <!-- Single source video. -->
        <video
          id="video"
          style="display:none"
          autoplay
          loop
          crossorigin="anonymous"
          playsinline
          webkit-playsinline
        >
          <!-- MP4 video source. -->
          <source
            type="video/mp4"
            src="${body}"
          />
        </video>
      </a-assets>
    </a-scene>

    <!-- Show a button to switch to the multi-source example that shows detail. -->
    <button
      onClick="window.location.href='multi-source-detail.html'"
      style="position:absolute;top:10px;right:10px;"
    >
      Switch to multi-source detail example
    </button>
  </body>
</html>`
;
};