import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Especialidades } from './components/Especialidades';
import { Sobre } from './components/Sobre';
import { Depoimentos } from './components/Depoimentos';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>('rpg');
  const [selectedComplaint, setSelectedComplaint] = useState<string>('');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Pequeno foco óptico
      setTimeout(() => {
        const input = document.getElementById('fullName');
        if (input) input.focus();
      }, 600);
    }
  };

  const handleSelectSpecialtyForContact = (specialtyId?: string) => {
    if (specialtyId) {
      setSelectedSpecialtyId(specialtyId);
    }
    scrollToContact();
  };

  const handleSelectQuickTriage = (specialtyId: string, complaint: string) => {
    setSelectedSpecialtyId(specialtyId);
    setSelectedComplaint(complaint);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--secondary)] flex flex-col selection:bg-pink-100 selection:text-pink-900">
      {/* Barra de Navegação Superior */}
      <Navbar
        onContactClick={scrollToContact}
        onSpecialtyClick={handleSelectSpecialtyForContact}
      />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* 1. Início / Hero com Foco em Recuperação Funcional */}
        <Hero
          onContactClick={scrollToContact}
          onSelectQuickTriage={handleSelectQuickTriage}
        />

        {/* 2. Especialidades Clínicas (RPG, Pilates Clínico, Ortopedia, etc.) */}
        <Especialidades
          onSelectSpecialtyForContact={handleSelectSpecialtyForContact}
        />

        {/* 3. Sobre a Fisioterapeuta, Formação Acadêmica & Pilares */}
        <Sobre
          onContactClick={scrollToContact}
        />

        {/* 4. Casos Clínicos & Depoimentos Reais de Pacientes */}
        <Depoimentos />

        {/* 5. Contato, Pré-Agendamento Digital & FAQ */}
        <Contato
          initialSpecialtyId={selectedSpecialtyId}
          initialComplaint={selectedComplaint}
        />
      </main>

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppButton />

      {/* Rodapé Formal e Clínico */}
      <Footer onContactClick={scrollToContact} />
    </div>
  );
}
