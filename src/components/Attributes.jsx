import pie from "../Images/8046554 1.png";

export default function Attributes() {
  return (
    <div className="flex border-b-2 lg:flex-row py-20 items-center justify-center lg:justify-between flex-col">
      <div className="lg:pl-32">
        <img className="w-[30rem] lg:w-[37rem] lg:h-[30rem]" src={pie} alt="" />
      </div>
      <aside className=" w-[35rem]">
        <h2 className="text-[2rem] mx-auto lg:mx-0 w-80 leading-none pb-10 font-bold font-clash">
          Judging Criteria <span className="text-third"> Key attributes </span>
        </h2>
        <div className="font-montserrat lg:pr-32">
          <p className="py-4 text-[1rem] font-bold">
            <span className="text-gradient-2 ">Innovation and Creativity:</span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="py-4 text-[1rem] font-bold">
            <span className="text-gradient-2 "> Functionality:</span> Assess how
            well the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </p>
          <p className="py-4 text-[1rem] font-bold">
            <span className="text-gradient-2 "> Impact and Relevance:</span>{" "}
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="py-4 text-[1rem] font-bold">
            <span className="text-gradient-2"> Technical Complexity:</span>{" "}
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className="py-4 text-[1rem] font-bold">
            <span className="text-gradient-2 ">
              {" "}
              Adherence to Hackathon Rules:
            </span>{" "}
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
          <div>
            <button className="md:block mt-16 font-montserrat  font-[400] text-[1rem] rounded bg-gradient-to-tr from-gradient-2 via-gradient-3, via-gradient-1 to-gradient-0 w-[10.75rem] h-[3.3rem]">
              Read More
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
