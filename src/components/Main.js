import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Grid from "./Grid";
import "../index.css";

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

const Main = () => {
  const [speed, setSpeed] = useState(100);
  const [cols, setCols] = useState(50);
  const [rows, setRows] = useState(30);
  const [generation, setGeneration] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [gridFull, setGridFull] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill(false))
  );

  const selectBox = (row, col) => {
    const gridCopy = arrayClone(gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    setGridFull(gridCopy);
  };

  const play = () => {
    const g = gridFull;
    const g2 = arrayClone(gridFull);

    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
        let count = 0;
        if (i > 0) if (g[i - 1][j]) count += 1;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count += 1;
        if (i > 0 && j < cols - 1) if (g[i - 1][j + 1]) count += 1;
        if (j < cols - 1) if (g[i][j + 1]) count += 1;
        if (j > 0) if (g[i][j - 1]) count += 1;
        if (i < rows - 1) if (g[i + 1][j]) count += 1;
        if (i < rows - 1 && j > 0) if (g[i + 1][j - 1]) count += 1;
        if (i < rows - 1 && j < cols - 1) if (g[i + 1][j + 1]) count += 1;
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        if (!g[i][j] && count === 3) g2[i][j] = true;
      }
    }
    setGridFull(g2);
    setGeneration(generation + 1);
  };

  const seed = () => {
    const gridCopy = arrayClone(gridFull);
    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }
    setGridFull(gridCopy);
  };

  const playButton = () => {
    clearInterval(intervalId);
    setIntervalId(setInterval(play, speed));
  };

  const pauseButton = () => {
    clearInterval(intervalId);
  };

  const slow = () => {
    setSpeed(1000);
    playButton();
  };

  const fast = () => {
    setSpeed(100);
    playButton();
  };

  const clear = () => {
    clearInterval(intervalId);
    const grid = Array(rows)
      .fill()
      .map(() => Array(cols).fill(false));
    setGridFull(grid);
    setGeneration(0);
  };

  const gridSize = (size) => {
    switch (size) {
      case 1:
        setCols(20);
        setRows(10);
        break;
      case 2:
        setCols(50);
        setRows(30);
        break;
      default:
      case 3:
        setCols(70);
        setRows(50);
    }
    clear();
  };

  useEffect(() => {
    playButton();
    seed();
  }, [speed, cols, rows]);

  return (
    <div>
      <h1>The Game of Life</h1>
      <Buttons
        playButton={playButton}
        pauseButton={pauseButton}
        slow={slow}
        fast={fast}
        clear={clear}
        seed={seed}
        gridSize={gridSize}
      />
      <Grid gridFull={gridFull} rows={rows} cols={cols} selectBox={selectBox} />
      <h2>Generations: {generation}</h2>
    </div>
  );
};

export default Main;
