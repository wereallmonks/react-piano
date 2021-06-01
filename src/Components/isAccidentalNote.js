import Notes from '../Constants/Notes';

function isAccidentalNote(note) {
    return (
      
            Notes.includes(note) && note.includes('#')
        
    )
}

export default isAccidentalNote




