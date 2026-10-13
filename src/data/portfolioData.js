export const contactInfo = {
  email: 'victorgiroud4@gmail.com',
  phone: '07 67 55 36 10',
  linkedinUrl: 'https://www.linkedin.com/in/victor-giroud-paris',
  linkedinDisplay: 'victor-giroud-paris'
}

export const experiences = [
  {
    period: '09/2025 – 01/2026',
    role: 'Stage de 4ème année — Ingénieur Développeur',
    company: 'AER (Automatisme-Electricité-Régulation)',
    location: 'Saint Andéol le château',
    badge: 'Stage 4ème année',
    description: [
      'Développement d’une application web progressive (PWA) visant à tester la conformité réglementaire des bâtiments.',
      'Conception et développement Full-Stack (Vue.js en frontend et Java en backend).',
      'Mise en place d’un agent IA de reconnaissance d’images, incluant le fine-tuning de modèles.',
      'Collaboration en méthodologie Agile.'
    ],
    tags: ['Vue.js', 'Java', 'PWA', 'Agents IA', 'Fine-tuning', 'Agile']
  },
  {
    period: '05/2023 – Actuel',
    role: 'DJ & Gestion Événementielle (Auto-entreprise)',
    company: 'Auto-entrepreneur',
    location: 'Région lyonnaise & Île-de-France',
    badge: 'Entreprenariat',
    description: [
      'Mixage, sonorisation et animation lumineuse pour mariages et soirées privées.',
      'Gestion commerciale complète : prospection, réalisation de devis et facturation.',
      'Écoute client, adaptabilité continue face aux contraintes techniques et gestion des imprévus en direct.'
    ],
    tags: ['Gestion de projet', 'Événementiel', 'Relation Client', 'Sonorisation']
  },
  {
    period: '01/2024 – 03/2024',
    role: 'Stage ouvrier — Logistique & Technique',
    company: 'Eurosono',
    location: 'Lyon',
    badge: 'Stage ouvrier',
    description: [
      'Gestion et maintenance du matériel audiovisuel en entrepôt.',
      'Participation aux prestations de sonorisation d\'envergure sur site.'
    ],
    tags: ['Logistique', 'Rigueur', 'Technique']
  },
  {
    period: '01/2021 – 01/2022',
    role: 'Serveur en restauration',
    company: 'Le Tabagnon',
    location: 'Tassin-la-demi-lune',
    badge: 'Expérience',
    description: [
      'Service en salle et apprentissage des techniques de vente.',
      'Travail d\'équipe dans un environnement dynamique et exigeant.'
    ],
    tags: ['Relationnel', 'Service client', 'Rigueur']
  }
]

export const projects = [
  {
    title: 'Outil de gestion des absences',
    context: 'Projet de fin d’étude en entreprise (06/2026 – 12/2026)',
    organization: 'Rectorat de Créteil',
    description: 'Conception d’un outil web pour faciliter et accélérer considérablement le traitement des remplacements sur l’académie de Créteil, sous strictes contraintes techniques étatiques.',
    tags: ['Application Web', 'Secteur Public', 'Architecture', 'Gestion de flux'],
    linkText: 'Projet État',
    link: '#'
  },
  {
    title: 'Devil’s Contract — The Last Run',
    context: 'Projet de jeu vidéo (2 semaines, 02/2026)',
    organization: 'EPITA (Équipe de 4)',
    description: 'Jeu d’horreur et d’évasion à la première personne développé sous Unity 6. Face au Diable dans un cimetière infernal, le joueur doit explorer l’environnement pour trouver 2 clés mystiques et s’enfuir vers le Paradis, tout en échappant à une IA ennemie prédatrice (NavMesh, raycasting et jumpscares).',
    tags: ['Unity 6', 'C#', 'URP', 'IA NavMesh', 'Game Design', 'Audio 3D'],
    linkText: 'Voir sur GitHub',
    link: 'https://github.com/vicoescobar/unity-devil-contract'
  },
  {
    title: 'Volontari’app — Réseau Social Écologique',
    context: 'Projet libre communicant (03/2026 – 12/2026)',
    organization: 'Projet en équipe de 3',
    description: 'Réseau social sous forme d’application mobile permettant de créer et d’interagir autour d’évènements écologiques et d’initiatives citoyennes.',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Expo'],
    linkText: 'Voir sur GitHub',
    link: 'https://github.com/Volontariapp'
  },
  {
    title: 'Infrastructure & Déploiement Continu',
    context: 'Projet Personnel & Portfolio (2026)',
    organization: 'Victor Giroud',
    description: 'Ce portfolio Vue 3 déployé automatiquement sur VPS CloudPanel via GitHub Actions et SSH/rsync à chaque git push, avec routage Nginx SPA et certificat SSL.',
    tags: ['Vue 3', 'Vite', 'CloudPanel', 'GitHub Actions', 'rsync', 'Nginx'],
    linkText: 'Code GitHub',
    link: 'https://github.com/vicoescobar/victor-giroud-website'
  }
]

export const formations = [
  {
    year: '02/2026 – Actuel',
    degree: 'Majeure MTI (Multimédia et Technologies de l’Information)',
    school: 'EPITA — Campus de Paris',
    details: 'Cycle ingénieur 5ème année. Spécialisation en architectures web, technologies mobiles et multimédia.'
  },
  {
    year: '01/2025',
    degree: 'Certification TOEIC — 910 points',
    school: 'Niveau C1 (Anglais courant)',
    details: 'Score attestant d’une excellente maîtrise professionnelle et technique de la langue anglaise.'
  },
  {
    year: '03/2024 – 08/2024',
    degree: 'Semestre International d’Études',
    school: 'UTEC — Lima, Pérou',
    details: 'Immersion académique internationale anglophone et hispanophone.'
  },
  {
    year: '01/2022 – 03/2024',
    degree: 'Classe préparatoire intégrée',
    school: 'EPITA — Campus de Lyon',
    details: 'Fondamentaux des sciences informatiques, algorithmique avancée et mathématiques.'
  },
  {
    year: '2022',
    degree: 'Baccalauréat Général (Mention Assez-Bien)',
    school: 'Lycée Sainte-Marie — Lyon',
    details: 'Filière générale avec spécialités scientifiques.'
  }
]

export const skillGroups = [
  {
    category: 'Langages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C++', 'C', 'C#', 'PHP']
  },
  {
    category: 'Frameworks & Libs',
    skills: ['Vue.js', 'React Native', 'Node.js', 'Quarkus', 'Spring', 'AngularJS', '.NET', 'Expo']
  },
  {
    category: 'Outils & Systèmes',
    skills: ['Docker', 'Linux', 'Git & GitHub', 'PostgreSQL', 'MariaDB', 'Unity', 'CloudPanel', 'Nginx']
  },
  {
    category: 'Spécialités & IA',
    skills: ['Agents IA', 'Reconnaissance d’images', 'Fine-tuning', 'Microservices', 'PWA']
  }
]

export const softSkills = [
  'Curiosité technique',
  'Optimisme',
  'Gestion du stress',
  'Créativité',
  'Convivialité',
  'Esprit d’équipe'
]

export const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'Courant (TOEIC : 910)' },
  { name: 'Espagnol', level: 'Intermédiaire (Semestre au Pérou)' }
]

export const interests = [
  { label: 'Mixage & Musique (DJ)' },
  { label: 'Photographie & Drone' },
  { label: 'Musculation & Fitness' },
  { label: 'Escalade' },
  { label: 'Jeux vidéo' },
  { label: 'Informatique & Tech' }
]
