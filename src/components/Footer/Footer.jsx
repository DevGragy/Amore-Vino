import React from 'react';
import { Button } from '../../globalStyles';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubText,
    FooterSubHeading,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                Se parte del club de vinos registrando tu correo para recibir las ultimas noticias.
                </FooterSubHeading>
                <FooterSubText>Cancela en cualquier momento.</FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Correo' />
                    <Button fontBig>Suscribirse</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Nosotros</FooterLinkTitle>
                        <FooterLink to='/'>Distribudores</FooterLink>
                        <FooterLink to='/'>Inversionistas</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Contactanos</FooterLinkTitle>
                        <FooterLink to='/'>Contacto</FooterLink>
                        <FooterLink to='/'>Suporte</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social</FooterLinkTitle>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Facebook</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
                        AMORE
                    </SocialLogo>
                    <WebsiteRights>AMORE © 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>  
    );
}

export default Footer;