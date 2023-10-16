import curve from "../Images/Vector 4.png";
import man from "../Images/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import ball from "../Images/Image 1.png";
import bang from "../Images/bang.png";
import creative from "../Images/Creative 1.png";
import chain from "../Images/chain-9365116-7621444.png";

export default function HomeContent() {
  return (
    <>
      <section className="bg-first  flex xl:flex-row flex-col justify-center  items-center text-white relative">
        <div className="absolute  top-0 z-10 lg:right-32 right-5">
          <p className="italic font-montserrat text-base md:text-[2.25rem] font-[700] text-italics">
            Igniting a Revolution in HR Innovation
          </p>
          <div className="relative">
            <img className=" absolute right-0" src={curve} alt="" />
          </div>
        </div>

        <div className="lg:pl-32 w-fit mt-20" data-type="left">
          <div className=" font-clash w-[38rem] ">
            <div className="relative ">
              <img
                className="absolute w-[1.5rem] md:w-fit -top-6 md:-top-11 right-52 md:right-14"
                src={creative}
                alt=""
              />
              <p className="py-2 text-[2rem] w-[17.6rem] mx-auto md:w-full md:text-[5rem] text-center md:text-left space-0 font-[700] leading-none ">
                getlinkedTech
              </p>
              <p className="pb-2 text-[2rem] w-[17.6rem] mx-auto md:w-full md:text-[5rem] text-center md:text-left space-0 font-[700] leading-none flex">
                Hackathon
                <span className="text-third ">1.0</span>
                <img className="md:w-fit w-[1.8rem]" src={chain} alt="" />
                <img className="md:w-fit w-[1.8rem]" src={bang} alt="" />
              </p>
            </div>

            <p className=" font-montserrat text-[1.3rem] md:text-[1.25rem] md:text-left text-center mx-auto w-[26rem] md:w-full leading-8 ">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
          </div>
          <div className="flex justify-center md:block ">
            <button className=" mt-20 font-montserrat  text-center  font-[400] text-[1rem] rounded bg-gradient-to-tr from-gradient-2 via-gradient-3, via-gradient-1 to-gradient-0 w-[10.75rem] h-[3.3rem]  ">
              Register
            </button>
          </div>
          <div className="flex justify-center  gap-2 mt-12">
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
            <img
              className=" w-[26rem] md:w-[51.75rem] md:h-[38.6rem]"
              src={man}
              alt=""
            />
            <img
              className=" w-[21rem] md:w-[40.6rem] md:h-[38rem] absolute inset-y-0"
              src={ball}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
