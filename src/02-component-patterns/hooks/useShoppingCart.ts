import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product}) => {
        //console.log(product, count);

        setShoppingCart( prev => {

            if (count === 0) {

            // MIRA COMO BORRAR LA ENTRADA DE UN OBJETO
            const { [product.id]: toDelete, ...rest } = prev;

            return { ...rest };

            }

            return {
            ...prev,
            [ product.id ]: { ...product, count }
            }      
        
        });
        
    }

    
    return {
        shoppingCart,
        onProductCountChange
    }
}