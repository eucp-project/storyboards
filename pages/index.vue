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
        <h3 class="text-2xl">
          Category 1
        </h3>
        <div class="flex text-left shadow-xl">
          <UseCaseCard
            :key="usecases.example_usecase_id"
            :panel="usecases.example_usecase"
          />
        </div>
      </div>

      <!-- Tags -->
      <div class="m-2 rounded">
        <h3>
          Tags
        </h3>
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
