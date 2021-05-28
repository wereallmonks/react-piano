import React from "react";
import PianoAudio from "./Components/PianoAudio";
import midNotes from "./utils/midNotes";

const Instrument = ({ instrumentName, startNote, endNote }) => {
  const notes = midNotes(startNote, endNote);
  return (
    <React.Fragment>
      {notes.map(note => {
        return <React.Fragment>Note is : {note}</React.Fragment>;
      })}
      <PianoAudio />
    </React.Fragment>
  );
};

export default Instrument;