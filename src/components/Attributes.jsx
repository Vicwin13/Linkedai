import pie from "../Images/8046554 1.png";

export default function Attributes() {
  return (
    <div>
      <div>
        <img src={pie} alt="" />
      </div>
      <aside>
        <h2>Judging Criteria Key attributes</h2>
        <div>
          <p>
            Innovation and Creativity: Evaluate the uniqueness and creativity of
            the solution. Consider whether it addresses a real-world problem in
            a novel way or introduces innovative features.
          </p>
          <p>
            Functionality: Assess how well the solution works. Does it perform
            its intended functions effectively and without major issues? Judges
            would consider the completeness and robustness of the solution.
          </p>
          <p>
            Impact and Relevance: Determine the potential impact of the solution
            in the real world. Does it address a significant problem, and is it
            relevant to the target audience? Judges would assess the potential
            social, economic, or environmental benefits.
          </p>
          <p>
            Technical Complexity: Evaluate the technical sophistication of the
            solution. Judges would consider the complexity of the code, the use
            of advanced technologies or algorithms, and the scalability of the
            solution.
          </p>
          <p>
            Adherence to Hackathon Rules: Judges will Ensure that the team
            adhered to the rules and guidelines of the hackathon, including
            deadlines, use of specific technologies or APIs, and any other
            competition-specific requirements.
          </p>
          <div>
            <button>Read More</button>
          </div>
        </div>
      </aside>
    </div>
  );
}
