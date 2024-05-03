<script setup>
import ContactInfo from './cmp/ContactInfo.vue';
import MyProjects from './cmp/MyProjects.vue';
</script>

<template>
  <div class="bodyWrap">
    <div class="main">
      <ContactInfo />
      <MyProjects />
    </div>
    <div class="footer">
      Made with <img src="/logo.svg" /> Vue.js
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bodyWrap {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .main {
    max-width: 1280px;
    padding: 1rem;

    @media (max-width: 57rem) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .footer {
    text-align: center;
    background-color: var(--color-background-mute);
    padding: 0.1em 0.5em 0.2em;
    border-radius: 0.5em 0.5em 0 0;

    img {
      height: 0.6lh;
      vertical-align: middle;
    }
  }
</style>
