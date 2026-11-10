import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, ArrowUpRight, Sparkles, Clock, CheckCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      title: 'Agendar Avaliação Inicial',
      desc: 'Consulta de 60 minutos para diagnóstico biomecânico',
      msg: 'Olá, Dra. Thays Gama! Gostaria de agendar uma consulta de avaliação biomecânica.',
    },
    {
      title: 'Dúvidas sobre RPG ou Pilates',
      desc: 'Informações sobre indicações e frequências',
      msg: 'Olá, Dra. Thays! Gostaria de tirar dúvidas sobre o tratamento com RPG e Pilates Clínico.',
    },
    {
      title: 'Reembolso com Plano de Saúde',
      desc: 'Orientações sobre nota fiscal e recibo médico',
      msg: 'Olá! Gostaria de saber como funciona a emissão de nota para reembolso com convênio médico.',
    },
  ];

  const handleSendMessage = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 sm:w-96 rounded-3xl bg-white p-5 shadow-2xl border border-slate-200/90"
          >
            {/* Header do Card WhatsApp */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-sm">
                    TG
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">
                    Dra. Thays Gama
                  </h4>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-500" />
                    <span>Disponível para atendimento</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Fechar"
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mensagem de boas-vindas */}
            <p className="text-xs text-slate-600 py-3 leading-relaxed">
              Olá! Como podemos auxiliar no cuidado com a sua saúde postural e mobilidade hoje? 
              Selecione uma opção para iniciar a conversa:
            </p>

            {/* Atalhos Rápidos de Mensagem */}
            <div className="space-y-2 mb-3">
              {quickMessages.map((item) => (
                <button
                  key={item.title}
                  onClick={() => handleSendMessage(item.msg)}
                  className="w-full p-2.5 rounded-xl bg-slate-50 hover:bg-pink-50/70 border border-slate-100 hover:border-pink-200 text-left transition-all group flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-900 group-hover:text-pink-900">
                      {item.title}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {item.desc}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-pink-600 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>

            <div className="pt-2 text-[10px] text-center text-slate-400 flex items-center justify-center gap-1">
              <CheckCircle className="w-3 h-3 text-pink-500" />
              <span>Resposta direta sem intermediários ou bots intrusivos</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Flutuante Redondo com Pulse Discreto */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Atendimento rápido via WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-700/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        {/* Pulse Discreto */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />
        
        {/* Ícone */}
        <MessageSquare className="w-6 h-6 stroke-[2.2] relative z-10" />

        {/* Badge flutuante de status */}
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-pink-500 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
      </button>
    </div>
  );
};
