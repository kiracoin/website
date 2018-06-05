<template>
<nav class="navbar is-dark is-fixed-top"
     role="navigation"
     aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a @click="onClick('home')" class="navbar-item title is-4">
      Kiracoin
      </a>
    </div>
    <div class="navbar-end">
      <a class="navbar-item" @click="onClick('about')">
        About
      </a>
      <a class="navbar-item" @click="onClick('roadmap')">
        Roadmap
      </a>
      <a class="navbar-item" @click="onClick('wallets')">
        Wallets
      </a>
      <a class="navbar-item" @click="onClick('social')">
        Dev / Repository
      </a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    onClick(event) {
      this.$emit('navigation', event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/defaults.scss';
.navbar.is-dark .navbar-end > a.navbar-item.is-active:not(:hover) {
  background-color: transparent;
  border-bottom-color: $primary;
}

.title {
  font-family: NinjaTurtles;
}
</style>
