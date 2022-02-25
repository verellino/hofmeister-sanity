<template>
  <footer class="footer black-bg">
    <h2><img src="~/assets/images/HOFLogomark.png" alt="Hofmeister Logo"></h2>
    <nav class="footer-links">
      <nuxt-link to="/">About</nuxt-link>
      <nuxt-link to="/sessions">Blogs</nuxt-link>
      <nuxt-link to="/speakers">Services</nuxt-link>
      <nuxt-link to="/code-of-conduct">Contact</nuxt-link>
      <nuxt-link to="/code-of-conduct">Privacy Policy</nuxt-link>
    </nav>
    <div class="power">
      ©  {{ year }} Hofmeister. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'No title set'
    }
  },
  data: data => {
    if (!data.$store.state) {
      return
    }
    return {
      year: new Date().getFullYear(),
      eventInformation: data.$store.state.eventInformation
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-properties.css';

.footer {
  padding: 1.5rem;
  text-align: center;
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
}

.footer a {
  color: inherit;
  text-decoration: inherit;
  padding: 0.5em;
}

.footer-links{
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 18px;
}

address.venue {
  margin: 3em 1.5em 1.5em;
  font-style: inherit;
}

.power a {
  display: inline;
  padding: 0;
  text-decoration: underline;
}
</style>
