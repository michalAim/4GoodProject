import { classicNameResolver } from 'typescript';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { border, width } from '@material-ui/system';
import { FaAlignJustify } from 'react-icons/fa';


class ThirdPart extends Component {
    render() {
        return (
            <Grid container spacing={0} style={{textAlign:'right', width:'100%', justifyContent:'space-around', margin:'auto'}}>
                <Grid>
                    <Grid item xs={2} style={{}}>
                        <img className="icon_Education_tolerance_humanRights" src="/images/imgPartThird/Education_patience_and_person_Rights.png" alt="" style={{ width: '60px', height: '60px' }} />
                        <div className="sub_text_thirdPart" style={{ color: 'rgb(122, 117, 117)' ,alignContent: "center"}}>
                            <p style={{fontSize: "10px", textAlign: "center"}}>
                                חינוך ,סבלנות
                                וזכויות אדם
                            </p>
                        </div>
                    </Grid>

                    <Grid item xs={2} style={{}}>
                        <img className="Security_and_rescue" src="/images/imgPartThird/Security_and_rescue.png" alt="" style={{ width: '60px', height: '60px' }} />
                        <div className="sub_text_thirdPart" style={{ color: 'rgb(122, 117, 117)' }}>
                           <p style={{fontSize: "10px", textAlign: "center"}}>
                                ביטחון והצלה
                            </p>
                        </div>
                    </Grid>

                    <Grid item xs={2} style={{}}>
                        <img className="Senior_citizens_and_Holocaust_survivors" src="/images/imgPartThird/Senior_citizens_and_Holocaust_survivors.png" alt="" style={{ width: '60px', height: '60px' }} />
                        <div className="sub_text_thirdPart" style={{ color: 'rgb(122, 117, 117)' }}>
                           <p style={{fontSize: "10px", textAlign: "center"}}>
                                אזרחים ותיקים וניצולי
                                שואה
                            </p>
                        </div>
                    </Grid>
                </Grid>

                <Grid >
                    <Grid item xs={2} style={{}}>
                        <img className="Women_in_distress" src="/images/imgPartThird/Women_in_distress.png" alt="" style={{ width: '60px', height: '60px' }} />
                        <div className="text_title" style={{ color: 'rgb(122, 117, 117)' }}>
                        <p style={{fontSize: "10px", textAlign: "center"}}>
                            נשים בסיכון
                            </p>
                        </div>
                    </Grid>

                    <Grid item xs={2} style={{}}>
                        <img className="Animals_and_environmental_protection" src="/images/imgPartThird/Animals_and_environmental_protection.png" alt="" style={{ width: '60px', height: '60px' }} />
                        <div className="text_title" style={{ color: 'rgb(122, 117, 117)' }}>
                        <p style={{fontSize: "10px", textAlign: "center"}}>
                            בעלי חיים והגנת הסביבה
                            </p>
                        </div>
                    </Grid>


                    <Grid item xs={2} style={{}}>
                        <img className="Children_and_youth_at_risk_and_incapable" src="/images/imgPartThird/Children_and_youth_at_risk_and_incapable.png" alt="" style={{ width: '60px', height: '60px' }} />
                        <div className="text_title" style={{ color: 'rgb(122, 117, 117)' }}>
                        <p style={{fontSize: "10px", textAlign: "center"}}>
                            ילדים ונוער בסיכון ומעוטי יכולת
                            </p>
                        </div>
                    </Grid>
                </Grid>


                <Grid>
                    <Grid item xs={2} style={{}}>
                        <img className="Welfare_and_employment" src="/images/imgPartThird/Welfare_and_employment.png" alt="" style={{ width: '60px', height: '60px' }} />
                        <div className="text_title" style={{ color: 'rgb(122, 117, 117)' }}>
                        <p style={{fontSize: "10px", textAlign: "center"}}>
                            רווחה ותעסוקה
                            </p>
                        </div>
                    </Grid>

                    <Grid item xs={2} style={{}}>
                        <img className="health" src="/images/imgPartThird/health.png" alt="" style={{ width: '60px', height: '60px' }} />
                        <div className="text_title" style={{ color: 'rgb(122, 117, 117)' }}>
                        <p style={{fontSize: "10px", textAlign: "center"}}>
                            בריאות
                            </p>
                        </div>
                    </Grid>

                    <Grid item xs={2} style={{}}>
                        <img className="People_with_disabilities" src="/images/imgPartThird/People_with_disabilities.png" alt="" style={{ width: '60px', height: '60px' }} />
                        <div className="text_title" style={{ color: 'rgb(122, 117, 117)' }}>
                        <p style={{fontSize: "10px", textAlign: "center"}}>
                            אנשים עם מוגבלות
                            </p>
                        </div>
                    </Grid>
                    
                </Grid>

                <Grid style={{width:''}}>
                    <div className="text_title" style={{ fontSize: '25px', fontWeight: 'bold',color:'#FF800B'}}>
                    <p style={{fontSize: "25px", textAlign: "right", paddingLeft:'130px'}}>

                        בחר/י תחום 
ועמותה הקרובים לליבך

                        </p>
                    </div>

                    <div className="text" style={{ color: 'rgb(122, 117, 117)' }}>

                       <p style={{fontSize: "15px", textAlign: "right" ,direction:"rtl"}}>
                           .מבחר עמותות הפועלות למען מגוון תחומים חברתיים
                           <br/><br/> 
                            כל העמותות נבחרות בקפידה ועומדות בקריטריונים של <br/>
                            התנהלות
                            .תקינה,שקיפות,ויעילות

                        </p>

                    </div>
                </Grid>
            </Grid>

        );
    }
}
export default ThirdPart;