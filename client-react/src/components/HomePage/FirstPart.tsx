//import React, { Component } from 'react';
import { classicNameResolver } from 'typescript';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import SignIn1 from "../SignIn/SignIn1";

import image from './image.png';


import Typography from '@material-ui/core/Typography';
import { border, width } from '@material-ui/system';

import './HomePage.css';

// textAlign: "right"

class FirstPart extends Component {
    render() {
        return (
            <Grid container spacing={0}>

                <Grid item xs={8} style={{}}>
                    <div className="firstPic" >
                        <img src={image} alt="" style={{ height: 'auto', width: '90%'}} />
                        &rlm;</div>
                </Grid>

                <Grid item xs={4} style={{}}>  
                    <div className="text_title" style={{fontSize:'25px',fontWeight:'bold',paddingLeft:'130px',textAlign: "right",color:'#FF800B'}}>
                    כל רכישה משפיעה בגדול!
                    &rlm;</div>


                    <div className="text" style={{ color:'rgb(122, 117, 117)',textAlign: "right",font:'Arial (Body CS)'}}>

                        <p>
                            ?רכשת מוצר אצל אחת החנויות כאן
                            <br></br>
                            תרומה מיידית על חלק מהרוווחים לעמותה שבחרת
                            <br></br>
                            לדוגמא: רכשת טלויזיה ב-4,000 ש"ח
                            <br></br>
                            ,תרמת מאות שקלים לעמותה
                            <br></br>
                            !בלי להוציא עוד כסף מהכיס
                            <br></br>
                            <br></br>
                            בצעו רכישה והתחילו בתרומה
                            <br></br>
                            <br></br>

                        </p>

                        <div className="join_button" style={{}}>
                            <p></p>
                            <SignIn1></SignIn1>
                        </div>
                        &rlm;</div>




                </Grid>


            </Grid>
        );
    }
}

export default FirstPart;