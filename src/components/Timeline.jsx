import TimelineLeft from "./TimelineLeft";
import TimelineMiddle from "./TimelineMiddle";
import TimeLineRight from "./TimelineRight";

export default function Timeline() {
  return (
    <div>
      <div className=" border-b-2 py-16">
        <div className="mx-auto py-16 text-center ">
          <h1 className="font-clash text-[2rem] font-bold">Timeline</h1>
          <p className=" font-montserrat text-sm text-center w-96 mx-auto">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <section className="flex justify-center items-center gap-4 py-5">
          <TimelineLeft />
          <TimelineMiddle />
          <TimeLineRight />
        </section>
      </div>
    </div>
  );
}
