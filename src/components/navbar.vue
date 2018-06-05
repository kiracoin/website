<template>
<nav class="navbar is-dark is-fixed-top"
     role="navigation"
     aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item title is-4">
      Kiracoin
      </router-link>
    </div>
    <div class="navbar-end">
      <a class="navbar-item">
        About
      </a>
      <a class="navbar-item">
        Roadmap
      </a>
      <a class="navbar-item">
        Wallets
      </a>
      <a class="navbar-item">
        Halving
      </a>
      <a class="navbar-item">
        Dev / Repository
      </a>
    </div>
  </div>
</nav>
</template>

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
