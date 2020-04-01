import React,{Component} from 'react';
import "../../App.css";

export default class CartItem extends Component{
    render(){
        const {id, title, img,price, total,count} = this.props.item;
        const { increment, decrement, removeItem} = this.props.value;
        return(
            <div className="row my-2 text-capitalize text-center">
                <div className=" col-10 col-lg-2 mx-auto my-2">
                    <img src={img} className="img-fluid" alt="product" style={{width:"5rem",height:"5rem"}}>
                    </img>
                </div>
                <div className=" col-10 col-lg-2 mx-auto my-2">
                    <span className="d-lg-none">productname:</span>{title}
                </div>
                <div className=" col-10 col-lg-2 mx-auto my-2">
                    <span className="d-lg-none">price:</span>${price}
                </div>

                <div className=" col-10 col-lg-2 mx-auto my-2">
                    <div className="d-flex justify-content-center">
                        <div>
                        <button className="btn my-2 my-sm-0  mx-1" onClick = {() =>{
                            return decrement(id); }}>-</button>
                        

                        <button className="btn my-2 my-sm-0 mx-1">{count}</button>
                        <button className="btn my-2 my-sm-0  mx-1" onClick = {() =>{
                            return increment(id); }}>+</button>
                            </div>
                        </div>
                </div>

                <div className=" col-10 col-lg-2 mx-auto my-2">
                    <button className="btn my-2 my-sm-0 mx-1" onClick ={ () => {
                        return removeItem(id);
                    }}>Remove</button>
                </div>

                <div className=" col-10 col-lg-2 mx-auto my-2">
                    <strong>
                        total: {total}$
                    </strong>
                    
                </div>
            </div>

        )
    }
}