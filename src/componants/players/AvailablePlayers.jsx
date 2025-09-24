import React, { use, useState } from "react";
import DisplayPlayers from "./DisplayPlayers";
import SelectedPlayers from "./SelectedPlayers";


const AvailablePlayers = ({ playersPromise,setAvailableBalance,availableBalance }) => {
  const players = use(playersPromise);
   
  const [toggleStates, setToggleStates] = useState(true);
  const [selectPersons, setSelectPersons] = useState([]);



  const deletPerson = (person) =>{
    if (selectPersons.find(ply => ply.id === person.id)) {
     
      setSelectPersons(selectPersons.filter(ply => ply.id !== person.id))
      setAvailableBalance(availableBalance + person.price_usd);
      
    }
    
    
  }
  
  const player = players.map((player, id) => (
    <DisplayPlayers key={id} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player} selectPersons={selectPersons} setSelectPersons={setSelectPersons}></DisplayPlayers>
  ));

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center mt-10 max-w-7xl mx-auto px-10">
        <h1 className="text-xl font-semibold">{toggleStates === true ? `Available Players (${selectPersons.length} / ${players.length - selectPersons.length})` : `Selected Players (${selectPersons.length} / 6)`}</h1>
        <div className="flex border-2 border-teal-700 rounded-lg">
          <button onClick={() => setToggleStates(true)}
            className={`btn hover:bg-teal-500 hover:text-white border-0 rounded-r-none  text-sm text-teal-600 ${toggleStates == true ? "bg-teal-600 text-white" : ""}`}
            type="button"
          >
            Available
          </button>
          <button onClick={() => setToggleStates(false)}
            className={`btn hover:bg-teal-500 hover:text-white border-0 rounded-l-none text-sm text-teal-600 ${toggleStates === false ? "bg-teal-500 text-white" : ""}`}
            type="button"
          >
            Selected <span>( {selectPersons.length} )</span>
          </button>
        </div>
      </div>

      {toggleStates === true ? (
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mt-2  gap-5 md:mt-5 max-w-7xl mx-auto px-10">
          {player}
        </div>
      ) : (
        <SelectedPlayers deletPerson={deletPerson} selectPersons={selectPersons}></SelectedPlayers>
      )}
    </>
  );
};
export default AvailablePlayers;
