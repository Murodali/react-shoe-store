import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';

import '../App.css';
import PropTypes from 'prop-types';


export default class Product extends Component {
    render(){
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
               
                    <div className="card">
                        <ProductConsumer>
                            {value =>(
                                <div className="img-container p-5" onClick= {() => value.handleDetail(id)}>
                                <Link to ='/details'>
                                    <img src={img} alt="product" className="card-img-top"></img>
                                </Link>
                                <button className="card-btn" disabled={inCart?true:false} onClick={()=> {value.addToCart(id); value.openModal(id);}}>
                                {inCart?(<p className="text-capitaize mb-0" disabled>In Cart</p>): (<i className="fas fa-cart-plus"></i>)}
                                </button>
    
                                
                            </div>

                            )}

                        
                        
                        </ProductConsumer>
                        {/* card footer */}
                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">
                                {title}
                            </p>
                            <h5 className="font-italic mb-0">
        <span className="mr-1">{price}$</span>
                            </h5>
                        </div>

                    </div>
            
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div `
`;

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired

}