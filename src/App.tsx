import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Mainpage from "./components/Mainpage/Mainpage";
import Formation from "./components/Formation/Formation";
import PlayerList from "./components/PlayerList/Playerlist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Mainpage />} />
          <Route path="/form" element={<Formation playerList={""} />} />
          <Route
            path="/list"
            element={
              <PlayerList
                name={""}
                position={""}
                image={""}
                country={""}
                logo={""}
                link={""}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
