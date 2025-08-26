import { Card, CardContent } from "../components/ui/card";
import { Star, GraduationCap, BookOpen, Award } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Concurseira - Aprovada em TRT",
      icon: Award,
      text: "Consegui organizar melhor meus estudos de Direito. Os prompts para legislação me ajudaram a entender conceitos complexos de forma clara. Aprovada na primeira tentativa!",
      rating: 5
    },
    {
      name: "João Santos", 
      role: "Vestibulando - FUVEST 2025",
      icon: GraduationCap,
      text: "Os prompts otimizados transformaram minha preparação. Adapto eles para qualquer matéria e agora consigo resolver exercícios complexos entendendo cada etapa do raciocínio.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Estudante de Medicina",
      icon: BookOpen,
      text: "Incrível como os prompts otimizados conseguem explicar qualquer conteúdo de forma didática. Edito eles para minha área e o rendimento melhorou significativamente.",
      rating: 5
    },
    {
      name: "Pedro Oliveira",
      role: "Professor e Concurseiro",
      icon: Award,
      text: "Como educador, reconheço a qualidade dos prompts. São realmente bem estruturados e entregam boas práticas pedagógicas. Recomendo!",
      rating: 5
    },
    {
      name: "Carla Mendes",
      role: "ENEM 2024",
      icon: GraduationCap,
      text: "Estava com dificuldades em Redação. Os prompts me ensinaram estrutura, argumentação e técnicas que aumentaram minha nota significativamente.",
      rating: 5
    },
    {
      name: "Rafael Lima",
      role: "Concurso Público - Receita Federal",
      icon: Award,
      text: "Os prompts são facilmente adaptáveis para qualquer matéria do edital. Consegui revisar todo o conteúdo de forma organizada em tempo recorde.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Resultados <span className="text-primary">Comprovados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que dizem quem já transformou seus estudos com nossos prompts otimizados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="shadow-soft hover:shadow-medium transition-smooth border-none animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                    <testimonial.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-sm italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;