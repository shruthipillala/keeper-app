import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [notes, setNote] = useState([]);
  function addNote(note) {
    setNote(Prevval => [...Prevval, note])
    console.log(note);
  }
  function deleteNote(id) {
    console.log("delete was triggered");
    setNote(prevval => {
      return prevval.filter((noteItem, index) => index !== id)//filter out the note with the given id     
    })
  }
  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}//pass function addNote as prompt
      />
      {notes.map((noteItem, index) => {
        return < Note
          key={index}
          id={index}
          title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}
export default App;
