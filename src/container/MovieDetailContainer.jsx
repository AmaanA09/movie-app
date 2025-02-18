import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { apiKey, apiUrl, imgUrl } from '../config'
import Cast from '../component/Cast'

const MovieDetailContainer = () => {
  const [movieDetail, setMovieDetail] = useState([])
  const [cast, setCast] = useState([])
  const [genre, setGenre] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  console.log("hi", genre)
  console.log(cast)
  const { id } = useParams()
  console.log(id)
  const fetchMovieDetail = async (id) => {
    const response = await fetch(`${apiUrl}/${id}?api_key=${apiKey}&language=en-US`)
    const data = await response.json()
    console.log(data)
    setMovieDetail(data)
    setGenre(data.genres)
  }
  const fetchCast = async (id) => {
    const response = await fetch(`${apiUrl}/${id}/credits?api_key=${apiKey}&language=en-US`)
    const data = await response.json()
    console.log(data)
    setCast(data.cast)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMovieDetail(id)
    fetchCast(id)
  }, [id])

  return (
    <>
      {isLoading ? (<div className='loader-wrap'>
        <div className="loader"></div>
      </div>)
        :
        (<main>
          <div className="p-4 bg-black">
            <div className="bg-[#33393f] flex flex-col sm:flex-row gap-4 sm:gap-5 p-4">
              <img
                src={`${imgUrl}/${movieDetail.poster_path}`}
                alt=""
                className="w-[200px] sm:w-[300px] object-cover rounded-md"
              />
              <div className="pl-4 sm:pl-5 flex-1">
                <div>
                  <p className="text-3xl sm:text-6xl pb-4 text-white">{movieDetail.title}</p>

                  <div className="flex flex-wrap gap-4 sm:gap-5">
                    <p className="border-r-1 pr-4 text-[#555555]">{movieDetail.release_date}</p>
                    <p className="border-r-1 pr-4 text-[#555555]">{movieDetail.runtime} min</p>
                    <p className=" text-[#555555]">{movieDetail.adult == false ? "16+" : "18+"}</p>
                  </div>
                  <p className="text-xl text-[#ffc83d] pt-2">
                    <span className="text-lg relative top-[-2px]">⭐</span>
                    Rating {movieDetail.vote_average}
                  </p>
                </div>
                <p className="text-[#fff] pt-2">{movieDetail.overview}</p>
                <div className="pt-2 text-[#fff]">
                  <p className="text-2xl">Genre</p>
                  <ul className="pt-2 pl-1">
                    {genre.map((data, index) => (
                      <li key={index}>{data.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <button className=" cursor-pointer bg-[#B31312] p-2 pl-6 pr-6 rounded text-[#fff] text-xl">
                    Watch
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-[#000] p-4 sm:p-6">
            <h2 className="text-[#fff] text-3xl sm:text-4xl pb-4">Cast</h2>

            <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden gap-3 sm:gap-4">
              {cast?.length > 0 ? (
                cast.map((data, index) => (
                  <div key={index} className="flex-shrink-0">
                    <Cast image={data} className="object-cover rounded-lg w-[150px] sm:w-[200px]" />
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-xl">No cast information available</p>
              )}
            </div>
          </section>
        </main>)}
    </>
  )
}

export default MovieDetailContainer