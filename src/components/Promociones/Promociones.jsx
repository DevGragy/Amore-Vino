import React from 'react'
import { Container } from '../../globalStyles';
import { BoxElements } from './Promociones.elements'
import Promocion from './Promocion';

const Promociones = ({accessories, addToCart}) => {
    return (
        <>
            <Container>
                <BoxElements>
                    {accessories.map(accessory => 
                        <Promocion
                            addToCart = { addToCart }
                            key = { accessory.name }
                            accessory = { accessory }
                        />    
                    )}
                </BoxElements>
            </Container>
        </>
    )
}

export default Promociones
