<template>
  <div class="flex flex-col w-screen h-screen bg-gray-200 p-2">
    <!-- Banner -->
    <div class="banner">
      <Banner />
    </div>

    <div class="flex overflow-auto">
      <!-- usecases -->
      <div class="m-2 rounded">
        <!-- category 1 -->
        <h3 class="flex no-wrap text-2xl">
          Category 1
        </h3>
        <div class="overflow-auto text-left shadow-xl">
          <UseCaseCard
            :key="usecases.example_usecase_id"
            :panel="usecases.example_usecase"
            :title="usecases.example_usecase_name"
            :description="usecases.example_usecase_description"
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
      usecases: {},
      error: false
    }
  },
  async mounted () {
    this.usecases = await this.$content('usecaseItems').fetch()
  }
}
</script>
