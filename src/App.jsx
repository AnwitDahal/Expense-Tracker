import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";

function App() {
  return (
    <>
      <h1 className="flex flex-col mt-8 mx-[38rem]">
        <h1 className="flex items-center justify-center">
          <Header />
        </h1>
        <body className="flex items-start ">
          <Balance />
        </body>
      </h1>
    </>
  );
}

export default App;
