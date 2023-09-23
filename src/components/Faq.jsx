import FaqMan from "../Images/cwok_casual_21 1.png";

export default function Faq() {
  return (
    <div className="flex border-b-2 flex-col py-20 lg:flex-row justify-between items-center">
      <div className="   lg:ml-32 text-center lg:text-left ">
        <div className=" mx-auto ">
          <h2 className="font-clash w-[18rem] text-center lg:text-left mx-auto lg:mx-0 leading-none text-[2rem] font-bold">
            Frequently Ask <span className="text-third"> Question</span>
          </h2>
          <p className="font-montserrat mx-auto lg:mx-0 w-[21rem] text-sm pb-10 pt-5">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <div className=" mx-auto text-center">
            <div className=" mx-auto text-center flex py-4 gap-3 border-b-[1px] border-b-third">
              <p>Can I work on a project I started before the hackathon?</p>
              <p className="text-third"> + </p>
            </div>
            <div className="w-max flex py-4 gap-3 border-b-[1px] border-b-third">
              <p>What happens if I need help during the hackathon?</p>
              <p className="text-third"> + </p>
            </div>
            <div className="w-max flex py-4 gap-3 border-b-[1px] border-b-third">
              <p>What happens if I don't have an idea for a project?</p>
              <p className="text-third"> + </p>
            </div>
            <div className="w-max flex py-4 gap-3 border-b-[1px] border-b-third">
              <p>Can I join a team or do I have to come with one?</p>
              <p className="text-third"> + </p>
            </div>
            <div className="w-max flex py-4 gap-3 border-b-[1px] border-b-third">
              <p>What happens after the hackathon ends?</p>
              <p className="text-third"> + </p>
            </div>
            <div className="w-max flex py-4 gap-3 border-b-[1px] border-b-third">
              <p>Can I work on a project I started before the hackathon?</p>
              <p className="text-third"> + </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-28">
        <div className="font-made relative">
          <div className="text-[6rem] w-28 h-16 font-medium text-third font-made absolute ">
            ?
          </div>
          <div className="text-[6rem] w-28 h-16 font-medium text-third -top-20 right-0 font-made absolute ">
            ?
          </div>
          <div className="text-[6rem] w-28 h-16 font-medium text-third font-made absolute -top-20 left-40 ">
            ?
          </div>
          <img className="w-[30rem]" src={FaqMan} alt="" />
        </div>
      </div>
    </div>
  );
}
