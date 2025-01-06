import { useEffect, useMemo, useState } from "react";
import { TAGS } from "./utils/constants";
import Note from "./components/Note";
import AddModal from "./components/AddModal";

function App() {
  /**
   * - title
   * - content
   * - tag
   * - date
   * - completed
   */
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const getNotes = useMemo(() => {
    if (search === "") {
      return notes;
    }
    return notes.filter((note) => {
      return note.title.toLowerCase().includes(search.toLowerCase());
    });
  }, [notes, search]);

  useEffect(() => {
    if (notes.length > 0) {
      const notesStr = JSON.stringify(notes);
      localStorage.setItem("notes", notesStr);
    }
  }, [notes]);

  useEffect(() => {
    const notesStr = localStorage.getItem("notes");
    if (notesStr) {
      setNotes(JSON.parse(notesStr));
    }
  }, []);

  return (
    <>
      <div
        style={{
          width: "1024px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {/* Serarch Bar  */}
        <div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="form-control"
          />
        </div>
        {/* Tags and Add Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              flex: 1,
            }}
          >
            {TAGS.map((tag) => (
              <span
                key={tag.name}
                className="badge m-1"
                style={{
                  backgroundColor: tag.color,
                }}
              >
                {tag.name}
              </span>
            ))}
          </div>
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add-modal"
          >
            Add
          </button>
        </div>
        {/* Notes */}
        <div
          style={{
            paddingTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {getNotes.map((note) => (
            <Note key={note.title} note={note} />
          ))}
        </div>
      </div>
      {/* Add Modal */}
      <AddModal
        onAdd={(note) => {
          const tag = TAGS.find((tag) => tag.name === note.tag);
          setNotes((prev) => {
            const updatedNote = {
              ...note,
              tag: tag,
              date: new Date(),
              completed: false,
            };
            return [updatedNote, ...prev];
          });
        }}
      />
    </>
  );
}

export default App;
