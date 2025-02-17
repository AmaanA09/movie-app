import { Link } from "react-router"
import { imgUrl } from "../config"

const MovieList = ({ movie }) => {

    return (
        <>
            <Link
                to={`/moviedetail/${movie.id}`}
                className="w-full sm:w-[200px] md:w-[280px] bg-[#33393f] p-2 sm:p-2 rounded-lg text-center hover:p-0 transition-all duration-300 ease-in-out">
                <img
                    src={`${imgUrl}/${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-auto object-cover overflow-hidden cursor-pointer rounded-sm"
                />
                <p className="text-[#fff] truncate text-lg sm:text-xl">{movie.title}</p>
                <p className="text-[#ffc83d] font-medium text-sm sm:text-lg pb-2">⭐ Rating: {movie.vote_average}</p>
            </Link>
        </>
    )
}

export default MovieList