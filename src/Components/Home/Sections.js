import React, { useEffect, useState } from 'react'

const Sections = ({ heading, txt, type, wantBtn }) => {
  const [cls, setCls] = useState();
  const [btn, setBtn] = useState();

  useEffect(() => {

    if (type === "ow") {
      setCls("section ow");
      setBtn("link link-secondary")
    } else {
      setCls("section")
      setBtn("link link-primary")
    }
  })

  return (
    <div><section className={cls}>
      <div className="container container-center">
        <h1>{heading}</h1>
        <p>
          {txt}
        </p>

        {wantBtn === "yes" ?
          <div className="btn">
            <a className={btn} href="projects.html">See Projects</a>
          </div> : ""}

      </div>
    </section></div>
  )
}

export default Sections;