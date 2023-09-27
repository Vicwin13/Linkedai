import NavbarLayout from "./NavbarLayout";
import { Link } from "react-router-dom";
import chairMan from "../Images/new.png";
import woman from "../Images/w-woman.png";
import man from "../Images/w-man.png";

export default function Register() {
  return (
    <div>
      <NavbarLayout className="">
        <div className="absolute font-[400] text-[1rem] font-montserrat flex items-center pt-3 inset-y-0 right-4 lg:right-32">
          <div>
            <a className="pl-12" href="">
              Timeline
            </a>
            <a className="pl-12" href="">
              Overview
            </a>
            <a className="pl-12" href="">
              FAQs
            </a>
            <Link to="/contact" className="pl-12">
              Contact
            </Link>
          </div>
          <div className="pl-8 lg:pl-20   flex items-center gap-2 ">
            <button className=" border-[2px] border-third rounded w-[10.75rem] h-[3.3rem]">
              <Link to="/register">Register</Link>
            </button>
            <div className=" w-full flex flex-col md:hidden">
              <span className="bg-white mb-1 w-[2rem] h-1"></span>
              <span className="bg-white  mb-1 w-[2rem] h-1"></span>
              <span className="bg-white w-[2rem] h-1"></span>
            </div>
          </div>
        </div>
      </NavbarLayout>

      <div className="bg-first flex overflow-x-hidden text-white min-h-screen py-20  justify-center">
        <section className="flex lg:flex-row flex-col items-center justify-center  ">
          <div className="relative">
            <div>
              <p className=" absolute left-10 lg:hidden font-bold text-[1.5rem] font-clash text-third">Register</p>
            </div>
            <img className=" w-2/4 mx-auto lg:w-[100%]" src={chairMan} alt="" />
          </div>
          <aside className=" w-auto drop-shadow-md bg-bg3 p-14 rounded-md">
            <h1 className=" text-[2rem] pb-8 font-clash font-bold text-third">
              Register
            </h1>
            <div className="flex items-end pb-4 gap-2">
              <p>Be part of this movement </p>
              <div className="border-b border-b-third p-[2px] border-dashed flex">
                <img className="w-[1.5rem]" src={woman} alt="" />
                <img className="w-[1.5rem]" src={man} alt="" />
              </div>
            </div>
            <form action="">
              <h1 className="font-montserrat text-[1.5rem]">
                CREATE YOUR ACCOUNT
              </h1>
              <div>
                <div className="flex py-4 flex-col lg:flex-row justify-center gap-6  lg:gap-8">
                  <div className="">
                    <p className="pb-2">Team's Name</p>
                    <input
                      className="bg-bg3 drop-shadow-md opacity-60 p-[0.6rem] rounded border border-white w-full h-[2.5rem]"
                      placeholder="Enter the name of your group"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <p className="pb-2">Phone</p>
                    <input
                      className="bg-bg3 drop-shadow-md opacity-60 p-[0.6rem] rounded border border-white w-full  h-[2.5rem]"
                      placeholder="Enter your phone number"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="flex justify-center flex-col lg:flex-row py-2 gap-6 lg:gap-8">
                  <div className=" ">
                    <p className="pb-2">Email</p>
                    <input
                      className="bg-bg3 drop-shadow-md opacity-60 p-[0.6rem] rounded border border-white w-full h-[2.5rem]"
                      placeholder="Enter your email address"
                      type="email"
                    />
                  </div>
                  <div className="">
                    <p className="pb-2">Project Topic</p>
                    <input
                      className="bg-bg3 drop-shadow-md opacity-60 p-[0.6rem] rounded border border-white w-full h-[2.5rem]"
                      placeholder="What is your group Project topic"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex justify-between py-4 gap-4">
                  <div>
                    <p className="pb-2">Category</p>
                    <select
                      className="text-white border rounded p-2 justify-items-start bg-bg3 drop-shadow-md opacity-60 w-full h-[2.5rem]"
                      name="Select Your Category"
                      id="">
                      <option
                        className="bg-bg3 text-black"
                        value="Select Your Category">
                        Category 1
                      </option>
                      <option className="bg-bg3 text-black" value="option2">
                        Option 1
                      </option>
                      <option className="bg-bg3 text-black" value="option3">
                        Option 2
                      </option>
                      <option className="bg-bg3 text-black" value="option4">
                        Option 3
                      </option>
                    </select>
                  </div>

                  <div>
                    <p className="pb-2">Group Size</p>
                    <select
                      className="text-white border rounded p-2 bg-bg3 drop-shadow-md opacity-60 lg:w-full h-[2.5rem]"
                      name="Select "
                      id="">
                      <option value="Select">Group 1</option>
                      <option value="option2">Group 2</option>
                    </select>
                  </div>
                </div>
                <p className="py-4 text-sm italic font-montserrat text-third">
                  Please review your registration details before submitting
                </p>
                <div className="flex gap-2 ">
                  <input className="border-none  transparent" type="checkbox" />
                  <p className="text-sm text-center">
                    I agreed with the event terms and conditions and privacy
                    policy
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 w-full font-montserrat  font-[400] text-[1rem] rounded bg-gradient-to-tr from-gradient-2 via-gradient-3, via-gradient-1 to-gradient-0 h-[3.3rem]">
                Submit
              </button>
            </form>
          </aside>
        </section>
      </div>
    </div>
  );
}
