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
        <div class="m-2 bg-white rounded">
          <img :src="card.image" class="object-contain w-40 h-30 mx-auto">
        </div>
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
