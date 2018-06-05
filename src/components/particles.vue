<template>
  <div id='particles'></div>
</template>

<script>
import config from '@/assets/particles.json'

export default {
  name: 'ParticlesJS',

  mounted () {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },

  methods: {
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles', config)
    }
  }

}
</script>

<style lang="scss">
#particles canvas{
  height: 65vh !important;
  position: absolute;
}
</style>
