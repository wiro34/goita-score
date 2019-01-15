import React, { Component } from "react";
import Circle from "react-circle";
import styles from "./ScoreIndicator.module.scss";

interface Props {
  score: number;
}

const SIZE = "150";
const WINNING_SCORE = 150;

class ScoreIndicator extends Component<Props> {
  percentage() {
    return (Math.min(this.props.score, WINNING_SCORE) / WINNING_SCORE) * 100;
  }

  color() {
    const hue = (this.percentage() / 100.0) * 360;
    return "hsl(" + hue + ", 90%, 50%)";
  }

  render() {
    return (
      <div className={styles.container}>
        <Circle
          progress={this.percentage()}
          size={SIZE}
          percentSpacing={10}
          progressColor={this.color()}
          showPercentage={false}
        />
        <span className={styles.text}>{this.props.score}</span>
      </div>
    );
  }
}

export default ScoreIndicator;
