import React, { useEffect } from 'react'
import Header from './Header'
import img from './images/hacker_mindset.svg'
import Blogsection from './Blogs/blogSection'
import BlogData from "./Blogs/BlogData"

const Blogs = () => {

  // We use UseEffect here bcz if I click on see Blogs button  (i.e is in home page) I was going to the mid of the Blog component.
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Portfolio | Blogs';
  }, [])
  return (
    <>
      <Header img={img} txt="Read My" htxt="Blogs" />
      {
        BlogData.map((currElem, indx) => {
          const { heading, date, text } = currElem;
          return <Blogsection heading={heading} date={date} text={text} />
        })
      }
    </>
  )
}

export default Blogs