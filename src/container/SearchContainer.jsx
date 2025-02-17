import React, { useEffect, useState } from 'react'
import { apiKey, apiUrl } from '../config'
import MovieList from '../component/MovieList'
import Pagination from '../component/Pagination';

const SearchContainer = () => {
  const [movieData , setMovieData] = useState([]);
  const [pageNo , setPageNo] = useState(1)
  const [movieName , setMovieName] = useState("")

    const fetchAllMovies = async() =>{
        const response = await fetch(`${apiUrl}/top_rated?api_key=${apiKey}&language=en-US&query=${movieName}&page=${pageNo}`)
        const data = await response.json()
        console.log(data.results)
        setMovieData(data.results)
    }

    useEffect(() =>{
        fetchAllMovies()
    }, [pageNo])
  return (
    <>
    <section className='p-4 pt-25 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-black place-items-center gap-8'>
    {movieData.map((movie, id )=>(
      <MovieList movie={movie} key={id}/>
    ))}
    </section>
    <Pagination pageNo={pageNo} setPageNo={setPageNo}/>
    </>
  )
}

export default SearchContainer