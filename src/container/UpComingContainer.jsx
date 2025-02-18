import React, { useEffect, useState } from 'react'
import { apiKey, apiUrl } from '../config'
import MovieList from '../component/MovieList'
import Pagination from '../component/Pagination';

const UpComingContainer = () => {
  const [movieData, setMovieData] = useState([]);
  const [pageNo, setPageNo] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const fetchAllMovies = async () => {
    const response = await fetch(`${apiUrl}/upcoming?api_key=${apiKey}&language=en-US&page=${pageNo}`)
    const data = await response.json()
    console.log(data.results)
    setMovieData(data.results)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAllMovies()
  }, [pageNo])
  return (
    <>
      {isLoading ? (<div className='loader-wrap'>
        <div className="loader"></div>
      </div>)
        :
        (<main>
          <section className='p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-black place-items-center gap-6 sm:gap-8'>
            {movieData.map((movie, id) => (
              <MovieList movie={movie} key={id} />
            ))}
          </section>
          <Pagination pageNo={pageNo} setPageNo={setPageNo} />
        </main>)}
    </>
  )
}

export default UpComingContainer