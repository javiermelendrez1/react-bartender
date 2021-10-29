import React from 'react';
//import styled components
import { Wrapper,Content, ReactLogo } from './Nav.styles';
//import react logo 
import logo from '../../logo.svg';
//this component is for top nav
const Nav = () => {
    return(
        <Wrapper>
            <Content>
                <ReactLogo src={logo}/> React Bartender
            </Content>
        </Wrapper>
    );
};

export default Nav;