<template>
  <div class="backdrop" :class="{ show: show }" @click.self="toggleMenuBar"></div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Backdrop",
  computed: { ...mapState(["show"]) },
  methods: {
    ...mapActions(["toggleMenuBar"])
  }
};
</script>

<style lang="scss" scoped>
.backdrop {
  &.show {
    top: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    position: fixed;
    transition: 0.3s;
    background: rgba(#000, 0.7);
  }
}

@media screen and (min-width: 1024px) {
  .backdrop {
    display: none;
  }
}
</style>
