import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Shield, Clock, Download, Star } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-strong border-none bg-white/95 backdrop-blur-sm animate-scale-in">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Acelere Seus Estudos{" "}
                <span className="text-primary">Hoje Mesmo</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Junte-se e tranforme já seus resultados!
              </p>
            </div>

            <div className="bg-gradient-subtle rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    35 Prompts Complexos
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Engenharia avançada
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    30 Prompts Simples
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Para uso diário
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    Garantia 7 dias
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Satisfação total
                  </p>
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-destructive/10 px-4 py-2 rounded-full mb-4">
                  <span className="text-destructive font-semibold">
                    Oferta por Tempo Limitado
                  </span>
                </div>

                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-foreground">
                    R$ 29,90
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    R$ 59.90
                  </span>
                  <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    50% OFF
                  </div>
                </div>

                <p className="text-muted-foreground">
                  ou 4x de R$ 8,14 * no cartão
                </p>
              </div>
            </div>

            <a
              href="https://go.hotmart.com/S101572562X?dp=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <Button className="btn-hero text-lg md:text-xl px-4 md:px-12 py-5 md:py-6 mb-6 w-full md:w-auto max-w-xs md:max-w-none flex items-center gap-2 whitespace-normal overflow-hidden text-ellipsis text-center">
                <span className="whitespace-normal break-words w-full text-center overflow-hidden text-ellipsis">
                  Quero Acelerar Meus Estudos Agora
                </span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
              </Button>
            </a>

            <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Download className="w-4 h-4 text-primary" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Pagamento seguro</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Garantia 7 dias</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
