import { useEffect, useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fetchNotes = () => {
    fetch("http://localhost:5000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async () => {
    const response = await fetch(
      "http://localhost:5000/add-note",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      }
    );

    if (response.ok) {
      setTitle("");
      setContent("");
      fetchNotes();
    }
  };

  const deleteNote = async (id) => {
    await fetch(
      `http://localhost:5000/delete-note/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchNotes();
  };

  return (
    <div>
      <h1>📝 Notes</h1>

      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <br />
      <br />

      <textarea
        rows="5"
        cols="50"
        placeholder="Write note..."
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={addNote}>
        Add Note
      </button>

      <hr />

      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>

          <button
            onClick={() =>
              deleteNote(note.id)
            }
          >
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Notes;