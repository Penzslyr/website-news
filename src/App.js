
import './App.css';
import IndonesiaNews from './Pages/IndonesiaNews'
import NavigationBar from './Components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import SearchPages from './Pages/SearchPages';
import SearchIcon from "./search.svg"
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom'
import ProgrammingPages from './Pages/ProgrammingPages';
import CovidPages from './Pages/CovidPages';

function App() {
  const API_URL = 'https://newsapi.org/v2/everything?sortBy=popularity&apiKey=d2f16d99bae54501b545e55d9726d6e4'
  
  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState([])

  const searchNews = async (title) => {
    const response = await fetch(`${API_URL}&q=${title}`)
    const data = await response.json()
    
    // console.log(data.articles.slice(0,21));
    setSearchData(data.articles.slice(0,20))
    
}
  return (
    // <div>
    //   
    //   
    // </div>
    <>
    <BrowserRouter>
      <NavigationBar/>
      <div>
         <input 
            type="text" 
            placeholder="Search..." 
            className="search" 
            value={searchTerm}
            onChange={e=>setSearchTerm(e.target.value)}
        />
        <Link 
          onClick={() => searchNews(searchTerm)}
          to='/search'
          alt="search"
          >
            Search
        </Link>
    </div>
      <Routes>
        <Route path='/' element={<IndonesiaNews/>} />
        <Route path='/search' element={<SearchPages title={searchTerm} res={searchData}/>} />
        <Route path='/programming' element={<ProgrammingPages/>} />
        <Route path='/covid' element={<CovidPages/>}/>
      </Routes>

      
    </BrowserRouter>
    </>
  );
}

export default App;
