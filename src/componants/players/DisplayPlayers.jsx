import React, { useState } from "react";
import { FaRegUser, FaFlag } from "react-icons/fa6";
// import SelectedPlayers from "./SelectedPlayers";
import AvailablePlayers from "./AvailablePlayers";

const DisplayPlayers = ({
  player,
  selectPersons,
  setSelectPersons,
  setAvailableBalance,
  availableBalance,
}) => {
  // console.log(player);
  const {
    name,
    image,
    battingStyle,
    bowlingStyle,
    district,
    price_usd,
    role,
    rating,
  } = player;

  const [personSelect, setSersonSelect] = useState(false);

  const selectedHandler = (player, trutyValue) => {
    if (selectPersons.length >= 6) {
      alert("Limit reached! You can only select 6 players.");
      return 0;
    }

    if (availableBalance < player.price_usd) {
      alert("Not enough balance to add this player.");
      return 0;
    }

    setSelectPersons([...selectPersons, player]);
    setSersonSelect(trutyValue);
    setAvailableBalance(availableBalance - player.price_usd);
  };

  return (
    <>
      <div class="card bg-base-100 shadow-md lg:w-96 hover:shadow-lg p-3 w-full">
        <figure className="overflow-hidden">
          <img className=" rounded-lg w-full h-60" src={image} alt="Shoes" />
        </figure>
        <div class="card-body ">
          <div className="flex gap-1 items-center text-base font-semibold">
            <FaRegUser
              className={`rounded-full text-2xl p-1 ${
                role === "All-rounder"
                  ? "bg-green-100 text-green-600"
                  : role === "Batsman"
                  ? `bg-blue-100 text-blue-600`
                  : role === "Bowler"
                  ? `bg-rose-100 text-rose-600`
                  : `bg-purple-100 text-purple-600`
              }`}
            ></FaRegUser>
            <h1>{name}</h1>
          </div>
          <div className="flex justify-between items-center text-base font-sans border-b-2 pb-3 border-gray-200">
            <h1 className="flex gap-1 items-center">
              <FaFlag className="text-teal-600" /> {district}
            </h1>
            <h1
              className={`px-4 py-1 rounded-md ${
                role === "All-rounder"
                  ? "bg-green-100 text-green-600"
                  : role === "Batsman"
                  ? `bg-blue-100 text-blue-600`
                  : role === "Bowler"
                  ? `bg-rose-100 text-rose-600`
                  : `bg-purple-100 text-purple-600`
              }`}
            >
              {role}
            </h1>
          </div>
          <div className="text-sm font-medium">
            <h1>
              Rating: <span className="font-light text-base">{rating}</span>
            </h1>
            <h1>{battingStyle}</h1>
            <h1>{bowlingStyle}</h1>
          </div>
          <div className="flex justify-between items-center text-sm font-medium">
            <h1>
              Price:{" "}
              <span className="font-light text-base">${price_usd} USD</span>
            </h1>
            <button
              onClick={() => {
                selectedHandler(player, true);
              }}
              disabled={personSelect}
              className={`btn bg-teal-600 text-white rounded-md hover:bg-transparent hover:border-2 hover:border-teal-300 hover:text-black shadow-lg ${
                personSelect == true ? "!bg-red-400" : ""
              }`}
            >
              {personSelect == true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayPlayers;
