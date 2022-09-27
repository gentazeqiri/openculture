import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./e-books.css"

const Ebooks = () => {
    return(
        <div>
            <Navbar/>
        <Header/>
        
        <div className="ebooks">
            <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470427482i/27362503._UY500_SS500_.jpg" alt="" className="siImg" />
            <div className="ebooksDesc">
                <h1 className="ebooksTitle">It ends with us</h1>
                <span className="ebooksType">Romance,Drama</span>
                <span className="ebooksRate">8.5</span>
                <span className="ebooksLanguage">English</span>
                
                <span className="ebooksActors">Actors</span>
                <span className="ebooksListActors">Lily Bloom, Atlas</span>
            
           
           
           
            </div>
                <div className="ebooksDetails">
                    <div className="ebooksRating">
                        <div className="ebooksRating">
                           
                            
                        </div>
                        <div className="ebooksDetailTexts">
                            
                            
                            <button className="ebooksCheckButton">Read</button>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
    )
}

export default Ebooks;