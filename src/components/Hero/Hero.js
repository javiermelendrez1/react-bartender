import React from 'react';
//import styled components
import { Wrapper, Content, Heading1 } from './Hero.styled';
//this component is for the hero image

const Hero = () => {
    return (
        <Wrapper>
            <Content>
                <h1>Welcome to <Heading1>React Bartender</Heading1></h1>
                <p>Search any cocktail for further detail into how to make them. </p>
            </Content>
        </Wrapper>
    );
}

export default Hero;
