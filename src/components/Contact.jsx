import NavbarLayout from "./NavbarLayout";
import { Link } from "react-router-dom";
import ig from "../Images/ig.svg";
import x from "../Images/x.svg";
import fb from "../Images/fb.svg";
import ln from "../Images/ln.svg";

export default function Contact() {
  return (
    <>
      <NavbarLayout>
        <div className="absolute font-[400] text-[1rem] font-montserrat flex items-center pt-3 inset-y-0 right-8 lg:right-32">
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

            <Link
              to="/contact"
              className="pl-12 bg-clip-text text-transparent bg-gradient-to-r from-third to-second">
              Contact
            </Link>
          </div>
          <div className="pl-20  flex items-center gap-2 ">
            <button className="md:block font-montserrat  font-[400] text-[1rem] rounded bg-gradient-to-tr from-gradient-2 via-gradient-3, via-gradient-1 to-gradient-0 w-[10.75rem] h-[3.3rem]">
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
      <div className="bg-first min-h-screen flex  py-20 border items-center align-middle text-white">
        <section className="flex justify-around gap-8 w-full ">
          <div>
            <h1 className="text-[2rem] font-bold text-third font-clash">
              Get in touch
            </h1>
            <address className="font-montserrat">
              <div className="py-4">
                <p>Contact </p>
                <p>Information</p>
              </div>

              <div className="py-4">
                <p>27, Alara Street </p>
                <p>Yaba 100012</p>
                <p>Lagos State</p>
              </div>

              <p className="py-4">Call Us: 07090663212</p>

              <div className="py-4">
                <p>we ae open from Monday-Friday</p>
                <p>08:00am - 05:00pm</p>
              </div>
            </address>
            <div>
              <h2 className="text-[1rem] text-third py-2">Share on</h2>
              <div className="flex  gap-2">
                <img className="w-fit" src={ig} alt="" />
                <img src={x} alt="" />
                <img className="w-fit" src={fb} alt="" />
                <img src={ln} alt="" />
              </div>
            </div>
          </div>

          {/* This is the form part */}
          <aside className="p-14 bg-bg3 w-[35rem] drop-shadow-md">
            <form action="">
              <div className="text-third font-clash font-semibold py-6 text-[1.25rem]">
                <p>Questions or need assistance?</p>
                <p>Let us know about it!</p>
              </div>
              <div>
                <div className="py-4">
                  <input
                    className="p-3 w-full drop-shadow-md bg-bg3 border border-opacity-30 rounded text-white"
                    type="text"
                    placeholder="First Name"
                    name=""
                    id=""
                  />
                </div>
                <div className="pb-4">
                  <input
                    className=" p-3 w-full drop-shadow-md bg-bg3 border rounded text-white"
                    type="email"
                    placeholder="Mail"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <textarea
                    className="p-3 w-full drop-shadow-md bg-bg3 border rounded text-white"
                    name=""
                    placeholder="Message"
                    id=""
                    cols="22"
                    rows="10"></textarea>
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
    </>
  );
}
