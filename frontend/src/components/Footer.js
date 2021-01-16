import React from 'react';
import './Footer.css';
import { Button1 } from './Button1';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join Us to know about our newest deals before anyone else
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button1 buttonStyle='btn--outline'>Subscribe</Button1>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
         
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/signup'>Contact</Link>
            <Link to='/About'>About</Link>
            <Link to='/Home'>Stores</Link>
            <Link to='/Home'>Books</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
    
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/signup'>Instagram</Link>
            <Link to='/signup'>Facebook</Link>
            <Link to='/signup'>Youtube</Link>
            <Link to='/signup'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Reader's 
                World
              
            </Link>
          </div>
          <small class='website-rights'>Rohan © </small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/signup'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/signup'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/signup'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/signup'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/signup'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;