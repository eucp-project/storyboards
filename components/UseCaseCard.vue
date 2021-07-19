<template>
  <div class="flex flex-row overflow-auto p-4 shadow-xl">
    <!-- Usecase cards -->
    <div class="no-wrap text-left">
      <h4 class="text-2xl m-2">
        {{ title }}
      </h4>
      <p class="text-left m-2">
        {{ description }}
      </p>
    </div>
    <div class="container mx-auto w-1/2 m-3">
      <vueper-slides
        fractions
        progress
        fade
        :slide-ratio="1 / 1"
        fixed-height="300px"
        arrows-outside
        bullets-outside
        slide-image-inside
      >
        <vueper-slide
          v-for="card in panel"
          :key="card.id"
          :link="card.route"
          :image="card.image"
        />
      </vueper-slides>
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
    },
    title: {
      type: String,
      default: null,
      required: false
    },
    description: {
      type: String,
      default: null,
      required: false
    }
  }
}
</script>

<style>
.vueperslide__image {
  background-size: contain;
  background-repeat: no-repeat;
  height: 300px;
  width: auto;
}
.vueperslide__title {
  font-size: 1.5em;
  opacity: 0.75;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  padding: 12px;
}
</style>
