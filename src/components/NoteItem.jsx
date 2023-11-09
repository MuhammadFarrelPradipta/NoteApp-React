import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import NoteItemBody from "./NoteItemBody";

export default function NoteItem({title, body, createdAt,onArchive, id, onDelete}){
return(
    <div className="note-item">
        <NoteItemBody title={title} body={body} createdAt={createdAt}/>
        <DeleteButton id={id} onDelete={onDelete}/>
        <ArchiveButton id={id} onArchive={onArchive} />
    </div>
)
}