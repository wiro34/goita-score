import classnames from "classnames";
import React, { Component } from "react";
import { DragLayer, DragLayerMonitor, XYCoord } from "react-dnd";
import styles from "./Koma.module.scss";

interface Props {
  label: string;
  currentOffset: XYCoord | null;
  isDragging: boolean;
}

class KomaDragPreview extends Component<Props> {
  style() {
    if (!this.props.currentOffset) {
      return { display: "none" };
    }

    const x = this.props.currentOffset.x;
    const y = this.props.currentOffset.y;
    const transform = `translate(${x}px, ${y}px)`;

    return {
      transform: transform,
      WebkitTransform: transform
    };
  }

  render() {
    return (
      <li
        className={classnames(styles.koma, styles.preview)}
        style={this.style()}
      >
        {this.props.label}
      </li>
    );
  }
}

const collect = (monitor: DragLayerMonitor): Props => {
  const item = monitor.getItem();
  const isco = monitor.getInitialSourceClientOffset();
  const co = monitor.getClientOffset();
  const ico = monitor.getInitialClientOffset();
  const offset =
    co && ico && isco ? { x: co.x - ico.x + isco.x, y: co.y - ico.y } : null;
  return {
    label: item && item.label,
    currentOffset: offset,
    isDragging: monitor.isDragging()
  };
};

export default DragLayer(collect)(KomaDragPreview);
