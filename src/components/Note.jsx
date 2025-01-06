import PropTypes from "prop-types";

const Note = ({ note }) => {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{note.title}</h5>
				<p className="card-text">{note.content}</p>
				<p className="card-text">{note.completed ? "Completed" : "Pending"}</p>
				<span className="badge" style={{ backgroundColor: note.tag.color }}>
					{note.tag.name}
				</span>
			</div>
		</div>
	);
};

Note.propTypes = {
	note: PropTypes.object.isRequired,
};

export default Note;
