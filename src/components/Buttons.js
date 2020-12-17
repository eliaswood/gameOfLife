import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Menu, MenuItem } from "@material-ui/core";

const Buttons = ({
  playButton,
  pauseButton,
  clear,
  slow,
  fast,
  seed,
  gridSize,
}) => {
  const [open, setOpen] = useState(null);

  const handleMenu = (event) => setOpen(event.currentTarget);
  const handleSelect = (val) => {
    // eslint-disable-next-line radix
    gridSize(val);
    setOpen(null);
  };

  return (
    <div className="center">
      <Button onClick={playButton}>Play</Button>
      <Button onClick={pauseButton}>Pause</Button>
      <Button onClick={clear}>Clear</Button>
      <Button onClick={slow}>Slow</Button>
      <Button onClick={fast}>Fast</Button>
      <Button onClick={seed}>Seed</Button>
      <Button onClick={handleMenu}>Grid Size</Button>
      <Menu
        id="size-menu"
        open={Boolean(open)}
        anchorEl={open}
        close={() => setOpen(null)}
      >
        <MenuItem onClick={() => handleSelect(1)} value={1}>
          20x10
        </MenuItem>
        <MenuItem onClick={() => handleSelect(2)} value={2}>
          50x30
        </MenuItem>
        <MenuItem onClick={() => handleSelect(3)} value={3}>
          70x50
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Buttons;

Buttons.propTypes = {
  gridSize: PropTypes.func,
  playButton: PropTypes.func,
  clear: PropTypes.func,
  pauseButton: PropTypes.func,
  slow: PropTypes.func,
  fast: PropTypes.func,
  seed: PropTypes.func,
};

Buttons.defaultProps = {
  gridSize: () => null,
  playButton: () => null,
  clear: () => null,
  pauseButton: () => null,
  slow: () => null,
  fast: () => null,
  seed: () => null,
};
