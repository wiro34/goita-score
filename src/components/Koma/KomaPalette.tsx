import React, { Component } from "react";
import KomaDragPreview from "./KomaDragPreview";
import KomaItem from "./KomaItem";
import { KomaList } from "./Koma";
import styles from "./Koma.module.scss";

class KomaPalette extends Component {
  render() {
    return (
      <ul className={styles.palette}>
        <KomaDragPreview />
        {KomaList.map(model => (
          <KomaItem label={model.label} key={model.label} />
        ))}
      </ul>
    );
  }
}

export default KomaPalette;
