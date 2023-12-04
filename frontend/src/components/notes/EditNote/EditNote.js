import React, { useState } from "react";

export default function EditNote (props) {

    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.body);
    const [date, setDate] = useState(props.date);

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

    const editNote = () => {
        const note = {
            title: title,
            body: desc,
            date: date,
            id: props.id
        }
        props.onEdit(note);
    }

    return (
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
            <button onClick={() => editNote()}>Zapisz zmiany</button>
        </div>
    );
};

