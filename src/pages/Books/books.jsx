import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./books.css"

const Books = () => {
    return(
        <div>
            <Navbar/>
        <Header/>
        
        <div className="books">
            <img src="https://s.yimg.com/uu/api/res/1.2/0GBXd289dMqVEPaqTl4x5w--~B/aD0xNTAwO3c9MTAzNTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="booksTitle">Moonlight</h1>
                <span className="booksType">Romance</span>
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
                            <span className="booksPrice">$100</span>
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