import React, { useEffect, useState } from 'react';
import "./LoadMoreData.css";

const LoadMoreData = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    
    const fetchProduct =  (url) => {
        setLoading(true);
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setProducts(prev => [...prev, ...data.products]);
            setLoading(false);
        });
    }

    useEffect(() => {
        fetchProduct("https://dummyjson.com/products?limit=10");
    
    }, []);

    const handleLoadMore = () => {
        fetchProduct("https://dummyjson.com/products?limit=10&skip=" + products.length)
    }

    return (
        <>
        <div className='container'>
            {loading && <h3>Loading Data , please wait.....</h3> }
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img className='product-img' 
                    src={product.images[0]} alt={product.title} />
                    <h4 className="product-title">{product.title}</h4>
                </div>
            ))}
        </div>
        <button className='load-more' onClick={handleLoadMore}>load more</button>
        </>
    );
}

export default LoadMoreData;
