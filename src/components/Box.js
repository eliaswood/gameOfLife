import React from "react";
import PropTypes from "prop-types";

const Box = ({ selectBox, row, col, boxClass, id }) => {
  const selectedBox = () => {
    selectBox(row, col);
  };
  return (
    <div
      onKeyPress={() => {}}
      role="button"
      tabIndex="0"
      aria-label="box"
      className={boxClass}
      id={id}
      onClick={selectedBox}
    />
  );
};

export default Box;

Box.propTypes = {
  selectBox: PropTypes.func,
  row: PropTypes.number,
  col: PropTypes.number,
  boxClass: PropTypes.string,
  id: PropTypes.string,
};

Box.defaultProps = {
  selectBox: () => {},
  row: null,
  col: null,
  boxClass: "",
  id: "",
};
