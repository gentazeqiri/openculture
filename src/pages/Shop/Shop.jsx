import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./shop.css"

const Shop = () => {
    return(
        <div>
            <Navbar/>
        <Header/>
        
        <div className="shop">
            <img src="https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=612x612&w=0&h=waK8qOHV2Fgz2ntEWHWBQtXpNDAQ_wdhd4tkTUz6tfE=" alt="" className="siImg" />
            <div className="shopDesc">
                <h1 className="shopTitle">OnlineShopping</h1>
                <span className="shopType">Select your favorite item by choise and have it on your doorstep the next 48h.</span>
                
                
                
                <span className="shopActors">Shopping Cart</span>
                <span className="shopListActors">Please Register or Login in order to use this feature!</span>
            
           
           
           
            </div>
                <div className="shopDetails">
                    <div className="shopRating">
                        <div className="shopRating">
                            
                        </div>
                        <div className="shopDetailTexts">
                            
                            
                            <button className="shopCheckButton">Register/Login</button>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
    )
}

export default Shop;