import React from "react";
import Monday from "./components/Monday";
import Tuesday from "./components/Tuesday";
import Wednesday from "./components/Wednesday";
import Thursday from "./components/Thursday";
import Friday from "./components/Friday";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Прогноз погоды</h1>
        <div className='Days'>
          <Monday />
          <Tuesday />
          <Wednesday />
          <Thursday />
          <Friday />
        </div>
      </header>
    </div>
  );
}

export default App;
