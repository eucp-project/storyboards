<template>
  <div class="flex overflow-auto p-4 shadow-xl">
    <!-- Usecase cards -->
    <div class="flex no-wrap text-left overflow-auto">
      <h4>
        {{ title }}
      </h4>
      <p class="text-left">
        {{ description }}
      </p>
    </div>
    <div class="container overflow-auto">
      <vueper-slides fractions progress>
        <vueper-slide
          v-for="card in panel"
          :key="card.id"
          :title="card.title"
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
  },
  mounted () {
  }
}
</script>
