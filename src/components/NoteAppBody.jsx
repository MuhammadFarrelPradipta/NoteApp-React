import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

export default function NoteAppBody({notes , addNote , onDelete}){
    return(
        <div className="note-app__body">
            <NoteInput addNote={addNote} />
            <div className="">
                <h2>Catatan Aktif</h2>
                <NoteList notes ={notes}  onDelete={onDelete}/>
            </div>
        </div>
    )
}