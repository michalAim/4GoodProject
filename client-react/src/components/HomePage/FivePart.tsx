import { classicNameResolver } from 'typescript';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import { border, width } from '@material-ui/system';



class FivePart extends Component {
    render() {
        return (
            <Grid item xs={12} style={{}}>
                <div className="question" style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'center',color:'#FF800B' }}>
                    שאלות נפוצות
                </div>
                <br></br>

                <div className="subQ">
                    <p>
                        ?מאיפה מגיע הכסף לתרומה
                    </p>
                </div>
                <div className="Answer">
                    <p>
                        החברות וחנויות אונליין, השותפות לנו לדרך של "נתינה בחזרה", בנוסף למחירי מבצע הבלעדיים, מעניקות לנו (בעד שיווק המוצרים שלהם דרך 4Good) אחוז משמעותי מסכום המכירה ומשם הכסף לתרומה.
                    </p>
                </div>

                <div>
                    <br></br>
                    <div className="subQ">
                        <p>
                            ?האם אני יכול/ה לתרום לעמותה שאינה רשומה כאן באתר
                        </p>
                    </div>
                    <div className="Answer">
                        <p>
                            אפשר לתרום רק לעמותות הרשומות ששותפות למיזם ונבחרו על ידינו בקפדנות, שהן מוכרות לפי סעיף 46 ושיש להן אישורים על ניהול תקין ועוד.
                            אנו דואגים שתהיה לפחות עמותה אחת עבור כל מטרה חברתית רשומה וקרובה ללב
                            <br></br>
                            נשמח לקבל הצעות לגבי מטרות ו/או עמותות אחרות להוסיף בהמשך
                        </p>
                    </div>
                </div>
                <div>
                    <br></br>
                    <div className="subQ">
                        <p>
                            ? מתי תקבל העמותה שבחרתי את התרומה
                            (כתוצאה מהקניה שלי)
                        </p>
                    </div>
                    <div className="Answer">
                        <p>
                            בחודש שלאחר הקניה (אנו מרכזים החודש הקודם וישר תורמים לעמותות)
                            <br></br>
                        </p>
                    </div>
                </div>

                <div>
                    <br></br>
                    <div className="subQ">

                        ? 4Good איך מתנהלת ארגון
                        <br></br>
                    </div>
                    <div className="Answer">
                        <p>
                            4Good
                            <br></br>
                            הוא עסק חברתי שפועל כחברה ללא מטרת רווח בכך שכל הרווח של העסק הוא למען הציבור ולא למען העסק או בעליה.
                            כל הרווח הנקי של העסק נתרם ישירות לעמותות.
                            <br></br>
                            מבחינת יעילות 4Good מתנהלת  כמו העמותות היעילות ביותר שבהן סביבות 90% מההכנסה של הארגון מגיע ישירות לעמותות , ורק כ-10% מכוון לצורך הוצאות תפעול הארגון והאתר.בנוסף,חלק מעובדי הארגון ,היועצים ונותני השירות העסקית והמקצועית ,פועלים בהתנדבות ,וביחד עם זה שהארגון ממומן חלקית בעזרת XYZ,אנו מצליחים לתפעל ולנהל את הארגון בהוצאות מאוד נמוכות יחסית ,ובכך מגיע מרבית תרומה ישירה ליעד

                        </p>

                    </div>
                </div>











            </Grid>

        );
    }
}

export default FivePart;