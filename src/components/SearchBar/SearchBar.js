import React, { useState } from 'react';
//import styled components
import { Wrapper, Content, UserInput, SearchButton } from './SearchBar.styles';
//import material ui icon
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = ({setSearch, setResultNull}) => {
    //create a state for the user input
    const [input, setInput] = useState(''); //by default the state is just blank
    //create a function to handle the onChange
    const handleOnChange = (e) => {
        //when the input changes set the unput equal to the value
        setInput(e.target.value);
    }
    //create a function to handle when the user clicks submit
    const handleClick = () => {
        //when the user clicks search we will make a call for the api with the input
        setSearch(input);
        setResultNull(false);
        //we will then set the input to be empty so that the search bar text empties out
        setInput('');
    }
    //this function will listen for the keyboard press enter
    const handleKeyPress = (e) => {
        //if key is enter
        if(e.key === 'Enter'){
            //set search to input
            //set result to false
            //empty the input text field 
            setSearch(input);
            setResultNull(false);
            setInput('');
        }
    }
    return(
        <Wrapper>
            <Content>
                <UserInput  variant='outlined' label='Search'  placeholder='search cocktails ...' value={input}
                onChange={handleOnChange}
                onKeyPress={handleKeyPress}
                />
                <SearchButton
                onClick={handleClick}
                ><SearchIcon/></SearchButton>
            </Content>
        </Wrapper>
    );
}
export default SearchBar;