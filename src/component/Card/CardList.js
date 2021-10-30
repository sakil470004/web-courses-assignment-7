import React from 'react';
import Card from './Card';

const CardList = ({ data }) => {
  return (
    <div className= 'tc'>
      {
        data.map((user, i) => {
          return (
            <Card 
              key={i}
              id={data[i].id}
              name={data[i].courseName}
              image={data[i].img}
             
              />
          );
        })
      }
    </div>
  );
}

export default CardList;