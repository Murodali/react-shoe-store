import React, { Component } from "react";
import Title from "../Title";
import CartColumns from './CartColumns';
import EmptyCart from './EmptryCart';
import {ProductConsumer} from "../../Context";
import CartList from './CartList';
import CartTotals from './CartTotals';


export default class Cards extends Component{
    render(){
        return(
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length > 0){
                            return(
                                <React.Fragment>
                                <Title name="your" title="cart">

                                </Title>
                                <CartColumns></CartColumns>
                                <CartList value ={value}></CartList>
                                <CartTotals value ={value}></CartTotals>

                                </React.Fragment>

                            );

                        }else
                        return(
                            <EmptyCart ></EmptyCart>
 
                        );
                    }}
                </ProductConsumer>

            </section>

        )
    }
}