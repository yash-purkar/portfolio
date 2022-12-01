import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-heading">Connect With Me</div>
      <ul className="social-links list-non-bullet">
        <li className="list-item-inline">
          <a href="https://github.com/yash-purkar" target="_blank" className="link">Github</a>
        </li>
        <li className="list-item-inline">
          <a href="https://twitter.com/_Yash_Purkar" target="_blank" className="link">Twitter</a>
        </li>
        <li className="list-item-inline">
          <a
            href="https://www.linkedin.com/in/yash-purkar-a3505b235/"
            className="link" target="_blank"
          >Linkdin</a
          >
        </li>
      </ul>
    </footer>
  )
}

export default Footer