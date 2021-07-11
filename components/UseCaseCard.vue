/* eslint-disable */
<template>
  <div class="flex p-4">
    <!-- Usecase cards -->
    <div class="flex no-wrap text-left">
      <h4>
        <NuxtLink :to="card.route">
        {{ card.title }}
        </NuxtLink>
      </h4>
      <div class="m-2 bg-white rounded">
        <NuxtLink :to="card.route">
        <img :src="card.image" class="object-contain w-40 h-30 mx-auto">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: null,
      required: false
    }
  }
}
</script>
