import { classicNameResolver,  } from 'typescript';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import { AnyRecord } from 'dns';
import { Products } from './shop'

// import Typography from '@material-ui/core/Typography';
// import { border, width } from '@material-ui/system';



const ProductsList = (state: {productsList: Array<Products>}) =>  (
            <Grid>
                {state.productsList.map((product: Products) => (
                        <div  style={{ height: '180px', width: '150px', borderStyle:"solid", float: 'right', marginLeft:"20px", marginBottom:"20px"}}>
                              <div style={{ float: 'right', width:"70%"}} >
                                <p style={{ fontSize: '15px', marginTop: '0px' , textAlign:"center"}} >

                                {product.title}
                                </p>

                            </div>
                            <div>
                                <img src={product.image} alt="" style={{ height: '100px', width: '100px', float: 'right', marginRight:"25px"}} />
                            </div>

                            <div style={{ float: 'right' }}>
                                <button style={{fontSize:"10px", width:"100px", padding:"0px", marginRight:"25px"}}>לרכישת המוצר</button>
                            </div>
 
                        </div>

          ))}

                
            </Grid>)

export default ProductsList;