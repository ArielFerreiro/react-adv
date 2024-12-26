import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ img = '' }) => {

    const {product} = useContext(ProductContext);

    let imgtoShow: string;

    if (img) {
        imgtoShow = img;
    } else if ( product.img ) {
        imgtoShow = product.img;
    } else {
        imgtoShow = noImage;
    }

    return (
        <img src={ imgtoShow } alt="Product" className={ styles.productImg } />     
    );

}