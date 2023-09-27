import { Link } from "react-router-dom";
import NavbarLayout from "./NavbarLayout";

export default function Navbar() {
  return (
    <div>
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
            <Link to="/contact" className="pl-12">
              Contact
            </Link>
          </div>
          <div className=" pl-8 lg:pl-20  flex items-center gap-2 ">
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
    </div>
  );
}
