import React from 'react'

const Header = ({ img, txt, htxt }) => {
  return (
    <header class="hero">
      <img class="hero-img" src={img} alt="hero img" />
      <h1 class="hero-heading">
        {txt}
        <span style={{ color: "#7e22ce" }} > {htxt}</span>
      </h1>
    </header>
  )
}

export default Header