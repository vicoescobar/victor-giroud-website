<script setup>
import { projects } from '../data/portfolioData.js'

defineProps({
  items: {
    type: Array,
    default: () => projects
  }
})
</script>

<template>
  <section id="projets" class="section section-alt">
    <div class="container">
      <div class="section-title-wrap">
        <span class="section-kicker">Réalisations</span>
        <h2 class="section-heading">Projets Marquants</h2>
        <p class="section-subheading">Applications concrètes, défis d'ingénierie et initiatives collaboratives.</p>
      </div>

      <div class="projects-grid">
        <article v-for="(project, i) in items" :key="i" class="project-box">
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
</template>

<style scoped>
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
</style>
