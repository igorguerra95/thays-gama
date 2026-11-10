import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  HeartHandshake, 
  CheckCircle2, 
  Clock, 
  CalendarCheck2 
} from 'lucide-react';
import { CLINICAL_STATS } from '../data/content';

interface HeroProps {
  onContactClick: () => void;
  onSelectQuickTriage: (specialtyId: string, complaint: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onSelectQuickTriage }) => {
  const quickComplaints = [
    { label: 'Dor na Coluna & Ciático', specialtyId: 'rpg', note: 'RPG & Descompressão' },
    { label: 'Pós-Cirúrgico Ortopédico', specialtyId: 'pos-operatorio', note: 'Protocolo de Cicatrização' },
    { label: 'Desvios Posturais & Tensão', specialtyId: 'pilates-clinico', note: 'Pilates Clínico de Precisão' },
    { label: 'Lesão Articular ou Tendão', specialtyId: 'traumato-ortopedia', note: 'Ortopedia Avançada' },
  ];

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Background accents / Soft quartz ambient aura */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-pink-200/30 via-pink-300/20 to-slate-200/30 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Conteúdo (Texto e CTAs) - 7 colunas */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Pill Badge Superior */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/70 text-pink-900 text-xs sm:text-sm font-medium w-fit mb-6 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-pink-600" />
              <span>Clínica de Fisioterapia Especializada & Reabilitação Biomecânica</span>
            </motion.div>

            {/* Headline Magnético e Original com Tipografia Espaçada */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-slate-900 tracking-[-0.035em] leading-[1.08] mb-6"
            >
              Restaure a precisão do seu movimento.{' '}
              <span className="relative inline-block text-slate-900">
                Viva com autonomia
                <span className="absolute left-0 bottom-1.5 w-full h-3 bg-pink-200/50 -z-10 rounded-sm" />
              </span>{' '}
              e sem dor.
            </motion.h1>

            {/* Subheadline Formal, Técnico e de Alto Valor */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: 'easeOut' }}
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8"
            >
              Abordagem clínica baseada em evidências, diagnóstico biomecânico detalhado e atendimento 
              estritamente individualizado. Especialista em Reabilitação Traumato-Ortopédica, RPG e 
              Pilates Clínico para devolver o conforto funcional do seu corpo.
            </motion.p>

            {/* Micro-Badges de Confiança */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-xs sm:text-sm text-slate-600 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pink-600" />
                <span>Atendimento 1 a 1 Exclusivo</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pink-600" />
                <span>Avaliação Biomecânica 60 min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pink-600" />
                <span>Nota com Reembolso Médico</span>
              </div>
            </motion.div>

            {/* Botões de Ação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10"
            >
              <button
                onClick={onContactClick}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-xl shadow-slate-900/15 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4 text-pink-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-xs transition-all hover:text-slate-900"
              >
                <span>Conhecer Especialidades</span>
              </a>
            </motion.div>

            {/* Triagem Rápida Interativa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <CalendarCheck2 className="w-3.5 h-3.5 text-pink-500" />
                <span>Triagem Imediata — Selecione sua queixa principal:</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {quickComplaints.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => onSelectQuickTriage(item.specialtyId, item.label)}
                    className="p-2.5 text-left rounded-xl bg-slate-50 hover:bg-pink-50/70 border border-slate-100 hover:border-pink-200/80 transition-all text-xs group cursor-pointer"
                  >
                    <span className="font-medium text-slate-800 group-hover:text-pink-900 block truncate">
                      {item.label}
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-pink-600 block mt-0.5">
                      {item.note}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Coluna Visual e Composicional - 5 colunas */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Moldura da Imagem Principal com Hairline Border e Sombra Multicamada */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white p-2.5 shadow-2xl shadow-slate-900/10">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                    alt="Dra. Thays Gama em sessão de fisioterapia especializada e reabilitação postural"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Legenda interna da imagem */}
                  <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-semibold">Agendamentos Abertos</span>
                      </div>
                      <span className="text-[11px] text-slate-300">Consultório Exclusivo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Flutuante Superior: Rigor Clínico */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/5 max-w-[210px] hidden sm:block"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center">
                    <Activity className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">CREFITO Ativo</div>
                    <div className="text-[10px] text-slate-500">Prática em Evidências</div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 leading-tight">
                  Protocolos atualizados com diretrizes da biomecânica mundial.
                </p>
              </motion.div>

              {/* Card Flutuante Inferior: Índice de Recuperação */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/10 max-w-[240px] hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 text-white flex items-center justify-center font-display font-bold text-base shadow-sm">
                    98%
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-none mb-1">
                      Retorno Funcional
                    </div>
                    <div className="text-[11px] text-slate-500 leading-tight">
                      Pacientes que retomam rotinas sem limitações
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Grade de Estatísticas / Métricas com Números Grandes */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {CLINICAL_STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xs hover:border-pink-200/60 transition-colors"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-1">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-pink-700">
                    {stat.value}
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-800 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 leading-snug">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
