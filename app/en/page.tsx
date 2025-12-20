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
      <Home lang="en" />
      <MainInformation lang="en" />
      <Presentation lang="en" />
      <Tools lang="en" />
      <JourneyTabs lang="en" />
      <Testimonials lang="en" />
    </div>
  );
}
