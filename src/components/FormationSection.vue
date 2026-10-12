<script setup>
import { formations } from '../data/portfolioData.js'

defineProps({
  items: {
    type: Array,
    default: () => formations
  }
})
</script>

<template>
  <section id="formation" class="section">
    <div class="container">
      <div class="section-title-wrap">
        <span class="section-kicker">Études &amp; Diplômes</span>
        <h2 class="section-heading">Formation &amp; International</h2>
        <p class="section-subheading">Un cursus d'excellence en école d'ingénieurs complété par une ouverture internationale.</p>
      </div>

      <div class="formation-grid">
        <div v-for="(f, i) in items" :key="i" class="formation-card">
          <span class="formation-year">{{ f.year }}</span>
          <h3 class="formation-degree">{{ f.degree }}</h3>
          <h4 class="formation-school">{{ f.school }}</h4>
          <p class="formation-details">{{ f.details }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
</style>
