import { TAGS } from "../utils/constants";
import { useState } from "react";

export default function AddModal({ onAdd }) {
	const [note, setNote] = useState({
		title: "",
		content: "",
		tag: TAGS[0].name,
	});

	return (
		<div className="modal fade" id="add-modal">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="exampleModalLabel">
							Add Note
						</h1>
						<button
							type="button"
							className="btn-close"
							id="close-add-modal"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<input
							type="text"
							className="form-control mb-3"
							value={note.title}
							placeholder="Title"
							onChange={(e) => {
								setNote((prev) => {
									return {
										...prev,
										title: e.target.value,
									};
								});
							}}
						/>

						<textarea
							className="form-control mb-3"
							placeholder="Content"
							value={note.content}
							onChange={(e) => {
								setNote((prev) => {
									return {
										...prev,
										content: e.target.value,
									};
								});
							}}
						></textarea>

						<select
							className="form-select mb-3"
							value={note.tag}
							onChange={(e) => {
								setNote((prev) => {
									return {
										...prev,
										tag: e.target.value,
									};
								});
							}}
						>
							{TAGS.map((tag) => (
								<option key={tag.name} value={tag.name}>
									{tag.name}
								</option>
							))}
						</select>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Cancel
						</button>
						<button
							onClick={() => {
								onAdd?.({ ...note });
								setNote({
									title: "",
									content: "",
									tag: TAGS[0].name,
								});
								const closeAddModal =
									document.getElementById("close-add-modal");
								closeAddModal.click();
							}}
							type="button"
							className="btn btn-primary"
						>
							Add
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
