import { Outlet } from "react-router-dom";

import "./App.css";
import { useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.info(result);
      });
  }, []);
  return (
    <>
      <main className="main-container">
        <Outlet />
      </main>
      <NavBar />
    </>
  );
}

export default App;
