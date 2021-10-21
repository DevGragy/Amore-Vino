import React, { useState,  useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize',  showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={closeMobileMenu}>
                            <NavIcon/>
                            AMORE
                        </NavLogo>

                        <MobileIcon onClick={handleClick} >
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>

                        <NavMenu onClick={handleClick} click={click} >
                            <NavItem>
                                <NavLinks to='/especiales' onClick={closeMobileMenu}>
                                    Especiales
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/club' onClick={closeMobileMenu}>
                                    Club
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/destilados' onClick={closeMobileMenu}>
                                    Destilados
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/gourmet' onClick={closeMobileMenu}>
                                    Gourmet
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/accesorios' onClick={closeMobileMenu}>
                                    Accesorios
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/ofertas' onClick={closeMobileMenu}>
                                    Ofertas
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/blog' onClick={closeMobileMenu}>
                                    Blog
                                </NavLinks>
                            </NavItem>

                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='/registrate'>
                                        <Button primary>Registrate</Button>
                                    </NavBtnLink>   
                                ) : (
                                    <NavBtnLink to='/registrate'>
                                        <Button onClick={closeMobileMenu} fontBig primary>Registrate</Button>
                                    </NavBtnLink>   
                                )}
                            </NavItemBtn>

                        </NavMenu>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;