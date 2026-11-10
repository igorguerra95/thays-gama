import React from 'react';
import { Activity, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Coluna da Marca (5 colunas) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center text-white shadow-md shadow-pink-500/20">
                <Activity className="w-5 h-5 text-white stroke-[2.2]" />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-white block">
                  Thays Gama
                </span>
                <span className="text-xs text-pink-400 font-medium">
                  Fisioterapia & Reabilitação Funcional
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Laboratório de excelência no diagnóstico biomecânico, alívio de quadros dolorosos 
              e restauração funcional. Atendimento rigoroso, ético e individualizado.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-pink-400" />
              <span>Registro Profissional no CREFITO Ativo</span>
            </div>
          </div>

          {/* Navegação Rápida (3 colunas) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Especialidades Clínicas', href: '#especialidades' },
                { label: 'Sobre a Fisioterapeuta', href: '#sobre' },
                { label: 'Casos e Depoimentos', href: '#depoimentos' },
                { label: 'Pré-Agendamento', href: '#contato' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Condutas Principais (4 colunas) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Especialidades em Destaque
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Reeducação Postural Global (RPG)</li>
              <li>Pilates Clínico & Biomecânica de Precisão</li>
              <li>Reabilitação Traumato-Ortopédica</li>
              <li>Terapia Manual & Liberação Miofascial</li>
              <li>Acompanhamento Pós-Cirúrgico Especializado</li>
            </ul>

            <div className="mt-6 pt-6 border-t border-slate-800/80">
              <button
                onClick={onContactClick}
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-pink-600 hover:bg-pink-500 transition-colors shadow-md text-center cursor-pointer"
              >
                Entrar em contato para agendar
              </button>
            </div>
          </div>

        </div>

        {/* Rodapé Ético e Direitos Autorais */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Thays Gama — Fisioterapeuta. Todos os direitos reservados.
          </div>
          <div className="text-center md:text-right max-w-xl text-[11px] leading-relaxed">
            As informações disponibilizadas neste portal possuem caráter exclusivamente informativo 
            e educacional, não substituindo o exame clínico presencial de um fisioterapeuta legalmente habilitado.
          </div>
        </div>

      </div>
    </footer>
  );
};
