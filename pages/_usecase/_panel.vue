<template>
  <div class="flex flex-col w-screen h-screen bg-gray-200 p-4 gap-2">
    <!-- Header -->
    <div class="flex gap-10 m-2 items-center">
      <NuxtLink :to="`/`">
        <img src="~/static/eucp_logo.png" alt="EUCP Logo">
      </NuxtLink>
      <h1 class="text-2xl">
        Storyboard: {{ title }}
      </h1>
    </div>

    <!-- Panels overview bar -->
    <div class="flex no-wrap text-left gap-2">
      <NuxtLink v-for="panel of usecase" :key="panel.path" :to="`${panel.path}`">
        <div class="flex-grow bg-white rounded text-lg p-3">
          {{ panel.headline }}
        </div>
      </NuxtLink>
    </div>

    <!-- Panel image and accompanying text -->
    <div class="flex gap-2 overflow-auto h-full">
      <div class="w-2/3 bg-white rounded">
        <img :src="panel.image" class="object-contain w-auto h-full max-w-full max-h-full mx-auto">
      </div>
      <div class="w-1/3 bg-white rounded overflow-auto">
        <nuxt-content :document="panel" class="text-lg p-3" />
      </div>
    </div>
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
    const title = index.usecases[params.usecase].name
    return {
      usecase,
      panel,
      params,
      title
    }
  },
  data () {
    return {
      error: false
    }
  }
}
</script>

<style>
.nuxt-content ul li {
  list-style-type: disc;
  list-style-position: inside;
}
.nuxt-content ol li {
  list-style-type: decimal;
  list-style-position: inside;
}
.nuxt-content p,ul,ol,h1,h2,h3 {
  margin-bottom: 20px;
}
.nuxt-content h1 {
  font-size: 2rem;
}
.nuxt-content h2 {
  font-size: 1.5rem;
}
.nuxt-content h3 {
  font-size: 1rem;
}
.nuxt-content h4 {
  font-size: .5rem;
}
.nuxt-content a {
  font-style: italic;
}

</style>
