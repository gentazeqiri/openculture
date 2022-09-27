import "./courses.css"


const Courses = () => {

    const photos = [
        {
            src: "https://testdumps.org/wp-content/uploads/2020/09/CCNA-1.png"
        },

        {
            src: "https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg?w=2000"
        },

        {
            src: "https://cloudxlab.com/blog/wp-content/uploads/2018/04/why-Big-Data-Career-is-a-smart-choice-1200x583.jpg"
        },
        {
            src: "https://s.yimg.com/uu/api/res/1.2/0GBXd289dMqVEPaqTl4x5w--~B/aD0xNTAwO3c9MTAzNTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5"
        },
    ];
    return (
    <div>
        
        <div className="coursesContainer">
            <div className="coursesWraper">
                <h1 className="coursesTitle">Cisco certified network associate</h1>
                <span>Lorem, ipsum dolor sit amet consectetur adipisic</span>

            </div>
            <div className="coursesDirector">
                <span>Director name</span>
            </div>
            <div className="coursesActors">
            </div>
            <div className="coursesprice">
                <span>This course costs 100$</span>
            </div>
        <div className="coursesImages">
            {photos.map(photo=>(
                <div className="coursesImageWrapper">
                    <img src= {photo.src} alt="" />
                </div>
           ) )}
        </div>
        </div>
    </div>
    );
};

export default Courses