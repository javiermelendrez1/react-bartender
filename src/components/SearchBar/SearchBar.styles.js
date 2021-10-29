import styled from 'styled-components';
//import material ui components 
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
//wrapper
export const Wrapper = styled.div`
    padding: 10px;
`;
//contnent for the search bar
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
`;
//text field in the search bar
export const UserInput = styled(TextField)`

`;
//button in the search bar
export const SearchButton = styled(IconButton)`

`;