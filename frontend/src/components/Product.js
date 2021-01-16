import React from 'react'
import { Link } from 'react-router-dom'
// import { Card } from 'react-bootstrap'
import Rating from './Rating'
import './Product.scss'


const Product = ({ product }) => {
  return (
    <div className='cardstyleq'>
      
      <div className='cardq'>

      <Link to={`/product/${product._id}`}>
        <img class='card-imageq' src={product.image}  />
      </Link>


       <b>
          <Rating
          
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
     </b>

         <h2> price: ${product.price} </h2>
     
    
      </div>
        <Link to={`/product/${product._id}`}>
            <h2>{product.name}</h2>
        </Link>
    </div>
  )
}

export default Product
