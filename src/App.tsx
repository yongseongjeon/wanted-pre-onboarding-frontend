import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeConfigs } from "./route";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routeConfigs.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

