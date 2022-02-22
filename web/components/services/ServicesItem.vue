<template>
    <div class="service-wrapper" >
      <SanityImage
          :image="service.image"
          :alt="service.image.alt"
          class="serviceImage"
        />
      <nuxt-link :to="{ path: `/services/${service._id}` }">
        <h3 class="serviceTitle">{{
          service.title || 'Undefined title'
        }}
        </h3>
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
  width: 300px;
  height: 450px;
  margin: auto;
}
.serviceImage{
  height: 100%;
  z-index: 0;
}
.serviceTitle{
  position: absolute;
  z-index: 8;
  text-decoration: none;
  color: antiquewhite;
}
</style>
