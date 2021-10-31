import {React} from 'react';
import Card from './Card';

const CardList = ({ data ,handleAddToCart}) => {

 

  return (
    <div className='tc'>
      {
        data.map((user, i) => {
          return (
            <Card
              key={i}
              id={data[i].id}
              name={data[i].courseName}
              image={data[i].img}
              price={data[i].price}
              handleAddToCart={handleAddToCart}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;