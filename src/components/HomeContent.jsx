import curve from "../Images/Vector 4.png";
import man from "../Images/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import ball from "../Images/Image 1.png";

export default function HomeContent() {
  return (
    <>
      <section className="bg-first  flex  justify-around items-center text-white relative">
        <div className="absolute  top-0 z-10 right-32">
          <p className="italic font-montserrat text-[2.25rem] font-[700] text-italics">
            Igniting a Revolution in HR Innovation
          </p>
          <div className="relative">
            <img className=" absolute right-0" src={curve} alt="" />
          </div>
        </div>
        <div className="pl-32 w-fit mt-20" data-type="left">
          <div className=" font-clash w-[38rem] ">
            <div>
              <p className="text-[5rem]  space-0 font-[700] leading-none ">
                getlinked Tech Hackathon{" "}
                <span className="text-third"> 1.0 </span>
              </p>
            </div>

            <p className=" font-montserrat text-[1.25rem] leading-8 ">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button className="md:block mt-20 font-montserrat  font-[400] text-[1rem] rounded bg-gradient-to-tr from-gradient-2 via-gradient-3, via-gradient-1 to-gradient-0 w-[10.75rem] h-[3.3rem]">
              Register
            </button>
          </div>
          <div className=" flex gap-2 mt-12">
            <p>
              <span className=" font-unica text-[400] text-[4rem]">00</span>H
            </p>
            <p>
              <span className=" font-unica text-[400] text-[4rem]">00</span>M
            </p>
            <p>
              <span className=" font-unica text-[400] text-[4rem]">00</span>S
            </p>
          </div>
        </div>
        <div className="self-end mt-14" data-type="right">
          <div className="relative">
            <img className=" w-[51.75rem] h-[38.6rem]" src={man} alt="" />
            <img
              className=" w-[40.6rem] h-[38rem] absolute inset-y-0"
              src={ball}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
