<template>
  <footer class="footer black-bg">
    <h2><img src="~/assets/images/HOFLogomark.png" alt="Hofmeister Logo" class="hof-logomark"></h2>
    <p>Hofmeister is an independent forward-thinking practice for auto repair based in Yogyakarta, Indonesia offering world-class parts and service.</p>
    <nav class="footer-links">
      <nuxt-link to="/">About</nuxt-link>
      <nuxt-link to="/sessions">Blogs</nuxt-link>
      <nuxt-link to="/speakers">Services</nuxt-link>
    </nav>
    <div class="power">
      <nuxt-link to="/code-of-conduct">Contact</nuxt-link>
       | 
      <nuxt-link to="/code-of-conduct">Privacy Policy</nuxt-link>
      <div>
        ©  {{ year }} Hofmeister. All rights reserved.
      </div>
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
  padding: 3rem 1.5rem 3rem 1.5rem;
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
}

.footer p {
  font-size: 1rem;
  padding-right: 4.5rem;
  font-style: italic;
  line-height: 120%;
}

.footer a {
  color: inherit;
  text-decoration: inherit;
  padding: 0.5em 0;
}

.footer-links{
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 18px;
}

.hof-logomark {
  width: 45px;
}

address.venue {
  margin: 3em 1.5em 1.5em;
  font-style: inherit;
}

.power {
  margin-top: 2rem;
  text-align: center;
}
.power a {
  display: inline;
  padding: 0;
  text-decoration: underline;
}
</style>
