import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/GlobalState';
import { getBasketTotal } from '../context/AppReducer';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';

const Payment = () => {
  const {basket,user}= useAuth()
  return <div className='payment'>
    <div className='payment-container'>
      <h1>
        Checkout (<Link to="/checkout">{basket.length} items</Link>)
      </h1>
      {/* Delivery Address*/}
      <div className='payment-section'>
        <div className='payment-title'>
          <h3> Delivery Address</h3>
        </div>
        <div className='payment-add'>
          <p>{user?.email}</p>
          <p>Sarajevo, BiH</p>
        </div>
      </div>
      {/* Review Items*/}
      <div className='payment-section'>
        <div className='payment-title'>
          <h3>Review items and delivery</h3>
        </div>
        <div className='payment-items'>
          {basket.map((item) => (
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
        {/* Payment method*/}
        <div className='payment-section'>
          <h3>Payment Method</h3>
          <div className='payment-priceContainer'>
          <CurrencyFormat renderText={(value)=>
            <h3>Order Total : {value}</h3>}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
          </div>
        </div>
    </div>
  </div>
};

export default Payment