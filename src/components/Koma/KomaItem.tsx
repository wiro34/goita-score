import React, { Component } from "react";
import {
  ConnectDragPreview,
  ConnectDragSource,
  DragSource,
  DragSourceConnector,
  DragSourceMonitor,
  DragSourceSpec
} from "react-dnd";
import { Koma, KomaModel } from "./Koma";
import styles from "./Koma.module.scss";

interface Props {
  label: string;
}

interface CollectedProps {
  isDragging: boolean;
  connectDragSource: ConnectDragSource;
  connectDragPreview: ConnectDragPreview;
}

class KomaItem extends Component<Props & CollectedProps> {
  render() {
    const content = <li className={styles.koma}>{this.props.label}</li>;
    return this.props.connectDragPreview(
      this.props.connectDragSource(content, { dropEffect: "move" })
    );
  }
}

const source: DragSourceSpec<Props, Koma> = {
  beginDrag(props: Props) {
    const model = KomaModel.findByLabel(props.label);
    if (!model) {
      throw new Error(`Invalid koma label: ${props.label}`);
    }
    // return object must be plain JavaScript object
    return {
      label: model.label,
      score: model.score
    };
  }
};

const collect = (connect: DragSourceConnector, monitor: DragSourceMonitor) => {
  return {
    isDragging: monitor.isDragging(),
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview()
  };
};

export default DragSource<Props, CollectedProps>(
  KomaModel.typeName,
  source,
  collect
)(KomaItem);
