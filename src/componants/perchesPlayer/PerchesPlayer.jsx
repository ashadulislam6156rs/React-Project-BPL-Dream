import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";



const deletPersonHandler = (deletPerson,person) => {
    deletPerson(person);
    
}

const PerchesPlayer = ({ person,deletPerson }) => {
  const { name, image, battingStyle, role } = person;
//   console.log(name);

  return (
    <div>
      <div className="flex justify-between items-center border-2 border-gray-200 rounded-lg p-2 md:p-3">
        <div className="flex items-center gap-4 p-2">
          <figure className="overflow-hidden">
            <img className=" rounded-lg w-full h-20 md:h-32" src={image} alt="Shoes" />
          </figure>
          <div className="md:text-base text-sm font-semibold space-y-2">
            <h1>{name}</h1>
            <h1>{battingStyle}</h1>
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
        </div>
        <div>
          <button onClick={() => {deletPersonHandler(deletPerson,person)}} className="cursor-pointer">
            <FaRegTrashCan className="text-red-500 text-xl md:mr-5"></FaRegTrashCan>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerchesPlayer;
