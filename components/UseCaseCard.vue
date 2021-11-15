<template class="phantom">
  <NuxtLink v-if="usecase.length > 0" :to="usecase[0].path">
    <div class="p-4 shadow-xl max-w-lg min-h-full prose">
      <h4>
        {{ title }}
      </h4>
      <p class="italic">
        {{ description }}
      </p>
      <img :src="usecase[0].image" alt="storyboard preview" class="max-w-sm mx-auto">
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
  }
}
</script>
