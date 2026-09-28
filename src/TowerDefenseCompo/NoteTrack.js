import "./NoteTrack.css";

const demoNotes = ["C", "E", "G", "F#", "A", "D#", "B"];

function NoteTrack({ notes = demoNotes }) {
  return (
    <div className="note-track">
      {notes.map((note, i) => (
        <div
          key={i}
          className={`falling-cloud cloud-${note.replace("#", "s")}`}
          style={{ animationDelay: `${i * 1.1}s` }}
        >
          <div className="cloud-shape">
            <img
              className="note-photo"
              src={`/notes/${note.replace("#", "s")}.png`}
              alt={`Note ${note} on staff`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteTrack;