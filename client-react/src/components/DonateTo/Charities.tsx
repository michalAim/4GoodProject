import { classicNameResolver,  } from 'typescript';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import { AnyRecord } from 'dns';
import {Charity} from "./donateTo";


// import Typography from '@material-ui/core/Typography';
// import { border, width } from '@material-ui/system';



const Charities = (state: {charitiesList: Array<Charity>}) =>  (
            <Grid>
                {state.charitiesList.map((charity: Charity) => (
                    <tr> <td>
                        <div>
                            <div>
                                <img src={charity.image} alt="" style={{ height: '100px', width: '100px', float: 'right' }} />
                            </div>
                            <div style={{ float: 'right', marginRight: "10px" , width:"70%"}} >
                                <p style={{ fontSize: '15px', marginTop: '0px' , textAlign:"right"}} >

                                {charity.title}
                                </p>

                            </div>
                            <a href={charity.link} target="_blank">
                            <div style={{ float: 'right', marginRight: "10px"  }}>
                                <button className="categoriesButton">מי אנחנו</button>
                            </div>
                            </a>
                            <div style={{ float: 'right', marginRight: '60px' }}>
                                <button className="categoriesButton">תרמו לנו</button>
                            </div>
 
                        </div>
                    </td></tr>

          ))}

                
            </Grid>)

export default Charities;