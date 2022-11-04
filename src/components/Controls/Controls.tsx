import React from "react";
import { useStore } from "../../Zustand/Store";
import styles from "./Controls.module.scss";

interface Props {}

const Controls: React.FC<Props> = ({}) => {
  const [increase, reset] = useStore((s) => [s.increaseCount, s.resetCount]);
  return (
    <div className={styles.controls}>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Controls;
