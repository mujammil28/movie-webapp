import { Component } from "react";
import styles from "./navbar.module.css"


export default class Navbar extends Component{


        render(){
            
    let visible=true;

//    const checkVisible=()=>{
//     visible?"cartcount":"cartcountvisible"
//     }
                const {cartCount}=this.props
                console.log(this.props)
            return(

                    <>
                        <div className={styles.headerdiv}>
                        <div className={styles.headertitle}>
                            <h3>Movies WebApp</h3>
                        </div>
                        <div className={styles.headercart}>
                            <img className={styles.cartimg} src="https://cdn-icons-png.flaticon.com/128/3643/3643914.png" alt="cart"/>
                           {visible?<span id={styles.cartcount}>{cartCount}</span>:
                            <span id={styles.cartcountvisible}>{cartCount}</span>}
                        </div>
                     
                        </div>

                    </>



            )
        }


}