import React from 'react'
import Header from './Header'
import img from './images/hacker_mindset.svg'
import Blogsection from './Blogs/blogSection'
import BlogData from "./Blogs/BlogData"

const Blogs = () => {
  return (
    <>
      <Header img={img} txt="Read My" htxt="Blogs" />
      {
        BlogData.map((currElem, indx) => {
          const { heading, date, text, cls } = currElem;
          return <Blogsection heading={heading} date={date} text={text} cls={cls} />
        })
      }
    </>
  )
}

export default Blogs