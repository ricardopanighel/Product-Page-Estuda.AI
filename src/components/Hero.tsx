import { Button } from "../components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import productMockup from "../img/product-mockup2.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">65 Prompts Otimizados</span>
            </div>
            
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transforme Seus Estudos com
              <span className="text-accent"> IA Inteligente</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Domine qualquer matéria com 65 prompts otimizados para ChatGPT. 
              Respostas mais precisas, organizadas e aprofundadas para 
              <strong> concursos, vestibulares e reforço escolar</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://go.hotmart.com/S101572562X?dp=1" target="_blank" rel="noopener noreferrer">
                <Button className="btn-hero">
                  Quero Acelerar Meus Estudos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
                <Button
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  asChild
                >
                  <a href="#demo" onClick={() => {
                    const demoSection = document.getElementById("demo");
                    if (demoSection) {
                      demoSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}>
                    Ver Demonstração
                  </a>
                </Button>
            </div>
            
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Sem conhecimento técnico</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Resultados imediatos</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Product Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-30 transform rotate-6"></div>
              <img 
                src={productMockup} 
                alt="Prompt Mastery - Interface do produto mostrando prompts organizados"
                className="relative z-10 w-full rounded-3xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;