import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function Popup({ show, onClose }) {
  if (!show) {
    return null;
  }

  const Ring = styled.div`
    border-image: linear-gradient(to bottom, #903aff, #ff26b9);
    border-image-slice: 1;
    border-radius: 50%;
  `;

  return (
    <div className="absolute">
      <aside className="bg-first rounded-lg  p-16 w-[21.75rem] h-[30rem] border ">
        <div className="pb-12 flex justify-end" onClick={onClose}>
          <Ring className="border-4  flex justify-center items-center w-8 h-8 rounded">
            X
          </Ring>
        </div>
        <div className="font-clash font-[500] pb-12 text-white text-[1.2rem] flex flex-col gap-4">
          <p>Time</p>
          <p>Overview</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <button className=" font-montserrat  font-[400] text-[1rem] rounded bg-gradient-to-tr from-gradient-2 via-gradient-3, via-gradient-1 to-gradient-0 w-[10.75rem] h-[3.3rem]">
          <Link to="/register">Register</Link>
        </button>
      </aside>
    </div>
  );
}

export default Popup;
