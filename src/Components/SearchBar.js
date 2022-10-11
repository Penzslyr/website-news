import React from 'react'
import { useState } from 'react'
import SearchIcon from "../search.svg"
import { useNavigate} from 'react-router-dom'

const SearchBar = () => {
    const API_URL = 'https://newsapi.org/v2/everything?sortBy=popularity&apiKey=d2f16d99bae54501b545e55d9726d6e4'
    const [searchTerm, setSearchTerm] = useState('')
    const [searchData, setSearchData] = useState([])
    let navigate = useNavigate()
    const searchNews = async (title) => {
        const response = await fetch(`${API_URL}&q=${title}`)
        const data = await response.json()
        
        console.log(data.articles.slice(0,21));
        setSearchData(data.articles.slice(0,21))
        // navigate("/search")
    }
  return (
    <div>
         <input 
            type="text" 
            placeholder="Search..." 
            className="search" 
            value={searchTerm}
            onChange={e=>setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchNews(searchTerm)}
        />
    </div>
  )
}

export default SearchBar