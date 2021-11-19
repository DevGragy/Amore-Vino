import React from 'react'
import { Button } from '../../globalStyles';
import { ProdElement, ProdImg, ProdPrecio, ProdTitulo } from './Producto.elements';

const Producto = ( { product, addToCart } ) => {
    return (
        <>
            <ProdElement>
                <ProdImg alt={product.name} src={product.img} /> 
                <ProdTitulo> {product.name} </ProdTitulo>
                <ProdPrecio> ${product.price} </ProdPrecio>
                <Button onClick={ () => addToCart(product) }>
                    Agregar al carrito
                </Button>
            </ProdElement>
        </>
    )
}

export default Producto
