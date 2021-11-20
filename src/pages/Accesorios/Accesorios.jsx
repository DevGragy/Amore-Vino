import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { InfoSection } from '../../components'
import { accesorios } from '../../data/Data'
import sacacorcho from '../../images/sacacorcho.jpg'
import vaso from '../../images/vasococtel.jpg'
import portavino from '../../images/portavino.jpg'
import Promociones from '../../components/Promociones/Promociones'

const Accesorios = () => {
    const [accessories] = useState([
        { name: 'Sacacorchos', price: 150, img: sacacorcho, quantity: 1 },
        { name: 'Vaso para coctel', price: 350, img: vaso, quantity: 1 },
        { name: 'Portavino', price: 500, img: portavino, quantity: 1 }
    ])
    
    const [cart, setCart] = useState([])

    const addToCart = (accessory) => {
        if ( cart.find(x => x.name === accessory.name) ) {
            const newCart = cart.map(x => x.name === accessory.name
                ? ({
                    ...x,
                    quantity: x.quantity + 1
                })
                : x)
                
            return setCart(
                (newCart),
                
                Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Añadido al carro',
                text: `Accesorio: ${accessory.name}`,
                showConfirmButton: false,
                timer: 2500
                }),
            )
        }
        
        setCart([ ...cart, accessory ])
    }

    return (
        <>
            <InfoSection {...accesorios} />
            <Promociones 
                addToCart={addToCart}
                accessories={accessories}
            />              
        </>
    )
}

export default Accesorios;