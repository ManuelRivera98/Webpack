import React, { useState } from "react";
import { loaders } from "../data.json";
import Loader from "./Loader";
import Logo from "../../images/platzi.png";
import Media from "../../video/que-es-core.mp4";

import "../../less/less.less";
import "../../sass/sass.scss";
import "../../stylus/stylus.styl";

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
      <p className="less">This´s Less</p>
      <p className="sass">this´s sass</p>
      <p className="stylus">this´s stylus</p>

      <h1 className="title">Hewllow world react</h1>
      <video src={Media} width="360" controls poster={Logo}></video>
      <p>
        <img src={Logo} alt="logo" width="60" />
      </p>
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
