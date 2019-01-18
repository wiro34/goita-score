import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./FullScreenButton.module.scss";

export enum Orientation {
  landscape = "landscape",
  portrait = "portrait"
}

interface Props {
  orientation: Orientation;
}

interface State {
  fullscreened: boolean;
  fullscreenChangeListener: EventListener;
}

class FullScreenButton extends Component<Props, State> {
  state: State = {
    fullscreened: false,
    fullscreenChangeListener: (e: Event) => {
      this.setState({
        ...this.setState,
        fullscreened: !this.state.fullscreened
      });
    }
  };

  componentDidMount() {
    document.addEventListener(
      "fullscreenchange",
      this.state.fullscreenChangeListener
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      "fullscreenchange",
      this.state.fullscreenChangeListener
    );
  }

  async toggleScreen() {
    try {
      if (this.state.fullscreened) {
        await screen.orientation.unlock();
        await document.exitFullscreen();
      } else {
        await document.body.requestFullscreen();
        await screen.orientation.lock(this.props.orientation);
      }
    } catch (e) {
      console.log("Failed to switch screen", e);
    }
  }

  render() {
    return (
      <a
        onClick={() => this.toggleScreen()}
        className={styles["fullscreen-button"]}
      >
        <FontAwesomeIcon
          icon={this.state.fullscreened ? "compress" : "expand"}
        />
      </a>
    );
  }
}

export default FullScreenButton;
