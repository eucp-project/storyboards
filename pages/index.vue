<template>
  <div class="flex flex-col w-screen h-screen bg-gray-200 overflow-auto">
    <!-- Banner -->
    <div class="flex gap-10 m-2 items-center">
      <img src="~/static/eucp_logo.png" alt="EUCP Logo">
      <h1 class="text-2xl">
        Overview of EUCP Storyboards
      </h1>
    </div>

    <div class="flex flex-col m-2 gap-2">
      <!-- categories -->
      <div v-for="(category, key) in categories" :key="key" class="flex flex-wrap gap-4 mb-8">
        <h3 class="prose-xl w-full">
          {{ category }}
        </h3>
        <!-- stories -->
        <StoryCard
          v-for="(item, idx) in categorize(index.stories, category)"
          :key="item.id"
          :title="item.name"
          :description="item.description"
          :story="storyData[idx]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: {},
      storyData: {},
      categories: [],
      error: false
    }
  },
  async mounted () {
    const index = await this.$content('index').fetch()
    const stories = index.stories
    for (const story in stories) {
      this.storyData[story] = await this.$content(story).sortBy('slug', 'asc').fetch().catch(e => console.log(e))
      const category = stories[story].category
      if (!this.categories.includes(category)) {
        this.categories.push(category)
      }
    }
    this.index = index // why does it not work if we assign the result of fetch directly to this.index?
  },
  methods: {
    categorize (stories, category) {
      const items = {}
      for (const story in stories) {
        if (stories[story].category === category) {
          items[story] = stories[story]
        }
      }
      return items
    },
    parse_trl (trl) {
      if (trl === 'low') {
        return 'Technical readiness level: low; research still in exploratory phase'
      } else if (trl === 'medium') {
        return 'Technical readiness level: medium; advanced science / generalization beyond initial proof of concept'
      } else if (trl === 'high') {
        return 'Technical readiness level: high; applied science / (almost) ready for operational use'
      } else {
        return 'Miscellaneous'
      }
    }
  }
}
</script>
