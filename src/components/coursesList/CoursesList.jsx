import "./coursesList.css"

const CoursesList = () => {
    return(
        <div className="courseList">
            <div className="courseListItem">
                <img src="https://testdumps.org/wp-content/uploads/2020/09/CCNA-1.png" alt="" className="courseListImg" />
                <div className="courseListTitles">
                    <h1>Cisco certified network associate</h1>
                    <h2>CISCO</h2>
                    <h3>US$1200</h3>
                </div>
            </div>

            <div className="courseListItem">
                <img src="https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg?w=2000" alt="" className="courseListImg" />
                <div className="courseListTitles">
                    <h1>Graphic Design</h1>
                    <h2>CALARTS</h2>
                    <h3>US$79.99</h3>
                </div>
            </div>


            <div className="courseListItem">
                <img src="https://cloudxlab.com/blog/wp-content/uploads/2018/04/why-Big-Data-Career-is-a-smart-choice-1200x583.jpg" alt="" className="courseListImg" />
                <div className="courseListTitles">
                    <h1>Big Data</h1>
                    <h2>Coursera</h2>
                    <h3>US$120</h3>
                </div>
            </div>



        </div>
    )
}

export default CoursesList