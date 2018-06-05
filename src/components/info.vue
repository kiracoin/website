<template>
<div>
  <div class="image is-64x64">
    <img :src="image" />
  </div>
  <h1 class="title is-4">{{ title }}</h1>
  <p>{{ description }}</p>
</div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
div.image {
  margin-top: 1.5em;
  margin-bottom: 1.2em;
}
</style>
