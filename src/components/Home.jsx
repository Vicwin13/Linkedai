import Navbar from "./Navbar";
import HomeContent from "./HomeContent";
import Ideas from "./Ideas";
import Guidelines from "./Guidelines";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-first text-white ">
      <Navbar />
      <HomeContent />
      <Ideas />
      <Guidelines />
    </div>
  );
}
