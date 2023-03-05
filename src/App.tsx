import React, { useState, useEffect } from "react";

import "./App.css";
import Input from "./stories/Input";

var requestURL = "https://api.exchangerate.host/convert?from=USD&to=INR";

function App() {
  const [inputCode, setInputCode] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);

  useEffect(() => {
    const api = async () => {
      const data2 = await fetch(requestURL, {
        method: "GET",
      });
      const jsonData = await data2.json();
      setRate(jsonData.result);
    };

    api();
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    let inputValue = parseInt(event.currentTarget.value);
    let inputByCode = inputValue * 3.6;
    let netPrice = inputByCode * 0.7 + inputByCode;
    if (rate) {
      setInputCode(netPrice / rate + 9);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Code To Coin</h1>
        <div>
          “The best time to plant a tree was 20 years ago. The second best time
          is now.”
        </div>
        <Input
          placeholder="Enter Code Number"
          onChange={(e) => handleChange(e)}
          name="code"
          type="number"
          value={inputCode}
        />
        <div className="viewChanges">
          <span>Cost is: ${Math.ceil(inputCode)}</span>
        </div>
      </header>
    </div>
  );
}

export default App;
