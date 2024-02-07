import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

function Note({ title, content, onDelete, id }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <MdDelete size={25} />
      </button>
    </div>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Note;
