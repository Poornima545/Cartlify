import React from 'react';
import { Products } from '../Product';

export default function Shop() {
    const renderStars = (rating) => {
        const filledStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return filledStars + emptyStars;
    };


    return (
        <div className="container shop mt-4">
            <div className="row">
                {Products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={product.img} alt={product.ProductName} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{product.ProductName}</h5>
                                <p className="card-text">MRP: ${product.Price.toFixed(2)}</p>
                                <p className="card-text"><span>{renderStars(product.Rating)}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
