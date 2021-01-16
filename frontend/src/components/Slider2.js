import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'
import App from '../App';
import { Link } from 'react-router-dom';

const SimpleSlider =(props)=> {
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
        <h2> Fiction</h2>
        <Slider {...settings}>
                    <Link to={`/product/5ffaaaa328983c0d71c48279`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/11.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[10]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c4827a`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/12.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[11]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c4827b`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/13.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[12]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c4827c`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/14.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[13]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c4827d`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/15.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[14]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c4827e`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/16.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[15]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c4827f`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/17.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[16]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48280`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/18.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[17]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48281`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/19.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[18]}</span></h2>
                    </div></div></div>
                    </Link>
                    <Link to={`/product/5ffaaaa328983c0d71c48282`}>
                    <div className="card-wrapper"><div className="card"><div className="card-image">
                        <img src={"images/20.png"} /></div><div className="details">
                        <h2>{props.name} <span className="title">{props.children[19]}</span></h2>
                    </div></div></div>
                    </Link>
        </Slider>
      </div>
    );
  }


export default SimpleSlider;