<script setup>
import { ref } from 'vue'
import profileImg from './assets/profile.png'

const isEmailCopied = ref(false)
const isPhoneCopied = ref(false)

const email = 'victorgiroud4@gmail.com'
const phone = '07 67 55 36 10'

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    isEmailCopied.value = true
    setTimeout(() => { isEmailCopied.value = false }, 2500)
  } catch (e) {
    console.error(e)
  }
}

const copyPhone = async () => {
  try {
    await navigator.clipboard.writeText(phone)
    isPhoneCopied.value = true
    setTimeout(() => { isPhoneCopied.value = false }, 2500)
  } catch (e) {
    console.error(e)
  }
}

const activeSkillCategory = ref('all')

const experiences = [
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

const projects = [
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

const formations = [
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

const skillGroups = [
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

const softSkills = [
  'Curiosité technique',
  'Optimisme',
  'Gestion du stress',
  'Créativité',
  'Convivialité',
  'Esprit d’équipe'
]

const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'Courant (TOEIC : 910)' },
  { name: 'Espagnol', level: 'Intermédiaire (Semestre au Pérou)' }
]

const interests = [
  { label: 'Mixage & Musique (DJ)', icon: '🎧' },
  { label: 'Photographie & Drone', icon: '📸' },
  { label: 'Musculation & Fitness', icon: '💪' },
  { label: 'Escalade', icon: '🧗' },
  { label: 'Jeux vidéo', icon: '🎮' },
  { label: 'Informatique & Tech', icon: '💻' }
]
</script>

<template>
  <div class="site-wrapper">
    <!-- Navbar -->
    <header class="header">
      <div class="container nav-box">
        <a href="#" class="brand">
          <img :src="profileImg" alt="Victor Giroud" class="brand-avatar" />
          <div class="brand-info">
            <span class="brand-name">Victor Giroud</span>
            <span class="brand-tag">EPITA • Majeure MTI</span>
          </div>
        </a>

        <nav class="nav-links">
          <a href="#about" class="nav-link">À propos</a>
          <a href="#experiences" class="nav-link">Expériences</a>
          <a href="#projets" class="nav-link">Projets</a>
          <a href="#formation" class="nav-link">Formation</a>
          <a href="#competences" class="nav-link">Compétences</a>
        </nav>

        <div class="nav-actions">
          <a href="/Victor_Giroud_CV.pdf" target="_blank" class="btn-cv-nav" download="Victor_Giroud_CV.pdf">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            CV (PDF)
          </a>
          <a href="#contact" class="btn-contact-nav">Contact</a>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section id="about" class="hero-section">
        <div class="container hero-grid">
          <div class="hero-text">
            <div class="badge-available">
              <span class="pulse-dot"></span>
              <span>Recherche de stage de fin d’études • 5 à 6 mois (Dès Fév. 2027)</span>
            </div>

            <h1 class="hero-title">
              Étudiant ingénieur &amp; Développeur <span class="gradient-text">Full-Stack</span>.
            </h1>

            <p class="hero-bio">
              Actuellement en <strong>5ème année à l'EPITA</strong> (Majeure MTI - Multimédia et Technologies de l’Information), je conçois des applications web et mobiles robustes. Passionné par l’ingénierie logicielle, les architectures microservices et l'intégration d'agents d'intelligence artificielle.
            </p>

            <!-- Quick infos pills -->
            <div class="meta-pills">
              <span class="meta-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Paris 10e
              </span>
              <span class="meta-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                EPITA Majeure MTI
              </span>
              <span class="meta-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                22 ans • Permis B
              </span>
              <span class="meta-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                TOEIC : 910 pts
              </span>
            </div>

            <!-- Action buttons -->
            <div class="hero-actions">
              <a href="/Victor_Giroud_CV.pdf" target="_blank" download="Victor_Giroud_CV.pdf" class="btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Télécharger mon CV (PDF)
              </a>
              <a href="https://www.linkedin.com/in/victor-giroud-paris" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z"/></svg>
                Profil LinkedIn
              </a>
              <a href="#projets" class="btn-secondary">Voir les projets</a>
            </div>
          </div>

          <!-- Hero Profile Card -->
          <div class="hero-card-wrapper">
            <div class="profile-card">
              <div class="profile-img-container">
                <img :src="profileImg" alt="Victor Giroud" class="profile-photo" />
                <span class="profile-active-tag">En recherche</span>
              </div>
              <h2 class="profile-name">Victor Giroud</h2>
              <p class="profile-role">Ingénieur Développeur Full-Stack</p>

              <div class="profile-details-list">
                <div class="profile-detail-item">
                  <span class="detail-label">Disponibilité</span>
                  <span class="detail-value highlight-value">Février 2027</span>
                </div>
                <div class="profile-detail-item">
                  <span class="detail-label">Durée stage</span>
                  <span class="detail-value">5 à 6 mois</span>
                </div>
                <div class="profile-detail-item">
                  <span class="detail-label">Localisation</span>
                  <span class="detail-value">Paris &amp; Île-de-France</span>
                </div>
                <div class="profile-detail-item">
                  <span class="detail-label">École</span>
                  <span class="detail-value">EPITA Paris (Bac+5)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Expériences Professionnelles -->
      <section id="experiences" class="section">
        <div class="container">
          <div class="section-title-wrap">
            <span class="section-kicker">Parcours &amp; Pratique</span>
            <h2 class="section-heading">Expériences Professionnelles</h2>
            <p class="section-subheading">Stages ingénieurs, projets opérationnels et compétences terrain.</p>
          </div>

          <div class="timeline">
            <article v-for="(exp, index) in experiences" :key="index" class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="experience-card">
                <div class="exp-header">
                  <div>
                    <span class="exp-badge">{{ exp.badge }}</span>
                    <h3 class="exp-role">{{ exp.role }}</h3>
                    <p class="exp-company">
                      <strong>{{ exp.company }}</strong> • {{ exp.location }}
                    </p>
                  </div>
                  <span class="exp-period">{{ exp.period }}</span>
                </div>

                <ul class="exp-bullets">
                  <li v-for="(point, i) in exp.description" :key="i">{{ point }}</li>
                </ul>

                <div class="tag-row">
                  <span v-for="tag in exp.tags" :key="tag" class="tech-tag">{{ tag }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Projets Réalisés -->
      <section id="projets" class="section section-alt">
        <div class="container">
          <div class="section-title-wrap">
            <span class="section-kicker">Réalisations</span>
            <h2 class="section-heading">Projets Marquants</h2>
            <p class="section-subheading">Applications concrètes, défis d'ingénierie et initiatives collaboratives.</p>
          </div>

          <div class="projects-grid">
            <article v-for="(project, i) in projects" :key="i" class="project-box">
              <div class="project-top">
                <span class="project-context">{{ project.context }}</span>
                <span class="project-org">{{ project.organization }}</span>
              </div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>

              <div class="tag-row">
                <span v-for="tag in project.tags" :key="tag" class="tech-tag">{{ tag }}</span>
              </div>

              <div class="project-footer">
                <a v-if="project.link !== '#'" :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">
                  <span>{{ project.linkText }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
                <span v-else class="project-link-disabled">{{ project.linkText }}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Formation & International -->
      <section id="formation" class="section">
        <div class="container">
          <div class="section-title-wrap">
            <span class="section-kicker">Études &amp; Diplômes</span>
            <h2 class="section-heading">Formation &amp; International</h2>
            <p class="section-subheading">Un cursus d'excellence en école d'ingénieurs complété par une ouverture internationale.</p>
          </div>

          <div class="formation-grid">
            <div v-for="(f, i) in formations" :key="i" class="formation-card">
              <span class="formation-year">{{ f.year }}</span>
              <h3 class="formation-degree">{{ f.degree }}</h3>
              <h4 class="formation-school">{{ f.school }}</h4>
              <p class="formation-details">{{ f.details }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Compétences, Langues & Intérêts -->
      <section id="competences" class="section section-alt">
        <div class="container">
          <div class="section-title-wrap">
            <span class="section-kicker">Savoir-faire</span>
            <h2 class="section-heading">Compétences &amp; Domaines d'Expertise</h2>
            <p class="section-subheading">Technologies maîtrisées, soft skills et centres d'intérêt.</p>
          </div>

          <!-- Grille compétences techniques -->
          <div class="skills-grid">
            <div v-for="group in skillGroups" :key="group.category" class="skill-category-card">
              <h3 class="skill-cat-title">{{ group.category }}</h3>
              <div class="skill-pill-list">
                <span v-for="skill in group.skills" :key="skill" class="skill-pill">{{ skill }}</span>
              </div>
            </div>
          </div>

          <!-- Bottom row: Soft skills, Langues, Intérêts -->
          <div class="extra-grid">
            <!-- Soft Skills -->
            <div class="extra-card">
              <h3 class="extra-card-title">Soft Skills</h3>
              <ul class="soft-skills-list">
                <li v-for="soft in softSkills" :key="soft" class="soft-skill-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>{{ soft }}</span>
                </li>
              </ul>
            </div>

            <!-- Langues -->
            <div class="extra-card">
              <h3 class="extra-card-title">Langues</h3>
              <div class="languages-list">
                <div v-for="lang in languages" :key="lang.name" class="lang-item">
                  <span class="lang-name">{{ lang.name }}</span>
                  <span class="lang-level">{{ lang.level }}</span>
                </div>
              </div>
            </div>

            <!-- Centres d'intérêt -->
            <div class="extra-card">
              <h3 class="extra-card-title">Centres d’intérêt</h3>
              <div class="interests-tags">
                <span v-for="interest in interests" :key="interest.label" class="interest-badge">
                  <span class="interest-icon">{{ interest.icon }}</span>
                  {{ interest.label }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="section contact-section">
        <div class="container">
          <div class="contact-box">
            <span class="section-kicker">Opportunité de Stage</span>
            <h2 class="contact-heading">Discutons de vos besoins</h2>
            <p class="contact-lead">
              À la recherche d'un stage de fin d'études de <strong>5 à 6 mois</strong> à partir de <strong>février 2027</strong>.
              N'hésitez pas à me contacter par email ou par téléphone pour échanger sur une opportunité.
            </p>

            <div class="contact-cards-row">
              <!-- Email Card -->
              <div class="contact-channel-card">
                <span class="channel-icon">✉️</span>
                <span class="channel-label">Email direct</span>
                <span class="channel-value">{{ email }}</span>
                <button class="channel-action-btn" @click="copyEmail">
                  {{ isEmailCopied ? '✓ Adresse copiée !' : 'Copier l\'email' }}
                </button>
              </div>

              <!-- Phone Card -->
              <div class="contact-channel-card">
                <span class="channel-icon">📱</span>
                <span class="channel-label">Téléphone</span>
                <span class="channel-value">{{ phone }}</span>
                <button class="channel-action-btn" @click="copyPhone">
                  {{ isPhoneCopied ? '✓ Numéro copié !' : 'Copier le numéro' }}
                </button>
              </div>

              <!-- LinkedIn Card -->
              <div class="contact-channel-card">
                <span class="channel-icon">💼</span>
                <span class="channel-label">LinkedIn</span>
                <span class="channel-value">victor-giroud-paris</span>
                <a href="https://www.linkedin.com/in/victor-giroud-paris" target="_blank" rel="noopener noreferrer" class="channel-action-btn link-action">
                  Ouvrir le profil ↗
                </a>
              </div>
            </div>

            <div class="cv-download-cta">
              <a href="/Victor_Giroud_CV.pdf" target="_blank" download="Victor_Giroud_CV.pdf" class="btn-primary-large">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Télécharger mon CV complet (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-content">
        <div>
          <p class="footer-title">Victor Giroud</p>
          <p class="footer-sub">Étudiant ingénieur • EPITA Promo 2027 (Majeure MTI)</p>
        </div>
        <div class="footer-right">
          <p class="footer-tech">Développé avec Vue 3 &amp; Vite • Déploiement VPS CloudPanel</p>
          <p class="footer-copy">© {{ new Date().getFullYear() }} Victor Giroud. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header & Nav */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-light);
  height: 74px;
  display: flex;
  align-items: center;
}

.nav-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.brand-avatar {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  object-fit: cover;
  border: 2px solid var(--accent-subtle);
  box-shadow: var(--shadow-xs);
}

.brand-info {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--text-primary);
  line-height: 1.2;
}

.brand-tag {
  font-size: 0.775rem;
  color: var(--text-muted);
  font-weight: 500;
}

.nav-links {
  display: none;
  gap: 1.75rem;
  align-items: center;
}

@media (min-width: 860px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  font-size: 0.925rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--accent-primary);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-cv-nav {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--bg-card);
  border: 1px solid var(--border-light);
  color: var(--text-primary);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-xs);
  transition: all var(--transition-fast);
}

.btn-cv-nav:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  background-color: var(--accent-subtle);
}

.btn-contact-nav {
  background-color: var(--text-primary);
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.45rem 1rem;
  border-radius: var(--radius-full);
  transition: background-color var(--transition-fast);
}

.btn-contact-nav:hover {
  background-color: var(--accent-primary);
}

/* Hero Section */
.hero-section {
  padding: 4.5rem 0 4rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 960px) {
  .hero-grid {
    grid-template-columns: 1.25fr 0.75fr;
  }
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.hero-title {
  font-size: clamp(2.2rem, 4.5vw, 3.4rem);
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: -0.03em;
  color: var(--text-primary);
}

.hero-bio {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.meta-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.meta-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: #ffffff;
  border: 1px solid var(--border-light);
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-full);
  font-size: 0.825rem;
  font-weight: 500;
  color: var(--text-secondary);
  box-shadow: var(--shadow-xs);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 0.75rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background-color: var(--accent-primary);
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.8rem 1.6rem;
  border-radius: var(--radius-full);
  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.28);
  transition: all var(--transition-fast);
}

.btn-primary:hover {
  background-color: var(--accent-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.35);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background-color: #ffffff;
  border: 1px solid var(--border-light);
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.8rem 1.4rem;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-xs);
  transition: all var(--transition-fast);
}

.btn-secondary:hover {
  border-color: var(--border-hover);
  background-color: var(--bg-secondary);
  transform: translateY(-1px);
}

/* Hero Profile Card */
.hero-card-wrapper {
  display: flex;
  justify-content: center;
}

.profile-card {
  width: 100%;
  max-width: 360px;
  background-color: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 2.25rem 2rem;
  box-shadow: var(--shadow-lg);
  text-align: center;
  position: relative;
}

.profile-img-container {
  position: relative;
  width: 130px;
  height: 130px;
  margin: 0 auto 1.25rem;
}

.profile-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.profile-active-tag {
  position: absolute;
  bottom: 0;
  right: -5px;
  background-color: var(--accent-emerald);
  color: #ffffff;
  font-size: 0.725rem;
  font-weight: 700;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  box-shadow: 0 2px 6px rgba(5, 150, 105, 0.4);
}

.profile-name {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.profile-role {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.profile-details-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-top: 1px solid var(--border-light);
  padding-top: 1.25rem;
  text-align: left;
}

.profile-detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}

.detail-label {
  color: var(--text-muted);
  font-weight: 500;
}

.detail-value {
  color: var(--text-primary);
  font-weight: 600;
}

.highlight-value {
  color: var(--accent-primary);
  font-weight: 700;
}

/* Sections communes */
.section {
  padding: 5rem 0;
}

.section-alt {
  background-color: #f8fafc;
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
}

.section-title-wrap {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3.5rem;
}

.section-kicker {
  display: inline-block;
  font-size: 0.825rem;
  font-weight: 700;
  color: var(--accent-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}

.section-heading {
  font-size: 2.15rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}

.section-subheading {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* Timeline Expériences */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  max-width: 860px;
  margin: 0 auto;
}

.experience-card {
  background-color: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-smooth);
}

.experience-card:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.exp-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

@media (min-width: 640px) {
  .exp-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.exp-badge {
  display: inline-block;
  background-color: var(--accent-subtle);
  color: var(--accent-primary);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  margin-bottom: 0.5rem;
}

.exp-role {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.2rem;
}

.exp-company {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.exp-period {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-primary);
  background-color: var(--bg-secondary);
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-light);
  white-space: nowrap;
  align-self: flex-start;
}

.exp-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.exp-bullets li {
  position: relative;
  padding-left: 1.5rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.exp-bullets li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent-primary);
  font-weight: 700;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: var(--bg-tag);
  border: 1px solid var(--border-light);
  color: #475569;
  font-size: 0.775rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-xs);
}

/* Projets Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.75rem;
}

.project-box {
  background-color: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-smooth);
}

.project-box:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.775rem;
  margin-bottom: 1rem;
}

.project-context {
  font-weight: 700;
  color: var(--accent-primary);
  background-color: var(--accent-subtle);
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-full);
}

.project-org {
  color: var(--text-muted);
  font-weight: 500;
}

.project-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project-footer {
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-light);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--accent-primary);
  font-weight: 600;
  font-size: 0.875rem;
  transition: gap var(--transition-fast);
}

.project-link:hover {
  gap: 0.65rem;
}

.project-link-disabled {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* Formation Grid */
.formation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.formation-card {
  background-color: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  box-shadow: var(--shadow-xs);
  transition: all var(--transition-fast);
}

.formation-card:hover {
  border-color: var(--border-accent);
  box-shadow: var(--shadow-md);
}

.formation-year {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent-primary);
  background-color: var(--accent-subtle);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-xs);
  display: inline-block;
  margin-bottom: 0.75rem;
}

.formation-degree {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.35rem;
}

.formation-school {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.formation-details {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.skill-category-card {
  background-color: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  box-shadow: var(--shadow-xs);
}

.skill-cat-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--accent-subtle);
}

.skill-pill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-pill {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-light);
  color: var(--text-primary);
  font-size: 0.825rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.skill-pill:hover {
  background-color: var(--accent-subtle);
  border-color: var(--border-accent);
  color: var(--accent-primary);
}

/* Extra Grid (Soft skills, Langues, Intérêts) */
.extra-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.extra-card {
  background-color: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  box-shadow: var(--shadow-xs);
}

.extra-card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
}

.soft-skills-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.soft-skill-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.925rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.languages-list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.lang-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-light);
}

.lang-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.lang-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-primary);
}

.lang-level {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.interests-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.interest-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-light);
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius-full);
  font-size: 0.825rem;
  font-weight: 500;
  color: var(--text-secondary);
}

/* Contact Section */
.contact-section {
  padding: 5rem 0 6rem;
}

.contact-box {
  background-color: #ffffff;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 3.5rem 2rem;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: var(--shadow-lg);
}

.contact-heading {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.contact-lead {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 650px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
}

.contact-cards-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.contact-channel-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  transition: all var(--transition-fast);
}

.contact-channel-card:hover {
  background-color: #ffffff;
  border-color: var(--border-accent);
  box-shadow: var(--shadow-md);
}

.channel-icon {
  font-size: 1.75rem;
  margin-bottom: 0.25rem;
}

.channel-label {
  font-size: 0.775rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

.channel-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-family: var(--font-mono);
}

.channel-action-btn {
  background-color: #ffffff;
  border: 1px solid var(--border-light);
  color: var(--accent-primary);
  font-weight: 600;
  font-size: 0.825rem;
  padding: 0.4rem 1rem;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-xs);
  transition: all var(--transition-fast);
}

.channel-action-btn:hover {
  background-color: var(--accent-primary);
  color: #ffffff;
}

.link-action {
  text-decoration: none;
}

.cv-download-cta {
  display: flex;
  justify-content: center;
}

.btn-primary-large {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background-color: var(--accent-primary);
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 700;
  padding: 0.95rem 2.2rem;
  border-radius: var(--radius-full);
  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.3);
  transition: all var(--transition-fast);
}

.btn-primary-large:hover {
  background-color: var(--accent-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.4);
}

/* Footer */
.footer {
  background-color: #ffffff;
  border-top: 1px solid var(--border-light);
  padding: 2.5rem 0;
  margin-top: auto;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  text-align: center;
}

@media (min-width: 640px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer-title {
  font-weight: 700;
  font-size: 1rem;
  color: var(--text-primary);
}

.footer-sub {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-tech {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.footer-copy {
  font-size: 0.8rem;
  color: var(--text-muted);
}
</style>
