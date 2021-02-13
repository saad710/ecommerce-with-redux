import React from 'react';
import styles from "./Products.module.css";
import Product from "./Product/Product";
// Redux
import { connect } from "react-redux";


const Products = ({products}) => {
    console.log(products);
    return (
        <div className={styles.products}>
            <h3>product</h3>
            {products && products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    };
  };

  export default connect(mapStateToProps)(Products);