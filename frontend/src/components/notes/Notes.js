import React from "react";
import './Notes.css'
import Note from './note/note';
import NewNote from "./newNote/newNote";
import Modal from 'react-modal';
import EditNote from "./EditNote/EditNote";

class Notes extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: '2323',
                    title: 'Wykąpać psa',
                    body: 'pamietac o specjalnym szamponie',
                    date: '10.10.2023'
                },
                {
                    id: '4242',
                    title: 'Zakupy',
                    body: 'mleko, jaja, ogór, ser',
                    date: '11.10.2023'
                }
            ],

            showEditModal: false,
            editNote: {}
        };
    };

    fechNotes() {
        
    }

    deleteNote (id) {
        const notes = [...this.state.notes]
                            .filter(note => note.id !== id);
        this.setState({ notes });
        }

    addNote (note) {
        const notes = [...this.state.notes]
        notes.push(note);
        this.setState({ notes });
    }
    
    editNote (note) {
        const notes = [...this.state.notes]
        const index = notes.findIndex(x => x.id === note.id);
        if (index >= 0) {
            notes[index] = note;
            this.setState({ notes });
        }
        this.toggleModal();
    }

    toggleModal () {
        this.setState({showEditModal: !this.state.showEditModal});
    }

    editNoteHandler (note) {
        this.toggleModal();
        this.setState({editNote: note});
    }

    render () {
        return(
            <div>
                <p>Moje notatki: </p>

                <NewNote 
                onAdd = {(note) => this.addNote(note)} />

                <Modal isOpen={this.state.showEditModal} contentLabel="Edytuj notatkę">
                    <EditNote 
                    title={this.state.editNote.title}
                    body={this.state.editNote.body}
                    date={this.state.editNote.date}
                    id={this.state.editNote.id}
                    onEdit={note => this.editNote(note)}/>
                    <button className="editbutton" onClick={() => this.toggleModal()}>Anuluj</button>
                </Modal>

                {this.state.notes.map(note => (
                        <Note 
                            key={note.id}
                            title={note.title}
                            body={note.body}
                            date={note.date}
                            id={note.id}
                            onEdit={(note) => this.editNoteHandler(note)} 
                            onDelete={(id) => this.deleteNote(id)} />
                    )
                )}

            </div>
        );
    }
}

export default Notes;