import chairMan from "../Images/3d-graphic-designer-showing-thumbs-up-png 1.png";
import woman from "../Images/w-woman.png";
import man from "../Images/w-man.png";

export default function Register() {
  return (
    <>
      <section>
        <div>
          <img src={chairMan} alt="" />
        </div>
        <aside>
          <h1>Register</h1>
          <div>
            <p>Be part of this movement </p>
            <div>
              <img src={woman} alt="" />
              <img src={man} alt="" />
            </div>
          </div>
          <form action="">
            <h1>CREATE YOUR ACCOUNT</h1>
            <div>
              <div>
                <div>
                  <p>Team's Name</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Phone</p>
                  <input type="tel" />
                </div>
              </div>
              <div>
                <div>
                  <p>Email</p>
                  <input type="email" />
                </div>
                <div>
                  <p>Project Topic</p>
                  <input type="text" />
                </div>
              </div>
              <div>
                <p>Category</p>
                <select name="Select Your Category" id="">
                  <option value="Select Your Category"></option>
                  <option value="option2"></option>
                  <option value="option3"></option>
                  <option value="option4"></option>
                </select>
              </div>
              <div>
                <p>Group Size</p>
                <select name="Select " id="">
                  <option value="Select"></option>
                  <option value="option2"></option>
                </select>
              </div>
              <p>Please review your registration details before submitting</p>
              <div>
                <input type="checkbox" />
                <p>
                  I agreed with the event terms and conditions and privacy
                  policy
                </p>
              </div>
            </div>
            <button type="submit">Register</button>
          </form>
        </aside>
      </section>
    </>
  );
}
