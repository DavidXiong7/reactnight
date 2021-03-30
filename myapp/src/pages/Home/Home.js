import React, {useState} from 'react';
import './Home.css'
// import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Card2 from '../../components/Card/Card2'
import {Grid} from '@material-ui/core';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button'


function Home(){
    const [firstName, setFirstName] = React.useState('Henry')

    const changefirstName = ()=> {
        setFirstName('Jason')
    }


    return(
        <Grid container spacing={3}>
            <Button buttonName="Back" color="orange"/>
            <Button buttonName="Forward" color="pink"/>
            <Button buttonName="Up" color="black"/>
            <Button buttonName="Down" color="grey"/>
            <Card titleName="Lexus RCF" date="March 10, 1999" bodyText="Lexus RCF has NA v8 engine" image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-lexus-rc-f-mmp-1-1599742801.jpg?crop=1.00xw:0.762xh;0,0.173xh&resize=1200:*"/>
            <Card titleName= "LC 500" date="March 28, 2000" bodyText="LC 500 NA V8 engine" image="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F10%2Flexus-lc-500-aviation-edition-info-01.jpg?quality=95&w=1170&cbr=1&q=90&fit=max"/>
            <Card2/>
            <Grid item xs={3}>
                <Accordion Title="react" Body="Shrek was here"/>
            </Grid>
        </Grid>
    )
}

export default Home;