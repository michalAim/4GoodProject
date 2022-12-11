import { classicNameResolver } from 'typescript';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import './HomePage';

class SecondPart extends Component {
    render() {
        return (
            <Grid container spacing={0} style={{textAlign:'right', width:'100%', justifyContent:'space-around', margin:'auto'}}>

                {/* dolarIcon */}
                <Grid item xs={2} lg={2} style={{textAlign:'center'}}>

                    <div className="dolar">

                        <img className="dolar_icon" src="/images/dollar-symbol.png" alt="" style={{width: '120px', height: '120px'}} />
                        <div className="text_title_icon" style={{fontWeight:'bold'}}>
                        תרומה
                        </div>
                        <div className="sub_text" style={{color:'#002b80'}}>
                            <p>
                                תרומה תתבצע בשמכם
                                <br></br>
                                לעמותה שבחרתם במועד ההרשמה
                            </p>

                        </div>
                    </div>

                </Grid>
                {/* endDolarIcon */}


                {/* ShoppingIcon */}
                <Grid item xs={2} lg={2} style={{textAlign:'center'}}>
                    <div className="shopping">
                        <img className="icon_shopping" src="/images/shopping-cart.png" alt="" style={{width: '100px', height: '100px'}} />
                        <div className="text_title_icon" style={{fontWeight:'bold'}}>
                            <br></br>
                             רכישה
                        </div>
                        <div className="sub_text" style={{color:'#002b80'}} >
                            <p>
                                היכנסו לאחד מאתרי הקמונאים
                                <br></br>
                                שבשיתוף הפעולה ובצעו רכישת
                                <br></br>
                                מוצר
                            </p>
                        </div>
                    </div>
                </Grid>
                {/* endShoppingIcon */}

                {/* magnifierIcon */}
                <Grid item xs={2} lg={2} style={{textAlign:'center'}}>
                    <div className="magnifier">
                        <img className="icon_magnifier" src="/images/magnifier.png" alt="" style={{width: '120px', height: '120px'}}/>
                        <div className="text_title_icon" style={{fontWeight:'bold'}}>
                            בחירת עמותה
                        </div>
                        <div className="sub_text" style={{color:'#002b80'}}>
                            <p>
                                בחרו קטגוריה או מוצר
                                <br></br>
                                שמחפשים לקנות
                                <br></br>
                            </p>
                        </div>
                    </div>
                </Grid>
                {/* endmagnifierIcon */}



{/* 
                <Grid item lg={1} style={{}}>
                  <div>    <img className="substract" src="/images/substract.png" alt="" style={{ width: '140px', height: '20px' , paddingTop: '40px' ,paddingLeft:'15px'}} /> 
</div>
                </Grid>    */}




                {/* idCardIcon */}
                    <Grid item xs={2} lg={2} style={{textAlign:'center'}}>
                        <div className="id_card">
                            <img className="icon_id_card" src="/images/registration.png" alt="" style={{width: '100px', height: '100px'}} />
                            <div className="text_title_icon" style={{fontWeight:'bold'}}>
                                <br></br>
                                הרשמה
                                <br></br>
                            </div>
                            <div className="sub_text" style={{color:'#002b80'}}>
                                <p>
                                    הירשמו וביחרו את העמותה
                                    <br></br>
                                    שתרצו לתרום לה בעת ביצוע
                                    <br></br>
                                    רכישה
                                </p>
                            </div>
                        </div>
                    </Grid>
                    {/* endIdCardIcon */}
                </Grid>
                );
    }
}

                export default SecondPart;