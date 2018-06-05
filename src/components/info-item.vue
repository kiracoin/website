<template>
<div>
  <figure class="image is-64x64">
    <a v-if="url" :href="url">
      <img :src="image" />
    </a>
    <img :src="image" v-else/>
  </figure>
  <h1 class="title is-4">
    <a v-if="url" :href="url">
    {{ title }}
    </a>
    <span v-else>{{ title }}</span>
  </h1>
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
    },
    url: {
      type: String,
      default: () => undefined
    }
  }
}
</script>

<style lang="scss" scoped>
figure.image {
  margin-top: 1.5em;
  margin-bottom: 1.2em;
}
</style>
