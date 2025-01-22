import { Component } from "react";


export default class MovieCard extends Component{

  constructor(){
    super();

    this.state={
      img:"https://i.pinimg.com/736x/21/d6/21/21d62106e83e8bddfa41024dfc195356.jpg",
        title:"The Avengers",
        plot:"It is action and animation dilled movie.",
        price:"199",
        rating:"8.9",
        stars:1,
    }
  }

  addStar=()=>{
      console.log(this.state);

     // Form-1 // this.setState({

      //   stars:this.state.stars+0.5,

      // })
      //form-2

      this.setState((prevState)=>{
          
          return {
            stars:prevState.stars+0.5,
          }
      })

  }
  
      removeStar=()=>{

       this.setState((prevState)=>{
        if(prevState.stars>0){return {
               stars:prevState.stars-0.5,
            }
          }
        })
      }

render(){
  const {img,title, plot, price, rating, stars}=this.state;

    return (
      <div className="main">
        <div className="movie-card">
        <div className="left">
            <img alt="poster-image" src={img}/>
        </div>

        <div className="right">
        <div className="title">{title}</div>
        <div className="plot">{plot}</div>
        <div className="price"> Rs.{price}/-</div>

        <div className="footer">
        <div className="rating">{rating}</div>
        <div className="star-dis">
        
        <img className="str-btn"  onClick={this.removeStar}
         src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"/>
        
        &nbsp;&nbsp; 
        
        <img className="stars" 
        src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
      &nbsp;&nbsp;
      
      <img className="str-btn"  onClick={this.addStar}
      src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"/>

      &nbsp;&nbsp;&nbsp;<span>{stars}</span>
        </div>
    
       
        <button className="favourite-btn">Favorite</button>
        <button className="cart-btn">Add to cart</button>
        </div>

        </div>
        </div>
      </div>
    )
}

}