import React, { useState } from "react";
import Header from "../components/Header";
import CreateArea from "../components/CreateArea";
import Note from "../components/Note";
import Footer from "../components/Footer";
// import noteSample from "../noteSample";
import { v4 as uuidv4 } from "uuid";

function NoteScreen() {
    const [notes, setNotes] = useState([]);

    function addNote(inputNote) {
        if (inputNote.title !== "" && inputNote.content !== "") {
            setNotes((prevNote) => {
                return [
                    ...prevNote,
                    {
                        key: uuidv4(),
                        title: inputNote.title,
                        content: inputNote.content,
                    },
                ];
            });
        }
    }

    function deleteNote(id) {
        setNotes((prevNote) => {
            // Filter through an "notes" array to get rid of the one that match with "id"
            return prevNote.filter(
                // Loop through each note in previous "notes" array and get the "index" of each note
                (notes, index) => {
                    // Return only note that index "not match" with the id (the note that "match" the id is equal to got delete)
                    return index !== id;
                }
            );
        });
    }

    return (
        <>
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => (
                <Note
                    key={note.key}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />
            ))}
        </>
    );
}

export default NoteScreen;