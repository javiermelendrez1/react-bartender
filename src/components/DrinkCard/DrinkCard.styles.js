import styled from 'styled-components';
//drink card title
export const DrinkName = styled.h2`
color: #61dafb;
font-size: 32px;
@media (max-width: 1000px) {
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

`;
//drink card sub titles
export const DrinkSubTitles = styled.h3`
    font-size: 20px;
    @media (max-width: 1000px) {
    font-size: 16px;
  }
`;
//drink card descriptions
export const DrinkInfo = styled.p`
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;