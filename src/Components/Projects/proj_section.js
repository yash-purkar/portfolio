import React from 'react';
import { NavLink } from 'react-router-dom';

const proj_section = ({ heading, date, text, liveLink, code, btnNo }) => {
  return (
    <div className="container container-center">
      <ol reversed className="list-non-bullet proj">

        <li className="project proj-padd">
          <div className="container container-center padding-md">
            <h1>{heading}</h1>
            <small>{date}</small>
            <p style={{ marginBottom: "20px" }}>
              {text}
            </p>

            {
              btnNo === 1 ? <NavLink
                className="link link-primary hover-primary"
                to="/blogs"
              // rel="noreferrer"
              // target="_blank"
              >Read blogs</NavLink>
                :
                <div className="btns">
                  <a
                    className="link link-primary hover-primary"
                    href={liveLink}
                    rel="noreferrer"
                    target="_blank"
                  >Live Link</a>
                  <span className='break'></span>

                  <a
                    className="link link-secondary hover-secondary"
                    href={code}
                    rel="noreferrer"
                    target="_blank">Source Code</a>
                </div>
            }




          </div>
        </li>

      </ol>
    </div>
  )
}

export default proj_section;