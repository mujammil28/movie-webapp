import { Component } from "react";
import MovieCard from "./movieCard";


export default class MovieList extends Component{
    constructor(){
        super();
    
        this.state={

            movies:[
                {img:"https://i.pinimg.com/736x/21/d6/21/21d62106e83e8bddfa41024dfc195356.jpg",
                title:"The Avengers",
                plot:"It is action and animation dilled movie.",
                price:"199",
                rating:"8.9",
                stars:0,
                fav:true,
                cart:true,},
                {
                    img:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
                    title:"The Shawshank Redemption",
                    plot:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency",
                    price:"119",
                    rating:"7.2",
                    stars:0,
                    fav:true,
                    cart:true,
                },
                {
                    img:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                    title:"The Godfather",
                    plot:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
                    price:"189",
                    rating:"9.2",
                    stars:0,
                    fav:true,
                    cart:true,
                },
                {
                    img:"https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
                    title:"Terminator 2: Judgment Day",
                    plot:"A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
                    price:"149",
                    rating:"8.6",
                    stars:0,
                    fav:true,
                    cart:true,
                },
                
                {
                    img:"https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                    title:"Psycho",
                    plot:"A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother",
                    price:"179",
                    rating:"8.9",
                    stars:0,
                    fav:true,
                    cart:true,
                }

                
            ]
          
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
         const {movies}=this.state

         const mid=movies.indexOf(movie);
        
         movies[mid].cart=!movies[mid].cart
         this.setState({
            movies
        });

      }


    render(){

      
                console.log(this.state)
                return(
                   <>
                   
                   {this.state.movies.map((movie)=> 
                   <MovieCard movies={movie} 
                    addStar={this.handleStar} 
                    removeStar={this.removeStar}
                    handleCart={this.handleCart}
                    handleFav={this.handleFav}
                   />)    }
                   
                    </>

                )
    }

}