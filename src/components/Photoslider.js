import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from './slider/slider1.jpg';
import slider2 from './slider/slider2.jpg';
import '../App.css';
import Productlist from "./Productlist.js";

const photos = [
    {
        name: "phot 1",
        src1: slider1,
    },
    {
        name: "photo 2",
        src2: slider2,
    },


]
export default class Photoslider extends Component{
    render(){
        const settings = {
            dots:true,
            fade:true,
            infinite:true,
            speed: 500,
            arrows: false,
            slideToShow:1,
            slideToScroll: 1,
            className: "slides"
        };
        return(
            <div className="photoslider">
                
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return(
                            <div className="carousel"> 
                            <img  className="slider-images" src={photo.src1}></img>
                            <img  className="slider-images" src={photo.src2}></img>
                            <img  className="slider-images" src={photo.src3}></img>
                            </div>
                        )
                    })}
                </Slider>
                <Productlist>
                    
                </Productlist>

            </div>



        )

        
    }

}

