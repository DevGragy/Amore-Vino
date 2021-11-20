import React from 'react'
import { Button } from '../../globalStyles';
import { ProdElement, ProdImg, ProdPrecio, ProdTitulo } from './Promocion.elements';

const Promocion = ({accessory, addToCart}) => {
    return (
        <>
           <ProdElement>
                <ProdImg alt={accessory.name} src={accessory.img} /> 
                <ProdTitulo> {accessory.name} </ProdTitulo>
                <ProdPrecio> ${accessory.price} </ProdPrecio>
                <Button onClick={ () => addToCart(accessory) }>
                    Agregar al carrito
                </Button>
            </ProdElement> 
        </>
    )
}

export default Promocion
