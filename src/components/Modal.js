import React, {Component} from 'react';
import "../App.css";
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



export default class Modal extends Component{
    render(){
        return(
            <ProductConsumer>
                {(value) => {
                    const {modalOpen,closeModal} = value;
                    const {img,title,price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }else{
                        return (
                            <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5" id="modal">
                                        <h5>iteam added to the cart</h5>
                                        <img src={img} className="img-fluid" alt="product"></img>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price: ${price}</h5>
                                        <Link to='/'>
                                            <button className="btn my-2 my-sm-0 text-capitalize" onClick ={()=>closeModal()}>Back</button>
                                        </Link>
                                        <Link to='/card'>
                                            <button className="btn my-2 my-sm-0 text-capitalize" onClick ={()=>closeModal()}>Go to Cart</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>

                        </ModalContainer>

                        );

                    }

                    
                }}
            </ProductConsumer>

        );
    }
}

const ModalContainer = styled.div `
position:fixed;
top:0;
right:0;
left:0;
bottom:0;
background: rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:white;
}
`
