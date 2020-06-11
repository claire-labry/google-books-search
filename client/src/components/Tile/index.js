import React from 'react';
import './style.css';

function Tile(props) {
  return <div className='tile'>{props.children}</div>;
}

export default Tile;
