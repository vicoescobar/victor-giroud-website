<script setup>
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import ExperiencesSection from './components/ExperiencesSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import FormationSection from './components/FormationSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="site-wrapper">
    <TheNavbar />
    <main>
      <HeroSection />
      <ExperiencesSection />
      <ProjectsSection />
      <FormationSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
