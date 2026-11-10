export interface Specialty {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  badge: string;
  iconName: string;
  indications: string[];
  protocolDuration: string;
  benefits: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  age: number;
  condition: string;
  outcome: string;
  quote: string;
  durationWeeks: number;
  rating: number;
  profession: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  specialtyId: string;
  preferredPeriod: 'manha' | 'tarde' | 'noite';
  symptoms: string;
}
