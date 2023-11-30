import React from "react";

function Note (props) {
    return(
        <div className="note">
            <p>{props.title}</p>
            <div className="description">{props.body}</div>
            <div className="date">{props.date}</div>
            <button>Edytuj</button>
            <button className="delete">Usuń</button>    
        </div>
    );
}

export default Note;  
