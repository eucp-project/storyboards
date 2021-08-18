<template>
  <div class="flex flex-col w-screen h-screen bg-gray-200 p-2">
    <!-- Banner -->
    <div class="banner">
      <Banner />
    </div>

    <div class="flex flex-col overflow-auto w-screen h-screen p-2">
      <!-- usecases -->
      <div class="m-2 rounded">
        <div v-for="(item, index) in usecaseItems.usecases" :key="index">
          <h3 class="text-2xl p-2 m-2">
            {{ item.category }}
          </h3>
          <div class="text-left w-1/3 shadow-xl bg-white m-2">
            <UseCaseCard
              :key="item.id"
              :title="item.name"
              :description="item.description"
              :usecase="usecase_data"
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
      usecaseItems: {},
      usecase_data: [],
      error: false
    }
  },
  async mounted () {
    this.usecaseItems = await this.$content('index').fetch()
    this.usecase_data = await this.$content('usecase_1').sortBy('slug', 'asc').fetch()
  }
}
</script>
