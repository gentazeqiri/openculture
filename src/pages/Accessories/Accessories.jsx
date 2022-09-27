import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./accessories.css"

const Accessories = () => {
    return(
        <div>
            <Navbar/>
        <Header/>
        
        <div className="accessories">
            <img src="https://pbx2-pbww-prod-pbww-cdn.getprintbox.com/media/productimage/24ac68ff-4529-4d75-8eff-29cd8c39600e/Blank%20Bookmarks_thumb_900x900" alt="" className="siImg" />
            <div className="accessoriesDesc">
                <h1 className="accessoriesTitle">Book Mark</h1>
                <span className="accessoriesType">Book accessorie</span>
                <span className="accessoriesRate">8.5</span>
                
                
            
           
           
           
            </div>
                <div className="accessoriesDetails">
                    <div className="accessoriesRating">
                        <div className="accessoriesRating">
                            <span>Excellent</span>
                            
                        </div>
                        <div className="accessoriesDetailTexts">
                            <span className="accessoriesPrice">$15</span>
                            
                            <button className="accessoriesCheckButton">Add to cart</button>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
    )
}

export default Accessories;