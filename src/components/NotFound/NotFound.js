import React from 'react';
//import styled components
import { Wrapper, Content, NotFoundText } from './NotFound.styles';
//this component will be used when a user searches a drink and no result is returned
const NotFound = () => {

    return(
        <Wrapper>
            <Content>
                <NotFoundText>Cocktail not Found, try searching for another drink.</NotFoundText>
            </Content>
        </Wrapper>
    );
}

export default NotFound;