import { lazy, Suspense, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
// import  HomePage  from './pages/HomePage'
import Layout from './Layout/Layout'
// import TopRatedPage from './pages/TopRatedPage'
// import UpComingPage from './pages/UpComingPage'
// import MovieDetailPage from './pages/MovieDetailPage'
// import SearchPage from './pages/SearchPage'

const HomePage = lazy(()=> import('./pages/HomePage'))
const TopRatedPage = lazy(()=> import('./pages/TopRatedPage'))
const UpComingPage = lazy(()=> import('./pages/UpComingPage'))
const MovieDetailPage = lazy(()=> import('./pages/MovieDetailPage'))
const SearchPage = lazy(()=> import('./pages/SearchPage'))
function App() {
  return (
    <>
      <Layout>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/top-rated' element={<TopRatedPage />} />
          <Route path='/upcoming' element={<UpComingPage />} />
          <Route path='/moviedetail/:id' element={<MovieDetailPage />} />
          <Route path='/searchmovies' element={<SearchPage />} />
        </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

export default App
