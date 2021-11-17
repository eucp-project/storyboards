<template class="phantom">
  <NuxtLink v-if="usecase.length > 0" :to="usecase[0].path">
    <!-- relative parent needed for absolute positioning of svg -->
    <div class="relative">
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
      <!-- Add "in preparation badge" -->
      <svg v-if="(title==='Alpine flash floods')|(title==='Atlas of (un)constrained climate projections')|(title==='Attribution of a small scale, heavy flash flood event to climate change')" width="156" height="36" class="absolute right-2 top-1">
        <rect
          x="3"
          y="3"
          rx="10"
          ry="10"
          width="150"
          height="30"
          style="fill:salmon;stroke:black;stroke-width:2"
        />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">In preparation</text>
      </svg>
      <!-- Add "excluded from MUF" -->
      <svg v-if="title==='Multi-year prediction of drought and heat stress in the wheat sector'" width="176" height="36" class="absolute right-2 top-1">
        <rect
          x="3"
          y="3"
          rx="10"
          ry="10"
          width="170"
          height="30"
          style="fill:forestgreen;stroke:black;stroke-width:2"
        />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Not in MUF-workshop</text>
      </svg>
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
