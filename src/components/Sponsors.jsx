import liberty from "../Images/Liberty company logo white colour.png";
import lib from "../Images/Liberty company logo white.png";
import winwise from "../Images/Winwise logo White colour 1.png";
import whis from "../Images/wisper logo white.png";
import paybox from "../Images/Paybox.png";
import visual from "../Images/Vuzual Plus.png";
import design from "../Images/Design Studios.png";

export default function Sponsors() {
  return (
    <>
      <div>
        <div>
          <h1>Partner and Sponsors</h1>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div>
          <div>
            <div>
              <img src={liberty} alt="" />
            </div>
            <div>
              <img src={lib} alt="" />
            </div>
            <div>
              <img src={winwise} alt="" />
            </div>
            <div>
              <img src={whis} alt="" />
            </div>
            <div>
              <img src={paybox} alt="" />
            </div>
            <div>
              <img src={visual} alt="" />
              <img src={design} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
