<template>
  <div class="flex flex-row overflow-auto p-4 shadow-xl">
    <!-- Usecase cards -->
    <div class="no-wrap text-left w-1/2">
      <NuxtLink v-if="usecase.length > 0" :to="usecase[0].path">
        <h4 class="text-2xl m-2">
          {{ title }}
        </h4>
        <p class="text-left m-2">
          {{ description }}
        </p>
      </NuxtLink>
    </div>
    <div class="container mx-auto w-1/2 m-3">
      <vueper-slides
        fractions
        progress
        fade
        :slide-ratio="1 / 1"
        slide-image-inside
        :arrows="false"
      >
        <vueper-slide
          v-for="card of usecase"
          :key="card.id"
        >
          <template #content>
            <NuxtLink :to="card.path">
              <img :src="card.image" class="object-contain w-auto h-full max-w-full max-h-full mx-auto">
            </NuxtLink>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: null,
      required: false
    },
    description: {
      type: String,
      default: null,
      required: false
    },
    usecase: {
      type: Array,
      default: () => [],
      required: false
    }
  }
}
</script>
