import { Specialty, Testimonial, FaqItem } from '../types';

export const SPECIALTIES: Specialty[] = [
  {
    id: 'rpg',
    title: 'RPG — Reeducação Postural Global',
    badge: 'Correção Estrutural',
    shortDescription: 'Método fisioterapêutico para alongamento e descompressão das cadeias musculares profundas.',
    fullDescription: 'O método RPG trata o indivíduo de forma global, identificando as causas primárias de assimetrias posturais e sobrecargas mecânicas. Através de posturas estáticas progressivas e respiração controlada, reequilibramos a coluna vertebral e aliviamos a compressão neural.',
    iconName: 'Activity',
    indications: [
      'Escoliose, hipercifose e retificação vertebral',
      'Hérnia de disco, protrusões e dor ciática',
      'Cervicalgias e lombalgias crônicas de origem mecânica',
      'Desvios no padrão de marcha e pisada'
    ],
    protocolDuration: 'Sessões de 60 minutos (frequência semanal recomendada)',
    benefits: [
      'Alívio progressivo da compressão intravertebral',
      'Restauração do eixo postural e simetria dos ombros',
      'Consciência corporal e prevenção de deformidades'
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pilates-clinico',
    title: 'Pilates Clínico & Terapêutico',
    badge: 'Estabilização Funcional',
    shortDescription: 'Exercícios terapêuticos de precisão nos aparelhos para fortalecimento sem impacto e controle do core.',
    fullDescription: 'Diferente do formato fitness genérico, o Pilates Clínico é prescrito exclusivamente por fisioterapeuta com base na sua patologia. Focado na estabilização dos músculos paravertebrais, transverso do abdômen e pelve, protege articulações vulneráveis e amplia o arco de movimento seguro.',
    iconName: 'ShieldCheck',
    indications: [
      'Instabilidade lombo-pélvica e fraqueza de core',
      'Recuperação funcional pós-cirúrgica e pós-parto',
      'Condromalácia patelar e artrose inicial',
      'Melhora da flexibilidade e condicionamento postural'
    ],
    protocolDuration: 'Sessões de 50 minutos (1 a 2 vezes por semana)',
    benefits: [
      'Fortalecimento muscular profundo e seguro',
      'Proteção e descompressão das articulações da coluna',
      'Controle respiratório e alinhamento cinemático'
    ],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'traumato-ortopedia',
    title: 'Reabilitação Traumato-Ortopédica',
    badge: 'Recuperação Musculoesquelética',
    shortDescription: 'Protocolos avançados para lesões de tendões, ligamentos, meniscos e desgastes articulares.',
    fullDescription: 'Intervenção sistemática para restaurar amplitude de movimento, controle neuromuscular e força em pacientes com traumas ou patologias ortopédicas. Utilizamos técnicas combinadas de eletroterapia analgésica, cinesioterapia ativa e terapia manual orientada.',
    iconName: 'Crosshair',
    indications: [
      'Tendinopatia do manguito rotador e bursite de ombro',
      'Fascite plantar, esporão e entorses recidivantes de tornozelo',
      'Lesões de ligamentos cruzados (LCA/LCP) e meniscos no joelho',
      'Disfunções da articulação temporomandibular (DTM)'
    ],
    protocolDuration: 'Protocolos individualizados de 50 a 60 minutos',
    benefits: [
      'Aceleração da regeneração tecidual sem fármacos contínuos',
      'Recuperação da amplitude articular funcional',
      'Retorno seguro às atividades diárias e esportivas'
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'terapia-manual',
    title: 'Terapia Manual & Liberação Miofascial',
    badge: 'Desativação de Tensão',
    shortDescription: 'Mobilização articular refinada e liberação de tecidos miofasciais para alívio imediato da dor.',
    fullDescription: 'Aplicação de técnicas manuais de alta sensibilidade tátil para restaurar o deslizamento entre as camadas de fáscia muscular, desativar pontos-gatilho miofasciais dolorosos (trigger points) e devolver a mobilidade livre das articulações hipomóveis.',
    iconName: 'Sparkles',
    indications: [
      'Contraturas musculares agudas e torcicolos',
      'Tensões cervicais crônicas e cefaleia tensional',
      'Restrições de mobilidade escapular e dorsal',
      'Sobrecargas musculares por esforço repetitivo ou postura no trabalho'
    ],
    protocolDuration: 'Sessões de 45 a 60 minutos',
    benefits: [
      'Redução imediata da dor aguda e espasmos musculares',
      'Restauração do fluxo sanguíneo e nutrição tecidual local',
      'Relaxamento neuromusculoesquelético profundo'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pos-operatorio',
    title: 'Recuperação Pós-Operatória Avançada',
    badge: 'Protocolos Cirúrgicos',
    shortDescription: 'Acompanhamento rigoroso em cada fase de cicatrização pós-cirúrgica ortopédica e de coluna.',
    fullDescription: 'Cuidado especializado para pacientes recém-operados. Monitoramos o controle do edema, regeneração cicatricial, prevenção de aderências fibróticas e mobilização precoce assistida, assegurando que o procedimento cirúrgico alcance seu melhor desfecho funcional.',
    iconName: 'HeartPulse',
    indications: [
      'Pós-cirúrgico de ligamento cruzado e sutura meniscal',
      'Artroplastias de quadril e joelho (próteses)',
      'Artrodeses vertebrais e discectomias de coluna',
      'Reparos de tendão de Aquiles e labrum do ombro'
    ],
    protocolDuration: 'Acompanhamento modular por fases cirúrgicas',
    benefits: [
      'Controle efetivo do edema e hematomas pós-operatórios',
      'Prevenção de rigidez articular e atrofia muscular por desuso',
      'Segurança respaldada por critérios científicos de progressão'
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fisioterapia-preventiva',
    title: 'Fisioterapia Preventiva & Ergonomia',
    badge: 'Longevidade Funcional',
    shortDescription: 'Avaliação cinesiológica completa para blindagem articular e correção ergonômica de rotina.',
    fullDescription: 'Intervenção proativa voltada para executivos, profissionais em home office e pessoas que desejam envelhecer com vigor. Mapeamos desequilíbrios musculares antes que se manifestem como dor ou degeneração, criando um programa de suporte sustentável.',
    iconName: 'Compass',
    indications: [
      'Prevenção de LER/DORT em jornadas de trabalho extensas',
      'Check-up postural e biomecânico periódico',
      'Orientação ergonômica para postos de trabalho e telas',
      'Preparação física e manutenção articular para longevidade'
    ],
    protocolDuration: 'Consultoria biomecânica e sessões programadas',
    benefits: [
      'Zero interrupções de rotina por crises súbitas de dor',
      'Otimização da energia diária e conforto no trabalho',
      'Preservação da densidade e mecânica articular a longo prazo'
    ],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    patientName: 'Eduardo Guimarães',
    age: 44,
    profession: 'Engenheiro Civil',
    condition: 'Hérnia de Disco Lombar (L4-L5)',
    outcome: 'Eliminação da dor ciática e dispensa de intervenção cirúrgica',
    quote: 'Eu estava há mais de 8 meses convivendo com uma dor ciática incapacitante, tomando anti-inflamatórios semanais. A Dra. Thays fez uma avaliação biomecânica que nenhum outro profissional havia feito. O tratamento com RPG associado ao Pilates Clínico mudou completamente minha qualidade de vida. Voltei a trabalhar e a praticar caminhadas sem qualquer sintoma.',
    durationWeeks: 12,
    rating: 5
  },
  {
    id: '2',
    patientName: 'Dra. Mariana Vasconcelos',
    age: 38,
    profession: 'Médica Anestesiologista',
    condition: 'Cervicalgia Severa & Parestesia nos Braços',
    outcome: 'Recuperação integral da amplitude de movimento e força',
    quote: 'Pela minha rotina médica em centro cirúrgico, cheguei com contraturas profundas no trapézio e formigamento nas mãos. O rigor técnico da Thays na terapia manual e a prescrição exata dos exercícios de estabilização cervical foram impecáveis. É uma profissional de nível de excelência raro.',
    durationWeeks: 8,
    rating: 5
  },
  {
    id: '3',
    patientName: 'Roberto Silveira',
    age: 52,
    profession: 'Empresário',
    condition: 'Pós-Operatório de Artroplastia de Joelho',
    outcome: 'Extensão completa e marcha simétrica em tempo recorde',
    quote: 'O acompanhamento pós-cirúrgico com a Dra. Thays me deu a segurança necessária para pisar com firmeza desde as primeiras semanas. A atenção individual em cada movimento evitou fibroses e me fez recuperar a mobilidade funcional plena muito antes do previsto pelo meu cirurgião.',
    durationWeeks: 14,
    rating: 5
  },
  {
    id: '4',
    patientName: 'Camila Peixoto',
    age: 29,
    profession: 'Designer de Produto',
    condition: 'Escoliose Dorsolombar & Fadiga Postural',
    outcome: 'Alinhamento postural, ganho de 3cm de alcance e alívio dores',
    quote: 'Trabalho muitas horas sentada e sentia uma queimação constante entre as escápulas. O protocolo de RPG personalizado da Thays me ensinou a respirar, organizar minha postura e sustentar o corpo sem esforço. É uma transformação visível nas fotos de antes e depois.',
    durationWeeks: 10,
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Como funciona a primeira consulta de avaliação?',
    answer: 'A consulta inicial tem duração aproximada de 60 minutos. Realizamos uma anamnese clínica completa, histórico de queixas, análise de exames de imagem (ressonâncias, radiografias) e testes biomecânicos específicos para identificar desequilíbrios posturais e musculares. Ao final, apresentamos o plano terapêutico personalizado com metas claras.'
  },
  {
    question: 'Vocês atendem por convênios médicos?',
    answer: 'Nossos atendimentos são exclusivamente particulares, o que garante sessões individuais, pontuais e com tempo integral dedicado ao paciente. No entanto, fornecemos nota fiscal com todos os dados exigidos pelo Conselho de Fisioterapia para que você solicite o reembolso integral ou parcial junto ao seu plano de saúde.'
  },
  {
    question: 'Qual a frequência recomendada de atendimento?',
    answer: 'A periodicidade é definida após a avaliação inicial. Em quadros agudos com dor intensa, costumamos recomendar de 2 a 3 sessões semanais para rápida estabilização. Em protocolos de RPG e manutenção postural, 1 a 2 sessões semanais costumam ser ideais para consolidação tecidual.'
  },
  {
    question: 'O que devo vestir para as sessões de fisioterapia e Pilates?',
    answer: 'Recomendamos roupas confortáveis e flexíveis que permitam movimentação livre, como bermudas, calças de ginástica/legging e camisetas confortáveis. Para as sessões de RPG, é importante que as roupas permitam a visualização do alinhamento da coluna e articulações.'
  },
  {
    question: 'Preciso ter pedido médico para iniciar o tratamento?',
    answer: 'Pela legislação brasileira e resolução do Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO), o fisioterapeuta é um profissional de primeiro contato, plenamente capacitado para diagnosticar funcionalmente e prescrever o tratamento fisioterapêutico. Se você já possuir encaminhamento médico ou laudos, eles serão integrados ao seu prontuário.'
  }
];

export const CLINICAL_STATS = [
  { value: '98,4%', label: 'Taxa de Melhora Funcional', detail: 'Índice de pacientes que relatam alívio sustentado da dor' },
  { value: '+2.400', label: 'Horas de Atendimento 1:1', detail: 'Dedicação clínica exclusiva, sem revezamento de pacientes' },
  { value: '100%', label: 'Baseado em Evidências', detail: 'Protocolos atualizados com diretrizes científicas mundiais' },
  { value: '1 a 1', label: 'Atenção Integral', detail: 'Fisioterapeuta presente durante todo o período da sessão' }
];
