import FerriesWheel from "./FerriesWheel"

export default function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__inner inner">
          <nav className="navbar">
            <ul className="navbar__list">
              <li className="navbar__item">
                <a
                  href="/"
                  className="navbar__link"
                >
                  Homepage
                </a>
              </li>
              <li className="navbar__item">
                <a
                  href="/3d-ferries-wheel"
                  className="navbar__link"
                >
                  3D Ferris Wheel
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="model">
        <div className="model__inner inner">
          <h2 className="model__title">Ferris Wheel 3D</h2>
          <div className="model__container">
            <FerriesWheel />
          </div>
        </div>
      </section>
    </div>
  )
}
