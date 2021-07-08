<template>
  <div class="flex p-4">
    <h4 class="text-2xl">
      Category 1
    </h4>
    <!-- Panels overview bar -->
    <!-- <div class="flex no-wrap text-left">
      <div v-for="panel of usecase" :key="panel.path">
        {{ panel.headline }}
      </div>
      <div class="m-2 bg-white rounded">
        <img :src="panel.image" class="object-contain w-auto h-full max-w-full max-h-full mx-auto">
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const usecase = await $content(params.usecase)
      .sortBy('slug', 'asc')
      .fetch()
    const panel = await $content(params.usecase, params.panel)
      .fetch()
    const index = await $content('index').fetch()
    const title = index[params.usecase]
    return {
      usecase,
      panel,
      params,
      title
    }
  },
  async mounted () {
    this.menu = await this.$content('index.yaml').fetch()
  },
  data () {
    return {
      error: false
    }
  }
}
</script>

<style>
</style>
