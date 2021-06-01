import NOTES from '../Constants/Notes';

//  Get all the notes between start note and end note.
export default function MidNotes(startNote, endNote) {
  const startingIndex = NOTES.indexOf(startNote);
  const endingIndex = NOTES.indexOf(endNote);
  return NOTES.slice(startingIndex, endingIndex + 1);
}