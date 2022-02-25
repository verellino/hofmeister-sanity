<template>
  <div>
    <ul class="servicesList">
      <div class="carousel-wrapper">
        <VueSlickCarousel v-bind="slickOptions">
          <li class="service" v-for="service in services" :key="service.id">
            <ServicesItem
              :index="index"
              :service="service"
            />
          </li>
        </VueSlickCarousel>
      </div>
    </ul>
  </div>
</template>
<script>
import ServicesItem from '~/components/services/ServicesItem'

export default {
  props: {
    services: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ServicesItem
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding:	'20px',
        arrows: false
      }
    }
  }
}
</script>

<style scoped>
.service{
  position: relative;
  list-style: none;
}
.servicesList{
  padding: 0;
}
</style>
