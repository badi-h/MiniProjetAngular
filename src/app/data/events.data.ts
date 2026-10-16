import { Event } from '../models/event.model';

export const EVENTS: Event[] = [
  {
    id: 1,
    title: 'Atelier TypeScript',
    category: 'Atelier',
    date: '2026-11-15',
    place: 'Campus A – Salle 101',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600',
    description:
      'Découvrez les fondamentaux de TypeScript : typage statique, interfaces, génériques et décorateurs. Cet atelier pratique vous permettra de maîtriser rapidement ce sur-ensemble de JavaScript adopté par Angular.'
  },
  {
    id: 2,
    title: 'Conférence IA & Société',
    category: 'Conférence',
    date: '2026-11-22',
    place: 'Amphithéâtre B',
    price: 5,
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600',
    description:
      'Table ronde réunissant chercheurs et praticiens pour débattre des enjeux éthiques de l\'intelligence artificielle, de la vie privée et de l\'impact sur le marché du travail.'
  },
  {
    id: 3,
    title: 'Hackathon Web 48h',
    category: 'Compétition',
    date: '2026-12-05',
    place: 'Fablab Campus',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600',
    description:
      'Formez une équipe de 2 à 4 personnes et relevez le défi : concevoir et développer une application web innovante en 48 heures. Prix à gagner et opportunités de networking avec des entreprises partenaires.'
  },
  {
    id: 4,
    title: 'Atelier Angular 21',
    category: 'Atelier',
    date: '2026-12-12',
    place: 'Labo Informatique C',
    price: 10,
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600',
    description:
      'Plongez dans Angular 21 : architecture standalone, Signals, routage et lazy loading. Construisez une mini-application de A à Z en suivant les meilleures pratiques actuelles.'
  },
  {
    id: 5,
    title: 'Tournoi de Ping-Pong',
    category: 'Sport',
    date: '2026-11-28',
    place: 'Salle Omnisports',
    price: 3,
    imageUrl: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?w=600',
    description:
      'Affrontez vos camarades lors d\'un tournoi convivial de ping-pong. Poules et élimination directe, trophées pour les trois premiers. Inscriptions ouvertes jusqu\'à 48 h avant l\'événement.'
  },
  {
    id: 6,
    title: 'Conférence Cybersécurité',
    category: 'Conférence',
    date: '2027-01-20',
    place: 'Amphithéâtre A',
    price: 8,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600',
    description:
      'Experts en sécurité informatique présentent les menaces actuelles : phishing, ransomware, zero-day exploits. Des démonstrations en direct illustrent comment se protéger efficacement.'
  },
  {
    id: 7,
    title: 'Run Solidaire 5 km',
    category: 'Sport',
    date: '2026-12-20',
    place: 'Parc du Campus',
    price: 0,
    imageUrl: 'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=600',
    description:
      'Courez pour la bonne cause ! Les droits d\'inscription (libres) sont reversés à une association caritative locale. Parcours balisé de 5 km, ravitaillement et t-shirt offert aux 50 premiers inscrits.'
  },
  {
    id: 8,
    title: 'Atelier UX/UI Design',
    category: 'Atelier',
    date: '2027-01-10',
    place: 'Studio Design',
    price: 12,
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600',
    description:
      'Apprenez les principes fondamentaux du design d\'interfaces utilisateur : wireframing, prototypage avec Figma, tests utilisateurs et accessibilité. Atelier 100 % pratique avec des cas réels.'
  }
];

export const CATEGORIES: string[] = ['Tous', 'Atelier', 'Conférence', 'Compétition', 'Sport'];
