import { classicNameResolver } from 'typescript';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { border, width } from '@material-ui/system';


class FourthPart extends Component {
    render() {
        return (
            <Grid container spacing={0}>
                <Grid item xs={12} style={{}}>
                    <div className="text_title" style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'center' ,color:'#FF800B'}}>
                        <br></br>
                        קנו ותרמו במגוון חנויות ישראליות
                        <br></br>
                        שותפות
                    </div>

                    <div className="text" style={{ color: 'rgb(122, 117, 117)', textAlign: 'center' }}>
                        <p>
                            ,כל החנויות לפי מגוון מותגים ומוצרים איכותיים במחירים אטרקטיביים ,שירות גבוה
                            <br></br>
                            . והנכונות שלהם לתרום לצידנו ולכוון נתח משמעותי מרווח לעמותות

                        </p>
                        <div>
                            <img className="partner" src="/images/imgPart4/part4.JPG" alt="" style={{ height: 'auto', width: '60%'}} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default FourthPart;