import { useState, useEffect } from 'react';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [instrumentPlayer]);
    // notes: an array of the notes to decode.
    useEffect(() => {
        if (notes && notes.length > 0) {
            playNotes();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notes]);
    // method that sets the instrument with the name
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