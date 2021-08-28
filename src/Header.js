import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import auth from './firebase';
function Header() {
  const login=()=>{
      if(user){
          auth.signOut()
      }
  }

    const [{basket,user }]=useStateValue();
    return (
        <nav className='header'>
            <Link to='/'>
                <img
                    className='header__logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt=''
                />
            </Link>
            <div className="header__Search">
                <input
                    className='header__searchInput'
                    type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>
           <div className='header__nav'>
             {/* 1st Link */}
             <Link to={!user &&'/Login'} className='header__link'>
            <div onClick={login} className='header__option'>
                <span className='header__optionLineOne'> Hello {user?.email}</span>
                <span className='header__optionLineTwo'> {user ?"Sign Out" :'Sign In'}</span>
            </div>
            </Link>
            {/* 2nd Link */}
            <Link to='/' className='header__link'>
            <div className='header__option'>
                <span className='header__optionLineOne'> Return </span>
                <span className='header__optionLineTwo'>& Order</span>
            </div>
            </Link>
            
            {/* 3rd Link */}
            <Link to='/' className='header__link'>
            <div className='header__option'>
                <span className='header__optionLineOne'> Your </span>
                <span className='header__optionLineTwo'>& Prime</span>
            </div>
            </Link>
            {/* 4th Link */}
           <Link to='Checkout' className='header__link'>
           <div className='header__optionBasket'>
                  {/* Shopping Basket Icon */}
                   <ShoppingBasketIcon/>
                   {/* Number Of Items in the Basket  */}
                   <span className='header__optionLineTwo header__BasketCount'>{basket.length}</span>
            </div>
           </Link>
           </div>
        </nav>
    )
}

export default Header
