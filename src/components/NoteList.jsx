import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({notes, onDelete, onArchive }){
return(
    <div className="notes-list">
        {notes.length === 0 ?(
            <p>Tidak ada </p>
        ):(
            notes.map((note) => (
                <NoteItem 
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onArchive = {onArchive}
                {...note}
                />
            ))
        )}
    </div>
)
}