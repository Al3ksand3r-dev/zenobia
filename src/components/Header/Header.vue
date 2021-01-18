<template>
  <header class="banner animated fadeIn" :style="{backgroundImage: `url(${imgUrl})`}">
    <div class="banner-content animated fadeIn">
      <slot />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    imgUrl: String
  }
};
</script>

<style lang="scss">
.banner {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    top: 0;
    right: 0;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(#000, 0.2);
  }

  &-content {
    color: #fff;
    padding: 0 1rem;
    margin-top: auto;
    max-width: 560px;
    font-weight: 100;
    position: relative;
    text-shadow: 0 0 2px rgba(#000, 0.7);

    h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;

      &::after {
        display: block;
        font-size: 0.6rem;
        margin-left: 3px;
        letter-spacing: 2px;
        content: "CLAN EPIEYU";
      }
    }

    p {
      line-height: 1.7;
      font-size: 0.9rem;
      padding: 1rem;
      background: rgba(#000, 0.4);
    }
  }
}

@media screen and (min-width: 768px) {
  .banner {
    &-content {
      padding: 0;
      margin: 6rem auto 0 auto;

      h1 {
        font-size: 3rem;
        margin-bottom: 4rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .banner {
    height: 90vh;
    margin-top: 80px;
    &-content {
      width: 100%;
      padding: 0 2rem;
      max-width: 1024px;
      margin: 6rem auto;

      h1 {
        font-size: 4rem;
        margin-bottom: 4rem;
      }

      p {
        width: 600px;
        font-size: 1.1rem;
      }
    }
  }

  .primary-btn {
    &::after {
      opacity: 0;
      content: "\f054";
      font-weight: 900;
      visibility: hidden;
      transition: 0.3s all;
      font-family: "Font Awesome 5 Free";
    }
    &:hover {
      &::after {
        opacity: 1;
        content: "\f054";
        font-weight: 900;
        margin-left: 1rem;
        visibility: visible;
        font-family: "Font Awesome 5 Free";
      }
    }
  }
}
</style>
