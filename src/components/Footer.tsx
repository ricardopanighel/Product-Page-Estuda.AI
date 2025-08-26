import { Card } from "../components/ui/card";
import { Shield, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Estuda.AI</h3>
            <p className="text-white/80 leading-relaxed">
              Transformando estudos através da inteligência artificial. 
              Prompts otimizados que se adaptam a qualquer matéria e nível de estudo.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4" />
                <span>oxishub@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: (11)99999-9999</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Garantias</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="w-4 h-4 text-accent" />
                <span>7 dias de garantia</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="w-4 h-4 text-accent" />
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="w-4 h-4 text-accent" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © 2025 OxisHub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;