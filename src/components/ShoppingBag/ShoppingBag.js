import React from 'react';
import { Link } from 'react-router-dom';

import './ShoppingBag.css';

import AnimateOnChange from 'react-animate-on-change';

const ShoppingBag = ({ cartTotalNoOfItems, modifier }) => {

    return (
        <div className={`shopping-bag${modifier ? ' ' + modifier : ''}`}>
            <Link to="/cart" className="shopping-bag__link">
                <svg className="shopping-bag__icon" width="22px" height="26px" viewBox="0 0 22 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="000--Home" transform="translate(-953.000000, -45.000000)" fill="currentColor">
                            <path d="M964,45 C961.269251,45 959.028204,47.25376 959.028204,50 L959.028204,51 L954.118455,51 L954.056407,51.9376 L953.062048,69.9376 L953,71 L975,71 L974.937952,69.9376 L973.943593,51.9376 L973.881545,51 L968.971796,51 L968.971796,50 C968.971796,47.25376 966.730749,45 964,45 Z M964,47 C965.646977,47 966.983078,48.34368 966.983078,50 L966.983078,51 L961.016922,51 L961.016922,50 C961.016922,48.34368 962.353023,47 964,47 Z M955.983078,53 L959.028204,53 L959.028204,56 L961.016922,56 L961.016922,53 L966.983078,53 L966.983078,56 L968.971796,56 L968.971796,53 L972.016922,53 L972.887185,69 L955.112815,69 L955.983078,53 Z" id="shopping-bag"></path>
                        </g>
                    </g>
                </svg>
                
                <AnimateOnChange
                    baseClassName="shopping-bag__counter"
                    animationClassName="shopping-bag__counter--animation"
                    animate={cartTotalNoOfItems !== 0}>
                        {cartTotalNoOfItems}
                </AnimateOnChange>
                
            </Link>
        </div>
    )
};

export default ShoppingBag;