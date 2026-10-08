<script setup>
import { ref } from 'vue'

const isCopied = ref(false)
const contactEmail = 'contact@victorgiroud.com'

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(contactEmail)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2500)
  } catch (e) {
    console.error(e)
  }
}

const projects = ref([
  {
    title: 'Site Personnel & Portfolio',
    description: 'Application Vue 3 ultra-rapide avec pipeline de déploiement continu automatisé sur VPS CloudPanel.',
    tags: ['Vue 3', 'Vite', 'CloudPanel', 'GitHub Actions', 'Nginx'],
    github: 'https://github.com/vicoescobar/victor-giroud-website',
    live: '#',
    status: 'En ligne'
  },
  {
    title: 'Plateforme Web / SaaS',
    description: 'Architecture moderne orientée performance, sécurité et expérience utilisateur fluide.',
    tags: ['TypeScript', 'API REST', 'Docker', 'PostgreSQL'],
    github: '#',
    live: '#',
    status: 'En développement'
  },
  {
    title: 'Infrastructure & Automatisation',
    description: 'Gestion de serveurs Linux, reverse-proxy SSL, CI/CD et déploiement zéro downtime.',
    tags: ['DevOps', 'VPS', 'CI/CD', 'Bash', 'SSL'],
    github: '#',
    live: '#',
    status: 'Opérationnel'
  }
])

const deploymentSteps = [
  {
    step: '01',
    title: 'Git Push',
    desc: 'Chaque commit poussé sur la branche main déclenche le pipeline GitHub Actions.'
  },
  {
    step: '02',
    title: 'Vite Build',
    desc: 'Compilation ultra-rapide du code Vue 3 et optimisation des assets statiques dans le runner.'
  },
  {
    step: '03',
    title: 'Synchronisation SSH',
    desc: 'Envoi sécurisé du dossier dist/ via rsync directement vers le répertoire CloudPanel du VPS.'
  },
  {
    step: '04',
    title: 'Mise en ligne Nginx',
    desc: 'Nginx sert instantanément la nouvelle version avec cache optimisé et routage SPA.'
  }
]
</script>

<template>
  <div class="app-wrapper">
    <!-- Navbar -->
    <header class="navbar">
      <div class="container nav-content">
        <a href="#" class="brand">
          <span class="brand-badge">VG</span>
          <span class="brand-name">Victor Giroud</span>
        </a>

        <nav class="nav-links">
          <a href="#projets" class="nav-link">Projets</a>
          <a href="#pipeline" class="nav-link">Déploiement</a>
          <a href="#contact" class="btn-sm">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container hero-container">
          <div class="status-pill">
            <span class="status-dot"></span>
            <span>Déployé automatiquement sur VPS CloudPanel</span>
          </div>

          <h1 class="hero-title">
            Développeur Web &amp; Créateur de solutions <span class="gradient-text">performantes</span>.
          </h1>

          <p class="hero-subtitle">
            Bienvenue sur mon espace en ligne. Ce site est développé en <strong>Vue 3</strong> avec <strong>Vite</strong> et synchronisé automatiquement via <strong>GitHub Actions</strong> et <strong>CloudPanel</strong>.
          </p>

          <div class="hero-actions">
            <a href="#projets" class="btn-primary">
              Explorer mes projets
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#pipeline" class="btn-secondary">
              Voir le flux CI/CD
            </a>
          </div>
        </div>
      </section>

      <!-- Pipeline CI/CD Architecture Section -->
      <section id="pipeline" class="pipeline-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Architecture &amp; Déploiement Continu</h2>
            <p class="section-desc">Comment ce site passe de votre machine locale à la production en quelques secondes.</p>
          </div>

          <div class="pipeline-grid">
            <div v-for="item in deploymentSteps" :key="item.step" class="pipeline-card">
              <span class="step-num">{{ item.step }}</span>
              <h3 class="step-title">{{ item.title }}</h3>
              <p class="step-desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projets" class="projects-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Projets Récents</h2>
            <p class="section-desc">Quelques réalisations et axes d'expertise technique.</p>
          </div>

          <div class="projects-grid">
            <article v-for="(project, index) in projects" :key="index" class="project-card">
              <div class="card-header">
                <span class="card-badge">{{ project.status }}</span>
                <span class="card-num">0{{ index + 1 }}</span>
              </div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>
              
              <div class="tag-list">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="contact-section">
        <div class="container contact-container">
          <div class="contact-card">
            <h2 class="contact-title">Prêt à collaborer ?</h2>
            <p class="contact-desc">
              Une question, une opportunité ou un projet à concrétiser ? N'hésitez pas à me contacter.
            </p>

            <div class="contact-action-wrapper">
              <button class="copy-email-btn" @click="copyEmail" :title="'Copier ' + contactEmail">
                <span class="email-text">{{ contactEmail }}</span>
                <span class="copy-indicator">
                  {{ isCopied ? '✓ Copié !' : 'Copier l\'adresse' }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-content">
        <p>© {{ new Date().getFullYear() }} Victor Giroud. Tous droits réservés.</p>
        <p class="footer-note">Vue 3 + Vite • Propulsé par CloudPanel</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(16px);
  background: rgba(10, 14, 23, 0.75);
  border-bottom: 1px solid var(--border-light);
  height: 72px;
  display: flex;
  align-items: center;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-badge {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: #fff;
  font-weight: 800;
  font-size: 0.85rem;
  padding: 0.35rem 0.65rem;
  border-radius: var(--radius-sm);
  letter-spacing: 0.05em;
}

.brand-name {
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.nav-link {
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--text-primary);
}

.btn-sm {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-light);
  color: var(--text-primary);
  padding: 0.45rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.btn-sm:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Hero */
.hero-section {
  padding: 6rem 0 4rem;
  text-align: center;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid var(--border-accent);
  padding: 0.4rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 500;
  color: #a5b4fc;
  margin-bottom: 2rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 10px #10b981;
}

.hero-title {
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  max-width: 800px;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, #818cf8 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 650px;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.hero-subtitle strong {
  color: var(--text-primary);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--accent-primary), #4f46e5);
  color: #fff;
  padding: 0.85rem 1.75rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: 0 4px 20px var(--accent-glow);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-light);
  color: var(--text-primary);
  padding: 0.85rem 1.75rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all var(--transition-fast);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.section-desc {
  color: var(--text-secondary);
  font-size: 1rem;
}

/* Pipeline Grid */
.pipeline-section {
  padding: 5rem 0;
  border-top: 1px solid var(--border-light);
}

.pipeline-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.pipeline-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  position: relative;
  transition: all var(--transition-smooth);
}

.pipeline-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-4px);
  background: var(--bg-card-hover);
}

.step-num {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent-secondary);
  font-weight: 600;
  display: inline-block;
  margin-bottom: 0.75rem;
}

.step-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.step-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Projects Grid */
.projects-section {
  padding: 5rem 0;
  border-top: 1px solid var(--border-light);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.75rem;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-smooth);
}

.project-card:hover {
  border-color: var(--border-accent);
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.card-badge {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(6, 182, 212, 0.1);
  color: #38bdf8;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
}

.card-num {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
}

.project-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.project-desc {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-light);
  color: #cbd5e1;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  padding: 0.25rem 0.55rem;
  border-radius: var(--radius-sm);
}

/* Contact */
.contact-section {
  padding: 5rem 0 6rem;
  border-top: 1px solid var(--border-light);
}

.contact-card {
  background: linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%);
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-lg);
  padding: 3.5rem 2rem;
  text-align: center;
  max-width: 680px;
  margin: 0 auto;
}

.contact-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.contact-desc {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 2rem;
}

.contact-action-wrapper {
  display: flex;
  justify-content: center;
}

.copy-email-btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--border-light);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-full);
  color: var(--text-primary);
  transition: all var(--transition-fast);
}

.copy-email-btn:hover {
  border-color: var(--accent-primary);
  background: rgba(30, 41, 59, 0.9);
}

.email-text {
  font-family: var(--font-mono);
  font-size: 0.95rem;
}

.copy-indicator {
  font-size: 0.8rem;
  font-weight: 600;
  color: #38bdf8;
  background: rgba(6, 182, 212, 0.12);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
}

/* Footer */
.footer {
  border-top: 1px solid var(--border-light);
  padding: 2rem 0;
  margin-top: auto;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

@media (min-width: 640px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
