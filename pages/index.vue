<template>
  <div class="flex flex-col w-screen h-screen bg-gray-200 p-2">
    <!-- Banner -->
    <div class="banner">
      <Banner />
    </div>

    <div class="flex flex-col overflow-auto w-screen h-screen p-2">
      <!-- usecases -->
      <div class="m-2 rounded">
        <!-- category 0 -->
        <h3 class="text-2xl p-2 m-2">
          {{ item0.category }}
        </h3>
        <div class="text-left w-1/3 shadow-xl bg-white m-2">
          <UseCaseCard
            :key="item0.usecase_id"
            :title="item0.usecase_name"
            :description="item0.usecase_description"
            :usecase="usecase0"
          />
        </div>
        <!-- category 1 -->
        <h3 class="text-2xl p-2 m-2">
          {{ item1.category }}
        </h3>
        <div class="text-left w-1/3 shadow-xl bg-white m-2">
          <UseCaseCard
            :key="item1.usecase_id"
            :title="item1.usecase_name"
            :description="item1.usecase_description"
            :usecase="usecase1"
          />
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
      item0: {},
      usecase0: [],
      item1: {},
      usecase1: [],
      error: false
    }
  },
  async mounted () {
    this.usecaseItems = await this.$content('index').fetch()
    this.item0 = this.usecaseItems.usecase_0
    this.usecase0 = await this.$content('usecase_0').sortBy('slug', 'asc').fetch()
    this.item1 = this.usecaseItems.usecase_1
    this.usecase1 = await this.$content('usecase_1').sortBy('slug', 'asc').fetch()
  }
}
</script>
