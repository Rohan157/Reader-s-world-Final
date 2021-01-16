import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'
import App from '../App';
import { Link } from 'react-router-dom';

const ImageSlider =( props)=> {
    let settings = {
        adaptiveheight: true,
        
        dots: true,
        autoplay: true,
        draggable: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 9,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
         
                     <Link to={`/product/5ffaaaa328983c0d71c4826f`}>
                    <div className="card-wrapper"><div className="card">
                        <div className="card-image">
                        <img src={"images/1.png"} /></div>
                        <div className="details">
                        <h2>{props.name} <span className="title">{props.children[0]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48270`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/2.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[1]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48271`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/3.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[2]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48272`}>   
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/4.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[3]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48273`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/5.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[4]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48274`}>

                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/6.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[5]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48275`}>
                    
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/7.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[6]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48276`}>
                    
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/8.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[7]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48277`}>
                    
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/9.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[8]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48278`}>
                 
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/10.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[9]}</span></h2>
                    </div></div></div>
                    </Link>

           
        </Slider>
    )
}

export default ImageSlider