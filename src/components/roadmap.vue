<template>
<section class="hero is-primary is-medium">
  <div class="container">
    <div class="hero-body">
      <h1 class="title is-1">Roadmap</h1>
      <div class="columns">
        <div class="column" v-for="(item, index) in items" :key="index">
          <roadmap-item :title="item.title"
                        :description="item.description"
                        :url="item.url"
                        :image="item.image" />
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import RoadmapItem from '@/components/info-item.vue'
import documentImage from '@/assets/document.svg'
import roadmapImage from '@/assets/roadmap.svg'

export default {
  components: { RoadmapItem },
  data() {
    return {
      items: [{
        title: 'x16r algorithm white paper',
        description: 'x16r: ASIC Resistant by Design',
        url: '/static/X16R-Whitepaper.pdf',
        image: documentImage
      }, {
        title: 'Kiracoin white paper',
        description: 'Coming soon',
        url: '#',
        image: documentImage
      }, {
        title: 'Roadmap',
        description: 'Kiracoin development roadmap',
        url: 'https://github.com/kiracoin/roadmap.md',
        image: roadmapImage
      }]
    }
  }
}
</script>
