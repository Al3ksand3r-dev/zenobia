<template>
  <div
    class="navbar"
    @scroll="handleScroll"
    :class="{ 'on-scroll': !onScroll }"
  >
    <router-link to="/">
      <img :src="require('@/assets/img/logo-transparent.png')" alt="logo" />
    </router-link>

    <div class="burger" :class="{ change: show }" @click="toggleMenuBar">
      <div />
      <div />
      <div />
    </div>
    <div class="nav-links-desktop">
      <ul class="menu-links">
        <li>
          <router-link to="/" exact-active-class="exact-active"
            >Inicio</router-link
          >
        </li>
        <li>
          <router-link exact-active-class="exact-active" to="/quienes-somos"
            >¿Quiénes somos?</router-link
          >
        </li>
        <li>
          <router-link exact-active-class="exact-active" to="/asda"
            >¿Qué hacemos?</router-link
          >
        </li>
        <li>
          <router-link exact-active-class="exact-active" to="/adasdad"
            >¿Qué logramos?</router-link
          >
        </li>
        <li>
          <router-link to="/">Actividades</router-link>
        </li>
        <li>
          <router-link to="/">Cómo ayudar</router-link>
        </li>
        <li>
          <router-link to="/">Galeria</router-link>
        </li>
        <li>
          <router-link
            exact-active-class="exact-active"
            :to="{ name: 'Subscription' }"
            >Inscripciones</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapState(["show", "onScroll", "lastScrollPosition"]),
  },
  methods: {
    ...mapActions({
      toggleMenuBar: "toggleMenuBar",
      handleScroll: "handleScroll",
    }),
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  width: 100%;
  display: flex;
  transition: 0.4;
  position: fixed;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(#000, 0.1);

  img {
    width: 180px;
    display: block;
    transition: 0.4s;
    padding-left: 1rem;
  }

  .nav-links-desktop {
    display: none;

    a {
      &.exact-active {
        color: #f7c800;
      }
    }
  }

  .burger {
    padding: 20px;
    cursor: pointer;
    transition: 0.4s;
    border-left: 1px solid #eee;

    div {
      width: 20px;
      height: 2px;
      margin: 5px 0;
      background: #333;
    }

    &.change {
      div {
        transition: 0.3s;
        &:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
      }
    }
  }

  &.on-scroll {
    img {
      width: 130px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .navbar {
    padding: 0 3rem;

    .burger {
      display: none;
    }

    .nav-links-desktop {
      display: block;
    }
  }
}
ul {
  display: flex;
  flex-flow: row;

  a {
    margin: 0 1.5rem;
    transition: 0.3s;
    position: relative;
    border-bottom: none;

    &::before {
      right: 0;
      bottom: 12px;
      content: "";
      width: 100%;
      height: 2px;
      transition: 0.3s;
      position: absolute;
      visibility: hidden;
      transform: scaleX(0);
      background: #f7c800;
    }

    &:hover {
      color: #000;
      &::before {
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
}
</style>
