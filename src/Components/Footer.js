import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-heading">Connect With Me</div>
      <ul className="social-links list-non-bullet">
        <li className="list-item-inline">
          <a href="https://github.com/yash-purkar" target="_blank" className="link" rel="noreferrer">Github</a>
        </li>
        <li className="list-item-inline">
          <a href="https://twitter.com/yashpurkar14" target="_blank" className="link" rel="noreferrer">Twitter</a>
        </li>
        <li className="list-item-inline">
          <a
            href="https://www.linkedin.com/in/yash-purkar-32a67925a/"
            className="link" target="_blank"
            rel="noreferrer">Linkdin</a
          >
        </li>
      </ul>
    </footer>
  )
}

export default Footer