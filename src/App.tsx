import React, { useState } from "react";

import "./App.css";
import { Button } from "./stories/Button";
import Input from "./stories/Input";

function App() {
  const [value, setValue] = useState<number>(0);

  return (
    <div className="App">
      <header className="App-header">
        Money Exchange
        <p>
          “The best time to plant a tree was 20 years ago. The second best time
          is now.”
        </p>
        <div className="inputSection">
          <Input onInput={(e) => setValue(parseInt(e.currentTarget.value))} />
          <Button label="Button" onClick={() => {}} primary />
        </div>
        <div className="viewChanges">
          <p>{value}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
