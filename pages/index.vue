<template>
  <div class="flex flex-col w-screen h-screen bg-gray-200 p-2">
    <!-- Banner -->
    <div class="banner">
      <Banner />
    </div>

    <!-- usecases -->
    <div class="flex no-wrap text-left">
      <UseCaseCard />
    </div>

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
  components: { Banner, UseCaseCard }
}
</script>
