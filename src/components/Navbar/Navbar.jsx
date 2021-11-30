import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
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
	NavBtnLink,
} from "./Navbar.elements";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const [data, setData] = useState(null);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	const handleLogOut = (e) => {
		e.preventDefault();
		axios
			.get("https://smlogin.herokuapp.com/logout", {
				withCredentials: true,
			})
			.then((response) => {
				console.log(response.data);
				setData(null);
				window.location.reload();
			});
	};


	useEffect(() => {
		showButton();
	}, []);

	
	useEffect(() => {
		axios
			.get("https://smlogin.herokuapp.com/user", 
                { withCredentials: true }
			)
			.then((response) => {
				if (response.data) {
					setData(response.data);
				}
			});
	}, [setData]);
	

	window.addEventListener("resize", showButton);

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavbarContainer>
						<NavLogo to="/" onClick={closeMobileMenu}>
							<NavIcon />
						</NavLogo>

						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>

						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks
									to="/especiales"
									onClick={closeMobileMenu}
								>
									Especiales
								</NavLinks>
							</NavItem>

								{data ?  
								<NavItem>
									<NavLinks to="/club" onClick={closeMobileMenu}>
									Club
									</NavLinks>
								</NavItem>
								: null }

							<NavItem>
								<NavLinks
									to="/destilados"
									onClick={closeMobileMenu}
								>
									Destilados
								</NavLinks>
							</NavItem>

								{data ? 
								<NavItem>
									<NavLinks
									to="/gourmet"
									onClick={closeMobileMenu}
									>
										Gourmet
									</NavLinks> 
								</NavItem>
								: null }

							<NavItem>
								<NavLinks
									to="/accesorios"
									onClick={closeMobileMenu}
								>
									Accesorios
								</NavLinks>
							</NavItem>

								{data ? 
								<NavItem>
									<NavLinks
									to="/ofertas"
									onClick={closeMobileMenu}
									>
										Ofertas
									</NavLinks> 
								</NavItem>
								: null }

							<NavItem>
								<NavLinks to="/blog" onClick={closeMobileMenu}>
									Blog
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks to="/tienda" onClick={closeMobileMenu}>
									Tienda
								</NavLinks>
							</NavItem>

							
							
							<NavItemBtn>
								{button ? (
									<NavBtnLink to={data ? '/' : '/sign-up'}>
										<Button primary>{data ? `${data.email}` : 'Registrate'}</Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to={data ? '/' : '/sign-up'}>
										<Button
											fontBig
											primary
                                            onClick={closeMobileMenu}
										>
											{data ? `${data.email}` : 'Registrate'}
										</Button>
									</NavBtnLink>
								)}
							</NavItemBtn>

							<NavItemBtn>
								{button ? (
									<NavBtnLink to={data ? '/' : '/sign-in'}>
										<Button 
                                            primary
                                            onClick={data ? handleLogOut : null}
                                        >
                                            {data ? 'Logout' : 'Inicia'}
                                        </Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to={data ? '/' : '/sign-in'}>
										<Button
											fontBig
											primary
                                            onClick={data ? handleLogOut : closeMobileMenu}
										>
											{data ? 'Logout' : 'Inicia'}
										</Button>
									</NavBtnLink>
								)}
							</NavItemBtn>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
