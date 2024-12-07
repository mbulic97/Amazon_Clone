import React from 'react'
import startIcon from "../images/icons/star.png"
import "./CheckoutProduct.css"
const CheckoutProduct = ({id, image, title, price, rating, hiddenButton}) => {
  return <div className='checkoutProduct'>
    <img className='checkoutProduct-image' src={image}/>
    <div className='checkoutProduct-info'>
        <p className='checkoutProduct-title'>{title}</p>
        <p className='checkoutProduct-price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='checkoutProduct-rating'>
            {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>
                        <img src={startIcon}/>
                    </p>
                ))
            }
        </div>
        <button>Remove from Basket</button>
    </div>
  </div>
}

export default CheckoutProduct