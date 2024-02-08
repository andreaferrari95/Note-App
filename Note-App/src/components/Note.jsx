import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

function Note({ title, content, onDelete, id }) {
  return (
    <div className="note" key={id}>
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
  id: PropTypes.string,
};

export default Note;

aaa;
