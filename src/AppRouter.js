import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, BlogDetails, Blogs, Home } from './pages'


const AppRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/blogs' element={<Blogs />} />
                <Route exact path='/single-blog-details/:id' element={<BlogDetails />} />
            </Routes>
        </>
    )
}

export default AppRouter