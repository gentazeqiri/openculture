import "./searchItem.css"

const SearchItem = () => {
    return(
        <div className="searchItem">
            <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/darkknight.building.24x36_480x.progressive.jpg?v=1648745678" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">The dark Knight</h1>
                <span className="siType">Action</span>
                <span className="siRate">8.5</span>
                <span className="siLanguage">English</span>
                <span className="siFeatures">2008 · 2h 32m</span>
                <span className="siActors">Actors</span>
                <span className="siListActors">Christian Bale, Heath Ledger</span>
            
           
           
           
            </div>
                <div className="siDetails">
                    <div className="searchItemRating">
                        <div className="siRating">
                            
                        </div>
                        <div className="siDetailTexts">
                            
                            
                            <button className="siCheckButton">Watch</button>
                        </div>
                    </div>
                    </div>
            </div>
    )
}

export default SearchItem;