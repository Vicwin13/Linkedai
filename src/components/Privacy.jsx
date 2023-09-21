import lock from "../Images/lock.svg";
import padlock from "../Images/padlock.png";

export default function Privacy() {
  return (
    <>
      <section>
        <aside>
          <div>
            <h2>Privacy Policy and Terms</h2>
            <p>Last updated on September 12, 2023</p>
            <p>
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          <div>
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h2>Licensing Policy</h2>
            <p>Here are terms of our Standard License</p>
            <div>
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none">
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                    <path
                      d="M5 8L7 10.5L13.5 6"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none">
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                    <path
                      d="M5 8L7 10.5L13.5 6"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
            </div>
          </div>
          <button>Read More</button>
        </aside>
        <aside>
          <div>
            <div style={{ backgroundImage: `url(${lock})` }}>
              <img src={padlock} alt="" />
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
