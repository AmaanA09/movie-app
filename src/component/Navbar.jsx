
import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    if(searchQuery){
      navigate(`/searchmovies?${searchQuery}`)
      setSearchQuery("")
    }else{
      return alert("please enter the movie name")
    }
  };

  return (
    <>
    <header className="bg-[#33393f] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div>
          <Link to="/" className="pl-4 text-3xl font-bold text-[#fff]">
            MovieDb
          </Link>
        </div>

        <div className="hidden sm:flex sm:gap-6 sm:items-center">
          <NavLink
            to="/"
            className='text-lg hover:text-[#B31312] transition duration-300 ease-in-out'
          >
            Home
          </NavLink>
          <NavLink
            to="/top-rated"
            className="text-lg hover:text-[#B31312] transition duration-300 ease-in-out"
          >
            Top Rated
          </NavLink>
          <NavLink
            to="/upcoming"
            className="text-lg hover:text-[#B31312] transition duration-300 ease-in-out"
          >
            Upcoming
          </NavLink>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search for movies"
              className="px-4 py-2 rounded-lg text-black bg-white"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              onClick={handleSearch}
              className="bg-[#B31312] text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>

        <div className="sm:hidden flex justify-end">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center gap-4 py-4 bg-black shadow-lg absolute top-20 left-0 w-full z-40">
          <NavLink
            to="/"
            className="text-lg text-white hover:text-[#B31312] transition duration-300 ease-in-out"
          >
            Home
          </NavLink>
          <NavLink
            to="/top-rated"
            className="text-lg text-white hover:text-[#B31312] transition duration-300 ease-in-out"
          >
            Top Rated
          </NavLink>
          <NavLink
            to="/upcoming"
            className="text-lg text-white hover:text-[#B31312] transition duration-300 ease-in-out"
          >
            Upcoming
          </NavLink>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search for movies"
              className="px-4 py-2 rounded-lg  bg-[#fff] text-[#000]"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              // onClick={()=> (searchQuery == "" ? handleSearch() : handleSearchEmpty())}
              onClick={handleSearch}
              className=" cursor-pointer bg-[#B31312] text-white px-4 py-2 rounded-lg"
            >
              Search
            </button>
          </div> 
        </div>
      )}
    </header>
    </>
  );
};

export default Navbar;




