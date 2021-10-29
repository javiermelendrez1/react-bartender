import { style } from '@mui/system';
import styled from 'styled-components';
//import background image
import cocktailImg from '../../cocktails.jpg';
//wrapper for the hero image
export const Wrapper = styled.div`
    height: 50vh;
    background-image: url(${cocktailImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    min-height: 400px;

`;
//content for the hero image
export const Content = styled.div`
background-color: rgba(87, 86, 83, 0.5);
padding: 10px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    @media (max-width: 480px) {
    padding: 0;
    width: 100%;
  }
    `;
//greeting for the hero image
export const Heading1 = styled.h1`
  color: #61dafb;
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;