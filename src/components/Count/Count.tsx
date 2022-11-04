import React from "react";
import { useStore } from "../../Zustand/Store";
import styles from "./Count.module.scss";

interface Props {}

export const Count: React.FC<Props> = ({}) => {
  const count = useStore((s) => s.count);

  return <div className={styles.count}>{count}</div>;
};
