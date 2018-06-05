<template>
<section class="hero is-primary is-medium">
  <div class="hero-body container">
    <h2 class="title is-1">
      What is Kiracoin?
    </h2>
    <div class="columns">
      <div v-for="(i, index) in info" :key="index" class="column">
        <info-item :title="i.title"
                   :image="i.image"
                   :description="i.description" />
      </div>
    </div>
  </div>
</section>
</template>

<script>
import InfoItem from '@/components/info-item'
import governanceImage from '@/assets/crowd.svg'
import x16Image from '@/assets/graphics-card.svg'
import paymentsImage from '@/assets/payment.svg'

export default {
  components: { InfoItem },
  name: 'WhatIs',
  data() {
    return {
      info: [{
        title: 'Governance',
        image: governanceImage,
        description: 'Decentralized governance allowing democratic development of the coin, from donating to charity to paying contributors.'
      }, {
        title: 'x16r Algorithm',
        description: 'The latest in ASIC resistance, pioneered by Ravencoin and expanded upon for masternodes by Kiracoin. x16r creates a fair mining community.',
        image: x16Image
      }, {
        title: 'Fast payments',
        description: 'Send secure payments quickly to anyone in the world. Using the latest in blockchain technology and developing upon innovations from Bitcoin and Dash.',
        image: paymentsImage
      }]
    }
  }
}
</script>
