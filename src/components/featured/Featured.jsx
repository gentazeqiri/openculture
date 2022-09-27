import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/darkknight.building.24x36_480x.progressive.jpg?v=1648745678" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>The dark Knight</h1>
                    <h2 className="fs-6">2008 · 2h 32m</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_480x.progressive.jpg?v=1620048742" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Pulp Fiction</h1>
                    <h2 className="fs-6">1994 ‧ 2h 34m</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6cd691e19fffbe57b353cb120deaeb8f_8489d7bf-24ba-4848-9d0f-11f20cb35025_500x749.jpg?v=1573613877" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Star Wars</h1>
                    <h2 className="fs-6"> 1977 ‧ 1h 45m</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scan_7468f83c-3b76-406d-87f2-6e09e9b5d84d_480x.progressive.jpg?v=1663097794" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Don't Worry Darling</h1>
                    <h2 className="fs-6"> 2022 ‧ 2h 3m</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/wandavision.mp_480x.progressive.jpg?v=1614371756" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Wanda Vision</h1>
                    <h2 className="fs-6"> 2021 ‧ 2h 10m</h2>
                </div>
            </div>
            
            <div className="featuredItem">
                <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/friday.mp_480x.progressive.jpg?v=1615329952" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Friday</h1>
                    <h2 className="fs-6"> 2002 ‧ 1h 28m</h2>
                </div>
            </div> 

        </div>
    )
}
 
export default Featured