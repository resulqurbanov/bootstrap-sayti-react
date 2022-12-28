import React from 'react'
import Navbar from '../../components/Navbar'
import Businesses from '../../components/HomeComponents/Businesses'
import Featured  from '../../components/HomeComponents/Featured'
import Working  from '../../components/HomeComponents/Working'
import Blog from '../../components/HomeComponents/Blog'
import Products from '../../components/HomeComponents/Products'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
<Navbar/>
<Businesses/>
<Featured />
<Working />
<Blog/>
<Products/>
<Footer/>
    </>
  )
}

export default Home