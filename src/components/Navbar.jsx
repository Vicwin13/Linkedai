import { Link } from "react-router-dom";
import NavbarLayout from "./NavbarLayout";
import styled from "styled-components";
import { useState } from "react";
import Popup from "./Popup";
export default function Navbar() {
  const [isPopup, setIsPopup] = useState(false);

  const showPopup = () => {
    setIsPopup(!isPopup);
  };

  return (
    <div>
      <NavbarLayout>
        <div className="absolute font-[400] text-[1rem] font-montserrat flex items-center pt-3 inset-y-0 right-8 lg:right-32">
          <NavLinks className=" ">
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
          </NavLinks>
          <div className=" pl-4 lg:pl-20  flex items-center gap-2 ">
            <StyledButton className=" font-montserrat  font-[400] text-[1rem] rounded bg-gradient-to-tr from-gradient-2 via-gradient-3, via-gradient-1 to-gradient-0 w-[10.75rem] h-[3.3rem]">
              <Link to="/register">Register</Link>
            </StyledButton>
            <div className=" w-fit flex flex-col md:hidden" onClick={showPopup}>
              {isPopup && <Popup onClose={showPopup} />}
              <span className="bg-white rounded mb-1 w-[1rem] h-1"></span>
              <span className="bg-white rounded  mb-1 w-[2rem] h-1"></span>
              <span className="bg-white rounded w-[1rem] self-end h-1"></span>
            </div>
          </div>
        </div>
      </NavbarLayout>
    </div>
  );
}

const StyledButton = styled.button`
  display: none;
  @media screen and (min-width: 600px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: none;

  @media screen and (min-width: 850px) {
    display: block;
  }
`;
