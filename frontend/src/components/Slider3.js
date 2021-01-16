import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'
import App from '../App';
import { Link } from 'react-router-dom';
const SSlider =(props)=> {
    let settings = {
        adaptiveheight: true,
        
        dots: true,
        autoplay: false,
        draggable: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 9,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
      
      <div>
        <h2> Biography</h2>
        <Slider {...settings}>
                    <Link to={`/product/5ffaaaa328983c0d71c48283`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/21.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[20]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48284`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/22.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[21]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48285`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/23.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[22]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48286`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/24.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[23]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48287`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/25.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[24]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48288`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/26.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[25]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48289`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/27.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[26]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c4828a`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/28.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[27]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c4828b`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/29.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[28]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c482c`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/30.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[29]}</span></h2>
                    </div></div></div>
                    </Link>
        </Slider>
      </div>
    );
  }


export default SSlider;