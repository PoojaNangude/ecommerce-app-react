import React from 'react'
import products from '../Constants/products';
import '../index.css';
import ProductCards from './ProductCards';

const RandomProducts = () => {
    return (
        <div>
            <h1 className="App">Some of our Products</h1>
                <div className="productlist">
                    {products.slice(0,6).map((product) => {
                        return <ProductCards key={product.id} {...product}></ProductCards>; 
            })}
                </div>
        </div>
    )
}

export default RandomProducts
