import React from 'react'


const blogSection = ({ cls, heading, date, text, blogUrl }) => {

  return (
    <ul className='list-non-bullet wrap_blogs'>
      <li className="blog_container" >
        <div className={`container container-center  blog_off_white`} >
          <h2>{heading}</h2>
          <span>{date}</span>
          <p>{text}</p>
          <a className='blog_btn' href={blogUrl}>Read More</a>
        </div>
      </li>
    </ul>
  )
}

export default blogSection