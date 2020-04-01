import React, { Component } from "react";
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import '../App.css';



export default class Details extends Component{
    render(){
        return(
            <ProductConsumer>
                {(value)=> {
                    const {id,
                        company,
                        img,info,
                        price,
                        inCart,
                        title
                    } = value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/* title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted ">
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            {/* end title*/}
                            {/* product info*/}
                            
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="photo" className="img-fluid"></img>
                                </div>
                                {/*Product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Made by:
                                    <span className="text-uppercase">{company}</span></h4>
                                    <h4><strong>
                                        price: <span>${price}</span>
                                        </strong></h4>
                                        <p className="text-capitalize font-weight-bold mt-5 mb-0">
                                            Info about the product:
                                        </p>
                                        <p className="text-muted lead">
                                            {info}
                                        </p>

                                        {/*buttons*/}
                                        <Link to ='/'>
                                            <button className="btn my-2 my-sm-0">Back to Products

                                            </button>

                                        </Link>
                                        <button className="btn my-2 my-sm-0 text-capitalize" disabled={inCart?true:false}
                                        onClick ={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            {inCart ? "inCart": "add to cart"}

                                        </button>

                        </div>

                        
                            </div>

                        </div>

                    )
                       
                }}
            </ProductConsumer>

        )
    }
}