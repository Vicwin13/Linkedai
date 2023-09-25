import liberty from "../Images/Liberty company logo white colour.png";
import lib from "../Images/Liberty company logo white.png";
import winwise from "../Images/Winwise logo White colour 1.png";
import whis from "../Images/wisper logo white.png";
import paybox from "../Images/Paybox.png";
import visual from "../Images/Vuzual Plus.png";
import design from "../Images/Design Studios.png";

export default function Sponsors() {
  return (
    <>
      <div className="w-full py-20 border-b">
        <div className="text-center py-10">
          <h1 className="font-bold font-clash text-[2rem] ">
            Partner and Sponsors
          </h1>
          <p className="text-center text-sm  font-montserrat mx-auto leading-6 pt-5 w-[28rem] font-normal">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className=" border-second border bg-bg1  lg:ml-32 lg:mr-32 w-fit mx-5 p-[5rem]">
          <div className="grid grid-cols-5 grid-row-3 gap-4 lg:gap-y-12 align-middle ">
            <div className="  place-self-center">
              <img className="" src={liberty} alt="" />
            </div>
            <div className="place-self-center   w-3/5">
              <hr className="transform rotate-90  border-[1px] border-third" />
            </div>
            <div className=" place-self-center">
              <img className="" src={lib} alt="" />
            </div>
            <div className="place-self-center  bg-none w-3/5">
              <hr className="transform rotate-90 border-[1px] border-third" />
            </div>
            <div className="  place-self-center">
              <img className="" src={winwise} alt="" />
            </div>

            {/* This is the middle part */}

            <div className="place-self-center   bg-none  w-full md:w-[12rem] lg:w-[16rem]">
              <hr className=" border-[1px] border-third" />
            </div>
            <div className=" max-w-0 place-self-center"></div>
            <div className="place-self-center  bg-none w-full md:w-[12rem] lg:w-[16rem]">
              <hr className=" border-[1px] border-third" />
            </div>
            <div className="max-w-0 place-self-center"></div>
            <div className="place-self-center  bg-none  w-full md:w-[12rem] lg:w-[16rem]">
              <hr className=" border-[1px] border-third" />
            </div>

            {/* The middle part ends here */}

            <div className="  row-start-3 place-self-center">
              <img className="" src={whis} alt="" />
            </div>
            <div className="place-self-center   w-3/5">
              <hr className="transform rotate-90 border-[1px] border-third" />
            </div>
            <div className=" col-start-3  place-self-center">
              <img className=" " src={paybox} alt="" />
            </div>
            <div className="place-self-center   w-3/5">
              <hr className="transform rotate-90 border-[1px] border-third" />
            </div>
            <div className="  place-self-center">
              <img className="" src={visual} alt="" />
              <img className="" src={design} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
