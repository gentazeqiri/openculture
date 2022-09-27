import "./authors.css"



const Authors  = () => {

    const photos = [
        {
            src: "https://i.pinimg.com/736x/3d/09/19/3d0919bb0f178a0755b84024c1633917.jpg"
        },

        {
            src: "https://cdn.shopify.com/s/files/1/0033/3434/0723/products/PP30791_500x.jpg?v=1589937957"
        },

        {
            src: "https://img.moviepostershop.com/the-shawshank-redemption-movie-poster-1994-1020191906.jpg"
        },
        {
            src: "https://s.yimg.com/uu/api/res/1.2/0GBXd289dMqVEPaqTl4x5w--~B/aD0xNTAwO3c9MTAzNTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5"
        },
    ];
    return (
    <div>
        
        <div className="authorsContainer">
            <div className="authorsWraper">
                
                <span>Lorem, ipsum dolor sit amet consectetur adipisic</span>

            </div>
            <div className="authorsDirector">
                <span>Author name</span>
            </div>
            
            
        <div className="authorsImages">
            {photos.map(photo=>(
                <div className="authorsImageWrapper">
                    <img src= {photo.src} alt="" />
                </div>
           ) )}
        </div>
        </div>
    </div>
    );
};

export default Authors