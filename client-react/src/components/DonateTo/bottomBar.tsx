import { classicNameResolver } from 'typescript';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';

class BottomBar extends Component {
    render() {
        return (  <Grid> 
            <div>
            <h4 style={{ textAlign: 'center'}}>4Good ליצירת קשר עם 
</h4>

<img src="/images/networks.png" style={{ display: "block", margin: "auto", height: "30px", width: "80px"}} /> 

            </div>

        </Grid> )
    }
}

export default BottomBar;