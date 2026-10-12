<script setup>
import profileImg from '../assets/profil_pic.jpg'
</script>

<template>
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
</template>

<style scoped>
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
</style>
