import {faStore} from "@fortawesome/free-solid-svg-icons"
import {faSchool} from "@fortawesome/free-solid-svg-icons"
import {faFeather} from "@fortawesome/free-solid-svg-icons"
import {faHeadphones} from "@fortawesome/free-solid-svg-icons"
import {faBook} from "@fortawesome/free-solid-svg-icons"
import {faFilm} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
//import { useNavigate } from "react-router-dom"
import "./header.css"



const Header = ({type}) => {
    return (
        <></>
        // <div className="header">
        //     <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        //     <div className="headerList">
        //         <div className="headerListItem active">
        //         <FontAwesomeIcon icon={faFilm} />
        //         <span><a href="http://localhost:3000/movies">Movies</a></span>
        //     </div>
        //     <div className="headerListItem">
        //         <FontAwesomeIcon icon={faBook} />
        //         <span><a href="http://localhost:3001/Books">Books</a></span>
        //     </div>
        //     <div className="headerListItem">
        //         <FontAwesomeIcon icon={faHeadphones} />
        //         <span>AudioBooks</span>
        //     </div>
        //     <div className="headerListItem">
        //         <FontAwesomeIcon icon={faBook} />
        //         <span><a href="http://localhost:3001/ebooks">Ebooks</a></span>
        //     </div>
        //     <div className="headerListItem">
        //         <FontAwesomeIcon icon={faFeather} />
        //         <span>Authors</span>
        //     </div>
        //     <div className="headerListItem">
        //         <FontAwesomeIcon icon={faSchool} />
        //         <span><a href="http://localhost:3001/courses">Courses</a></span>
        //     </div>
        //     <div className="headerListItem">
        //         <FontAwesomeIcon icon={faStore} />
        //         <span>Shop</span>
        //     </div>
            
        
        //     </div>

        //     { type !== "list" &&
        //         <>
        //     <h1 className="headerTittle"> Welcome to openCulture</h1>
        //     <p className="headerDesc"> Read, Listen, Watch, Enjoy.</p>
        //     <p className="headerDesc">Anytime. Everywhere. </p>
        //     <button className="headerButton">Sign in / Register</button>
        //     <div className="headerSearch">
        //         <div className="headerSearchItem">
        //         <FontAwesomeIcon icon={faFilm} className="headerIcon" />
        //         <input 
        //         type="text" 
        //         placeholder="Enter your keywords.." 
        //         className="headerSearchInput" />
        //         </div>
        //         <div className="headerSearchItem">
        //             <button className="headerButton">Search</button>
        //         </div>
        //     </div></>}
        //     </div>
        // </div>
    )
}

export default Header