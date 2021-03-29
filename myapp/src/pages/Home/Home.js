import React from 'react';
import './Home.css'
// import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Card2 from '../../components/Card/Card2'
import {Grid} from '@material-ui/core';
import Accordion from '../../components/Accordion/Accordion';



function Home(){
    return(
        <Grid container spacing={3}>

            <Card/>
            <Card2/>
            <Grid item xs={3}>
                <Accordion/>
            </Grid>
        </Grid>
    )
}

export default Home;