<template>
  <div class="flex flex-col w-screen h-screen bg-gray-200 p-2">
    <!-- Banner -->
    <div class="banner">
      <Banner />
    </div>

    <div class="flex flex-col overflow-auto w-screen h-screen p-2">
      <!-- usecases -->
      <div class="m-2 rounded">
        <div v-for="(category,key) in categories" :key="key">
          <div class="w-screen">
            <h3 class="text-2xl p-2 m-2">
              {{ category }}
            </h3>
          </div>
          <div v-for="(item, idx) in index.usecases" :key="idx" class="text-left w-1/3 shadow-xl bg-white m-2">
            <UseCaseCard
              v-if="item.category === category"
              :key="item.id"
              :title="item.name"
              :description="item.description"
              :usecase="usecaseData[idx]"
            />
          </div>
        </div>
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
      this.usecaseData[usecase] = await this.$content(usecase).sortBy('slug', 'asc').fetch()
      const category = usecases[usecase].category
      if (!this.categories.includes(category)) {
        this.categories.push(category)
      }
    }

    this.index = index // why does it not work if we assign the result of fetch directly to this.index?
  }
}
</script>
