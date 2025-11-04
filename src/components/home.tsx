import { useRef } from "react";
import WelcomePage from "./WelcomePage";
import HeroVideoPage from "./HeroVideoPage";
import ProjectsPage from "./ProjectsPage";
import PricingContactPage from "./PricingContactPage";

export default function Home() {
  const page2Ref = useRef<HTMLDivElement>(null);
  const page3Ref = useRef<HTMLDivElement>(null);
  const page4Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black">
      <WelcomePage onScrollToNext={() => scrollToSection(page2Ref)} />
      
      <div ref={page2Ref}>
        <HeroVideoPage />
      </div>
      
      <div ref={page3Ref}>
        <ProjectsPage />
      </div>
      
      <div ref={page4Ref}>
        <PricingContactPage />
      </div>
    </div>
  );
}