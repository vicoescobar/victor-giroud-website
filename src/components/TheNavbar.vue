<script setup>
import profileImg from '../assets/profil_pic.jpg'
</script>

<template>
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
</template>

<style scoped>
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
</style>
