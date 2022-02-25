<template>
    <div class="service-wrapper">
      <SanityImage
          :image="service.image"
          :alt="service.image.alt"
          class="serviceImage"
        />
      <nuxt-link :to="{ path: `/services/${service.slug.current}` }" class="bg-overlay">
        <h2 class="serviceTitle">{{
          service.title || 'Undefined title'
        }}
        </h2>
      </nuxt-link>
    </div>
</template>
<script>
import SanityImage from '~/components/SanityImage'
export default {
  components: {
    SanityImage
  },
  props: {
    service: {
      type: Object,
      default: () => {},
    },
  }
}
</script>

<style scoped>
.service-wrapper{
  width: 95%;
  height: 420px;
  overflow: hidden;
  margin: auto;
  position: relative;
}
.serviceImage{
  z-index: 0;
}
.bg-overlay{
  background: linear-gradient(32.62deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.serviceTitle{
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 8;
  text-decoration: none;
  color: white;
}
</style>
