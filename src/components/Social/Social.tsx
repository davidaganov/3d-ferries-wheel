import { SocialProps } from "./Social.props"
import styles from "./Social.module.sass"
import cn from "classnames"
import { ReactComponent as GithubIcon } from "./icons/github.svg"
import { ReactComponent as LinkedinIcon } from "./icons/linkedin.svg"

export const Social = ({ className, ...props }: SocialProps) => {
  return (
    <ul
      className={cn(styles.social, className)}
      {...props}
    >
      <li className={styles.item}>
        <a
          href="https://github.com/davidaganov"
          className={styles.link}
          aria-label="Go to Github profile"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
      </li>
      <li className={styles.item}>
        <a
          href="https://www.linkedin.com/in/david-aganov/"
          className={styles.link}
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Linkedin profile"
        >
          <LinkedinIcon />
        </a>
      </li>
    </ul>
  )
}
