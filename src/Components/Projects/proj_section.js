import React from 'react'

const proj_section = ({ heading, date, text, liveLink, code }) => {
  return (
    <div className="container container-center">
      <ol reversed className="list-non-bullet">

        <li className="project proj-padd">
          <div className="container container-center padding-md">
            <h1>{heading}</h1>
            <small>{date}</small>
            <p>
              {text}
            </p>
            <a
              className="link link-primary hover-primary"
              href={liveLink}
            >Play Now</a
            >
            <a
              className="link link-secondary hover-secondary"
              href={code}
            >Source Code</a
            >
          </div>
        </li>

      </ol>
    </div>
  )
}

export default proj_section