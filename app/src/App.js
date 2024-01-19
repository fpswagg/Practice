import { useState, useRef } from "react";

import StarBox from "./reacts/StarBox";
import SpacePillar from "./reacts/SpacePillar";
import MouseArea from "./reacts/MouseArea";

function App() {
  // let [stars, setStars] = useState([]);

  //const newStar = () => setStars([...stars, <StarBox key={Date.now()} />]);

  // for (let i = 0; i < 15; i++) setStars([...stars, <StarBox key={i} />]);

  //const updateInterval = setInterval(newStar, 500);

  let stars = []; for (let i = 0; i < 20; i++) stars = [...stars, <StarBox key={i} />];

  return (  <main>
    
    <div id="star-main">{stars}</div>

    <SpacePillar />

    <MouseArea />

    <h1><span>The App of the Year 2024</span></h1>

  </main>)
}

export default App;