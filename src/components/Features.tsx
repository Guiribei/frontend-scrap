
import React, { useState } from 'react';
import { Clock, FileCheck, MailCheck, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  isActive,
  onClick,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div 
      className={`
        p-6 rounded-xl transition-all duration-300 cursor-pointer
        ${isActive 
          ? 'bg-law-light/10 border border-law-light/30 shadow-lg' 
          : 'bg-background hover:bg-law-paper/50 border border-transparent'
        }
      `}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className={`
          p-3 rounded-lg mr-4
          ${isActive ? 'bg-law-light text-white' : 'bg-law-paper text-law-dark'}
        `}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      icon: FileCheck,
      title: "Recuperação Automatizada de Certidões",
      description: "Obtenha certidões negativas passando apenas o CNPJ da empresa.",
      detail: "Nosso sistema se conecta diretamente aos bancos de dados oficiais do governo para recuperar certificados automaticamente. Chega de navegar em sites complexos ou preencher formulários repetitivos. Basta inserir o CNPJ uma vez e deixar o resto por conta do nosso sistema.",
    },
    {
      icon: Clock,
      title: "Acompanhe em tempo real",
      description: "Monitore o status da recuperação do seu certificado em tempo real.",
      detail: "Acompanhe o processamento do seu certificado em nosso sistema com uma tela de progresso limpa e informativa. Você saberá exatamente o que está acontecendo em cada etapa, desde a conexão com os sistemas governamentais até a verificação e entrega dos documentos.",
    },
    {
      icon: MailCheck,
      title: "Envio de Email",
      description: "Receba os certificados diretamente na sua caixa de entrada assim que estiverem prontos.",
      detail: "Após a recuperação, as certidões são enviadas imediatamente para o endereço de e-mail especificado. Elas estão prontas para usar, compartilhar ou arquivar de acordo com suas necessidades, sem necessidade de formatação adicional.",
    },
    {
      icon: Bell,
      title: "Alerta de conclusão",
      description: "Feature a ser adicionada de alarme quando o processo for finalizado.",
      detail: "Implementação futura pode incluir alertar no site assim que o envio do email for feito.",
    },
  ];

  // Get the active feature icon component
  const ActiveIcon = features[activeFeature].icon;

  return (
    <section id="features" className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Orquestração simplificada de certidões</h2>
        <p className="text-lg text-muted-foreground">
          Ganhe agilidade na obtenção de certidões negativas.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isActive={index === activeFeature}
              onClick={() => setActiveFeature(index)}
            />
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-law-paper/50 to-background rounded-2xl p-8 flex flex-col justify-center animate-float-up" style={{opacity: 0}}>
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <ActiveIcon className="mr-3 h-6 w-6 text-law-light" />
            {features[activeFeature].title}
          </h3>
          <p className="text-lg mb-6">{features[activeFeature].detail}</p>
          <a href="#root">
            <Button className="bg-law-light hover:bg-law-medium text-white w-fit">
              Usar agora!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
