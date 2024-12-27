import { createContext, ReactElement, CSSProperties } from 'react';

import { Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';

//import { ProductImage, ProductTitle, ProductButtons } from './';

export interface Props {
    children?: ReactElement | ReactElement[];  //Uno o varios opcional
    product: Product;
    className?: string;
    style?: CSSProperties;
}

//:: Context
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style }: Props) => {

    const {counter, increaseBy} = useProduct();
    
    return (
        <Provider value={{ counter, increaseBy, product}}>
            <div className={ `${styles.productCard} ${className}`} style={style}>

                { children }

                { /* <ProductImage />     

                <ProductTitle title={ product.title} />

                <ProductButtons increaseBy={ increaseBy } counter={ counter }/> 
                */ }

            </div>
        </Provider>
    )
}

export default ProductCard
