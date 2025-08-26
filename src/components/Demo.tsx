import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { MessageCircle, ArrowRight, CheckCircle } from "lucide-react";

const Demo = () => {
  return (
    <section className="py-20 bg-background" id="demo">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Veja a <span className="text-primary">Diferença</span> na Prática
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare uma pergunta comum com nosso prompt otimizado
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Prompt Comum */}
          <Card className="shadow-soft border-destructive/20">
            <CardHeader className="bg-destructive/5">
              <CardTitle className="flex items-center text-destructive">
                <MessageCircle className="w-5 h-5 mr-2" />
                ❌ Prompt Comum
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground font-mono">
                    "Me explique sobre a Segunda Guerra Mundial"
                  </p>
                </div>
                <h4 className="font-semibold text-destructive mb-2">Resultado:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Resposta genérica e superficial</li>
                  <li>• Informações desorganizadas</li>
                  <li>• Sem foco no que importa para provas</li>
                  <li>• Difícil de memorizar e revisar</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Prompt Otimizado */}
          <Card className="shadow-medium border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader className="bg-primary/10">
              <CardTitle className="flex items-center text-primary">
                <CheckCircle className="w-5 h-5 mr-2" />
                ✅ Prompt Otimizado
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="bg-primary/10 p-4 rounded-lg mb-4">
                  <p className="text-sm text-primary font-mono">
                    "Atue como [historiador] e explique [Segunda Guerra Mundial] para estudantes em [5] tópicos: [contextos, causas, desenvolvimento, consequências e legado]. Inclua [datas, termos-chave (**Eixo**, **Holocausto**) e eventos com (ano)]. Formato: [**títulos em negrito**, listas. 400-600 palavras.]."
                  </p>
                </div>
                <h4 className="font-semibold text-primary mb-2">Resultado:</h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />Conteúdo estruturado e organizado</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />Foco em pontos relevantes para provas</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />Inclui técnicas de memorização</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />Formato pronto para revisão</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center bg-secondary/10 px-6 py-3 rounded-full">
            <span className="text-secondary font-semibold mr-2">Resultado:</span>
            <span className="text-foreground">Estudos 3x mais eficientes</span>
            <ArrowRight className="w-5 h-5 text-secondary ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;