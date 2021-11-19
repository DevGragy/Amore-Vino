import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Productos from '../Productos/Productos'
import vino1 from '../../images/vino1.jpg'
import vino2 from '../../images/vino2.jpg'
import vino3 from '../../images/vino3.jpg'
import vino4 from '../../images/vino4.jpg'
import vino5 from '../../images/vino5.jpg'
import vino6 from '../../images/vino6.jpg'

const Shop = () => {
    const [products] = useState([
        { name: 'Pago de Otazu', price: 1500, img: vino1, quantity: 1 },
        { name: 'Cepa 21', price: 1000, img: vino2, quantity: 1 },
        { name: '7 Metros', price: 2000, img: vino3, quantity: 1 },
        { name: 'Finca Rio Negro', price: 1750, img: vino4, quantity: 1 },
        { name: 'Pago de los Capellanes', price: 2200, img: vino5, quantity: 1 },
        { name: 'Habla del mar...', price: 1400, img: vino6, quantity: 1 }
    ])

    const [cart, setCart] = useState([])
    

    const addToCart = (product) => {
        if ( cart.find(x => x.name === product.name) ) {
            const newCart = cart.map(x => x.name === product.name
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
                text: `Vino: ${product.name}`,
                showConfirmButton: false,
                timer: 2500
                }),
            )
        }
        
        setCart([ ...cart, product ])
    }
    

    return (

        <>
            <div>
                <ul>
                    {cart.map(x => {
                        <li key={x.name}>
                            {x.name}
                            <span> {x.cantidad} </span>
                        </li>
                    })}
                </ul>
            </div>
            <Productos
                addToCart={ addToCart } 
                products={ products }   
            /> 
        </>
    )
}

export default Shop;