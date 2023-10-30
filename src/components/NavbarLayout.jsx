export default function NavbarLayout({ children }) {
  return (
    <div className=" py-[2.25rem] border-b-[.5px] border-b-white overflow-x-hidden border-opacity-10 relative bg-first text-white">
      <nav className=" relative ">
        <div className=" ">
          <p className="font-clash font-[700] text-normal sm:text-[2.25rem] relative left-8 lg:left-32">
            get<span className=" text-third">linked</span>
          </p>
        </div>
        {children}
      </nav>
    </div>
  );
}
