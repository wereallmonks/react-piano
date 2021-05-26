import React, { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';

const PianoAudio = ({ instrumentName, notes }) => {
    const [instrumentPlayer, setInstrumentPlayer] = useState(null);
    useEffect(() => {
        setInstrumentPlayer(AudioPlayer());
    }, []);

    useEffect(() => {
        if (instrumentPlayer) {
            setInstrument();
            playNotes();
        }
    }, [instrumentPlayer]);

    useEffect(() => {
        if (notes && notes.length > 0) {
            playNotes();
        }
    }, [notes]);

    const setInstrument = () => {
        instrumentPlayer.setInstrument(instrumentName)
    };

    const playNotes = () => {
        if (instrumentPlayer) {
            instrumentPlayer.playNote(notes[0]);
        }
    };

    return null;
};

export default PianoAudio;