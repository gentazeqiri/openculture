import "./searchItem.css"

const SearchItem = () => {
    return(
        <div className="searchItem">
            <img src="https://s.yimg.com/uu/api/res/1.2/0GBXd289dMqVEPaqTl4x5w--~B/aD0xNTAwO3c9MTAzNTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Moonlight</h1>
                <span className="siType">Romance</span>
                <span className="siRate">8.5</span>
                <span className="siLanguage">English</span>
                <span className="siFeatures">Features</span>
                <span className="siActors">Actors</span>
                <span className="siListActors">Actor 1, 2, 3</span>
            
           
           
           
            </div>
                <div className="siDetails">
                    <div className="searchItemRating">
                        <div className="siRating">
                            <span>Excellent</span>
                            <button>9</button>
                        </div>
                        <div className="siDetailTexts">
                            <span className="siPrice">$100</span>
                            <span className="siTaxOp">includes what?</span>
                            <button className="siCheckButton">See availability</button>
                        </div>
                    </div>
                    </div>
            </div>
    )
}

export default SearchItem;