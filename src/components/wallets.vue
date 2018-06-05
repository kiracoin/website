<template>
<section class="hero is-dark is-medium container">
  <div class="hero-body">
    <h1 class="title is-1">Wallets</h1>
    <div class="columns">
      <div class="column" v-for="(item, index) in downloads" :key="index">
        <figure class="image is-64x64">
          <img :src="item.image" />
        </figure>
        <h3 class="title is-3">{{ item.title }}</h3>
        <div v-for="wallet in item.wallets" :key="wallet.name" class="buttons">
          <a class="button is-download is-primary is-medium" :href="wallet.url">
            <span class="icon">
              <i class="fas fa-download"></i>
            </span>
            <span>{{ wallet.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import windowsImage from '@/assets/windows.svg'
import macOSImage from '@/assets/macOS.svg'
import ubuntuImage from '@/assets/ubuntu.svg'

export default {
  data() {
    return {
      downloads: [{
        title: 'Windows',
        image: windowsImage
      }, {
        title: 'Ubuntu',
        image: ubuntuImage
      }, {
        title: 'macOS',
        image: macOSImage,
        wallets: [{
          name: 'macOSx64-daemon',
          url: ''
        }, {
          name: 'macOSx64-QT',
          url: ''
        }]
      }]
    }
  }
}
</script>

<style lang="scss">
.image.is-center-aligned {
  margin-left: auto;
  margin-right: auto;
}
.image {
  margin-bottom: 1em;
  margin-top: 2em;
}

</style>
