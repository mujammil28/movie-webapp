import { Component } from "react";
import MovieCard from "./movieCard";

export default class MovieList extends Component{
    

    render(){

        const {movies,addStars,remoStars,handleCart,handleFav}=this.props
        console.log(this.props)
                return(
                   <> 
                    
                   {movies.map((movie,index)=> 
                   <MovieCard movies={movie} 
                        key={index} 
                    addStar={addStars} 
                    removeStar={remoStars}
                    handleCart={handleCart}
                    handleFav={handleFav}
                   />)    }
                    </>

                )
    }

}