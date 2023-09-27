import chairMan from "../Images/new.png";
import woman from "../Images/w-woman.png";
import man from "../Images/w-man.png";

export default function Register() {
  return (
    <div className="bg-first text-white h-screen">
      <section className="flex items-center justify-center  ">
        <div>
          <img className="" src={chairMan} alt="" />
        </div>
        <aside className="border bg-bg3 p-14 rounded-md">
          <h1 className="text-[2rem] pb-8 font-clash font-bold text-third">
            Register
          </h1>
          <div className="flex items-end pb-4 gap-2">
            <p>Be part of this movement </p>
            <div className="border-b p-[2px] border-dashed flex">
              <img className="w-[1.5rem]" src={woman} alt="" />
              <img className="w-[1.5rem]" src={man} alt="" />
            </div>
          </div>
          <form action="">
            <h1>CREATE YOUR ACCOUNT</h1>
            <div>
              <div className="flex justify-center gap-6 lg:gap-8">
                <div className="py-4">
                  <p className="pb-4">Team's Name</p>
                  <input
                    className="p-[0.6rem] rounded border border-white w-[16rem] h-[2.5rem]"
                    type="text"
                  />
                </div>
                <div className="py-4">
                  <p className="pb-4">Phone</p>
                  <input
                    className="p-[0.6rem] rounded border border-white w-[16rem] h-[2.5rem]"
                    type="tel"
                  />
                </div>
              </div>
              <div className="flex justify-center gap-6 lg:gap-8">
                <div className="py-2">
                  <p className="pb-4">Email</p>
                  <input
                    className="p-[0.6rem] rounded border border-white w-[16rem] h-[2.5rem]"
                    type="email"
                  />
                </div>
                <div className="py-2">
                  <p className="pb-4">Project Topic</p>
                  <input
                    className="p-[0.6rem] rounded border border-white w-[16rem] h-[2.5rem]"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex justify-center py-4 lg:gap-8">
                <div >
                  <p className="pb-4">Category</p>
                  <select
                    className="text-black w-[16rem] h-[2.5rem]"
                    name="Select Your Category"
                    id="">
                    <option value="Select Your Category">Category 1</option>
                    <option value="option2">Option 1</option>
                    <option value="option3">Option 2</option>
                    <option value="option4">Option 3</option>
                  </select>
                </div>

                <div>
                  <p className="pb-4">Group Size</p>
                  <select
                    className="text-black w-[16rem] h-[2.5rem]"
                    name="Select "
                    id="">
                    <option value="Select">Group 1</option>
                    <option value="option2">Group 2</option>
                  </select>
                </div>
              </div>
              <p className="py-4 text-sm">Please review your registration details before submitting</p>
              <div className="flex gap-4">
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
    </div>
  );
}
