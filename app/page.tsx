import MainInformation from "@/components/MainInformation";
import Home from "@/components/Home";
import Presentation from "@/components/Presentation";
import Tools from "@/components/Tools";
import JourneyTabs from "@/components/JourneyTabs";

export default function Index() {
  return (
    <div className="bg-black ">
      <Home />
      <MainInformation />
      <Presentation />
      <Tools />
      <JourneyTabs></JourneyTabs>
    </div>
  );
}
