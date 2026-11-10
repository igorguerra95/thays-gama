import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Depoimentos: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/60 text-pink-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>Resultados Clínicos & Relatos Reais</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-[-0.035em] mb-5">
            Histórias de superação e retorno à vida sem limitações.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A verdadeira medida do sucesso fisioterapêutico é a autonomia restaurada do paciente. 
            Confira como nossa abordagem personalizada transformou o dia a dia de quem confiou em nosso trabalho.
          </p>
        </div>

        {/* Grade de Depoimentos em Cards com Sombra Elegante */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="p-8 sm:p-9 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-pink-200 hover:bg-white hover:shadow-xl hover:shadow-pink-900/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cabeçalho do Card: Condição e Estrelas */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="px-3 py-1 rounded-full bg-pink-100/80 text-pink-900 text-xs font-semibold">
                    {item.condition}
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Resultado Clínico Alcançado */}
                <div className="flex items-start gap-2.5 mb-5 p-3 rounded-xl bg-white border border-slate-200/60 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 font-normal">Desfecho: </span>
                    <strong className="text-slate-900">{item.outcome}</strong>
                  </div>
                </div>

                {/* Citação do Paciente */}
                <div className="relative mb-8">
                  <Quote className="w-8 h-8 text-pink-200/80 absolute -top-3 -left-2 -z-10" />
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic pl-3">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Rodapé com Dados do Paciente e Tempo de Tratamento */}
              <div className="pt-5 border-t border-slate-200/70 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-base">
                    {item.patientName}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.age} anos • {item.profession}
                  </p>
                </div>

                <div className="text-right flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80">
                  <Clock className="w-3.5 h-3.5 text-pink-500" />
                  <span>{item.durationWeeks} semanas de plano</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Faixa Inferior de Transparência Ética */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-200/60">
            <CheckCircle2 className="w-4 h-4 text-pink-600" />
            <span>Depoimentos autorizados expressamente por pacientes em conformidade com o código de ética do COFFITO.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
