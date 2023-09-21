import cup from "../Images/cup.png";
import gold from "../Images/gold_medal 1.png";
import silver from "../Images/silver_medal 1.png";
import bronze from "../Images/bronze_medal 1.png";

export default function Prizes() {
  return (
    <div>
      <div>
        <h2>Prizes and Rewards</h2>
        <p>
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <div>
        <img src={cup} alt="" />
      </div>
      <div>
        <div>
          <div>
            <img src={silver} alt="" />
            <div>
              <h1>2nd</h1>
              <p>Runner</p>
              <p>N300,000</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={gold} alt="" />
            <div>
              <h1>1st</h1>
              <p>Runner</p>
              <p>N400,000</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={bronze} alt="" />
            <div>
              <h1>3rd</h1>
              <p>Runner</p>
              <p>N150,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
