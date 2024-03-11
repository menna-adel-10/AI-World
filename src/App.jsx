import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Quotes from "./Components/Quotes/Quotes"

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navbar />
      <Hero />
      <Quotes />
    </main>
  )
}

export default App 