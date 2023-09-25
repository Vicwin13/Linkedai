import ig from "../Images/ig.svg";
import x from "../Images/x.svg";
import fb from "../Images/fb.svg";
import ln from "../Images/ln.svg";
import call from "../Images/call.svg";
import address from "../Images/address.svg";

export default function Footer() {
  return (
    <div>
      <section className="py-10">
        <div className="flex justify-between items-start py-10 ml-40 mr-40 ">
          <div className=" w-2/6">
            <h1 className="font-bold font-clash pb-2 text-4xl">
              get<span className="text-third">linked</span>
            </h1>
            <p className="font-montserrat ">
              Get linked Tech Hackerthon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology.
            </p>
            <div className="flex items-center pt-8 font-montserrat gap-4">
              <p>Terms of Use</p> <span className="text-third">|</span>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="font-montserrat">
            <h1 className="text-third font-bold">Useful Links</h1>
            <p className="py-2">Overview</p>
            <p className="py-2">Timeline</p>
            <p className="py-2">FAQs</p>
            <p className="py-2">Register</p>
            <div className="flex py-2">
              <p className="pr-2">Follow us</p>
              <div className="flex  gap-2">
                <img className="w-fit" src={ig} alt="" />
                <img src={x} alt="" />
                <img className="w-fit" src={fb} alt="" />
                <img src={ln} alt="" />
              </div>
            </div>
          </div>
          <div className="font-montserrat">
            <h1 className="font-bold text-third ">Contact Us</h1>
            <div>
              <div className="flex gap-3 items-start pt-4">
                <img className="w-[1rem]" src={call} alt="" />
                <p>+234 8128630391</p>
              </div>
            </div>
            <div>
              <div className="flex gap-3 items-start pt-4">
                <img className="w-[1rem]" src={address} alt="" />
                <p className="w-2/4">
                  27, Alara Street Yaba 100012 Lagos State
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center">All rights reserved. © getlinked Ltd.</p>
      </section>
    </div>
  );
}
