import React from "react";

function Note(props) {
  function handelClick(){
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      {/* <h1>{props.id}</h1> */}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>props.onDelete(props.id)}>DELETE</button>
    </div>
  );
}

export default Note;
