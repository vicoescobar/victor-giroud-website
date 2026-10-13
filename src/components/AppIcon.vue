<script setup>
import emailIcon from '../assets/email.svg'
import phoneIcon from '../assets/phone.svg'
import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'

const icons = {
  email: emailIcon,
  phone: phoneIcon,
  linkedin: linkedinIcon,
  github: githubIcon
}

defineProps({
  name: {
    type: String,
    required: true,
    validator: (val) => ['email', 'phone', 'linkedin', 'github'].includes(val)
  },
  alt: {
    type: String,
    default: ''
  },
  size: {
    type: [Number, String],
    default: 28
  }
})
</script>

<template>
  <img
    :src="icons[name]"
    :alt="alt || name"
    :width="size"
    :height="size"
    class="app-icon"
  />
</template>

<style scoped>
.app-icon {
  display: block;
  object-fit: contain;
}
</style>
