import React from 'react'
import { Routes,Route } from "react-router";
import Movies from '../component/Movies';
import Movie from '../component/Movie';
import Home from '../component/Home';

function AllRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Movies />} path="movies" />
      <Route element={<Movie />} path="movie/:Id" />  
    </Routes>
  )
}

export default AllRoutes
