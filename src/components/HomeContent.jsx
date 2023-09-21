import curve from "../Images/Vector 4.png";
import man from "../Images/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import ball from "../Images/Image 1.png";

export default function HomeContent() {
  return (
    <>
      <section>
        <div>
          <p>Igniting a Revolution in HR Innovation</p>
          <img src={curve} alt="" />
        </div>
        <div className="" data-type="left">
          <div>
            <p> getlinked Tech</p>
            <p>Hackathon 1.0</p>
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button>Register</button>
          </div>
          <div>
            <span>00</span>
            <span>00</span>
            <span>00</span>
          </div>
        </div>
        <div className="" data-type="right">
          <div>
            <img src={man} alt="" />
            <img src={ball} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
