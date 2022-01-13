<template class="phantom">
  <NuxtLink v-if="story.length > 0" :to="story[0].path">
    <!-- relative parent needed for absolute positioning of svg -->
    <div class="relative">
      <div class="flex flex-row bg-white shadow-xl max-w-xl rounded-lg h-48">
        <!-- story cards -->
        <div class="prose m-4">
          <h4>
            {{ title }}
          </h4>
          <p>
            {{ description }}
          </p>
        </div>
        <img :src="getImage(story[0].image)" alt="storyboard preview" class="max-w-xs rounded-r-lg">
      </div>
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
    story: {
      type: Array,
      default: () => [],
      required: false
    }
  },
  methods: {
    reversed (arr) {
      return arr.reverse()
    },
    getImage (path) {
      return require(`~/content/${path}`)
    }
  }
}
</script>
