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

const Navbar = (props) => {
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
			.get("https://smlogin.herokuapp.com/sign-in", {
				withCredentials: true,
			})
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

							<NavItem>
								<NavLinks to="/club" onClick={closeMobileMenu}>
									Club
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks
									to="/destilados"
									onClick={closeMobileMenu}
								>
									Destilados
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks
									to="/gourmet"
									onClick={closeMobileMenu}
								>
									Gourmet
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks
									to="/accesorios"
									onClick={closeMobileMenu}
								>
									Accesorios
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks
									to="/ofertas"
									onClick={closeMobileMenu}
								>
									Ofertas
								</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks to="/blog" onClick={closeMobileMenu}>
									Blog
								</NavLinks>
							</NavItem>

							<NavItemBtn>
								{button ? (
									<NavBtnLink to="/carrito">
										<Button primary>Carrito</Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to="/carrito">
										<Button
											onClick={closeMobileMenu}
											fontBig
											primary
										>
											Carrito
										</Button>
									</NavBtnLink>
								)}
							</NavItemBtn>

							<NavItemBtn>
								{button ? (
									<NavBtnLink to="/sign-up">
										<Button primary>Registrate</Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to="/sign-up">
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
									<NavBtnLink to="/sign-in">
										<Button primary>Inicia</Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to="/sign-in">
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
