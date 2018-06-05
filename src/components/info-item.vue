<template>
<div>
  <figure class="image is-64x64" v-if="image">
    <a v-if="url" :href="url">
      <img v-if="image" :src="image" />
    </a>
    <img :src="image" v-else-if="image" />
  </figure>
  <a :href="url" class="icon is-large" v-else-if="icon && url">
    <i :class="icon" class="fa-3x"></i>
  </a>
  <span class="icon is-large" v-else-if="icon">
    <i :class="icon" class="fa-3x"></i>
  </span>
  <h1 class="title is-4">
    <a v-if="url" :href="url">
    {{ title }}
    </a>
    <span v-else>{{ title }}</span>
  </h1>
  <p v-if="description">{{ description }}</p>
</div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: () => undefined
    },
    icon: {
      type: String,
      default: () => undefined
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: () => undefined
    },
    url: {
      type: String,
      default: () => undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.icon,
figure.image {
  margin-top: 1.5em;
  margin-bottom: 1.2em;
}
</style>
