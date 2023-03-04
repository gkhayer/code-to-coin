import React, { useState, useEffect } from "react";

import "./App.css";
import Input from "./stories/Input";

type resultProps = {
  result: number;
};
var requestURL = "https://api.exchangerate.host/convert?from=INR&to=USD";

function App() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState<resultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data2 = await fetch(requestURL, {
        method: "GET",
      });
      const jsonData = await data2.json();
      setData(jsonData.result);
    };

    api();
  }, []);

  const handleQuery = async () => {
    var myHeaders = new Headers();
    myHeaders.append("access_key", "UYagxQXK9SnfgX5RGq2jkM3mSQYASX0v");
    fetch(requestURL, {
      method: "GET",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin",
    })
      .then((res) => res.json())
      .then((data2) => {
        setData(data2);
      });
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(parseInt(event.currentTarget.value));
  };

  // first input (india rate)
  const handleCode = () => {
    if (!value) {
      return;
    }
    return value * 3.6;

    // get conversion rate api
    // add shipping value
    // add gain
    // ceil price
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
          value={value}
        />
        {/* <Button label="Coin Value" onClick={() => handleClick()} primary /> */}
        <div className="viewChanges">
          <p>{handleCode()}</p>
        </div>
        {/* <button onClick={handleQuery}>test</button> */}
        <p>{data && JSON.stringify(data)}</p>
      </header>
    </div>
  );
}

export default App;
