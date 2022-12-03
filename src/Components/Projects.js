import React, { useEffect } from 'react'
import Header from './Header'
import img from "./images/project_completed.svg"
import ProjSec from "./Projects/proj_section"
import projData from "./Projects/ProjData"

const Projects = () => {
  // We use UseEffect here bcz if I click on see projects button (i.e is in home page) I was going to the mid of the project component.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header img={img} txt="See My" htxt="Projects" />
      {
        projData.map((currElem, indx) => {
          const { heading, date, text, liveLink, code } = currElem;
          return <ProjSec heading={heading} date={date} text={text} liveLink={liveLink} code={code} />
        })}

    </>
  )
}

export default Projects