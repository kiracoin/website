<template>
<div>
  <navbar v-on:navigation="onNavigation" />
  <hero id="home" />
  <what-is />
  <about id="about" />
  <road-map id="roadmap" />
  <wallets id="wallets" />
  <social id="social" />
  <foot />
</div>
</template>

<script>
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import WhatIs from '@/components/whatis'
import About from '@/components/about'
import RoadMap from '@/components/roadmap'
import Wallets from '@/components/wallets'
import Social from '@/components/social'
import Foot from '@/components/foot'

export default {
  components: {
    Navbar, WhatIs, About, RoadMap, Wallets, Hero, Social, Foot
  },
  name: 'Main',
  mounted() {
    document.title = 'Kiracoin'
  },
  methods: {
    onNavigation(item) {
      const element = document.getElementById(item)
      this.$SmoothScroll(element)
    }
  }
}
</script>
