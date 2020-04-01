import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}){
    const {cartSubtotal,cartTax,cartTotal,clearCart} = value;
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to ='/'>
                            <button className="btn btn-otline-danger text-uppercase mb-3 px-5" type="button"
                            onClick = {() => clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <div>
                        <h5>
                            <span className="text-title mx-auto mx-auto">
                                subtotal:
                            </span>${cartSubtotal}
                        </h5>

                        <h5>
                            <span className="text-title mx-auto mx-auto">
                                tax:
                            </span>${cartTax}
                        </h5>

                        <h5>
                            <span className="text-title mx-auto mx-auto">
                                Total:
                            </span>${cartTotal}
                        </h5>

                        </div>



                    </div>
                </div>

            </div>
        </React.Fragment>

    )
}