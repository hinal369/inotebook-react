import { useContext, useState } from "react";
import NoteContext from "./noteContext";
import alertContext from "../alert/alertContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  const host = process.env.REACT_APP_BACKEND_URL;
  const authToken = process.env.REACT_APP_AUTH_TOKEN;

  const context = useContext(alertContext);
  const { showAlert } = context;

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
      showAlert("Note added successfully!", "success");
    } catch (error) {
      console.log(error);
      showAlert("Something is wrong!", "danger");
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
    showAlert("Note deleted successfully!", "success");
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
        if (note._id === id) return { ...note, title, description, tag };
        return note;
      });

      setNotes(newNotes);
      showAlert("Note updated successfully!", "success");
    } catch (error) {
      console.log(error);
      showAlert("Something is wrong!", "danger");
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
