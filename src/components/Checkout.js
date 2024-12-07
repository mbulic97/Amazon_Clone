import React from 'react'
import checkoutImg from "../images/checkoutAd.jpg"
import { useAuth } from '../context/GlobalState';
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css"
const Checkout = () => {
    const {user,basket} = useAuth();
  return <div className='checkout'>
      <div className='checkout-left'>
        <img className='checkout-ad' src={checkoutImg}/>
        <h3>Hello, {user?.email}</h3>
        <h2 className='checkout-title'>Your shopping Basket</h2>
        {basket.map((item)=>(
          <CheckoutProduct    
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
        ))}
      </div>
    </div>
};

export default Checkout