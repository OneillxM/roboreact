

import React from 'react';
import Card from './card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user,i) => {
      
       return (<Card
         key={i}
         id={robots[i].id}
         name={robots[i].name} 
         email={robots[i].email} />
       );   //when looping always send a key prop so that incase a card is deleted the console knows which card was deleted
    });
    return(
    <div>
     
     {cardComponent}

    </div>
    );
}



export default CardList;