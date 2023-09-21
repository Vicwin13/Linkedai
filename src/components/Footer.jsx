import ig from "../Images/ig.svg";
import x from "../Images/x.svg";
import fb from "../Images/fb.svg";
import ln from "../Images/ln.svg";
import call from "../Images/call.svg";
import address from "../Images/address.svg";

export default function Footer() {
  return (
    <div>
      <section>
        <div>
          <div>
            <h1>getlinked</h1>
            <p>
              Get linked Tech Hackerthon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div>
            <h1>Useful Links</h1>
            <p>Overview</p>
            <p>Timeline</p>
            <p>FAQs</p>
            <p>Register</p>
            <div>
              <p>Follow us</p>
              <div>
                <img src={ig} alt="" />
                <img src={x} alt="" />
                <img src={fb} alt="" />
                <img src={ln} alt="" />
              </div>
            </div>
          </div>
          <div>
            <h1>Contact Us</h1>
            <div>
              <div>
                <img src={call} alt="" />
                <p>+234 8128630391</p>
              </div>
            </div>
            <div>
              <div>
                <img src={address} alt="" />
                <p>27, Alara Street Yaba 100012 Lagos State</p>
              </div>
            </div>
          </div>
        </div>
        <p>All rights reserved. © getlinked Ltd.</p>
      </section>
    </div>
  );
}
