import React from "react";
import Video from "./Video";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://www.youtube.com/embed/suvwogCC7PI?controls=0"
          channel="muasyaaaa"
          description="Welcome to my Epic react build"
          song="Love Yours....J.Cole"
          likes={69}
          shares={21}
          messages={12}
        />
        <Video
          url="https://www.youtube.com/embed/pZd22XkQ4rw?controls=0"
          channel="franso"
          description="Faiyyyaaaa"
          song="Tuma Kitu"
          likes={23}
          shares={45}
          messages={78}
        />
      </div>

      {/* app container */}
      {/* videos */}
      {/* videos */}
    </div>
  );
}

export default App;
