import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./authors.css"

const Authors = () => {
    return(
        <div>
            <Navbar/>
        <Header/>
        
        <div className="authors">
            <img src="https://images.gr-assets.com/authors/1464032240p8/5430144.jpg" alt="" className="siImg" />
            <div className="authorsDesc">
                <h1 className="authorsTitle">Colleen Hoover</h1>
                <span className="authorsType">Best Seller Authors</span>
                <span className="authorsRate">8.5</span>
                <span className="authorsLanguage">English</span>
                
                <span className="authorsActors">Quote</span>
                <span className="authorsListActors">“Push your boundaries, that's what they're there for.”</span>
            
           
           
           
            </div>
                <div className="authorsDetails">
                    <div className="authorsRating">
                        <div className="authorsRating">
                           
                            
                        </div>
                        <div className="authorsDetailTexts">
                            
                            
                            <button className="authorsCheckButton">Read</button>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
    )
}

export default Authors;