import done from "../Images/successfully-done-5108472-4288033 1.png";
import man from "../Images/successful-man-3025713-2526911 1.png";

export default function Congrats() {
  return (
    <div>
      <section>
        <div>
          <img src={done} alt="" />
          <img src={man} alt="" />
        </div>
        <div>
          <h2>Congratulations you have successful Registered</h2>
          <div>
            <p>
              yes, it was easy and you did it! check your mail box for next stop
            </p>
          </div>
        </div>
        <button>Back</button>
      </section>
    </div>
  );
}
