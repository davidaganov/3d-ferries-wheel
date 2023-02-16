import { Navbar } from ".."
import styles from "./Header.module.sass"
import cn from "classnames"

export const Header = () => {
  const list = [
    {
      title: "Homepage",
      link: "/"
    },
    {
      title: "Ferries Wheel",
      link: "#model"
    }
  ]

  return (
    <header className={styles.header}>
      <div className={cn(styles.headerInner, "inner")}>
        <Navbar list={list} />
      </div>
    </header>
  )
}
