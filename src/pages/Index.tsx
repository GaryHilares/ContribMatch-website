import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Spacer } from "../components/layout/Spacer"
import { About } from "../components/sections/About"
import { Latest } from "../components/sections/Latest";

const Index = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      
      <Header />
      <Spacer />
      <main>
        <Hero />
        <Spacer />
        <About />
        <Spacer />
        <Latest />
        <Spacer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;