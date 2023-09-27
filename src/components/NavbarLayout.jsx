import { Link } from "react-router-dom";

export default function NavbarLayout({ children }) {
  return (
    <div className=" py-[2.25rem] border-b-[.5px] border-b-white border-opacity-10 relative bg-first text-white">
      <nav className=" relative ">
        <div className=" ">
          <p className="font-clash font-[700]  text-[2.25rem] relative left-32">
            get<span className=" text-third">linked</span>
          </p>
        </div>
        <div className="absolute font-[400] text-[1rem] font-montserrat flex items-center pt-3 inset-y-0 right-32">
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
            { children}
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
      </nav>
    </div>
  );
}
