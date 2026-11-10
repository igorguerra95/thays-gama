import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Menu, X, ArrowUpRight, PhoneCall, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
  onSpecialtyClick: (specialtyId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-slate-200/80'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logotipo / Marca Pessoal */}
            <a
              href="#inicio"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center text-white shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform">
                <Activity className="w-5 h-5 text-white stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-tight">
                  Thays Gama
                </span>
                <span className="text-[11px] font-medium tracking-wide uppercase text-slate-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                  Fisioterapia Especializada
                </span>
              </div>
            </a>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/80 border border-slate-200/90 rounded-full px-4 py-1.5 shadow-xs backdrop-blur-sm">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Ação Principal Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onContactClick}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-md shadow-slate-900/10 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Entrar em contato</span>
                <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center group-hover:translate-x-0.5 group-hover:bg-pink-500 group-hover:text-white transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </button>
            </div>

            {/* Botão Menu Mobile */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200/80 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer / Menu Mobile com Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-pink-500 flex items-center justify-center text-white">
                      <Activity className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-slate-900 text-base">Thays Gama</h3>
                      <p className="text-[11px] text-slate-500">CREFITO Ativo</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Fechar painel"
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1.5 py-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className="flex items-center justify-between text-left py-3 px-3 rounded-xl text-base font-medium text-slate-700 hover:text-pink-600 hover:bg-pink-50/50 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </button>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-600 leading-relaxed">
                    Atendimentos particulares com emissão de nota para solicitação de reembolso.
                  </div>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10"
                >
                  <PhoneCall className="w-4 h-4 text-pink-400" />
                  <span>Entrar em contato</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
