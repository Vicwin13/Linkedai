import done from "../Images/successfully-done-5108472-4288033 1.png";
import man from "../Images/successful-man-3025713-2526911 1.png";
import wink from "../Images/wink.png";
import star1 from "../Images/star pu.png";
import star from "../Images/star.png";
import starb from "../Images/star (1).png";

export default function Congrats() {
  return (
    <div className="flex justify-center  items-center h-screen bg-bg4">
      <section className=" w-[43rem] h-[40rem] border border-third p-8">
        <div className="relative">
          <img className="relative left-28 w-[18rem]" src={done} alt="" />
          <img
            className="absolute h-[19rem] inset-y-0 right-28"
            src={man}
            alt=""
          />
        </div>
        <div className="text-center  font-montserrat">
          <h2 className="leading-none py-4 text-[32px] mx-auto font-semibold w-[34rem]">
            Congratulations <br /> you have successful Registered
          </h2>
          <div className="w-[16rem] mx-auto relative">
            <p className="font-montserrat w-[15rem] text-[14px]">
              yes, it was easy and you did it! check your mail box for next stop
            </p>
            <img className="absolute  right-1 bottom-1" src={wink} alt="" />
          </div>
        </div>
        <button className="md:block w-full mt-20 font-montserrat  font-[400] text-[1rem] rounded bg-gradient-to-tr from-gradient-2 via-gradient-3, via-gradient-1 to-gradient-0  h-[3.3rem]">
          Back
        </button>

        <img src={star} alt="" srcset="" />
        <img src={starb} alt="" />
      </section>
      <img src={star1} alt="" />
    </div>
  );
}
