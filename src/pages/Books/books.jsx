import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./books.css"

const Books = () => {
    return(
        <div>
            <Navbar/>
        <Header/>
        
        <div className="books">
            <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="booksTitle">Dune</h1>
                <span className="booksType">Fantasy Fiction, Planetary Romance</span>
                <span className="booksRate">8.5</span>
                <span className="booksLanguage">English</span>
                
                <span className="booksActors">Characters</span>
                <span className="booksListActors">Paul Atreides, Duke Leto, Lady Jessica</span>
            
           
           
           
            </div>
                <div className="booksDetails">
                    <div className="booksRating">
                        <div className="booksRating">
                            
                        </div>
                        <div className="booksDetailTexts">
                            <span className="booksPrice">$15</span>
                            
                            <button className="booksCheckButton">Add to cart</button>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
    )
}

export default Books;