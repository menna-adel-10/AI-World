import { BiPlayCircle } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            <div className="space-y-5 lg:pr-20">
              <h1 className="text-4xl font-semibold uppercase">
                Get Ready to enjoy VR <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Games with our platform</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at ducimus sunt ad deserunt rem, magni quo autem, eius dicta mollitia expedita, voluptatem ipsa dolore dolores sequi aspernatur! Officia alias incidunt vero, ea eos ipsa.
              </p>
              <div className="flex gap-6">
                <button className="primary-btn">Get Started</button>
                <button className="flex items-center gap-2">
                  <BiPlayCircle className="text-3xl"/>
                  See Demo
                </button>
              </div>
            </div>

            <div>
              <img src="https://imageio.forbes.com/specials-images/imageserve/646c62220a46f01c40b5031a/Digital-Twins--Generative-AI--And-The-Metaverse/960x0.jpg?format=jpg&width=1440"
                alt="" className="rounded"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
