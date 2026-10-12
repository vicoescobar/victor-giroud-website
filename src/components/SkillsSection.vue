<script setup>
import { skillGroups, softSkills, languages, interests } from '../data/portfolioData.js'

defineProps({
  skills: {
    type: Array,
    default: () => skillGroups
  },
  softSkillsList: {
    type: Array,
    default: () => softSkills
  },
  languagesList: {
    type: Array,
    default: () => languages
  },
  interestsList: {
    type: Array,
    default: () => interests
  }
})
</script>

<template>
  <section id="competences" class="section section-alt">
    <div class="container">
      <div class="section-title-wrap">
        <span class="section-kicker">Savoir-faire</span>
        <h2 class="section-heading">Compétences &amp; Domaines d'Expertise</h2>
        <p class="section-subheading">Technologies maîtrisées, soft skills et centres d'intérêt.</p>
      </div>

      <!-- Grille compétences techniques -->
      <div class="skills-grid">
        <div v-for="group in skills" :key="group.category" class="skill-category-card">
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
            <li v-for="soft in softSkillsList" :key="soft" class="soft-skill-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span>{{ soft }}</span>
            </li>
          </ul>
        </div>

        <!-- Langues -->
        <div class="extra-card">
          <h3 class="extra-card-title">Langues</h3>
          <div class="languages-list">
            <div v-for="lang in languagesList" :key="lang.name" class="lang-item">
              <span class="lang-name">{{ lang.name }}</span>
              <span class="lang-level">{{ lang.level }}</span>
            </div>
          </div>
        </div>

        <!-- Centres d'intérêt -->
        <div class="extra-card">
          <h3 class="extra-card-title">Centres d’intérêt</h3>
          <div class="interests-tags">
            <span v-for="interest in interestsList" :key="interest.label" class="interest-badge">
              {{ interest.label }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
</style>
