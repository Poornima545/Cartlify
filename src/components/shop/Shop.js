import React from 'react';
import { Products } from '../Product';

export default function Shop() {
    const renderStars = (rating) => {
        const filledStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return filledStars + emptyStars;
    };

    return (
        <div className='shop'>
            <div className='products'>
                {
                    Products.map((product) => (
                        <div key={product.id} className='product'>
                            <img src={product.img} alt={product.ProductName} />
                            <h4>{product.ProductName}</h4>
                            <p>Price: ${product.Price.toFixed(2)}</p>
                            <p>Rating: <span>{renderStars(product.Rating)}</span></p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
