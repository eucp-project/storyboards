<template>
  <div class="flex flex-col w-screen h-screen bg-gray-200 p-2">
    <!-- Banner -->
    <div class="banner">
      <Banner />
    </div>

    <div class="flex flex-col overflow-auto w-screen h-screen p-2">
      <!-- usecases -->
      <div class="m-2 rounded">
        <!-- category 1 -->
        <h3 class="text-2xl p-2 m-2">
          Category 1
        </h3>
        <div class="text-left w-1/3 shadow-xl bg-white m-2">
          <UseCaseCard
            :key="usecaseItems.example_usecase_id"
            :title="usecaseItems.example_usecase_name"
            :description="usecaseItems.example_usecase_description"
            :usecase="usecase0"
          />
        </div>
        <!-- category 2 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usecaseItems: {},
      usecase0: {},
      error: false
    }
  },
  async mounted () {
    this.usecaseItems = await this.$content('usecaseItems').fetch()
    this.usecase0 = await this.$content('usecase_0').sortBy('slug', 'asc').fetch()
  }
}
</script>
