import { Column, Columns, Container, Section } from "bloomer";
import React, { Component, Fragment } from "react";
import { DragDropContext } from "react-dnd";
import TouchBackend from "react-dnd-touch-backend";
import Header from "./components/Header/Header";
import { KomaDropTarget, KomaPalette } from "./components/Koma";
import { Koma } from "./components/Koma/Koma";
import OrientationOverlay from "./components/OrientationOverlay/OrientationOverlay";
import ScoreIndicator from "./components/ScoreIndicator/ScoreIndicator";
import UndoButton from "./components/UndoButton/UndoButton";
import styles from "./App.module.scss";

enum Side {
  east,
  west
}

interface Score {
  side: Side;
  score: number;
}

interface State {
  scoreStack: Array<Score>;
}

class App extends Component<{}, State> {
  state: State = {
    scoreStack: []
  };

  onEastDrop(koma: Koma) {
    this.setState({
      ...this.state,
      scoreStack: [
        ...this.state.scoreStack,
        { side: Side.east, score: koma.score }
      ]
    });
  }

  onWestDrop(koma: Koma) {
    this.setState({
      ...this.state,
      scoreStack: [
        ...this.state.scoreStack,
        { side: Side.west, score: koma.score }
      ]
    });
  }

  get eastScore(): number {
    return this.state.scoreStack
      .filter(score => score.side === Side.east)
      .reduce((sum, score) => sum + score.score, 0);
  }

  get westScore(): number {
    return this.state.scoreStack
      .filter(score => score.side === Side.west)
      .reduce((sum, score) => sum + score.score, 0);
  }

  undo() {
    const { scoreStack } = this.state;
    this.setState({
      ...this.state,
      scoreStack: scoreStack.slice(0, scoreStack.length - 1)
    });
  }

  render() {
    return (
      <Fragment>
        <Header />

        <Section>
          <Columns isCentered isMobile isGapless>
            <Column hasTextAlign="centered">
              <KomaDropTarget onDrop={koma => this.onWestDrop(koma)}>
                <ScoreIndicator score={this.westScore} />
              </KomaDropTarget>
            </Column>
            <Column hasTextAlign="centered">
              <KomaDropTarget onDrop={koma => this.onEastDrop(koma)}>
                <ScoreIndicator score={this.eastScore} />
              </KomaDropTarget>
            </Column>
          </Columns>
        </Section>

        <Container>
          <div className={styles["undo-button-container"]}>
            <UndoButton onClick={() => this.undo()} />
          </div>
        </Container>

        <Container>
          <KomaPalette />
        </Container>

        <OrientationOverlay />
      </Fragment>
    );
  }
}

export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(App);
