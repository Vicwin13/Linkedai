/* eslint-disable react/no-unescaped-entities */
import idea from "../Images/the big idea 1.png";

export default function Ideas() {
  return (
    <>
      <div className="flex flex-col pt-8 md:flex-row gap-8 border-white border-opacity-5 border-t-2 border-b-2 py-8 justify-center md:justify-between items-center">
        <div className="lg:pl-18">
          <img
            className="w-[16rem] md:w-[30rem] md:h-[29rem]"
            src={idea}
            alt=""
          />
        </div>
        <div className="lg:pr-24 w-[33rem] ">
          <p className="font-clash mt-16  mx-auto pb-8 text-xl w-[16rem] md:w-[27rem] text-center lg:text-left md:text-[2rem] font-[700] leading-none">
            Introduction to getlinked
            <span className="text-third"> tech Hackathon 1.0</span>
          </p>
          <p className="text-center  w-[20rem] md:w-full mx-auto break-words lg:text-left  text-[0.9rem] font-montserrat leading-6">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </>
  );
}
