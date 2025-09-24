import React from 'react';
import PerchesPlayer from '../perchesPlayer/PerchesPlayer';

const SelectedPlayers = ({selectPersons,deletPerson}) => {
    // console.log(selectPersons);

    const person = selectPersons.map((person,id) => <PerchesPlayer deletPerson={deletPerson} person={person} key={id}></PerchesPlayer>)
    
    return (
        <div className='mt-10 max-w-7xl mx-auto px-10 space-y-3 pb-10'>
            {person}
        </div>
    );
};

export default SelectedPlayers;