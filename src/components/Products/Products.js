import React from 'react';
import styles from "./Products.module.css";
import Product from "./Product/Product";

const Products = ({products}) => {
    return (
        <div className={styles.products}>
            <h3>product</h3>
            {products && products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
        </div>
    );
};

export default Products;