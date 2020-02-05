import React, { useState } from "react";
import { loaders } from "../data.json";
import Loader from "./Loader";

const App = () => {
  const [loaderList, setLoaderList] = useState([]);

  const handleClick = () => {
    if (loaderList.length) {
      setLoaderList([]);
    } else {
      setLoaderList(loaders);
    }
  };

  return (
    <React.Fragment>
      <h1 className="title">Hewllow world react</h1>
      <ul>
        {loaderList.map(loader => (
          <Loader {...loader} key={loader.id} />
        ))}
      </ul>
      <button onClick={handleClick}>Look at learned topics</button>
    </React.Fragment>
  );
};

export default App;
