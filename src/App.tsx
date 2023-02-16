import { Header, Footer, FerrisWheel } from "./components"

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <FerrisWheel />
      </main>
      <Footer />
    </div>
  )
}
