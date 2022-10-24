export default function Title({ classes, link, number, title, direction }) {
  const renderNumber = () => {
    if (number) {
      return <span>0{number}.</span>
    }
  }

  const Number = renderNumber()

  return (
    <h2 className={`${classes} section-title${direction ? ` section-title--${direction}` : ""}`}>
      <a href={link}>
        {Number} {title}
      </a>
    </h2>
  )
}
