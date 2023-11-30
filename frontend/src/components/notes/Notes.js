import React from "react";
import './Notes.css'
import Note from './note/note';

class Notes extends React.Component {
    
    constructor (props) {
        super(props);

        this.notes = [
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

        ]
    }

    render () {
        return(
            <div>
                <p>Moje notatki: </p>

                {this.notes.map(note => {
                    return (
                        <Note 
                        title={note.title}
                        body={note.body}
                        date={note.date}
                        id={note.id} 
                        />
                    )
                })};

            </div>
        )
    }
}

export default Notes;