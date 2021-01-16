import React, {Component} from 'react';
import './App.css';
import Main from './components/Main-container';
import ImageSlider from './components/Slider';
import ArticleContainer from './components/Article-container';
import SimpleSlider from './components/Slider2';
import SSlider from './components/Slider3'
import { Link } from 'react-router-dom';
import SearchBox from './components/SearchBox'

class Home extends Component{

  constructor(){
    super();
    this.state={
      books:[]
  
    }

  }

  componentDidMount(){
    fetch('./data.json')
    .then(response=>response.json())
    .then(user =>this.setState({books: user}));
  }

  

  render(){ return (
    <>
    
        
        <Main></Main>
        <div className='gg'>
        <div className='nav-item'>

              </div>
        <ImageSlider>
        {this.state.books.map(book=><p key={book.id}>{book.title} </p>)}
        </ImageSlider> </div>
       <ArticleContainer></ArticleContainer>
       <div className='gg'>

     <SimpleSlider> 
       {this.state.books.map(book=><p key={book.id}>{book.title} </p>)}
       </SimpleSlider>
       </div>
       <div className='ggg'>
       <SSlider> 
       {this.state.books.map(book=><p key={book.id}>{book.title} </p>)}
       </SSlider>
       </div>

      
     
    </>
  );
}}

export default Home;
