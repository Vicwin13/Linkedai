import Navbar from "./Navbar";
import HomeContent from "./HomeContent";
import Ideas from "./Ideas";
import Guidelines from "./Guidelines";
import Attributes from "./Attributes";
import Faq from "./Faq";
import Timeline from "./Timeline";
import Prizes from "./Prizes";
import Sponsors from "./Sponsors";
import Privacy from "./Privacy";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-first text-white ">
      <Navbar />
      <HomeContent />
      <Ideas />
      <Guidelines />
      <Attributes />
      <Faq />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Privacy />
      <Footer />
    </div>
  );
}
