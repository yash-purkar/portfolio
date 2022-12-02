import React from 'react'
import Header from './Header'
import img from './images/hacker_mindset.svg'
import Blogsection from './Blogs/blogSection'

const Blogs = () => {
  return (
    <>
      <Header img={img} txt="Read My" htxt="Blogs" />
      <Blogsection />
    </>
  )
}

export default Blogs