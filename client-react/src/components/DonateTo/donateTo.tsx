import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CategoriesList from '../categoriesList';
import Charities from "./Charities";

export interface Category {
  title?: string;
  description?: string;
  logo?: string;
}

export interface Charity {
    title?: string;
    description?: string;
    image: string;
    link?: string;
}



class DonateTo extends Component <{}, {categoryList:Array<Category>, charitiesList:Array<Charity>}> {

  constructor(props: any) {
    super(props);
    this.state = {
      categoryList: [],
      charitiesList: []
    }
}

componentDidMount() {

  this.setState({ categoryList: [{title:'חינוך, סבלנות וזכויות אדם', logo: '/images/imgPartThird/Education_patience_and_person_Rights.png'},
          {title: 'ביטחון והצלה', logo: '/images/imgPartThird/Security_and_rescue.png'},
          {title: 'אזרחים ותיקים וניצולי שואה', logo: '/images/imgPartThird/Senior_citizens_and_Holocaust_survivors.png'},
          {title: 'נשים בסיכון', logo: '/images/imgPartThird/Women_in_distress.png'},
          {title: 'בעלי חיים והגנת הסביבה', logo: '/images/imgPartThird/Animals_and_environmental_protection.png'},
          {title: 'ילדים ונוער בסיכון ומעוטי יכולת', logo: '/images/imgPartThird/Children_and_youth_at_risk_and_incapable.png'},
          {title: 'רווחה ותעסוקה', logo: '/images/imgPartThird/Welfare_and_employment.png'},
          {title: 'בריאות', logo: '/images/imgPartThird/health.png'},
          {title: 'אנשים עם מוגבלות', logo: '/images/imgPartThird/People_with_disabilities.png'}],
  charitiesList: [{title: 'מצמצמם רווחים',
      image: '/images/charities/metzamzemim.png',
      link: 'https://www.closing-ranks.org/'},
      {title: 'ילדים בסיכוי',
          image: '/images/charities/yeladim_besikoi.png',
          link: 'https://yeladim.org.il/'}]})

}

  render() {
    const state = {
      categoryList: this.state.categoryList,
        charitiesList: this.state.charitiesList
  }
    return (
       <Grid>
      <div style={{ overflow: 'hidden', width:'80%' }} >

         <div style={{ float: 'right'}}>
            <CategoriesList categoryList={state.categoryList}/>


          </div>
          <div style={{ float: 'left',  display:'table-cell', marginTop: "13px"}}>
              <div style={{ width: '600px', overflow: 'hidden' }}>
                  <table style={{ border: "0px solid ", width: '600px' }} >
                      <Charities charitiesList={state.charitiesList}/>
                  </table>
              </div>


          </div>

</div>

      </Grid>
    );
  }
}

export default DonateTo;