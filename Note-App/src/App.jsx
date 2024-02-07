import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Count from "./components/Count";
import Footer from "./components/Footer";
import "./styles/App.css";
import { onSnapshot, addDoc, doc, deleteDoc } from "firebase/firestore";
import { notesCollection, dataBase } from "../firebase";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
      const notesArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNotes(notesArray);
    });

    return unsubscribe;
  }, []);

  async function addNote(newNote) {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });

    addDoc(notesCollection, newNote);
  }

  async function deleteNotes(id) {
    const docRef = doc(dataBase, "notes", id);
    await deleteDoc(docRef);
  }

  return (
    <div className="App">
      <Header />
      <Count
        count={notes.length >= 0 ? "You have " + notes.length + " Notes" : ""}
      />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={note.id}
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
