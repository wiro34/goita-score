import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./UndoButton.module.scss";

interface Props {
  onClick: () => void;
}

class UndoButton extends Component<Props> {
  handler() {
    this.props.onClick();
  }

  render() {
    return (
      <a onClick={() => this.handler()} className={styles.undo}>
        <FontAwesomeIcon icon="undo-alt" />
      </a>
    );
  }
}

export default UndoButton;
