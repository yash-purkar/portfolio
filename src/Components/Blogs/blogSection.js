import React from 'react'

const blogSection = ({ cls, heading, date, text }) => {
  return (
    <ul className='list-non-bullet wrap_blogs'>
      <li className="blog_container" >
        <div className={`container container-center ${cls} `} >
          <h2>{heading}</h2>
          <span>{date}</span>
          <p>{text}</p>
        </div>
      </li>


    </ul>
  )
}

export default blogSection