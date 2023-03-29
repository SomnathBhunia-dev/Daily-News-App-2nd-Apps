import React from 'react'
import { Navbar } from './Component/Navbar';
import Context from './Context';
import { CategoryPage } from './Component/CategoryPage';
import FrontPage from './Component/FrontPage';
import { Footer } from './Component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {

  return (
    <>
      <Context>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/category" element={<CategoryPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Context>
    </>
  )
}

export default App;