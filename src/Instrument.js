import React, { useState, useEffect } from 'react';
import PianoAudio from './Components/PianoAudio';
import { KeyboardShortcuts } from './Constants/KeyboardShortcuts';
import MidNotes from './Components/MidNotes';
import isAccidentalNote from './Components/isAccidentalNote';

const isRegularKey = event => {
  return !event.ctrlKey && !event.metaKey && !event.shiftKey;
};

const Instrument = ({ 
  instrumentName, 
  startNote, 
  endNote,
  renderPianoKey, 
  keyboardMap
 }) => {
  const notes = MidNotes(startNote, endNote);

  const [state, setState] = useState({
    notesPlaying: []
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNoteFromKeyboardKey = keyboardKey => {
    return keyboardMap[keyboardKey.toUpperCase()];
  };

  const handleKeyDown = e => {
    if (isRegularKey(e) && !e.repeat) {
      const note = getNoteFromKeyboardKey(e.key);
      if (note) {
        setState({ ...state, notesPlaying: [...state.notesPlaying, note] });
      }
    }
  };

  const handleKeyUp = e => {
    if (isRegularKey(e) && !e.repeat) {
      const note = getNoteFromKeyboardKey(e.key);
      if (note) {
        setState({
          ...state,
          notesPlaying: state.notesPlaying.filter(
            notePlaying => notePlaying !== note
          )
        });
      }
    }
  };

  const onPlayNoteStart = note => {
    setState({ ...state, notesPlaying: [...state.notesPlaying, note] });
  };

  const onPlayNoteEnd = note => {
    setState({
      ...state,
      notesPlaying: state.notesPlaying.filter(
        notePlaying => notePlaying !== note
      )
    });
  };
  
  // renderPianoKey is a render props with the state from Instrument Component. 
  // isAccidentalNote checks whether the note is a natural key or accidental key.
  
  return (
    <React.Fragment>
      {notes.map(note => {
        return (
          <React.Fragment key={note}>
            {renderPianoKey({
              note,
              isAccidentalNote: isAccidentalNote(note),
              isNotePlaying: state.notesPlaying.includes(note),
              startPlayingNote: () => onPlayNoteStart(note),
              stopPlayingNote: () => onPlayNoteEnd(note),
              keyboardShortcut: KeyboardShortcuts(keyboardMap, note)
            })}
          </React.Fragment>
        );
      })}
      <PianoAudio
        instrumentName={instrumentName}
        notes={state.notesPlaying}
      />
    </React.Fragment>
  );
};

export default Instrument;