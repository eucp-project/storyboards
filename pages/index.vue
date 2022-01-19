<template>
  <div class="flex flex-col w-screen h-screen bg-gray-200 overflow-auto">
    <!-- Banner -->
    <div class="flex gap-10 m-2 items-center">
      <img src="~/static/eucp_logo.png" alt="EUCP Logo">
      <h1 class="text-2xl">
        Overview of EUCP Storyboards
      </h1>
    </div>

    <div class="flex flex-col m-2 gap-2">
      <!-- categories -->
      <div v-for="(category, key) in categories" :key="key" class="flex flex-wrap gap-4 mb-8">
        <h3 class="prose-xl w-full">
          {{ category }}
        </h3>
        <!-- stories -->
        <StoryCard
          v-for="story in stories.filter(story => story.category === category)"
          :key="story.id"
          :title="story.title"
          :author="story.author"
          :image="story.image"
          :url="story.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    const stories = []
    const categories = []
    const index = await context.$content('index').fetch()
    index.stories.forEach(async (name) => {
      const story = await context.$content(name, 'story').only(['id', 'slug', 'title', 'author', 'featured-image', 'category']).fetch().catch(e => console.log(e))
      story.name = name
      story.image = `/stories/${name}/${story['featured-image']}`
      stories.push(story)
      if (!categories.includes(story.category)) {
        categories.push(story.category)
      }
    })
    return { stories, categories }
  }
}
</script>
