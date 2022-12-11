import React, { Component } from 'react';
import { classicNameResolver } from 'typescript';
import Grid from '@material-ui/core/Grid';

import Shop from './shop';
import CategoriesList from "../categoriesList";

export interface Category {
  title?: string;
  description?: string;
  logo?: string;
}



class ShoppingList extends Component <{}, {categoryList:Array<Category>}> {

  constructor(props: any) {
    super(props);
    this.state = {
      categoryList: []
    }
}

componentDidMount() {


    this.setState({ categoryList: [{title:'טלוויזיות וקולנוע ביתי', logo: '/images/imgPartThird/Education_patience_and_person_Rights.png'},
            {title: 'סמארטפונים וסלולר', logo: '/images/imgPartThird/Security_and_rescue.png'},
            {title: 'מחשבים, טכנולוגיה וגיימינג', logo: '/images/imgPartThird/Senior_citizens_and_Holocaust_survivors.png'},
            {title: 'מוצרי חשמל לבית', logo: '/images/imgPartThird/Women_in_distress.png'},
            {title: 'ספורט', logo: '/images/imgPartThird/Animals_and_environmental_protection.png'},
            {title: 'פנאי', logo: '/images/imgPartThird/Children_and_youth_at_risk_and_incapable.png'}]
    })
}

  render() {
    const state = {
      categoryList: this.state.categoryList
  }
    return (
       <Grid style={{ display: "block", margin: "auto",
  width: "90%", marginTop: "40px"}}>
      <div style={{ overflow: 'hidden', display:'table', width:'80%' }} >

         <div style={{ float: 'right'}}>
            <CategoriesList categoryList={state.categoryList}/>


          </div>
          <div style={{ float: 'left',  display:'table-cell', marginTop: "13px"}}>
          <Shop/>


          </div>
      
</div>
     
      </Grid>
    );
  }
}

export default ShoppingList;