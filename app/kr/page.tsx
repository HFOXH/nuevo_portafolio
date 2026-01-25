export const dynamic = "force-static";

import MainInformation from "@/components/MainInformation";
import Home from "@/components/Home";
import Presentation from "@/components/Presentation";
import Tools from "@/components/Tools";
import JourneyTabs from "@/components/JourneyTabs";
import Testimonials from "@/components/Testimonials";

export default function Page() {
  return (
    <div className="bg-black">
      <Home lang="kr" />
      <MainInformation lang="kr" />
      <Presentation lang="kr" />
      <Tools lang="kr" />
      <JourneyTabs lang="kr" />
      <Testimonials lang="kr" />
    </div>
  );
}
