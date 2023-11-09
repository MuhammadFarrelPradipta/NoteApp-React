import React from "react";

class NoteInputBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            createdAt: '',
            archived: false,
            maxTitleLength: 50,
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState((prevState) => ({
            title: event.target.value,
            
        }));
    }

    onBodyChangeEventHandler(event) {
        this.setState((prevState) => ({
            body: event.target.value,
        }));
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        const newNote = {
            id: +new Date(),
            title: this.state.title,
            body: this.state.body,
            createdAt: new Date().toISOString(),
            archived:false
        };
        this.props.addNote(newNote);
    }

    render() {
        return (
            <form action="" className="note-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder="Ini adalah judul ..." onChange={this.onTitleChangeEventHandler} value={this.state.title} />
                <textarea name="" id="" cols="30" rows="10" placeholder="Tuliskan Catatanmu Disini..." onChange={this.onBodyChangeEventHandler} value={this.state.body}></textarea>
                <button type="submit">Buat</button>
            </form>
        );
    }
}

export default NoteInputBody;
