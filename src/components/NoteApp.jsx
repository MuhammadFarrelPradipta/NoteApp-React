import React from "react";
import { getInitialData } from "../utils";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        };
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler(newNote) {
        this.setState((prevState) => ({
            notes: [...prevState.notes, newNote],
        }));
    }

    render() {
        return (
            <div>
                <NoteAppHeader />
                <NoteAppBody
                    notes={this.state.notes}
                    onDelete={this.onDeleteHandler}
                    addNote={this.onAddNoteHandler} // Keep the prop if you plan to use it
                />
            </div>
        );
    }
}

export default NoteApp;
