import React, { useState, useEffect } from "react";

import "./App.css";
import Input from "./stories/Input";

type resultProps = {
  result: number;
};
var requestURL = "https://api.exchangerate.host/convert?from=USD&to=INR";

function App() {
  const [inputCode, setInputCode] = useState(0);
  const [rate, setRate] = useState<number>();

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
      setInputCode(netPrice / rate);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        Code To Coin
        <p>
          “The best time to plant a tree was 20 years ago. The second best time
          is now.”
        </p>
        <Input
          placeholder="Enter Code Number"
          onChange={(e) => handleChange(e)}
          name="code"
          type="number"
          value={inputCode}
        />
        <div className="viewChanges">
          <p>${Math.ceil(inputCode)}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
