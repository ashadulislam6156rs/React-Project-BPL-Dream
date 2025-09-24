import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./componants/navbar/Navbar";
import AvailablePlayers from "./componants/players/AvailablePlayers";
import Banner from "./componants/banner/banner";

const playersPromiseFunc = async () => {
  const playersPromise = await fetch("/players.json");
  return playersPromise.json();
};

const playersPromise = playersPromiseFunc();
function App() {
  const [availableBalance, setAvailableBalance] = useState(1000000);
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar availableBalance={availableBalance}></Navbar>
        <Suspense
          fallback={
            <div className="flex justify-center items-center p-10 text-teal-600 gap-1">
              <span class="loading loading-dots loading-xs"></span>
              <span class="loading loading-dots loading-sm"></span>
              <span class="loading loading-dots loading-md"></span>
              <span class="loading loading-dots loading-lg"></span>
              <span class="loading loading-dots loading-xl"></span>
            </div>
          }
        >
          <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
      </div>
    </>
  );
}

export default App;
