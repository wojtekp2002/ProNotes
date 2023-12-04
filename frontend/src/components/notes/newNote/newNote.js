import React, { useState } from "react";

function NewNote (props) {

    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');

    const changeTitleHandler = event => {
        const value = event.target.value;
        setTitle(value);
    }

    const changeDescHandler = (event) => {
        const value = event.target.value;
        setDesc(value);
      };
    
    const changeDateHandler = (event) => {
        const value = event.target.value;
        setDate(value);
      };

    const addNote = () => {
        const note = {
            title: title,
            body: desc,
            date: date
        };
        props.onAdd(note);

        setTitle('');
        setDesc('');
        setDate('');
        setShowForm(false);
    }

    return(
        showForm ? (
            <div className="note">
                <label>Tytuł: </label>
                <input type="text" value={title} onChange={changeTitleHandler}/>
                <br/>
                <label>Opis: </label>
                <input type="text" value={desc} onChange={changeDescHandler}/>
                <br/>
                <label>Data: </label>
                <input type="date" value={date} onChange={changeDateHandler}/>
                <br/>
                <button onClick={() => addNote()}>Dodaj</button>
            </div>
        ) : (
            <button className="mainbutton" onClick={() => setShowForm(true)}>Dodaj nową notatke</button>
        )
        
    );
}

export default NewNote;