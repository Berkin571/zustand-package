import React from "react";
import "./App.scss";
import Controls from "./components/Controls/Controls";
import { Count } from "./components/Count/Count";

interface Props {}

export const App: React.FC = ({}) => {
  return (
    <div>
      <Count />
      <Controls />
    </div>
  );
};

export default App;
