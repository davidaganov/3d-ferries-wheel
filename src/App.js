import Header from "./components/general/Header"
import Footer from "./components/general/Footer"
import FerriesWheel from "./components/base/FerriesWheel"

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <FerriesWheel />
      </main>
      <Footer />
    </div>
  )
}
