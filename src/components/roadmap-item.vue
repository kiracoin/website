<template>
<div>
  <div class="image">
    <img :src="image" />
  </div>
</div>
</template>

<script>
export default {
  props: {
    image: {
      type: String
      required: true
    },
    url: {
      type: String,
      required: true
    }
    title: {
      type: String,
      required: true
    }
  }
}
</script>
