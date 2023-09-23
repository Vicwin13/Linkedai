import TimelineLeft from "./TimelineLeft";
import TimelineMiddle from "./TimelineMiddle";
import TimeLineRight from "./TimelineRight";

export default function Timeline() {
  return (
    <div>
      <div className="">
        <div className="mx-auto py-10 text-center">
          <h1>Timeline</h1>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <section>
          <TimelineLeft />
          <TimelineMiddle />
          <TimeLineRight />
        </section>
      </div>
    </div>
  );
}
