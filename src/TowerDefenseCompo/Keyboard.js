import Keynote from "./Keynote";
import "./Keyboard.css";
import React, { useRef, useEffect } from 'react';

const whites = ["C", "D", "E", "F", "G", "A", "B"];
const sharps = { C: "C#", D: "D#", F: "F#", G: "G#", A: "A#" };

function Keyboard ({ilawNote, Press}) {
    const audioCache = useRef({});

    useEffect(() => {
        const allNotes = [...whites, ...Object.values(sharps)];
        allNotes.forEach((note) => {
            const file = note.replace("#", "s");
            audioCache.current[note] = new Audio(`/sounds/${file.toLowerCase()}.mp3`);
        });
    }, []);

    const handleKeyClick = (note) => {
        const audio = audioCache.current[note];
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch((e) => console.log(e));
        }
        if (Press) Press(note);
    };  

    return (
        <div className="keyboard">
            {whites.map((note) => (
                <div className="key-wrapper" key={note}>
                <Keynote key={note} note={note} ilaw={note === ilawNote} pindot={handleKeyClick}/> 
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