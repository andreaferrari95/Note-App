import { useState } from "react";

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Count from "./components/Count";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  function addNote(newNote) {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((prevNote) => {
      return [...prevNote.filter((note, index) => index !== id)];
    });
  }

  return (
    <div className="App">
      <Header />
      <Count
        count={
          notes.length === 0
            ? "There are no notes"
            : "You have " + notes.length + " Notes"
        }
      />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
