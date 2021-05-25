import Soundfont from "soundfont-player";
import AC from "./AudioContext";

const NullAudio = {
    stop() 
};
  
const NullPlayer = {
    play() {
        return NullAudio;
    }
};

const AudioPlayer = () => {
    // Audio Context required using soundfont
    const audioContext = AudioContext && new AudioContext();

    // Soundfont Player
    let soundPlayer = NullPlayer;

    const Player = {
      setInstrument(instrumentName) {
         Soundfont.instrument(AC, instrumentName)
         .then(sfPlayer => {
             soundPlayer = sfPlayer;
         })
         .catch(error => {
             soundPlayer = NullPlayer;
         });
      },  
        playNote(note) {
        soundPlayer.play(note);
        }
    };
    return Player;
};

export default Player;



