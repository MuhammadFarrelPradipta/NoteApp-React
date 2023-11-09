import React from "react";
import NoteInputBody from "./NoteInputBody";
import NoteInputHeader from "./NoteInputHeader";

function NoteInput({addNote}){
return(
    <div>
        <NoteInputHeader/>
        <NoteInputBody addNote={addNote}/>
    </div>
)
}

export default NoteInput
