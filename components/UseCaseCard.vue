<template class="phantom">
  <NuxtLink v-if="usecase.length > 0" :to="usecase[0].path">
    <div class="flex flex-row p-2 shadow-xl max-w-xl">
      <!-- Usecase cards -->
      <div class="prose">
        <h4 class="m-2">
          {{ title }}
        </h4>
        <p class="m-2">
          {{ description }}
        </p>
      </div>
      <div>
        <div class="imagepile relative m-4">
          <img v-for="card of reversed(usecase)" :key="card.id" :src="card.image" alt="storyboard preview" class="image">
        </div>
      </div>
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

<style scoped>
.imagepile {
  width: 200px;
  height: 200px;
}
.image {
  position: absolute;
  height: 180px;
  width: 200px;
  top: 0;
  left: 0;
  border: 5px solid #fff;
  -moz-box-shadow: 0 2px 5px rgba(30, 30, 30, 0.25);
  -webkit-box-shadow: 0 2px 5px rgba(30, 30, 30, 0.25);
  box-shadow: 0 2px 5px rgba(30, 30, 30, 0.25);
  z-index: 2;
}

.image:first-child {
  position: relative;
  -moz-transform: rotate(8deg);
  -ms-transform: rotate(8deg);
  -webkit-transform: rotate(8deg);
  transform: rotate(8deg);
}

.image:nth-child(2) {
  -moz-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  -webkit-transform: rotate(2deg);
  transform: rotate(2deg);
}

.image:nth-child(3) {
  -moz-transform: rotate(-3deg);
  -ms-transform: rotate(-3deg);
  -webkit-transform: rotate(-3deg);
  transform: rotate(-3deg);
}

.image:nth-child(4) {
  -moz-transform: rotate(-10deg);
  -ms-transform: rotate(-10deg);
  -webkit-transform: rotate(-10deg);
  transform: rotate(-10deg);
}

.image:last-child {
  -moz-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  -webkit-transform: rotate(-5deg);
  transform: rotate(-5deg);
}
</style>
