<template>
  <NuxtLink :to="url">
    <!-- relative parent needed for absolute positioning of svg badges-->
    <div class="relative">
      <div class="flex flex-row bg-white shadow-xl max-w-xl rounded-lg h-48">
        <!-- story cards -->
        <div class="prose m-4">
          <h4>
            {{ title }}
          </h4>
          <p>
            {{ author }}
          </p>
        </div>
        <img :src="thumbnail" alt="storyboard preview" class="max-w-xs rounded-r-lg">
      </div>
    </div>
  </NuxtLink>
</template>

<script>

export default {
  props: ['title', 'author', 'thumbnail', 'url']
}
</script>
