<template class="phantom">
  <NuxtLink v-if="usecase.length > 0" :to="usecase[0].path">
    <div class="flex flex-row bg-white shadow-xl max-w-xl rounded-lg h-48">
      <!-- Usecase cards -->
      <div class="prose m-4">
        <h4>
          {{ title }}
        </h4>
        <p>
          {{ description }}
        </p>
      </div>
      <img :src="usecase[0].image" alt="storyboard preview" class="max-w-xs rounded-r-lg">
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
