<template>
  <header class="header">
    <nuxt-link to="/" class="home">
      <img src="~/assets/images/hofmeister-logotype.png" alt="Hofmeister">
    </nuxt-link>
    <nav class="mobile-nav">
      <img src="~/assets/images/hamburger.png" alt="Menu">
    </nav>
    <nav class="desktop-nav">
      <nuxt-link to="/sessions">Sessions</nuxt-link>
      <nuxt-link to="/speakers">Speakers</nuxt-link>
      <a v-if="ticketLink" :href="ticketLink">Tickets</a>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'No title set'
    },
    ticketLink: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-properties.css';

.header {
  padding: 1.5rem;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: 999999;
}

@media screen and (min-width: 520px) {
  .header {
    max-width: var(--width-x-large);
  }
}

@media screen and (min-width: 520px) {
  .desktop-nav {
    display: flex;
    justify-content: flex-end;
  }
  .desktop-nav a {
    margin-left: 2rem;
  }
  .mobile-nav{
    display: none;
  }
}
.mobile-nav{
    display: block;
  }
.desktop-nav {
    display: none;
  }

.header a {
  display: block;
  color: inherit;
  text-decoration: inherit;
}

</style>
