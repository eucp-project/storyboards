/* eslint-disable */
<template>
  <div class="flex p-4">
    <!-- Usecase cards -->
    <div class="flex no-wrap text-left">
      <h4>
        {{ card.title }}
      </h4>
      <div class="m-2 bg-white rounded">
        <img :src="card.image" class="rounded object-cover w-36 h-24 mx-auto">
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
