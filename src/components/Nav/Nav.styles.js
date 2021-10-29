import styled from 'styled-components';
//wrapper for the nav
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: #282c34;
`;
//content for the nav
export const Content = styled.div`
    color: #61dafb;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;
//image logo in the nav
export const ReactLogo = styled.img`
    width: 100px;
`;