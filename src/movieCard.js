import { Component } from "react";


export default class MovieCard extends Component{



  
      removeStar=()=>{

       this.setState((prevState)=>{
        if(prevState.stars>0){return {
               stars:prevState.stars-0.5,
            }
          }
        })
      }

        changeFav=()=>{
          
            this.setState({
                fav:!this.state.fav
                
            })
            console.log(this.state.fav)
        }

        changeCart=()=>{
          this.setState({
                cart:!this.state.cart
          })
        }




render(){
 
  const {img,title, plot, price, rating, stars, fav, cart}=this.props.movies;
  const {movies,addStar,removeStar,handleCart,handleFav}=this.props;

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
        
        <img className="str-btn"  onClick={()=>removeStar(movies)}
         src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"/>
        
        &nbsp;&nbsp; 
        
        <img className="stars" 
        src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
      &nbsp;&nbsp;
      
      <img className="str-btn"  onClick={()=>addStar(movies)}
      src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"/>

      &nbsp;&nbsp;&nbsp;<span>{stars}</span>
        </div>
    
       
       {fav?<button className="favourite-btn" onClick={()=>handleFav(movies)}>
       Favorite</button>:<button className="unfavourite-btn" onClick={()=>handleFav(movies)}>
       UnFavorite</button>} 
          
        {cart?<button className="cart-btn" onClick={()=>handleCart(movies)}>
          Add to cart
          </button>:
        <button className="added-cart-btn" onClick={()=>handleCart(movies)}>
          Remove 
          </button>}
        
        </div>

        </div>
        </div>
      </div>
    )
}

}