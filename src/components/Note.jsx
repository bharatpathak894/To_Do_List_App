import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Timer from './Timer';


function Note(props) {
  function handleClick(event) {
    props.onDelete(props.id);
  }
const currDate=new Date().toLocaleDateString();
  return (
    <div className="note">
      <h3>          Date:{currDate}</h3>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <div className="App">
        <Timer/>
      </div>
    </div>
  );
}

export default Note;
