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
      <div v-for="(trl, key) in categories" :key="key" class="flex flex-wrap gap-4 mb-8">
        <h3 class="prose-xl w-full">
          {{ parse_trl(trl) }}
        </h3>
        <!-- usecases -->
        <UseCaseCard
          v-for="(item, idx) in categorize(index.usecases, trl)"
          :key="item.id"
          :title="item.name"
          :description="item.description"
          :usecase="usecaseData[idx]"
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
      usecaseData: {},
      categories: [],
      error: false
    }
  },
  async mounted () {
    const index = await this.$content('index').fetch()
    const usecases = index.usecases
    for (const usecase in usecases) {
      this.usecaseData[usecase] = await this.$content(usecase).sortBy('slug', 'asc').fetch().catch(e => console.log(e))
      const trl = usecases[usecase].trl
      if (!this.categories.includes(trl)) {
        this.categories.push(trl)
      }
    }
    this.index = index // why does it not work if we assign the result of fetch directly to this.index?
  },
  methods: {
    categorize (usecases, trl) {
      const items = {}
      for (const usecase in usecases) {
        if (usecases[usecase].trl === trl) {
          items[usecase] = usecases[usecase]
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
