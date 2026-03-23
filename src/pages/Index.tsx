import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Petro Blyn
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Built with purpose
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
