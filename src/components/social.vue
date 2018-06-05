<template>
<section class="hero is-primary is-medium">
  <div class="container">
    <div class="hero-body">
      <div class="columns has-text-centered">
        <div class="column" v-for="(item, index) in items" :key="index">
          <info-item :title="item.title"
                     :image="item.image"
                     :icon="item.icon"
                     :url="item.url" />
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import InfoItem from '@/components/info-item'

export default {
  components: { InfoItem },
  data() {
    return {
      items: [{
        title: 'Discord',
        url: 'https://discord.gg/YyeVRHe',
        icon: 'fab fa-discord'
      }, {
        title: 'GitHub',
        url: 'https://github.com/kiracoin',
        icon: 'fab fa-github'
      }, {
        title: 'Twitter',
        url: 'https://twitter.com/kiracoin',
        icon: 'fab fa-twitter'
      }, {
        title: 'Telegram',
        url: 'https://t.me/kiracoin',
        icon: 'fab fa-telegram'
      }, {
        title: 'Reddit',
        url: 'https://www.reddit.com/r/Kiracoin/',
        icon: 'fab fa-reddit'
      }]
    }
  }
}
</script>
