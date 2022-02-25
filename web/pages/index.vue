<template>
  <section class="container">
    <div
      class="hero"
      :style="{
        backgroundImage: `url(${info.image.asset.url})`
      }"
    >
      <div class="hero-content">
        <h1 class="title">{{ info.name }}</h1>
        <p class="subtitle">{{ info.description }}</p>
        
        <div class="hero-cta">
          <a href="#" class="main-cta">BOOK A CONSULTATION</a>
          <a href="#" class="secondary-cta">OUR SERVICES <img src="~/assets/images/right-arrow.svg" alt="our services" style="display: inline-block;margin-left:0.5rem;"></a>
        </div>
        
        <div class="partners">
          <p>Authorized Partners of:</p>
          <div class="partners-wrapper">
            <img src="~/assets/images/88coding.png" alt="88coding" class="partners-img">
            <img src="~/assets/images/mp.png" alt="mp" class="partners-img partners-full-h">
            <img src="~/assets/images/renytrix.png" alt="renytrix" class="partners-img">
            <img src="~/assets/images/REMUS.png" alt="REMUS" class="partners-img">
          </div>
        </div>
      </div>
    </div>

    <div class="homepage-section-container services-section">
        <h2>Our Services</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> 
    </div>
    <div class="px-32">
      <ServicesList :services="services" />
    </div>

    <div class="homepage-section-container black-bg text-center">
      <div class="px-64">
        <img src="~/assets/images/Ellipse-Blue.png" alt="Hofmeister Blue" class="px-32">
        <h2>Book a Consultation</h2>
        <p>Anda sedang bingung? Jadwalkan konsultasi dengan klinik Tong Fang sekarang juga. Buka 24 Jam 7 hari seminggu.</p>
        <a href="#" class="blue-cta">CHAT US NOW</a>
      </div>
    </div>
    <div class="homepage-section-container text-center">
      <div class="px-64">
        <h2>Our Clients</h2>
        <p>Anda sedang bingung? Jadwalkan konsultasi dengan klinik Tong Fang sekarang juga. Buka 24 Jam 7 hari seminggu.</p>
        <div class="image-grid">

        </div>
        <nuxt-link to="/about">WHO WE ARE</nuxt-link>
      </div>
    </div>
    <div class="homepage-section-container">
      <div class="px-64">
        <div class="2-column">
          <h2>The Workshop</h2>
          <p>Jl. Ring Road Utara No.08, Nanggulan, Maguwoharjo, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { dateFilter } from 'vue-date-fns'

import sanityClient from '../sanityClient'
import SessionList from '~/components/SessionList'
import ServicesList from '~/components/services/ServicesList'

const query = `
  {
    "info": *[_id == "eventInformation"] {
      ..., image { ..., asset->}
    }[0],
    "services": *[_type == "services"]
  } 
`

export default {
  components: {
    SessionList,
    ServicesList,
  },
  filters: {
    dateFilter
  },
  data() {
    return {
      program: this.$store.getters.getProgram
    }
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  head() {
    if (!this || !this.info) {
      return
    }
    return {
      title: this.info.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.info.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.info.keywords.join(',')
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-media.css';
@import '../styles/custom-properties.css';

.container {
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
}

.hero {
  width: 100%;
  height: 90vh;
  color: #E8E7E5;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.hero-content{
  position: absolute;
  bottom: 2rem;
  padding: 0 1.5rem;
}

.title{
  margin-top: 0;
  font-size: var(--font-title-size);
  line-height: var(--font-title-line-height);
}
.title + p + .dates {
  margin-bottom: 0;
}

.title + p {
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);
  margin-bottom: 2rem;
}

.hero-cta {
  display: flex;
  flex-direction: column;
}

.partners {
  margin-top: 2rem;
  }

.partners-wrapper {
  width: 100%;
  max-width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.partners-img {
  width: 25%;
}

.partners-full-h {
  width: 15%;
}

.sessionListTitle {
  text-align: center;
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
  margin: 0 0 3rem;

  @media (--media-min-medium) {
    font-size: var(--font-title1-size);
    line-height: var(--font-title1-line-height);
  }
}

.homepage-section-container {
  max-width: var(--width-small);
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  box-sizing: border-box;
}

.services-section {
  padding: 64px 1.5rem 0;
}

</style>
