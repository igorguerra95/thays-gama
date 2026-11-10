import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  ShieldCheck, 
  Crosshair, 
  Sparkles, 
  HeartPulse, 
  Compass, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  X, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import { SPECIALTIES } from '../data/content';
import { Specialty } from '../types';

interface EspecialidadesProps {
  onSelectSpecialtyForContact: (specialtyId: string) => void;
}

export const Especialidades: React.FC<EspecialidadesProps> = ({ onSelectSpecialtyForContact }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-pink-600 stroke-[2]' };
    switch (iconName) {
      case 'Activity':
        return <Activity {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Crosshair':
        return <Crosshair {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'HeartPulse':
        return <HeartPulse {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      default:
        return <Activity {...props} />;
    }
  };

  return (
    <section id="especialidades" className="py-20 md:py-28 bg-white relative">
      {/* Decorative hairline grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
            <span>Condutas Clínicas Especializadas</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-[-0.035em] mb-5">
            Tratamentos estruturados para a sua biomecânica individual.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminamos a dor atacando sua causa biomecânica primária. Cada especialidade obedece 
            a diretrizes clínicas internacionais com mensuração contínua de ganhos funcionais.
          </p>
        </div>

        {/* Grid 12 colunas / 3 colunas desktop com Cards de Alta Precisão */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALTIES.map((specialty, index) => (
            <motion.div
              key={specialty.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              className="group relative flex flex-col justify-between bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-pink-300/80 hover:shadow-xl hover:shadow-pink-900/5 transition-all duration-300"
            >
              <div>
                {/* Imagem de Capa do Card */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6 bg-slate-200">
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Badge de Categoria */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold text-slate-800 shadow-xs border border-white/50">
                    {specialty.badge}
                  </div>

                  {/* Ícone Clínico no Canto */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-xs">
                    {renderIcon(specialty.iconName)}
                  </div>
                </div>

                {/* Título e Descrição Resumida */}
                <h3 className="font-display text-xl font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-pink-900 transition-colors">
                  {specialty.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {specialty.shortDescription}
                </p>

                {/* Lista de Principais Indicações (3 itens) */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Principais Indicações:
                  </div>
                  {specialty.indications.slice(0, 3).map((indication) => (
                    <div key={indication} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                      <span>{indication}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rodapé do Card com Ações */}
              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedSpecialty(specialty)}
                  className="text-xs font-semibold text-slate-700 hover:text-pink-600 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Ver protocolo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectSpecialtyForContact(specialty.id)}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-900 bg-white hover:bg-slate-900 hover:text-white border border-slate-200 shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Entrar em contato</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal / Dialog de Protocolo Clínico Detalhado */}
      <AnimatePresence>
        {selectedSpecialty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpecialty(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Botão Fechar */}
              <button
                onClick={() => setSelectedSpecialty(null)}
                aria-label="Fechar detalhes"
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-semibold">
                  {selectedSpecialty.badge}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {selectedSpecialty.protocolDuration}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                {selectedSpecialty.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {selectedSpecialty.fullDescription}
              </p>

              <div className="space-y-5 mb-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                    Quadro Clínico Indicado:
                  </h4>
                  <ul className="space-y-2">
                    {selectedSpecialty.indications.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-pink-900 mb-2">
                    Ganhos Terapêuticos Esperados:
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedSpecialty.benefits.map((benefit) => (
                      <li key={benefit} className="text-xs text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedSpecialty(null)}
                  className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Voltar
                </button>
                <button
                  onClick={() => {
                    const id = selectedSpecialty.id;
                    setSelectedSpecialty(null);
                    onSelectSpecialtyForContact(id);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-md shadow-slate-900/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Entrar em contato para este tratamento</span>
                  <ArrowUpRight className="w-4 h-4 text-pink-400" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
