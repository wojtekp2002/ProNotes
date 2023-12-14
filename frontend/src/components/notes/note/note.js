import React, { useState } from "react";

function Note (props) {

    const [showElement, setShowElement] = useState(false);

    const toggleElement = () => {
        setShowElement(!showElement);
    }

    const editHandler = () => {
        props.onEdit({
            title: props.title, 
            body: props.body, 
            date: props.date, 
            _id: props.id
        })
    }

    return(
        <div className="note">
            <p onClick={toggleElement}>{props.title}</p>
            {showElement && (
                <div className="description">{props.body}</div>
            )}
            {showElement && (
                <div className="date">{props.date}</div>
            )}
            <button onClick={editHandler}>
                Edytuj</button>
            <button 
                className="delete" 
                onClick={() => props.onDelete(props.id)}>Usuń</button>    
        </div>
    ) 
}

export default Note;  
