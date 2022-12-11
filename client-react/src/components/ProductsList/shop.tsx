import { classicNameResolver } from 'typescript';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import ProductsList from './productsList';
import { Category } from '@material-ui/icons';
import { Shop2TwoTone } from '@mui/icons-material';


export interface Products {
    title?: string;
    donationRate?: string;
    price?: string;
    image: string;
}



    class Shop extends Component <{}, {productsList:Array<Products>}> {


    constructor(props: any) {
        super(props);
        this.state = {
            productsList: [],
        }
    }

    componentDidMount() {
        this.setState({ productsList: [{title: 'טלויזיה LED',
                image: '/images/products/tv.png',
                },
                {title: 'גריל גז',
                    image: '/images/products/Gas_Grill.png',

                }]
        })
    }



    render() {
        const state = {
            productsList: this.state.productsList,
        }
        return (
            <div style={{ width: '600px', overflow: 'hidden' }}>
                <table style={{ border: "0px solid ", width: '600px' }} >
                 <ProductsList productsList={state.productsList}/>
                </table>
            </div>
        )
    }
}

export default Shop;


