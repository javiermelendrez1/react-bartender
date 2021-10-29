import React, { useState } from 'react';
//this component holds the cards and modals of every drink
//import css
import './DrinkCard.css';
//import material ui components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
//import styled components
import { DrinkName, DrinkSubTitles } from './DrinkCard.styles';

//the modal style
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `50vw`,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}
//the grid style
const gridStyle = {
    padding: '0px',
}
//the icon style
const iconStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
}
const imageStyle = {
    width: '100%'
}
const DrinkCard = ({ drinks, search }) => {
    //create a state for the modal open and close 
    //modal will open and close based on the button
    const [open, setOpen] = useState(false); // by default the modal will be closed
    //create a state for the selected drink modal
    const [selectedProject, setSelectedProject] = useState(null);
    //create a function to handle the learn more button
    //pass in which project has been selected
    const handleClick = (project) => {
        //set the project to the passed in project
        setSelectedProject(project);
        //set the state to open
        //set the modal to open
        setOpen(true);
    }

    //create a function to handle the modal being closed
    const handleClose = () => {
        //when the user clicks out of the modal we will set open to false
        //this should close the modal
        setOpen(false);
    }

    return (
        <Container maxWidth='lg'>
            <div className='drinksGrid'>
                <Modal
                    open={open}
                    onClose={handleClose}

                >
                    <Box sx={style} className='modal'>
                        <IconButton sx={iconStyle}
                            onClick={handleClose}
                        ><CloseIcon /></IconButton>
                        <Grid container spacing={6} >
                            <Grid item xs={1} md={8}>
                                <img src={selectedProject && selectedProject.strDrinkThumb} style={imageStyle} />
                            </Grid>
                            <Grid item xs={12} md={4} sx={gridStyle}>
                                <DrinkName>{selectedProject && selectedProject.strDrink}</DrinkName>
                                <Grid container className='ingredientGrid'>
                                    <DrinkSubTitles>Ingredients</DrinkSubTitles>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure1}{selectedProject && selectedProject.strIngredient1}
                                    </Grid>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure2}{selectedProject && selectedProject.strIngredient2}
                                    </Grid>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure3}{selectedProject && selectedProject.strIngredient3}
                                    </Grid>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure4}{selectedProject && selectedProject.strIngredient4}
                                    </Grid>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure5}{selectedProject && selectedProject.strIngredient5}
                                    </Grid>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure6}{selectedProject && selectedProject.strIngredient6}
                                    </Grid>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure7}{selectedProject && selectedProject.strIngredient7}
                                    </Grid>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure8}{selectedProject && selectedProject.strIngredient8}
                                    </Grid>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure9}{selectedProject && selectedProject.strIngredient9}
                                    </Grid>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure10}{selectedProject && selectedProject.strIngredient10}
                                    </Grid>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure11}{selectedProject && selectedProject.strIngredient11}
                                    </Grid>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure12}{selectedProject && selectedProject.strIngredient12}
                                    </Grid>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure13}{selectedProject && selectedProject.strIngredient13}
                                    </Grid>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure14}{selectedProject && selectedProject.strIngredient14}
                                    </Grid>
                                    <Grid Item xs={12}>
                                        {selectedProject && selectedProject.strMeasure15}{selectedProject && selectedProject.strIngredient15}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <DrinkSubTitles>Glass:</DrinkSubTitles> {selectedProject && selectedProject.strGlass}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <DrinkSubTitles>Instructions:</DrinkSubTitles> {selectedProject && selectedProject.strInstructions}
                                    </Grid>
                                </Grid>


                            </Grid>


                        </Grid>
                    </Box>

                </Modal>
                {drinks.map((drink) => {
                    return (
                        <Card sx={{ maxWidth: 345 }} key={drink.strDrink}>
                            <CardContent>
                                {search.length == 0 ? 'Featured Drink' : null}

                            </CardContent>
                            <CardMedia
                                component="img"
                                height="400"
                                image={drink.strDrinkThumb}
                                alt={drink.strDrink}
                            />
                            <CardContent>
                                {drink.strDrink}
                            </CardContent>
                            <CardActions>
                                <Button variant="contained"
                                    onClick={() => handleClick(drink)}
                                >Learn More</Button>
                            </CardActions>
                        </Card>
                    );
                })}

            </div>
        </Container>
    );
}

export default DrinkCard;