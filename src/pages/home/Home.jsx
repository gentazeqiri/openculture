import AbookList from "../../components/abookList/AbookList";
import AuthorsList from "../../components/authorsList/AuthorsList";
import CoursesList from "../../components/coursesList/CoursesList";
import EbookList from "../../components/ebookList/EbookList";
import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbarr from "../../components/navbar/Navbar";

import "./home.css";


const Home = () => {
    return(
        <div>
            <Navbarr/>
            <Header/>
            <div className="homeContainer">
                <div className="bg-success text-white p-3">
                <h1 className="homeTitle"> Your public library at your fingertips.</h1>
                <h2 className="homeTitle"> Enjoy movies, audiobooks, eBooks, courses or lectures everywhere you have a screen-your computer, your phone, even your TV. openCulture syncs across all your devices, so you can stream titles immediately or whenever your in the mood.</h2>
                

                </div>
                <h1 className="homeTitle">Movies</h1>
                <Featured/>
                <h1 className="homeTitle"> AudioBooks </h1>
                <AbookList/>
                <h1 className="homeTitle"> Books & e-Books</h1>
                <EbookList/>
                <h1 className="homeTitle">Online Courses</h1>
                <CoursesList/>

                <h1 className="homeTitle"> Authors</h1>
                <AuthorsList/>
                <MailList/>
                <Footer/>
                

                

                

                
                
            </div>
        </div>
    )
}
export default Home