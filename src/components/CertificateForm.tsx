
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FileCheck, Loader2, Mail } from 'lucide-react';

enum FormState {
  IDLE,
  PROCESSING,
  SUCCESS,
  ERROR
}

const CertificateForm = () => {
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState>(FormState.IDLE);
  const [progress, setProgress] = useState(0);
  
  // Add animation when component mounts
  useEffect(() => {
    const form = document.getElementById('certificate-form');
    if (form) {
      form.classList.add('animate-fade-in');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cnpj.length < 14 || !email.includes('@')) {
      return;
    }
    
    setFormState(FormState.PROCESSING);
    
    // Simulate the certificate retrieval process
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setFormState(FormState.SUCCESS);
      }
    }, 200);
  };

  const formatCNPJ = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as XX.XXX.XXX/XXXX-XX
    if (digits.length <= 2) {
      return digits;
    } else if (digits.length <= 5) {
      return `${digits.slice(0, 2)}.${digits.slice(2)}`;
    } else if (digits.length <= 8) {
      return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`;
    } else if (digits.length <= 12) {
      return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`;
    } else {
      return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12, 14)}`;
    }
  };

  const handleCNPJChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCNPJ = formatCNPJ(e.target.value);
    setCnpj(formattedCNPJ);
  };

  const resetForm = () => {
    setCnpj('');
    setEmail('');
    setFormState(FormState.IDLE);
    setProgress(0);
  };

  return (
    <div id="certificate-form" className="bg-white p-6 rounded-xl shadow-md border border-gray-200 opacity-0">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <FileCheck className="mr-2 h-5 w-5 text-law-light" />
        Obtenção de Certidões
      </h3>
      
      {formState === FormState.SUCCESS ? (
        <div className="text-center py-8">
          <div className="mx-auto bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <Mail className="h-8 w-8" />
          </div>
          <h4 className="text-lg font-semibold mb-2">Certidões Enviadas!</h4>
          <p className="text-muted-foreground mb-6">
            As certidões negativas serão enviadas para {email}
          </p>
          <Button 
            onClick={resetForm}
            className="bg-law-light hover:bg-law-medium text-white"
          >
            Gerar Certidões para Outra Empresa
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700 mb-1">
                CNPJ da Empresa
              </label>
              <input
                id="cnpj"
                type="text"
                value={cnpj}
                onChange={handleCNPJChange}
                placeholder="XX.XXX.XXX/XXXX-XX"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-law-light"
                maxLength={18}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Destino
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-law-light"
                required
              />
            </div>
            
            {/* <div>
              <label htmlFor="certificate-type" className="block text-sm font-medium text-gray-700 mb-1">
                Certificate Type
              </label>
              <select
                id="certificate-type"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-law-light"
                defaultValue=""
                required
              >
                <option value="" disabled>Select certificate type</option>
                <option value="tax-clearance">Tax Clearance Certificate</option>
                <option value="company-status">Company Status Certificate</option>
                <option value="labor-compliance">Labor Compliance Certificate</option>
                <option value="legal-representation">Legal Representation Certificate</option>
              </select>
            </div> */}
            
            {formState === FormState.PROCESSING && (
              <div className="py-2">
                <p className="text-sm text-gray-600 mb-2">Recuperando certidão...</p>
                <div className="document-progress">
                  <div 
                    className="document-progress-bar animate-document-progress"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            )}
            
            <Button
              type="submit"
              className="w-full bg-law-light hover:bg-law-medium text-white"
              disabled={formState === FormState.PROCESSING}
            >
              {formState === FormState.PROCESSING ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processando
                </>
              ) : 'Gerar Certidões'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CertificateForm;
