import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Preciso ter conhecimento técnico para usar os prompts?",
      answer: "Não! Os prompts foram desenvolvidos para serem simples de usar. Basta copiar, colar no ChatGPT e personalizar com o conteúdo que você está estudando. Cada prompt é editável e vem com instruções claras."
    },
    {
      question: "Os prompts funcionam para qualquer área de estudo?",
      answer: "Sim! Os prompts são totalmente editáveis e se adaptam a qualquer área: Direito, Medicina, Engenharia, Humanas, Exatas e muito mais. Você personaliza com o conteúdo específico que está estudando."
    },
    {
      question: "Qual a diferença entre prompts simples e complexos?",
      answer: "Os prompts simples (30) são ideais para explicações diretas, resumos e revisões rápidas. Os complexos (35) são para análises profundas, resolução de exercícios, simulados e preparação avançada para concursos."
    },
    {
      question: "Funciona com ChatGPT gratuito ou precisa ser pago?",
      answer: "Funciona perfeitamente com ambas as versões! Obviamente o ChatGPT Plus oferece respostas mais rápidas, mas os prompts são otimizados para funcionar bem em qualquer versão."
    },
    {
      question: "Vou receber atualizações dos prompts?",
      answer: "Sim! Todos os compradores recebem atualizações gratuitas vitalícias. Sempre que otimizamos ou criamos novos prompts, você recebe sem custo adicional."
    },
    {
      question: "Como recebo o produto após a compra?",
      answer: "Imediatamente após a confirmação do pagamento, você recebe por email um link para acesso do Drive com todos os 65 prompts organizados por categoria, com instruções e exemplos."
    },
    {
      question: "Tem garantia se não funcionar para mim?",
      answer: "Oferecemos 7 dias de garantia incondicional. Se você não ficar satisfeito com os resultados, devolvemos 100% do seu dinheiro, sem perguntas."
    },
    {
      question: "Os prompts ajudam em que tipos de prova?",
      answer: "ENEM, vestibulares, concursos públicos, OAB, residência médica, certificações profissionais, provas escolares e universitárias. São versáteis para qualquer tipo de avaliação."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Dúvidas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o Estuda.AI
          </p>
        </div>

        <div className="animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card shadow-soft rounded-lg border-none px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-smooth py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;