import { Component } from "react";


export default class MovieCard extends Component{


render(){
    return (
      <div className="main">
        <div className="movie-card">
        <div className="left">
            <img alt="poster-image" src="https://i.pinimg.com/736x/21/d6/21/21d62106e83e8bddfa41024dfc195356.jpg"/>
        </div>

        <div className="right">
        <div className="title">The avengers</div>
        <div className="plot">It is action and animation dilled movie.</div>
        <div className="price"> Rs.199/-</div>

        <div className="footer">
        <div className="rating">8.9</div>
        <div className="stars"> *****</div>
        <button className="favourite-btn">Favorite</button>
        <button className="cart-btn">Add to cart</button>
        </div>

        </div>
        </div>
      </div>
    )
}

}