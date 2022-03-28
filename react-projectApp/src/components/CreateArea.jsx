import React, { useState } from "react";

export const CreateArea=(props)=> {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="keeper-1">
        <input className="keeper-2"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea className="keeper-3"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote} className="keeper-4">Add</button>
      </form>
    </div>
  );
}

