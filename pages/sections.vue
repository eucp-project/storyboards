<template>
  <div>
    <nuxt-content :document="panels[0]" class="prose m-4" />
    <pre id="json">{{ JSON.stringify(panels, undefined, 2) }}</pre>
    <pre id="json">{{ JSON.stringify(headlines, undefined, 2) }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const story = await $content('sections').fetch()
    const headlines = story.toc.map(entry => entry.text)
    const panels = story.body.children
      .filter(child => child.tag === 'section') // nb remark-sectionize in nuxt.config.js
      .map((child) => {
        return { body: { children: child.children } }
      })
    return { story, headlines, panels }
  }
}
</script>
