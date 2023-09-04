import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import immg from "../components/images.jpg";
const images = [
    { url: immg },
    { url: immg },
    { url: immg },
    { url: immg },
  ];
  
function App(){
    return (
        <div className="note">
          <SimpleImageSlider
            width={450}
            height={600}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
      );
}

export default App;

