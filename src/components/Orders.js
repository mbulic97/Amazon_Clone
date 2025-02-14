import React, { useEffect, useState } from 'react'
import {useAuth} from "../context/GlobalState"
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';
import Order from './Order';
import "./Orders.css"
import { db } from '../firebase';
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const {user}= useAuth();
  useEffect(()=>{
    if(user){
      const collRef = collection(db, "users", user?.uid,  "orders");
      const orderedRef = query(collRef, orderBy("created", "desc"));
      onSnapshot(orderedRef, (querySnapshot)=> {
        setOrders(
          querySnapshot.docs.map((doc)=>({
            id: doc.id,
            data: doc.data(),

          }
        )))
      })
    }
    else{
      setOrders([ ])
    }
  },[user]);
  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <div className='orders-order'>
        {orders?.map((order)=> (<Order order={order}/>))}
      </div>
      </div>
  )
}

export default Orders