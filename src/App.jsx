import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import TranscationList from "./Components/TranscationList";
import AddTransaction from "./Components/AddTransaction";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <h1 className="flex flex-col mt-8 mx-[38rem]">
      
        <h1 className="flex items-center justify-center">
          <Header />
        </h1>
        <body className="flex items-start flex-col ">
          <Balance />
          <IncomeExpenses/>
          <TranscationList/>
          <AddTransaction/>
        </body>
      </h1>
    </GlobalProvider>
  );
}

export default App;
