import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  Stethoscope, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles,
  BookOpenCheck,
  UserCheck
} from 'lucide-react';

interface SobreProps {
  onContactClick: () => void;
}

export const Sobre: React.FC<SobreProps> = ({ onContactClick }) => {
  const credentials = [
    {
      title: 'Graduação em Fisioterapia',
      institution: 'Instituição de Referência Nacional',
      desc: 'Formação com foco aprofundado em cinesiologia clínica, biomecânica e patologias do aparelho locomotor.',
      icon: GraduationCap,
    },
    {
      title: 'Pós-Graduação em Traumato-Ortopedia',
      institution: 'Especialização Lato Sensu',
      desc: 'Capacitação avançada em reabilitação de pós-operatórios complexos, lesões ligamentares e afecções discais.',
      icon: Award,
    },
    {
      title: 'Formação em RPG (Método Souchard)',
      institution: 'Certificação Oficial',
      desc: 'Domínio das posturas estáticas progressivas para correção de escolioses, hipercifoses e descompressão neural.',
      icon: BookOpenCheck,
    },
    {
      title: 'Pilates Clínico & Biomecânica',
      institution: 'Formação Internacional em Aparelhos',
      desc: 'Prescrição técnica individualizada com ênfase na estabilização segmentar lombo-pélvica e proteção articular.',
      icon: Stethoscope,
    },
  ];

  const pillars = [
    {
      number: '01',
      title: 'Diagnóstico da Causa Primária',
      description:
        'Não nos limitamos a silenciar o sintoma momentâneo. Avaliamos padrões de compensação, assimetrias musculares e restrições fasciais para desativar o mecanismo causador da dor.',
    },
    {
      number: '02',
      title: 'Atendimento Estritamente Individual (1:1)',
      description:
        'Sessões de 50 a 60 minutos inteiramente dedicadas a você. Sem revezamento de maca, sem protocolos genéricos e com supervisão constante a cada movimento.',
    },
    {
      number: '03',
      title: 'Educação em Dor & Autonomia Motora',
      description:
        'Capacitamos o paciente a compreender sua biomecânica e manter hábitos posturais sustentáveis, conquistando longevidade funcional definitiva.',
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-slate-50/70 relative overflow-hidden border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco Superior: Perfil e Biografia */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Foto e Moldura Editorial da Fisioterapeuta */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative mx-auto max-w-md"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 shadow-xl border border-slate-200/80">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1594824813583-8a0df545b78b?auto=format&fit=crop&w=1000&q=80"
                    alt="Dra. Thays Gama - Fisioterapeuta Especialista"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="text-xl font-display font-bold">Dra. Thays Gama</div>
                    <div className="text-xs text-pink-200 font-medium flex items-center gap-1.5 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-pink-400" />
                      <span>Fisioterapeuta • Registro CREFITO Ativo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Selo Flutuante de Humanização e Ciência */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-xl max-w-[210px]">
                <div className="flex items-center gap-2 mb-1 text-pink-600">
                  <UserCheck className="w-5 h-5" />
                  <span className="text-xs font-bold text-slate-900">Cuidado Centrado</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Planos terapêuticos formulados sob medida para o seu estilo de vida.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Texto de Apresentação e Rigor Técnico */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/60 text-pink-900 text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-pink-600" />
              <span>Trajetória Clínica & Filosofia de Atendimento</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-[-0.035em] mb-6 leading-tight">
              A ciência do movimento aplicada com precisão e empatia.
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed mb-8">
              <p>
                Com formação fundamentada na biomecânica humana e prática baseada em evidências científicas, 
                a <strong className="text-slate-900 font-semibold">Dra. Thays Gama</strong> dedica sua atuação clínica a 
                devolver a liberdade funcional a indivíduos acometidos por dores articulares, 
                patologias da coluna vertebral e traumas musculoesqueléticos.
              </p>
              <p>
                Acreditamos que cada organismo possui uma história cinemática particular. Por isso, 
                abolimos receitas prontas: desde a primeira consulta, você recebe uma investigação 
                postural milimétrica e acompanhamento ininterrupto, em um ambiente silencioso, 
                tecnológico e acolhedor.
              </p>
            </div>

            {/* Checklist de Compromissos Éticos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                <span>Atualização contínua em periódicos médicos</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                <span>Pontualidade e respeito absoluto ao seu tempo</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                <span>Equipamentos certificados de alto padrão</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                <span>Relatórios clínicos para médicos assistentes</span>
              </div>
            </div>

            <div>
              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-md shadow-slate-900/10 transition-all cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4 text-pink-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Pilares do Atendimento */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Os 3 Pilares do Método Clínico
            </h3>
            <p className="text-sm text-slate-600">
              Diretrizes intransigentes que orientam cada etapa do seu plano terapêutico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs relative overflow-hidden"
              >
                <div className="text-4xl font-display font-bold text-pink-200 mb-4">
                  {pillar.number}
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 mb-2.5">
                  {pillar.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Formação Acadêmica & Credenciais */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Qualificação Acadêmica & Especializações
            </h3>
            <p className="text-sm text-slate-600">
              Formação sólida e constante aperfeiçoamento nos principais centros de ensino em saúde.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, index) => {
              const IconComp = cred.icon;
              return (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-pink-200 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 text-pink-600 flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-pink-700 uppercase tracking-wider mb-1">
                      {cred.institution}
                    </div>
                    <h5 className="font-display text-base font-bold text-slate-900 mb-2">
                      {cred.title}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cred.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
