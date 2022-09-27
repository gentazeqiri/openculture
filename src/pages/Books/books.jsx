import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./books.css"

const Books = () => {
    return(
        <div>
            <Navbar/>
        <Header/>
        
        <div className="books">
            <img src="https://pbx2-pbww-prod-pbww-cdn.getprintbox.com/media/productimage/24ac68ff-4529-4d75-8eff-29cd8c39600e/Blank%20Bookmarks_thumb_900x900" alt="" className="siImg" />
            <div className="booksDesc">
                <h1 className="booksTitle">Book Mark</h1>
                <span className="booksType">Book accessorie</span>
                <span className="booksRate">8.5</span>
                <span className="booksLanguage">English</span>
                <span className="booksFeatures">Features</span>
                <span className="booksActors">Actors</span>
                <span className="booksListActors">Actor 1, 2, 3</span>
            
           
           
           
            </div>
                <div className="booksDetails">
                    <div className="booksRating">
                        <div className="booksRating">
                            <span>Excellent</span>
                            <button>9</button>
                        </div>
                        <div className="booksDetailTexts">
                            <span className="booksPrice">$15</span>
                            <span className="booksTaxOp">includes what?</span>
                            <button className="booksCheckButton">See availability</button>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
    )
}

export default Books;