import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { SkillInput } from "../components/sections/SkillInput";
import { LevelInput } from "../components/sections/LevelInput";

const Index = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      
      <Header />
      <main>
        <Hero />
        <SkillInput />
        <LevelInput />
      </main>
      <Footer />
    </div>
  );
};

export default Index;