const Note = ({ title, date, content, completed, tag }) => {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{content}</p>
				<p className="card-text">{completed ? "Completed" : "Pending"}</p>
				<span className="badge" style={{ backgroundColor: tag.color }}>
					{tag.name}
				</span>
			</div>
		</div>
	);
};

export default Note;
