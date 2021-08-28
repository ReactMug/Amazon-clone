import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';
function Checkout() {
    const [{ basket }] = useStateValue()

    return (
        <div className='Checkout'>
            <div className='Checkout__left'>
                <img
                    className='checkout__banner'
                    src='https://gos3.ibcdn.com/top-1568020025.jpg'
                    alt=''
                />
                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>Your Shopping Basket is empty</h2>
                            <p>
                                You have no items in your cart.to buy one or more items,click"Add to cart" next to the item.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className='checkout__title'>
                                Your Shopping Cart.
                            </h2>
                            <hr style={{ paddingBottom: "10px", }} />
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />
                            )
                            )}
                        </div>
                    )
                }
            </div>
				{basket.length > 0 && (
					<div className="checkout__right">
						<Subtotal />
					</div>
				)}
		</div>
    )
}

export default Checkout
