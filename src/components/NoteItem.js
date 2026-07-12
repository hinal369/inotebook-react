import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = ({ note }) => {
  const { title, description, tag } = note;
  const { deleteNote } = useContext(noteContext);

  return (
    <div className="col-md-3">
      <div className="card my-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="d-flex">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: 0,
                marginTop: "-17px",
              }}
            >
              <span className="badge rounded-pill bg-danger"> {tag} </span>
            </div>

            <h5 className="card-title">{title}</h5>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i className="fa-solid fa-pen-to-square mx-2"></i>
          </div>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
