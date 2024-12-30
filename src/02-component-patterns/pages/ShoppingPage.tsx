import '../styles/custom-styles.css';

import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components/";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";


const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{ display: 'flex', flexDirection:'row', flexWrap:'wrap'}}>

            {
              products.map( product => (

                <ProductCard 
                  product={ product } 
                  className="bg-dark text-white" 
                  key={ product.id }
                  value = { shoppingCart[product.id]?.count || 0 }
                  onChange={ (event) => onProductCountChange(event) }
                >
                  <ProductImage className="custom-image"/>
                  <ProductTitle className="text-bold"/>
                  <ProductButtons className="custom-buttons"/>
                </ProductCard>

              ))
            }

        </div>

        <div className="shopping-cart">

          {
            // ASI SE ITERA SOBRE LAS ENTRADAS DE UN OBJETO!
            Object.entries( shoppingCart ).map( ([key, product]) => (
                <ProductCard 
                  key={ key }
                  product={ product } 
                  className="bg-dark text-white" 
                  style={{ width: '100px' }} 
                  value={ product.count }
                  onChange={ (event) => onProductCountChange(event) }
                >
                  <ProductImage className="custom-image"/>
                  <ProductButtons className="custom-buttons" style={{ display: 'flex', justifyContent: 'center'}}/>
                </ProductCard>
            ))
          }

        </div>

    </div>
  )
}

export default ShoppingPage
