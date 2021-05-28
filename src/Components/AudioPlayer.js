import Soundfont from 'soundfont-player';
import AC from './AudioContext';

const NullAudio = {
    stop() {}
};
  
const NullPlayer = {
    play() {
        return NullAudio;
    }
};

const AudioPlayer = () => {
    // Audio Context required using soundfont
    const audioContext = AC && new AC();

    // Soundfont Player
    let soundPlayer = NullPlayer;

    const Player = {
      setInstrument(instrumentName) {
         Soundfont.instrument(audioContext, instrumentName)
         .then(sfPlayer => {
             soundPlayer = sfPlayer;
         })
         .catch(_error => {
             soundPlayer = NullPlayer;
         });
      },  
        playNote(note) {
        soundPlayer.play(note);
        }
    };
    return Player;
};

export default AudioPlayer;



