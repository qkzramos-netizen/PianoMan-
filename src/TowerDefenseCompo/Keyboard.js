import Keynote from "./Keynote";
import "./Keyboard.css";

const whites = ["C", "D", "E", "F", "G", "A", "B"];
const sharps = { C: "C#", D: "D#", F: "F#", G: "G#", A: "A#" };

function Keyboard ({ilawNote, Press}) {
    return (
        <div className="keyboard">
            {whites.map((note) => (
                <div className="key-wrapper" key={note}>
                <Keynote key={note} note={note} ilaw={note === ilawNote} pindot={Press}/> 
                {sharps[note] && (
            <Keynote
              note={sharps[note]}
              ilaw={ilawNote === sharps[note]}
              pindot={Press}/>
                )}
                </div>
                 ))}
        </div>
    );
}

export default Keyboard;