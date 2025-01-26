
import index from "./index.css"
import MovieList from "./movieList";
import Navbar from "./navbar";
import { movies } from "./moviesData";
import React from "react";
class App extends React.Component{
  constructor(){
    let cartCount=0;
          super()
          this.state={
               cartCount,
               movies,
            
          }
        }
  
        handleStar=(movie)=>{
  
          const {movies}=this.state
             
          const  mid=movies.indexOf(movie)
  
          if(movies[mid].stars <5){
              movies[mid].stars += 0.5
          }
      
          this.setState({
              movies
          });
  
        }
  
        removeStar=(movie)=>{
  
          const {movies}=this.state
             
          const  mid=movies.indexOf(movie)
  
          if(movies[mid].stars >0){
              movies[mid].stars -= 0.5
          }
      
          this.setState({
              movies
          });
  
        }
  
        handleFav=(movie)=>{
          const {movies}=this.state
  
          const mid=movies.indexOf(movie);
         
          movies[mid].fav=!movies[mid].fav
          this.setState({
             movies
         });
        }
  
  
  
        handleCart=(movie)=>{
           let {movies,cartCount}=this.state
  
           const mid=movies.indexOf(movie);
           console.log(movies[mid].cart)
          
           if(movies[mid].cart){
            cartCount+=1;
           }else{
            cartCount-=1;
           }

           movies[mid].cart=!movies[mid].cart
           
           this.setState({
              movies,
              cartCount
          });
  
        }
  
  
  render(){ 

          const {movies,cartCount}=this.state
  
    return (
      <>
      <Navbar  
        cartCount={cartCount}/>
      <MovieList movies={movies}

        addStars={this.handleStar}
        remoStars={this.removeStar}
        handleCart={this.handleCart}
        handleFav={this.handleFav}
/>
      </>
    );
  }
 
}

export default App;
