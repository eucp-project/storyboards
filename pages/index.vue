<template>
  <div class="flex flex-col w-screen h-screen bg-gray-200 p-2">
    <!-- Banner -->
    <div class="banner">
      <Banner />
    </div>

    <!-- usecases -->
    <h3 class="text-2xl">
      Category 1
    </h3>
    <div class="flex no-wrap text-left">
      <UseCaseCard
        v-for="usecase in usecases.items"
        :key="usecase.id"
        :card="usecase"
      />
    </div>

    <h3 class="text-2xl">
      Category 2
    </h3>

    <!-- example link -->
    <NuxtLink :to="`/usecase_0/panel_1`">
      Example use case
    </NuxtLink>
    <!-- Tags -->
    <div class="flex overflow-auto">
      <h3>
        Tags
      </h3>
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
