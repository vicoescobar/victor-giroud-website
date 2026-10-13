<script setup>
import { ref } from 'vue'
import { contactInfo } from '../data/portfolioData.js'
import AppIcon from './AppIcon.vue'

defineProps({
  email: {
    type: String,
    default: () => contactInfo.email
  },
  phone: {
    type: String,
    default: () => contactInfo.phone
  },
  linkedinUrl: {
    type: String,
    default: () => contactInfo.linkedinUrl
  },
  linkedinDisplay: {
    type: String,
    default: () => contactInfo.linkedinDisplay
  },
  githubUrl: {
    type: String,
    default: () => contactInfo.githubUrl
  },
  githubDisplay: {
    type: String,
    default: () => contactInfo.githubDisplay
  }
})

const isEmailCopied = ref(false)
const isPhoneCopied = ref(false)

const copyEmail = async (emailToCopy) => {
  try {
    await navigator.clipboard.writeText(emailToCopy)
    isEmailCopied.value = true
    setTimeout(() => { isEmailCopied.value = false }, 2500)
  } catch (e) {
    console.error(e)
  }
}

const copyPhone = async (phoneToCopy) => {
  try {
    await navigator.clipboard.writeText(phoneToCopy)
    isPhoneCopied.value = true
    setTimeout(() => { isPhoneCopied.value = false }, 2500)
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
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
            <span class="channel-icon">
              <AppIcon name="email" alt="Email" :size="28" />
            </span>
            <span class="channel-label">Email direct</span>
            <span class="channel-value">{{ email }}</span>
            <button class="channel-action-btn" @click="copyEmail(email)">
              {{ isEmailCopied ? '✓ Adresse copiée !' : 'Copier l\'email' }}
            </button>
          </div>

          <!-- Phone Card -->
          <div class="contact-channel-card">
            <span class="channel-icon">
              <AppIcon name="phone" alt="Téléphone" :size="28" />
            </span>
            <span class="channel-label">Téléphone</span>
            <span class="channel-value">{{ phone }}</span>
            <button class="channel-action-btn" @click="copyPhone(phone)">
              {{ isPhoneCopied ? '✓ Numéro copié !' : 'Copier le numéro' }}
            </button>
          </div>

          <!-- LinkedIn Card -->
          <div class="contact-channel-card">
            <span class="channel-icon">
              <AppIcon name="linkedin" alt="LinkedIn" :size="28" />
            </span>
            <span class="channel-label">LinkedIn</span>
            <span class="channel-value">{{ linkedinDisplay }}</span>
            <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer" class="channel-action-btn link-action">
              Ouvrir le profil ↗
            </a>
          </div>

          <!-- GitHub Card -->
          <div class="contact-channel-card">
            <span class="channel-icon">
              <AppIcon name="github" alt="GitHub" :size="28" />
            </span>
            <span class="channel-label">GitHub</span>
            <span class="channel-value">{{ githubDisplay }}</span>
            <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="channel-action-btn link-action">
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
</template>

<style scoped>
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
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 580px) {
  .contact-cards-row {
    grid-template-columns: repeat(2, 1fr);
  }
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
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
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
</style>
