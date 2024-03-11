const Card = ({ note, deleteNote }) => (
  <li className="card" id={(note.id).toString()}>
    <button
      onClick={() => {deleteNote(note.id)}}
      className="btn btn_delete"
    ></button>
    <p className="content">{note.content}</p>
  </li>
);

export default Card;