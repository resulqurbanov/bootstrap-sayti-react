import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Blog from './Blog'
import Businesses from './Businesses'
import Featured from './Featured'
import Products from './Products'
import Working from './Working'


function Home() {
  return (
    <>
<Navbar/>
<Businesses/>
<Featured/>
<Working/>
<Blog/>
<Products/>
<Footer/>
    </>
  )
}

export default Home