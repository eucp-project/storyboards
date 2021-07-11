<template>
  <div class="flex flex-col w-screen h-screen bg-gray-200 p-2">
    <!-- Banner -->
    <div class="banner">
      <Banner />
    </div>

    <div class="flex overflow-auto">
      <!-- usecases -->
      <div class="m-2 bg-white rounded">
        <!-- category 1 -->
        <h3 class="text-2xl">
          Category 1
        </h3>
        <div class="flex text-left">
          <UseCaseCard
            v-for="usecase in usecases.items"
            :key="usecase.id"
            :card="usecase"
          />
        </div>
        <!-- category 2 -->
        <h3 class="text-2xl">
          Category 2
        </h3>
      </div>

      <!-- Tags -->
      <div class="m-2 bg-white rounded">
        <h3>
          Tags
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
import UseCaseCard from '~/components/UseCaseCard.vue'
export default {
  components: { Banner, UseCaseCard },
  async mounted () {
    this.usecases = await this.$content('usecaseItems').fetch()
  },
  data () {
    return {
      usecases: {},
      error: false
    }
  }
}
</script>
