import React from 'react';
import './style.css';

function FluidContainer(props) {
  return <div className='container is-fluid'>{props.children}</div>;
}

export default FluidContainer;
