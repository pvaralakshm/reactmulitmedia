import React from "react";

function Multimedia() {
  return (
    <div style={{ textAlign: "center", padding: "40px", fontFamily: "Arial" }}>
      <h1>🎬 React Multimedia Example</h1>

      
      {/* Image */}
<div style={{ marginBottom: "20px" }}>
  <h3>Sample Image</h3>
  <img
    src="/img.jpg"
    alt="Sample"
    width="400"
    height="250"
    style={{ borderRadius: "10px", boxShadow: "0 0 10px #999" }}
  />
</div>


      {/* Video */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Sample Video</h3>
        <video width="400" height="250" controls>
          <source src="/sample-5s.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Audio */}
      <div>
        <h3>Sample Audio</h3>
        <audio controls>
          <source src="/audio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default Multimedia;

