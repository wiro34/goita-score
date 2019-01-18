import { Column, Columns, Container, Section } from "bloomer";
import React, { Component, Fragment } from "react";
import { DragDropContext } from "react-dnd";
import TouchBackend from "react-dnd-touch-backend";
import Header from "./components/Header/Header";
import { KomaDropTarget, KomaPalette } from "./components/Koma";
import { Koma } from "./components/Koma/Koma";
import ScoreIndicator from "./components/ScoreIndicator/ScoreIndicator";
import "./App.css";

interface State {
  westScore: number;
  eastScore: number;
}

class App extends Component<{}, State> {
  state: State = {
    westScore: 0,
    eastScore: 0
  };

  onEastDrop(koma: Koma) {
    this.setState({
      ...this.state,
      eastScore: this.state.eastScore + koma.score
    });
  }

  onWestDrop(koma: Koma) {
    this.setState({
      ...this.state,
      westScore: this.state.westScore + koma.score
    });
  }

  render() {
    return (
      <Fragment>
        <Header />

        <Section>
          <Container>
            <Columns isCentered isMobile isGapless>
              <Column hasTextAlign="centered">
                <KomaDropTarget onDrop={koma => this.onWestDrop(koma)}>
                  <ScoreIndicator score={this.state.westScore} />
                </KomaDropTarget>
              </Column>
              <Column hasTextAlign="centered">
                <KomaDropTarget onDrop={koma => this.onEastDrop(koma)}>
                  <ScoreIndicator score={this.state.eastScore} />
                </KomaDropTarget>
              </Column>
            </Columns>
          </Container>
        </Section>

        <Container>
          <KomaPalette />
        </Container>
      </Fragment>
    );
  }
}

export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(App);
