# Piano App using React!

## Steps:

### Initialize a react app called "react-piano"
npm create-react-app react-piano

### Install the soundfont-player
npm i soundfont-player
--
https://www.npmjs.com/package/soundfont-player

#### Components

The AudioContext and AudioPlayer components are files that contain the AudioContext and the instrument name (which is rendered through the setInstrument method and also contains the PlayNote method as well).

Afterwards, the PianoAudio file will utilize  the AudioPlayer component which contains the notes and instrument type. 

The PianoAudio, MidNotes, and isAccidentalNotes (notes and #) will be imported into the Instrument file. The props in the Instrument constant define the piano itself, utilizing the keyboardMap as the expression of the notes.

Finally, the Instrument file is imported into the Piano file which will actually play the piano through the App.js file.