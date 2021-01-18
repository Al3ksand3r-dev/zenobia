<template>
  <div id="app">
    <Navbar />
    <MenuBar />
    <Backdrop />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";
import MenuBar from "./components/MenuBar/MenuBar";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: {
    Navbar,
    MenuBar,
    Backdrop,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/style/main.scss";
</style>
