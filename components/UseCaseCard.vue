<template class="phantom">
  <NuxtLink v-if="usecase.length > 0" :to="usecase[0].path">
    <div class="flex flex-row p-2 shadow-xl max-w-xl min-h-full">
      <!-- Usecase cards -->
      <div class="prose">
        <h4 class="m-2">
          {{ title }}
        </h4>
        <p class="m-2">
          {{ description }}
        </p>
      </div>
      <img :src="usecase[0].image" alt="storyboard preview" class="max-w-sm">
    </div>
  </NuxtLink>
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
  },
  methods: {
    reversed (arr) {
      return arr.reverse()
    }
  }
}
</script>
