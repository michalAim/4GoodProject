import React, { Component } from 'react';
import { classicNameResolver } from 'typescript';
import Grid from '@material-ui/core/Grid';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';
import FourthPart from './FourthPart';
import FivePart from './FivePart';


class HomePage extends Component {
  render() {
    return (
      <Grid style={{ display: "block", margin: "auto", width: "95%", marginTop: "40px", textAlign:'center'}}>
        <FirstPart />
        <hr />
        <SecondPart />
        <hr />
        <ThirdPart />
        <hr />
        <FourthPart />
        <hr />
        <FivePart />
      </Grid>
    );
  }
}

export default HomePage;