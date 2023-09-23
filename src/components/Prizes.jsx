import cup from "../Images/cup.png";
import gold from "../Images/gold_medal 1.png";
import silver from "../Images/silver_medal 1.png";
import bronze from "../Images/bronze_medal 1.png";

export default function Prizes() {
  return (
    <div className="flex relative justify-center items-center border-b py-40 gap-10">
      <div className="absolute top-10 right-96">
        <h2 className="font-clash w-[12rem] leading-none text-[2rem] font-bold ">
          Prizes and <span className="text-third"> Rewards </span>
        </h2>
        <p className="w-[23rem] font-montserrat pt-4">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <div className="">
        <img className="w-[34rem] h-[30rem]" src={cup} alt="" />
      </div>
      <div className="flex -gap-4">
        <div className="">
          <div className="flex flex-col relative justify-center items-center">
            <img className="w-[11rem] z-20" src={silver} alt="" />
            <div className="border-[1px] border-third bg-bg1 absolute top-[5rem] w-[13.35rem] h-72  flex flex-col justify-end rounded-md font-montserrat text-center">
              <h1 className="text-4xl  font-bold">2nd</h1>
              <p className="text-2xl pb-4 font-semibold">Runner</p>
              <p className="text-[2rem] pb-5 font-bold text-third">N300,000</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col relative justify-center items-center">
            <img className="w-[18.5rem] z-20" src={gold} alt="" />
            <div className="  border-[1px] bg-bg2 border-gradient-0 absolute top-[10rem] w-[13.35rem] h-72  flex flex-col justify-end rounded-md font-montserrat text-center">
              <h1 className="text-4xl  font-bold">1st</h1>
              <p className="text-2xl pb-2 font-semibold">Runner</p>
              <p className="text-[2rem] pb-5 font-bold text-second">N400,000</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col relative justify-center items-center">
            <img className="w-[11rem] z-20" src={bronze} alt="" />
            <div className=" border-[1px] border-third bg-bg1 absolute top-[5rem] w-[13.35rem] h-72  flex flex-col justify-end rounded-md font-montserrat text-center">
              <h1 className="text-4xl  font-bold">3rd</h1>
              <p className="text-2xl pb-4 font-semibold">Runner</p>
              <p className="text-[2rem] font-bold pb-5 text-third">N150,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
