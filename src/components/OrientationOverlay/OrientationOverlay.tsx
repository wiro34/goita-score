import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./OrientationOverlay.module.scss";

class OrientationOverlay extends Component {
  render() {
    return (
      <div className={styles.overlay}>
        <p className={styles.guide}>
          フルスクリーン <FontAwesomeIcon icon="arrow-up" />
        </p>
        <p className={styles.announce}>
          横向きで
          <br />
          ご利用ください
        </p>
      </div>
    );
  }
}

export default OrientationOverlay;
