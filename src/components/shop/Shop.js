import React from 'react';
import { Products } from '../Product';

export default function Shop() {
    return (
        <div className='shop'>
            <div className='products'>
                {
                    Products.map((product) => (
                        <div key={product.id} className='product'>
                            <img src={product.img} alt={product.ProductName} />
                            <h3>{product.ProductName}</h3>
                            <p>${product.Price.toFixed(2)}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
