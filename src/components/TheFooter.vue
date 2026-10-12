<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-content">
      <div>
        <p class="footer-title">Victor Giroud</p>
        <p class="footer-sub">Étudiant ingénieur • EPITA Promo 2027 (Majeure MTI)</p>
      </div>
      <div class="footer-right">
        <p class="footer-tech">Développé avec Vue 3 &amp; Vite • Déploiement VPS CloudPanel</p>
        <p class="footer-copy">© {{ currentYear }} Victor Giroud. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
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
