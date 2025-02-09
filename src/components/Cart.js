import React from 'react'
import { useSelector } from 'react-redux'
import ItemsList from './ItemsList'
import { useDispatch } from 'react-redux'
import {clearCart} from "../utils/cartSlice"

const Cart = () => {

    const dispatch = useDispatch()

    const handleClear = ()=>{
        dispatch(clearCart())
    }

    const cartItems = useSelector((store)=>store.cart.items)
  return (
    <div>
    <h1 className='p-4 m-4 text-center text-lg font-bold'>
     Cart
    </h1>
    
    <div className='mx-auto w-6/12'>
    <button className='rounded-lg bg-slate-600 p-2 m-2 text-white text-sm items-center' onClick={handleClear}>
        Clear Cart
    </button>
    {cartItems.length===0 && <h1>Your cart is empty,Add some items!!!!</h1>}
        <ItemsList items={cartItems}/>
        
    </div>
    </div>
    
  )
}

export default Cart
