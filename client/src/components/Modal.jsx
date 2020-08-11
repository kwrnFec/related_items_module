import React, { useState } from 'react';


class Modal extends React.Component {

  onClose(e) {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div id="modal">
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;