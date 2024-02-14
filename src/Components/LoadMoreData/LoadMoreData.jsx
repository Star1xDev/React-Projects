import React, { useEffect, useState } from 'react';
import "./LoadMoreData.css";

const LoadMoreData = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    
    const fetchProduct =  (url, signal) => {
        // setLoading(true);
        fetch(url, signal)
        .then((res) => res.json())
        .then((data) => {
            // console.log(products);
            // setProducts([...products, ...data.products]);
            setProducts((prevData) => [...prevData, ...data.products]);
            // setLoading(false);
        }).catch(e => console.log(e.message));
    }
    
    useEffect(() => {
        const abortCont = new AbortController()

        console.log("render")
        fetchProduct("https://dummyjson.com/products?limit=10", { signal : abortCont.signal});
        return () => setTimeout(() => abortCont.abort(), 100);
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
