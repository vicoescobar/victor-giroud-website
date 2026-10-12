<script setup>
import { experiences } from '../data/portfolioData.js'

defineProps({
  items: {
    type: Array,
    default: () => experiences
  }
})
</script>

<template>
  <section id="experiences" class="section">
    <div class="container">
      <div class="section-title-wrap">
        <span class="section-kicker">Parcours &amp; Pratique</span>
        <h2 class="section-heading">Expériences Professionnelles</h2>
        <p class="section-subheading">Stages ingénieurs, projets opérationnels et compétences terrain.</p>
      </div>

      <div class="timeline">
        <article v-for="(exp, index) in items" :key="index" class="timeline-item">
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
</template>

<style scoped>
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
</style>
