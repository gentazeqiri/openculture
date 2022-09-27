import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./audiobooks.css"

const Audiobooks = () => {
    return(
        <div>
            <Navbar/>
        <Header/>
        
        <div className="audiobooks">
            <img src="http://prodimage.images-bn.com/pimages/9781538724736_p0_v4_s1200x630.jpg" alt="" className="siImg" />
            <div className="audiobooksDesc">
                <h1 className="audiobooksTitle">Verity</h1>
                <span className="audiobooksType">Thriller</span>
                <span className="audiobooksRate">8.5</span>
                <span className="audiobooksLanguage">English</span>
                
                <span className="audiobooksActors">Audiobook narrators</span>
                <span className="audiobooksListActors">Cassandra Campbell</span>
            
           
           
           
            </div>
                <div className="audiobooksDetails">
                    <div className="audiobooksRating">
                        <div className="audiobooksRating">
                           
                            
                        </div>
                        <div className="audiobooksDetailTexts">
                            
                            
                            <button className="audiobooksCheckButton">Play</button>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
    )
}

export default Audiobooks;