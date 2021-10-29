import React from 'react';
//import styled components
import { Wrapper, Content, CocktaildbLogo } from './Footer.styles';
//import logo
import logo from '../../thecocktaildb.png';
//this component is for the footer at the bottom of the page
const Footer = () => {
    return(
        <Wrapper>
            <Content>
                Powered By <CocktaildbLogo src={logo} />;
            </Content>
        </Wrapper>
    );
};

export default Footer;