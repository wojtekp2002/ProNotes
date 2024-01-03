import React from "react";
import './Notes.css'
import Note from './note/note';
import NewNote from "./newNote/newNote";
import Modal from 'react-modal';
import EditNote from "./EditNote/EditNote";
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Mainbar from "./Mainbar";

class Notes extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            notes: [],

            showEditModal: false,
            editNote: {}
        };
    };

    componentDidMount () {
        this.fetchNotes();
        
    }

    async fetchNotes() {
       const res = await axios.get("http://localhost:3001/api/notes");
       const notes = res.data;
       
       this.setState({notes});
    }

    async deleteNote (id) {
        const notes = [...this.state.notes]
                            .filter(note => note._id !== id);
        await axios.delete('http://localhost:3001/api/notes/' + id);
        this.setState({ notes });
        }

    async addNote (note) {
        const notes = [...this.state.notes]
        
        try{
        //add to backend
            const res = await axios.post('http://localhost:3001/api/notes', note);
            const newNote = res.data;
        //add to frontend
            notes.push(newNote);
            this.setState({ notes });
        }catch (err){
            NotificationManager.error("Nie można utworzyć pustej notatki");
        }
    }
    
    async editNote (note) {
        //edit backend
        await axios.put('http://localhost:3001/api/notes/' +note._id, note)

        //edit frontend
        const notes = [...this.state.notes]
        const index = notes.findIndex(x => x._id === note._id);
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
                <NotificationContainer/>

                <Mainbar/>

                <p>Moje notatki: </p>

                <NewNote 
                onAdd = {(note) => this.addNote(note)} />

                <Modal isOpen={this.state.showEditModal} contentLabel="Edytuj notatkę">
                    <EditNote 
                    title={this.state.editNote.title}
                    body={this.state.editNote.body}
                    date={this.state.editNote.date}
                    id={this.state.editNote._id}
                    onEdit={note => this.editNote(note)}/>
                    <button className="editbutton" onClick={() => this.toggleModal()}>Anuluj</button>
                </Modal>

                {this.state.notes.map(note => (
                        <Note 
                            key={note._id}
                            title={note.title}
                            body={note.body}
                            date={note.date}
                            id={note._id}
                            onEdit={(note) => this.editNoteHandler(note)} 
                            onDelete={(id) => this.deleteNote(id)} />
                    )
                )}

            </div>
        );
    }
}

export default Notes;