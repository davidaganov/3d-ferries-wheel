import Social from "../base/Social.js"

export default function Footer() {
  return (
    <footer
      className="footer"
      id="footer"
    >
      <div className="footer__inner inner">
        <a
          href="https://github.com/davidaganov21/davidaganov21.github.io"
          className="footer__author inline-link inline-link--white"
          target="_blank"
          rel="noreferrer"
        >
          Developed & Designed&nbsp;
          <br />
          by David Aganov
        </a>
        <Social classes="footer__social" />
        <a
          className="footer__email inline-link inline-link--white"
          href="mailto:davidaganov21@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          davidaganov21@gmail.com
        </a>
      </div>
    </footer>
  )
}
