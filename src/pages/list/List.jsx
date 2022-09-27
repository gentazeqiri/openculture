import "./list.css"
import Navbarr from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import SearchItem from "../../components/searchItem/SearchItem"



const List = () => {
    return(
        
        <div>
            <Navbarr/>
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Movies</label>
                            <input type="text" />
                            <button>Search</button>
                        </div>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List