import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  MessageSquare, 
  PhoneCall,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SPECIALTIES, FAQS } from '../data/content';
import { AppointmentFormData } from '../types';

interface ContatoProps {
  initialSpecialtyId?: string;
  initialComplaint?: string;
}

export const Contato: React.FC<ContatoProps> = ({ initialSpecialtyId, initialComplaint }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    specialtyId: initialSpecialtyId || 'rpg',
    preferredPeriod: 'manha',
    symptoms: initialComplaint || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    if (initialSpecialtyId) {
      setFormData((prev) => ({ ...prev, specialtyId: initialSpecialtyId }));
    }
  }, [initialSpecialtyId]);

  useEffect(() => {
    if (initialComplaint) {
      setFormData((prev) => ({
        ...prev,
        symptoms: prev.symptoms ? prev.symptoms : `Queixa inicial: ${initialComplaint}`,
      }));
    }
  }, [initialComplaint]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOpenWhatsAppDirect = () => {
    const specialtyObj = SPECIALTIES.find((s) => s.id === formData.specialtyId);
    const specialtyName = specialtyObj ? specialtyObj.title : 'Fisioterapia Geral';
    const periodMap = {
      manha: 'Manhã (08h às 12h)',
      tarde: 'Tarde (13h às 18h)',
      noite: 'Noite (18h às 20h)',
    };

    const message = encodeURIComponent(
      `Olá, Dra. Thays Gama! Gostaria de agendar uma consulta de avaliação.\n\n` +
      `*Nome:* ${formData.fullName || 'Não informado'}\n` +
      `*Telefone/WhatsApp:* ${formData.phone || 'Não informado'}\n` +
      `*Especialidade:* ${specialtyName}\n` +
      `*Turno de Preferência:* ${periodMap[formData.preferredPeriod]}\n` +
      `*Queixa/Sintomas:* ${formData.symptoms || 'Apresentar na avaliação presencial'}`
    );

    // Como não há telefone informado nas variáveis, direciona para o link padrão de WhatsApp com a mensagem pronta
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-slate-50/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200/60 text-pink-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>Pré-Agendamento & Atendimento Clínico</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-[-0.035em] mb-5">
            Dê o primeiro passo para o alívio sustentável da sua dor.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Preencha a triagem clínica abaixo para solicitar seu horário de avaliação inicial. 
            Nossa equipe responderá com a confirmação da agenda e orientações preparatórias.
          </p>
        </div>

        {/* Layout em 2 Colunas: Formulário de Triagem + FAQ / Orientações */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Coluna 1: Formulário de Pré-Agendamento (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-900/5">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-slate-100 pb-4 mb-6">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                      Formulário de Pré-Agendamento
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Tempo estimado de resposta: menos de 2 horas em dias úteis.
                    </p>
                  </div>

                  {/* Nome Completo */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="Ex.: Carolina de Oliveira Melo"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Telefone e E-mail lado a lado */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        WhatsApp / Celular *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="(DDD) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        E-mail de Contato *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="seuemail@exemplo.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Especialidade de Interesse */}
                  <div>
                    <label htmlFor="specialty" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Especialidade Pretendida *
                    </label>
                    <div className="relative">
                      <select
                        id="specialty"
                        value={formData.specialtyId}
                        onChange={(e) => setFormData({ ...formData, specialtyId: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500 transition-all appearance-none cursor-pointer"
                      >
                        {SPECIALTIES.map((spec) => (
                          <option key={spec.id} value={spec.id}>
                            {spec.title} — {spec.badge}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Turno Preferencial */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Turno Preferencial para Atendimento:
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'manha', label: 'Manhã', time: '08h – 12h' },
                        { id: 'tarde', label: 'Tarde', time: '13h – 18h' },
                        { id: 'noite', label: 'Noite', time: '18h – 20h' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredPeriod: item.id as any })}
                          className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                            formData.preferredPeriod === item.id
                              ? 'bg-pink-50 border-pink-400 text-pink-900 font-semibold ring-1 ring-pink-400'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <div className="text-xs font-bold">{item.label}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{item.time}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Relato de Sintomas / Histórico */}
                  <div>
                    <label htmlFor="symptoms" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Descreva sua queixa principal ou histórico clínico:
                    </label>
                    <textarea
                      id="symptoms"
                      rows={3}
                      placeholder="Ex.: Sinto dores na região lombar há 3 meses ao ficar sentado por muito tempo. Possuo ressonância que aponta protusão discal..."
                      value={formData.symptoms}
                      onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500 transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {/* Botão de Submissão com CTA Obrigatório */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl font-semibold text-base text-white bg-slate-900 hover:bg-slate-800 shadow-xl shadow-slate-900/10 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-pink-400" />
                      <span>Entrar em contato</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-400 mt-3 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-pink-600" />
                      <span>Seus dados clínicos são resguardados por sigilo profissional médico estrito.</span>
                    </p>
                  </div>
                </form>
              ) : (
                /* Estado de Confirmação com Pré-Triagem Pronta */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-xs border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                    Solicitação Recebida com Sucesso!
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Obrigado, <strong className="text-slate-900">{formData.fullName}</strong>. Sua solicitação de 
                    avaliação fisioterapêutica foi registrada em nosso prontuário de triagem.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left max-w-md mx-auto mb-6 text-xs text-slate-700 space-y-1.5">
                    <div><strong>Nome:</strong> {formData.fullName}</div>
                    <div><strong>Telefone:</strong> {formData.phone}</div>
                    <div><strong>Especialidade:</strong> {SPECIALTIES.find((s) => s.id === formData.specialtyId)?.title}</div>
                    <div><strong>Turno desejado:</strong> {formData.preferredPeriod.toUpperCase()}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleOpenWhatsAppDirect}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Agilizar no WhatsApp com dados preenchidos</span>
                    </button>
                    
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                    >
                      Editar solicitação
                    </button>
                  </div>
                </motion.div>
              )}

            </div>
          </div>

          {/* Coluna 2: FAQ & Detalhes de Atendimento (5 colunas) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Bloco de Atendimento Privativo */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-slate-900">
                    Atendimento Particular Exclusivo
                  </h4>
                  <p className="text-xs text-slate-500">
                    Reembolso Facilitado
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Emitimos recibo e nota fiscal detalhada com o número do registro profissional no CREFITO 
                e descrição técnica da conduta para que você obtenha reembolso junto ao seu plano de saúde 
                (Bradesco, SulAmérica, Omint, Care Plus, Amil, entre outros).
              </p>

              <div className="p-3 rounded-xl bg-pink-50/70 border border-pink-100 text-xs text-pink-900 font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-600 shrink-0" />
                <span>Consulte os termos da sua apólice para valores de reembolso.</span>
              </div>
            </div>

            {/* Dúvidas Frequentes (FAQ) com Accordion */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                <HelpCircle className="w-4 h-4 text-pink-500" />
                <span>Dúvidas Frequentes dos Pacientes:</span>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={faq.question}
                      className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden transition-all shadow-xs"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm font-semibold text-slate-900 hover:text-pink-600 transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-pink-500' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
