import React, { Component } from "react";
import {
  ConnectDropTarget,
  DropTarget,
  DropTargetConnector,
  DropTargetMonitor,
  DropTargetSpec
} from "react-dnd";
import { KomaModel } from "./Koma";
import { Koma } from "./Koma";

interface Props {
  children: any;
  onDrop: (koma: Koma) => any;
}

interface CollectedProps {
  isOver: boolean;
  connectDropTarget: ConnectDropTarget;
}

class KomaDropTarget extends Component<Props & CollectedProps> {
  render() {
    return this.props.connectDropTarget(
      <div className="target">{this.props.children}</div>
    );
  }
}

const target: DropTargetSpec<Props> = {
  drop(props: Props, monitor: DropTargetMonitor) {
    const koma: Koma = monitor.getItem();
    props.onDrop(koma);
  }
};

const collect = (connect: DropTargetConnector, monitor: DropTargetMonitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

export default DropTarget<Props, CollectedProps>(
  KomaModel.typeName,
  target,
  collect
)(KomaDropTarget);
