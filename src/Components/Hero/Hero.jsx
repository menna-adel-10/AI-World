import HeroPng from "../../assets/0_3.webp"
import { BiPlayCircle } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div>
              <img src={HeroPng} alt="" className="rounded-full" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero