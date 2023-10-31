/* eslint-disable react/no-unescaped-entities */
import woman from "../Images/7450159 1.png";

export default function Guidelines() {
  return (
    <div className="flex border-white py-8 border-opacity-5 border-b-2 justify-center lg:justify-between flex-col-reverse lg:flex-row items-center">
      <div className="lg:pl-32 w-[33.4rem]">
        <p className="font-clash p-4 md:px-0 font-bold mx-auto text-center lg:text-left lg:ml-0 text-xl md:text-[2rem] w-52 md:w-80 leading-none pb-8">
          Rules and <span className="text-third">Guidelines</span>
        </p>
        <p className="text-sm w-[20rem] md:w-full mx-auto leading-7 p-4 md:p-0 lg:text-left text-center font-montserrat">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div>
        <img
          className="w-[24rem] lg:w-[41rem] lg:h-[41rem]"
          src={woman}
          alt=""
        />
      </div>
    </div>
  );
}
