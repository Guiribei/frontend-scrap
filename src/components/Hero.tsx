import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CertificateForm from './CertificateForm';

const Hero: React.FC = () => {
  const documentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-float-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (documentRef.current) observer.observe(documentRef.current);
    return () => {
      if (documentRef.current) observer.unobserve(documentRef.current);
    };
  }, []);

  return (
    <div
      ref={documentRef}
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background to-law-paper/30"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* ─────── Left column: headline + CTA ─────── */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Certidões, Emitidas <br />
              <span className="text-law-light">Automaticamente.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Simplifique a emissão de certidões negativas. Entre um CNPJ, receba os documentos instantaneamente no email cadastrado.
            </p>
          </div>

          {/* ─────── Right column: form ─────── */}
          <div className="flex justify-center self-start lg:self-end">
          <div className="w-80 sm:w-96 md:w-[450px]">
              <CertificateForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;