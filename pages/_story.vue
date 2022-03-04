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

    <!-- Chapter overview bar -->
    <div class="flex no-wrap text-left gap-2">
      <div v-for="(headline, idx) of headlines" :key="idx">
        <div role="button" @click="toggleChapter(idx)" class="flex-grow bg-white rounded p-3 prose">
          {{ headline }}
        </div>
      </div>
    </div>

    <!-- Chapter image and description -->
    <div v-for="(chapter, idx) in chapters" v-show="idx===currentChapter" :key="idx" class="flex gap-2 overflow-auto h-full">
      <div class="w-2/3 bg-white rounded">
        <img v-if="!chapter.props.image.endsWith('html')" :src="getContent(chapter.props.image)" class="object-contain w-auto h-full max-w-full max-h-full mx-auto">
        <iframe v-else :src="getContent(chapter.props.image)" frameborder="0" class="w-full h-full" />
      </div>
      <div class="prose px-4 pb-4 w-1/3 bg-white rounded overflow-auto">
        <nuxt-content :document="chapter" />
        <a role="button" :href="generateLink()" target="_blank" class="rounded bg-gray-200 prose">
          <svg class="h-7 float-left border-4 border-gray-200 bg-gray-200 rounded" viewBox="0 0 126 16">
            <path fill="#000000" d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z" />
            <text x="22" y="14">edit on GitHub</text>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const story = await $content(params.story).fetch()
    const chapters = story.body.children
      .filter(child => child.tag === 'chapter')
      .map((child) => {
        return { body: { children: child.children }, props: child.props }
      })
    const headlines = chapters.map(chapter => chapter.props.headline)
    return { params, story, headlines, chapters }
  },
  data () {
    return {
      error: false,
      currentChapter: 0
    }
  },
  methods: {
    getContent (path) {
      return `stories/_${this.params.story}/${path}`
    },
    toggleChapter (i) {
      this.currentChapter = i
    },
    generateLink () {
      return `https://github.com/eucp-project/storyboards/blob/main/static/stories/${this.story.slug}.md`
    }
  }
}
</script>
