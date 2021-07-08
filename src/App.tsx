import React, { useState } from "react";
import GodClock from "./components/GodClock/GodClock";

function App() {
  const [value, setValue] = useState(30)

const onClickHandler = (value: number) => {
  setValue(value);
};

  return (
      <GodClock changeHourSlug={onClickHandler} hoursInADay={value} />
  );
}

export default App;
