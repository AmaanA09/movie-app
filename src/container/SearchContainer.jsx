import React, { useEffect, useState } from 'react'
import { apiKey } from '../config'
import MovieList from '../component/MovieList'
import Pagination from '../component/Pagination';
import { useLocation } from 'react-router';

const SearchContainer = () => {
  const [movieData, setMovieData] = useState([]);
  const [pageNo, setPageNo] = useState(1)
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  console.log("hello hi", location.search.slice(1))
  const movieName = location.search.slice(1)


  const fetchAllMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieName}&page=${pageNo}`)
    const data = await response.json()
    console.log(data.results)
    setMovieData(data.results)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAllMovies()
  }, [movieName, pageNo])
  return (
    <>
      {isLoading ? (<div className='loader-wrap'>
        <div className="loader"></div>
      </div>)
        :
        (<main>
          <section className='p-4 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-black place-items-center gap-8'>
            {movieData.map((movie, id) => (
              <MovieList movie={movie} key={id} />
            ))}
          </section>
          <Pagination pageNo={pageNo} setPageNo={setPageNo} />
        </main>)}
    </>
  )
}

export default SearchContainer