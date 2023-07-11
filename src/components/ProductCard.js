import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <div 
        className={' ${location.pathname == "/store" ? "col-${grid} ": "col-3"} '} >
            <Link className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link><img src='images/favour.png' alt='wishlist' /></Link>
                </div>
                <div className='product-image'>
                    <img src='images/Luxury contemporary villa in Benahavis - La Alqueria for sale.jpeg' className='img-fluid' alt='product images' />
                    <img src='images/TWELVE HOUSE • Sophisticated Projects Estates.jpeg' className='img-fluid' alt='product images' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>
                        Villa 5 pieces duplex haut standing
                    </h5>
                    <ReactStars count={5} size={24} value={4}
                        edit={false} activeColor="#ffd700" />
                    <p className='price'>FCFA50 millions</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                            <img src='images/shuffle-arrows.png' alt='arrows' />
                        </Link>
                        <Link>
                            <img src='images/eye.png' alt='eye' />
                        </Link>
                        <Link>
                            <img src='images/add.png' alt='addcart' />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;