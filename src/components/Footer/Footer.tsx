import cn from "classnames"
import styles from "./Footer.module.sass"
import { Social } from "../"

export const Footer = () => {
  return (
    <footer
      className={styles.footer}
      id="footer"
      role="contentinfo"
    >
      <div className={cn(styles.inner, "inner")}>
        <a
          href="https://github.com/davidaganov/davidaganov.github.io"
          className={cn(styles.author, "inline-link inline-link--white")}
          target="_blank"
          rel="noreferrer"
        >
          Developed & Designed&nbsp;
          <br />
          by David Aganov
        </a>
        <Social className={styles.social} />
        <a
          className="inline-link inline-link--white"
          href="mailto:davidaganov21@gmail.com"
        >
          davidaganov21@gmail.com
        </a>
      </div>
    </footer>
  )
}
