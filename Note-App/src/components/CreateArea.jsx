import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitButton(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          name="title"
          id="title"
          value={note.title}
          onChange={handleChange}
        />
        <p>
          <textarea
            name="content"
            id="content"
            placeholder="Take a note..."
          ></textarea>
        </p>
        <button onClick={submitButton}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
