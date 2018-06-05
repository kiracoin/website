<template>
<div>
  <navbar />
  <section class="hero is-large is-dark">
    <div>
      <particles>
      </particles>
    </div>
    <div class="container">
      <div class="hero-head">
      </div>
      <div class="hero-body">
        <div class="titleView">
          <div class="image is-128x128">
            <img src="../assets/logo.svg" />
          </div>
        <h1 class="title is-1">
          Kiracoin
        </h1>
      </div>
      </div>
      <div class="hero-foot">
      </div>
    </div>
  </section>
  <what-is />
  <about />
  <road-map />
</div>
</template>

<script>
import Navbar from '@/components/navbar'
import WhatIs from '@/components/whatis'
import About from '@/components/about'
import RoadMap from '@/components/roadmap'
import particles from '@/components/particles'

export default {
  components: { Navbar, WhatIs, particles, About, RoadMap },
  name: 'Main',
  mounted() {
    document.title = 'Home | Kiracoin'
  }
}
</script>

<style lang="scss" scoped>
h1.title {
  font-family: NinjaTurtles;
}

div.titleView {
  display: flex;
  align-items: center;
  & > h1.title {
    margin-left: 0.5em;
    font-size: 5rem;
  }
}

.image.is-192x192 {
  height: 192;
  width: 192;
}
</style>
