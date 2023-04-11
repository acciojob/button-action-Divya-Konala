import React, { useState } from "react";
import './../styles/App.css';
import Page from "./Page";

const App = (props) => {

  return (
    <div className="App" id="main">
      {/* // Do not alter the main div */}
      <Page/>
    </div>
  );
}

export default App
