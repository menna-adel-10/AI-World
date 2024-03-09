import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-black">
      <Navbar />
      <Hero />
    </main>
  )
}

export default App 