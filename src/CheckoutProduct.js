import React from 'react'
import { useStateValue } from './StateProvider';
import './CheckoutProduct.css'
function CheckoutProduct(props) {
    const [{},dispatch]=useStateValue();
    const removeFromCart=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:props.id,
        })
    }
    return (
        <div className='CheckoutProduct'>
            <img
            className='CheckoutProduct__image'
                src={props.image}
                alt=''
            />
            <div className='CheckoutProduct__info'>
                <p className='CheckoutProduct__title'>
                    {props.title}
                </p>
                <p className='CheckoutProduct__price'>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className='product__rating'>
                    {
                        Array(props.rating).fill().map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
