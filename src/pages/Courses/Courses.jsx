import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./courses.css"

const Courses = () => {
    return(
        <div>
            <Navbar/>
        <Header/>
        
        <div className="courses">
            <img src="https://testdumps.org/wp-content/uploads/2020/09/CCNA-1.png" alt="" className="siImg" />
            <div className="coursesDesc">
                <h1 className="coursesTitle">Cisco certified network associate</h1>
                <span className="coursesType">CSE</span>
                <span className="coursesRate">8.5</span>
                <span className="coursesLanguage">English</span>
                
                <span className="coursesActors">Lecturers</span>
                <span className="coursesListActors">Neil Anderson, David Bombal</span>
            
           
           
           
            </div>
                <div className="coursesDetails">
                    <div className="coursesRating">
                        <div className="coursesRating">
                            
                        </div>
                        <div className="coursesDetailTexts">
                            <span className="coursesPrice">$150</span>
                            
                            <button className="coursesCheckButton">Add to cart</button>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
    )
}

export default Courses;