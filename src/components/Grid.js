import React from "react";
import Proptypes from "prop-types";
import "../index.css";
import Box from "./Box";

// eslint-disable-next-line react/prop-types
const Grid = ({ rows, cols, gridFull, selectBox }) => {
  const width = cols * 14;
  const rowsArr = [];
  console.log(rows);
  console.log(cols);
  let boxClass = "";
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      const boxId = `${i} ${j}`;
      boxClass = gridFull[i][j] ? "box on" : "box off";
      // console.log(boxClass);
      rowsArr.push(
        <Box
          boxClass={boxClass}
          key={boxId}
          boxId={boxId}
          row={i}
          col={j}
          selectBox={selectBox}
        />
      );
    }
  }
  return (
    <div className="grid" style={{ width }}>
      {rowsArr}
    </div>
  );
};

export default Grid;

Grid.propTypes = {
  cols: Proptypes.number,
  rows: Proptypes.number,
  selectBox: Proptypes.func,
  // gridFull: Proptypes.arrayOf().isRequired,
};

Grid.defaultProps = {
  cols: null,
  rows: null,
  selectBox: () => null,
};
