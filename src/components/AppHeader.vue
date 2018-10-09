<template>
  <header :class="{ 'is-fixed has-shadow': isMobile }">
    <div class="header-brand">
      <div class="navbar container is-spaced">
        <div class="navbar-brand">
          <a 
            class="navbar-item navbar-logo" 
            href="/">
            <img 
              src="@/assets/logo.png" 
              alt="TOMO logo">
          </a>
          <a 
            role="button" 
            class="navbar-item navbar-cart-mobile is-hidden-desktop" 
            aria-label="Open cart"
            @click="toggleMenu()">
            <shopping-cart-icon class="cart-icon"/>
            <span class="navbar-cart-mobile-count">({{ cartCount }})</span>
          </a> 
          <a 
            role="button" 
            class="navbar-burger burger" 
            aria-label="menu"
            @click="toggleMenu()">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a> 
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <phone-icon class="phone-icon icon"/>
              <a 
                class="has-text-black is-italic" 
                href="tel:833432051">(083) 343 20 51 </a>
            </div>
            <a 
              role="button" 
              class="navbar-item navbar-cart-desktop is-hidden-touch" 
              aria-label="Open cart"
              @click="toggleMenu()">
              <shopping-cart-icon class="cart-icon icon"/>
              <span>Koszyk</span>
              <span class="navbar-cart-desktop-count">({{ cartCount }})</span>
            </a> 
            <div class="navbar-item navbar-karcher">
              <img 
                src="@/assets/karcher.png" 
                alt="Karcher Autoryzowany Partner">
            </div>
          </div> 
        </div>
      </div> 
    </div>
    <nav 
      :class="{ 'is-active': isActive }" 
      class="navbar-menu navbar-list has-shadow"
      role="navigation">
      <div 
        :class="{ 'navbar-dropdown is-right': isMobile }"
        class="navbar-end container">
        <router-link
          v-for="route in routes"
          :key="route.name"
          :to="route.path"
          class="navbar-item is-capitalized has-text-weight-semibold"
          @click.native="toggleMenu()">
          {{ route.name }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { PhoneIcon, ShoppingCartIcon } from "vue-feather-icons"

export default {
  name: "AppHeader",
  components: {
    PhoneIcon,
    ShoppingCartIcon,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      isActive: false,
    }
  },
  computed: {
    routes() {
      return this.$router.options.routes
    },
    isMobile() {
      return this.windowWidth < 1088
    },
    cartCount() {
      return 1
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth
    })
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  z-index: 500;
}

.navbar-item img {
  max-height: 2.2rem;
}

.has-shadow {
  box-shadow: 0px 4px 5px 1px #f5f5f5;
}

.router-link-exact-active {
  background: #000;
  color: #fff;
}

.navbar-cart-desktop {
  margin: 0 15px;

  &-count {
    position: relative;
    right: -3%;
    bottom: -5px;
    font-size: 12px;
  }
}

.navbar-cart-mobile {
  min-width: 52px;
  margin-left: auto;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05) !important;
  }

  &-count {
    position: relative;
    right: -5%;
    bottom: -5px;
    font-size: 12px;
  }
}

.navbar-burger {
  margin-left: 0;
}

.navbar-list {
  user-select: none;
  background: #ffed00;
}

.is-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.icon {
  margin: 0 5px;
}
</style>
