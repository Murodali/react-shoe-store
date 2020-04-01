import React, { Component } from "react";
import Title from "./Title.js";
import Product from './Poduct';
import {ProductConsumer} from '../Context.js';



export default class Productlist extends Component{

    render(){
     
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">

                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key ={product.ids}product ={product}></Product>;
                                    })

                                }}
                            </ProductConsumer>

                        </div>
                    </div>
                </div>
            </React.Fragment>
            
               //<Product></Product>
            
        )
    }
}
  