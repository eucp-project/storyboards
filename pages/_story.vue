<template>
  <div class="flex flex-col w-screen h-screen bg-gray-200 gap-2">
    <!-- Header -->
    <div class="flex gap-10 m-2 items-center">
      <NuxtLink :to="`/`">
        <img src="~/static/eucp_logo.png" alt="EUCP Logo">
      </NuxtLink>
      <h1 class="text-2xl">
        Storyboard: {{ story.title }}
      </h1>
    </div>

    <!-- Panels overview bar -->
    <div class="flex no-wrap text-left gap-2">
      <div v-for="headline of headlines" :key="headline">
        <div class="flex-grow bg-white rounded p-3 prose">
          {{ headline }}
        </div>
      </div>
    </div>

    <!-- Panel image and accompanying text -->
    <div class="flex gap-2 overflow-auto h-full">
      <div class="w-2/3 bg-white rounded">
        <!-- <img v-if="!panel.image.endsWith('html')" :src="this.getImage(panel.image)" class="object-contain w-auto h-full max-w-full max-h-full mx-auto">
        <iframe v-else :src="panel.image" frameborder="0" class="w-full h-full" /> -->
        <pre id="json">{{ JSON.stringify(story, undefined, 2) }}</pre>
      </div>
      <div class="w-1/3 bg-white rounded overflow-auto">
        <nuxt-content :document="story" class="prose m-4" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const story = await $content(params.story, params.story).fetch() // look for the file 'story.md' in each folder in 'stories'.
    const headlines = story.toc.map(entry => entry.text)
    return { story, headlines }
  },
  data () {
    return {
      error: false
    }
  },
  methods: {
    getImage (path) {
      return require(`~/content/${path}`)
    }
  }
}
</script>
