import React from 'react';
import './style.css'

function FlexContainer(props) {
  return (
    <div className="container is-fluid" id='container'>{props.children}</div>
  );
}

export default FlexContainer;
