import React from 'react'
import { Container } from '../../globalStyles';
import { BoxElements } from './Productos.elements'
import Producto from './Producto'



const Productos = ({ products, addToCart }) => {

    return (
        <>
            <Container>
                <BoxElements>
                    {products.map(product => 
                        <Producto
                            addToCart = { addToCart }
                            key = { product.name }
                            product = { product }
                        />    
                    )}
                </BoxElements>
            </Container>
        </>
    )
}

export default Productos
