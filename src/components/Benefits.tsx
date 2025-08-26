import { Clock, Target, Lightbulb, TrendingUp, Shield, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economize 70% do Tempo",
      description: "Obtenha respostas organizadas e completas em segundos, eliminando horas de pesquisa."
    },
    {
      icon: Target,
      title: "Respostas Mais Precisas",
      description: "Prompts otimizados com engenharia especializada geram conteúdo direcionado e relevante."
    },
    {
      icon: Lightbulb,
      title: "Fácil de Usar",
      description: "Copie, cole e use. Não requer conhecimento técnico ou configurações complexas."
    },
    {
      icon: TrendingUp,
      title: "Melhore Suas Notas",
      description: "Estudantes relatam melhoria de até 40% no desempenho usando prompts otimizados."
    },
    {
      icon: Shield,
      title: "Para Todos os Níveis",
      description: "35 prompts avançados + 30 simples. Ideal para iniciantes e estudantes experientes."
    },
    {
      icon: Users,
      title: "Versatilidade Total",
      description: "Funciona para concursos, vestibulares, ENEM, reforço escolar e estudos gerais."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Por Que Escolher o <span className="text-primary">Estuda.AI</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desenvolvido por especialistas em Engenharia de Prompt e educação para maximizar seu aprendizado
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-smooth border-none shadow-soft animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;