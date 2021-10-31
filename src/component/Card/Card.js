import React from 'react';
// import { useHistory } from "react-router-dom";
import './Card.css';


const Card = ({ name, image, id,price ,handleAddToCart}) => {
  // const url = `/food/${id}`;
  // let history = useHistory()
  // const handleButton = () => {
  //   history.push(url);
  // }
  return (
    <div className=' tc grow bg-lightest-blue br4 pa2 ma3 dib bw2 shadow-5'
      // onClick={handleButton}
    >
      <img className='imageWidth br4 cursor-pointer' alt='drinks' src={`${image}`} />
      <div>
        <h2>{name}</h2>
       
      </div>
      <div className="pricebuttonclass">
        <h3>Price <span className='bb dark-red'>{price}</span> $</h3>
        <button 
        onClick={() => handleAddToCart(price)}
        className='br4 b--none bg-light-blue grow cursor-pointer'>Enroll</button>
      </div>
    </div>
  );
}

export default Card;
