import PropTypes from "prop-types";

const Note = ({ note }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.content}</p>
        <p className="card-text">{note.completed ? "Completed" : "Pending"}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
          }}
        >
          <span
            className="badge"
            style={{
              backgroundColor: note.tag.color,
              padding: "0.5rem",
            }}
          >
            {note.tag.name}
          </span>
          <span
            className="badge"
            style={{
              backgroundColor: note.tag.color,
              padding: "0.5rem",
            }}
          >
            {new Date(note.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired,
};

export default Note;
