import { useState } from "react";
import NoteContext from "./noteContext";
import Alert from "../../components/Alert";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  const host = "http://localhost:5000";
  const authToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmE1M2QwMWEwN2FiNzFiNjUzY2Q4NmNjIiwiZW1haWwiOiJraGFsYXNpU2FoYWpAZ21haWwuY29tIn0sImlhdCI6MTc4Mzg3NzY1OH0.DE8zJqrYZ-KvfrYg9RDBJcrlv9os8OKPWGN10BqdlBE`;

  //Get all notes
  const getAllNotes = async () => {
    const url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });

    const { notes } = await response.json();
    setNotes(notes);
  };

  // Add a note
  const addNote = async ({ title, description, tag }) => {
    const url = `${host}/api/notes/addnote`;
    const data = { title, description, tag };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify(data),
      });

      const note = await response.json();
      setNotes(notes.concat(note));
      <Alert message="Note Successfully Added!" />;
    } catch (error) {
      console.log(error);
      <Alert message="Something is wrong!" />;
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    const url = `${host}/api/notes/deletenote/${id}`;

    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    const url = `${host}/api/notes/updatenote/${id}`;
    const data = { title, description, tag };

    try {
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify(data),
      });

      let newNotes = notes.map((note) => {
        if(note._id === id) return { ...note, title, description, tag };
        return note;
      });

      setNotes(newNotes);
    } catch (error) {
      console.log(error);
      <Alert message="Something is wrong!" />;
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, getAllNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
