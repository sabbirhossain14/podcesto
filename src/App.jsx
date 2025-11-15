import { useState } from 'react'
import { Routes, Route } from "react-router";
import Home from './pages/home/Home';
import Episodes from './pages/episodes/Episodes';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import CommonLayout from './components/commonlayout/CommonLayout';
import Reviews from './pages/reviews/Reviews';


function App() {

  return (
    <>


     <Routes>
      <Route path="/" element={<CommonLayout/>} >
        <Route path="/" element={<Home/>} />
        <Route path="episodes" element={<Episodes/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="reviews" element={<Reviews/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>
    </Routes>

     </> 
  )
}

export default App
