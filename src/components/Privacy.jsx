import lock from "../Images/lock.svg";
import padlock from "../Images/padlock.png";

export default function Privacy() {
  return (
    <>
      <section className="flex justify-between lg:flex-row flex-col items-center py-24 border-b ">
        <aside className="w-[35rem] ml-32">
          <div>
            <h2 className="text-[2rem] font-clash font-bold w-3/5 leading-none">
              Privacy Policy and <span className="text-third"> Terms </span>
            </h2>
            <p className="pt-4 text-sm font-montserrat">
              Last updated on September 12, 2023
            </p>
            <p className="font-montserrat pt-10 pb-16">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className="border border-third  rounded-lg  font-montserrat p-[4.5rem]">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h2 className="pt-4 font-bold text-third">Licensing Policy</h2>
            <p>Here are terms of our Standard License</p>
            <div>
              <div className="flex gap-2  py-4">
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
              <div className="flex gap-2">
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
                <p className="self-start items-start">
                  You are licensed to use the item available at any free source
                  sites, for your project development.
                </p>
              </div>
              <button className="md:block mt-16 font-montserrat mx-auto  font-[400] text-[1rem] rounded bg-gradient-to-tr from-gradient-2 via-gradient-3, via-gradient-1 to-gradient-0 w-[10.75rem] h-[3.3rem]">
                Read More
              </button>
            </div>
          </div>
        </aside>
        <aside className="mr-32 h-[40rem] relative">
          <div className="">
            <div
              className=" relative bottom-28"
              style={{
                backgroundImage: `url(${lock})`,
                backgroundRepeat: "no-repeat",
                height: "40rem",
                width: "33rem",
              }}>
              <img
                className="w-[34rem] h-[43rem] absolute top-52"
                src={padlock}
                alt=""
              />
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
