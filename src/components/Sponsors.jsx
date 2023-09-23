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
      <div className="w-full">
        <div className="text-center py-10">
          <h1>Partner and Sponsors</h1>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className=" border-second border-4 w-fit mx-auto p-[5rem]">
          <div className="grid grid-cols-3 w-fit mx-auto align-middle ">
            <div className=" p-16 border place-self-center">
              <img className="" src={liberty} alt="" />
            </div>
            <div className="p-16 border place-self-center">
              <img className="" src={lib} alt="" />
            </div>
            <div className=" p-16 border place-self-center">
              <img className="" src={winwise} alt="" />
            </div>
            <div className=" p-16 border place-self-center">
              <img className="" src={whis} alt="" />
            </div>
            <div className=" p-16 border place-self-center">
              <img className=" " src={paybox} alt="" />
            </div>
            <div className=" p-16 border place-self-center">
              <img className="" src={visual} alt="" />
              <img className="" src={design} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
