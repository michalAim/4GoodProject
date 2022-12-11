import { classicNameResolver } from 'typescript';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import { blueGrey } from '@material-ui/core/colors';
import { Category } from "./DonateTo/donateTo";
import { Button } from '@material-ui/core';


   const CategoriesList = (state: {categoryList: Array<Category>}) =>  (
   <Grid>  
            <div>
            <table style={{   border: "1px solid black" ,borderRadius : "2px", marginTop:'20px', width:'300px'}} >
            <tr> <td  style={{ backgroundColor: 'cornflowerblue'}}>
               <p style={{ float: 'right', margin: '0px', fontSize: '13px' }}> לבחירת קטגוריה</p>

               </td></tr>

            {state.categoryList.map((category: Category) => (
            <tr> <td>
               <p style={{ float: 'right', margin: '0px', fontSize: '13px'}}> 
               <Button>{category.title}</Button>
                </p> 
            <img src={category.logo} alt="" style={{ margin:'0px', float: 'left', height: '25px', width: '25px'}} />
            </td></tr>
            ))}

  </table>

</div>
            
             </Grid>)
  
export default CategoriesList;