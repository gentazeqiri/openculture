import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
//import Movie from "./pages/movie/Movie";
import Books from "./pages/Books/books";
import Ebooks from "./pages/e-books/E-books";
import Courses from "./pages/Courses/Courses";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Audiobooks from "./pages/Audiobooks/Audiobooks";
import Authors from "./pages/Authors/Authors";
import Accessories from "./pages/Accessories/Accessories";
import Shop from "./pages/Shop/Shop";




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/movies" element ={<List/>}/>
      <Route path="/books" element = {<Books/>}/> 
      <Route path="/ebooks" element={<Ebooks/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/audiobooks" element={<Audiobooks/>}/>
      <Route path="/authors" element={<Authors/>}/>
      <Route path="/accessories" element={<Accessories/>}/>
      <Route path="/shop" element={<Shop/>}/>

      
      
     

   
    </Routes>
    
    </BrowserRouter>

   
  );
}

export default App;