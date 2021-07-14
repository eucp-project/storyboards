<template>
  <div class="flex p-4 shadow-xl">
    <!-- Usecase cards -->
    <div
      v-for="card in panel"
      :key="card.id"
      class="flex no-wrap text-left"
    >
      <NuxtLink :to="card.route">
        <h4>
          {{ card.title }}
        </h4>
        <VueperSlides>
          <VueperSlide v-for="slide in panel" :key="slide.id" :img="slide.image" />
        </VueperSlides>
      </NuxtLink>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    panel: {
      type: Array,
      default: null,
      required: false
    }
  },
  mounted () {
  }
}
</script>
