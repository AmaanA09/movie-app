import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage'
import Layout from './Layout/Layout'
import TopRatedPage from './pages/TopRatedPage'
import UpComingPage from './pages/UpComingPage'
import MovieDetailPage from './pages/MovieDetailPage'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/top-rated' element={<TopRatedPage />} />
          <Route path='/upcoming' element={<UpComingPage />} />
          <Route path='/moviedetail/:id' element={<MovieDetailPage />} />
        </Routes>
      </Layout>

    </>
  )
}

export default App
