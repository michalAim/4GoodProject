import { classicNameResolver } from 'typescript';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (

            <Grid>   
                <div  style={{ width: '600px',  overflow: 'hidden'}}>
            <table style={{   border: "0px solid ", width: '600px'}} >
         
            <tr> <td>
                <div >
             <div>   
                <img src="/images/generic.png" alt="" style={{ height: '70px', width: '100px' ,  float: 'right'}} />
            </div>
            <div style={{ display:'table', width:'65%' ,  float: 'right'}}>
            <div style={{ float: 'right'}}>
                <button className="categoriesButton">מי אנחנו</button>
            </div>
            <div style={{ float: 'right', marginRight: '10px'}}>
                <button className="categoriesButton">תרמו לנו</button>
            </div>               


            <div style={{ float: 'right', display:'table', width:'100%' }} >
            <p style={{ fontSize: '10px', marginTop :'15px'}} >

עד כה עזרנו לגייס 987 ש״ח
</p>
</div>
</div>
</div>
</td></tr>



                <tr> <td>
                <div >
             <div>   
                <img src="/images/generic.png" alt="" style={{ height: '70px', width: '100px' ,  float: 'right'}} />
            </div>
            <div style={{ display:'table', width:'65%' ,  float: 'right'}}>
            <div style={{ float: 'right'}}>
                <button className="categoriesButton">מי אנחנו</button>
            </div>
            <div style={{ float: 'right', marginRight: '10px'}}>
                <button className="categoriesButton">תרמו לנו</button>
            </div>               


            <div style={{ float: 'right', display:'table', width:'100%' }} >
            <p style={{ fontSize: '10px', marginTop :'15px'}} >

עד כה עזרנו לגייס 987 ש״ח
</p>
</div>
</div>
</div>
                </td></tr>

                <tr> <td>
                <div >
             <div>   
                <img src="/images/generic.png" alt="" style={{ height: '70px', width: '100px' ,  float: 'right'}} />
            </div>
            <div style={{ display:'table', width:'65%' ,  float: 'right'}}>
            <div style={{ float: 'right'}}>
                <button className="categoriesButton">מי אנחנו</button>
            </div>
            <div style={{ float: 'right', marginRight: '10px'}}>
                <button className="categoriesButton">תרמו לנו</button>
            </div>               


            <div style={{ float: 'right', display:'table', width:'100%' }} >
            <p style={{ fontSize: '10px', marginTop :'15px'}} >

עד כה עזרנו לגייס 987 ש״ח
</p>
</div>
</div>
</div>
                </td></tr>
                
    </table>
    </div>
            </Grid>
        )
    }
}

export default AboutUs;