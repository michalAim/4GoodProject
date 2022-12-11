import React, { Component } from 'react';
import { classicNameResolver } from 'typescript';
import Grid from '@material-ui/core/Grid';
class HowItWorks extends Component {
  render() {
    return (
      <Grid>
      <div style={{ overflow: 'hidden' , display:'table',flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
width: '100%'}} >
      <img src="/images/howItworks/first.png" alt="" style={{ height: '500px',  alignSelf: "center"   ,display: "block", margin: "auto",
  width: "75%"}} />

          </div>
          <div style={{ overflow: 'hidden', display:'table', width:'100%', marginTop:'50px'  }} >
      <img src="/images/howItworks/sec.png" alt="" style={{  height: '500px' ,display: "block", margin: "auto",
  width: "75%"}} />

          </div>
          <div style={{ overflow: 'hidden', display:'table', width:'100%', marginTop:'50px'  }} >
      <img src="/images/howItworks/new.png" alt="" style={{  height: '500px' ,display: "block", margin: "auto",
  width: "75%"}} />

          </div>
      </Grid>
    );
  }
}

export default HowItWorks;