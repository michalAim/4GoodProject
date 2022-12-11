import { classicNameResolver } from 'typescript';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import './donateTo.css';
import { green } from '@material-ui/core/colors';


class TopBar extends Component {
    render() {
        return (<Grid>  
            <div style={{ overflow: 'hidden'}} >
            <div style={{ float: 'right'}}>
            <img src="/images/icon.png" alt="" style={{ height: 'auto', width: '30%'}} />
            </div>
            <div className="topBarText" style={{ color:'rgb(122, 117, 117)', textAlign: "right", float: 'right'}}>


<p style={{width : '200px', marginTop : '30px'}}>
עד כה עזרנו לגייס 765,059 ש״ח 
    <br></br>
 עבור עמותות בארץ
    <br></br>

</p>

</div>
<div style={{ float: 'right'}}>
<button className="topBarbutton">למי אפשר לתרום</button>
 </div>
 <div style={{ float: 'right'}}>
<button className="topBarbutton">לרכישה</button>
 </div>
 <div style={{ float: 'right'}}>
<button className="topBarbutton">איך זה עובד</button>
 </div>
 <div style={{ float: 'right'}}>
<button className = "joinButton">להצטרפות</button>
 </div>
           </div> 
            
            
             </Grid>)
    }

  }

  export default TopBar;


