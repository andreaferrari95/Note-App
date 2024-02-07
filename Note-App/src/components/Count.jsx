import PropTypes from "prop-types";

function Count({ count }) {
  return (
    <div className="count">
      <h4>{count}</h4>
    </div>
  );
}

Count.propTypes = {
  count: PropTypes.string,
};

export default Count;
