<template>
  <div class="menu-bar" :class="{ 'slide-out': show, shrink: !onScroll }">
    <ul class="menu-links">
      <li>
        <router-link to="/" @click.native="close">Inicio</router-link>
      </li>
      <li>
        <router-link to="/mision-vision" @click.native="close"
          >¿Quiénes somos?</router-link
        >
      </li>
      <li>
        <router-link to="/" @click.native="close">Actividades</router-link>
      </li>
      <li>
        <router-link to="/" @click.native="close">Donaciones</router-link>
      </li>
      <li>
        <router-link
          @click.native="close"
          exact-active-class="exact-active"
          :to="{ name: 'Subscription' }"
          >Inscripciones</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "MenuBar",
  computed: {
    ...mapState(["show", "onScroll"]),
  },
  methods: {
    ...mapActions({
      close: "toggleMenuBar",
    }),
  },
};
</script>

<style lang="scss">
.menu-bar {
  left: 0;
  right: 0;
  top: 80px;
  z-index: 2;
  width: 100%;
  padding: 2rem;
  position: fixed;
  transform: translateY(-150%);
  background: linear-gradient(to left, #f4f4f8, #fff);

  &.slide-out {
    transition: 0.3s;
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(#000, 0.1);
  }

  &.shrink {
    top: 60px;
  }
}

.menu-links {
  display: flex;
  list-style: none;
  flex-flow: column;

  a {
    color: #333;
    display: block;
    padding: 1rem 0;
    text-decoration: none;
  }
}

@media screen and (min-width: 768px) {
  .menu-bar {
    top: 0;
    right: 0;
    padding: 0;
    left: unset;
    height: 100%;
    display: flex;
    overflow: auto;
    max-width: 300px;
    transform: translateX(100%);

    .menu-links {
      margin: auto;
      display: inline-flex;

      a {
        margin: 1rem 0;
        font-size: 1rem;
        border-bottom: none;
      }
    }

    &.slide-out {
      transform: translateX(0);
    }

    &.shrink {
      top: 0;
    }
  }
}

@media screen and (min-width: 1024px) {
  .menu-bar {
    display: none;
  }
}
</style>
