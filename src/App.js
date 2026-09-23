import { useState } from "react";
import Base from "./TowerDefenseCompo/Battlefield/Base";
import Mobs from "./TowerDefenseCompo/Battlefield/Mobs";
import HPbar from "./TowerDefenseCompo/HPbar";
import Keynote from "./TowerDefenseCompo/Keynote";
import NoteTrack from "./TowerDefenseCompo/NoteTrack";
import Tier from "./TowerDefenseCompo/Tier";
import Keyboard from"./TowerDefenseCompo/Keyboard";
import "./App.css";

function App () {

  return (
    <div>
    <div className="game-container">
      <Tier />
      <NoteTrack />
      <HPbar />
    </div>
    <div className="battlefield">
      <Base />
      <Mobs />
    </div>

    <div className="keyboard">
        <Keyboard ilawNote="C" Press={(n) => console.log(n)} />
          </div>
    </div>
  );
}

export default App;