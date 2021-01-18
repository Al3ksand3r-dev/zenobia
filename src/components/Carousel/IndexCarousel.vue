<template>
  <div>
    <carousel
      :per-page="1"
      :mouse-drag="true"
      :paginationEnabled="false"
      :autoplay="true"
      :autoplayTimeout="5000"
      :mouseDrag="true"
      :loop="true"
      v-model="currentIndex"
      :autoplayHoverPause="false"
      :navigateTo="[currentIndex, false]"
      class="slider-container animated fadeIn"
    >
      <slide
        class="banner-slide"
        v-for="(image, idx) in images"
        :key="idx"
        :class="{zoomOut : idx === currentIndex}"
        :style="{backgroundImage: `url(${image})`}"
      ></slide>
    </carousel>
    <div class="slider-content">
      <h1>
        Fundación
        <span>
          Zenobia
          Barliza
        </span>
      </h1>
      <p>Más de 10 años llenos de sonrisas, aprendizaje y juegos.</p>
      <a
        class="primary-btn animated fadeIn delay-1s"
        href="#"
        v-scroll-to="'#activities'"
      >Ver Detalle</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexCarousel",
  data() {
    return {
      images: [
        require("@/assets/img/bg-index-kids.jpg"),
        require("@/assets/img/smile.jpg"),
        require("@/assets/img/girl.jpg")
      ],
      currentIndex: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.slider-container {
  position: relative;
}
.banner-slide {
  width: 100%;
  height: 100vh;
  position: relative;
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
    background: rgba(#000, 0.1);
  }

  &.zoomOut {
    animation: zoomOut 10s infinite linear;
  }

  @keyframes zoomOut {
    from {
      transform: scale(1.2);
    }
    to {
      transform: scale(1);
    }
  }
}

.slider-content {
  top: 70%;
  left: 50%;
  width: 90%;
  color: #fff;
  max-width: 560px;
  position: absolute;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 2px rgba(#000, 0.7);

  h1 {
    font-size: 2.2rem;
    font-weight: 900;

    span {
      display: block;

      &::after {
        display: block;
        margin-bottom: 1rem;
        content: "CLAN EPIEYU";
        letter-spacing: 2px;
        font-size: 0.6rem;
      }
    }
  }

  p {
    line-height: 1.5;
    font-style: italic;
    &::before {
      content: "";
      width: 100px;
      height: 2px;
      display: block;
      margin-top: 2rem;
      background: #fff;
      margin-bottom: 1rem;
    }
  }

  a {
    margin: 2rem auto;
  }
}

@media screen and (min-width: 768px) {
  .slider-content {
    p {
      display: block;
    }
    a {
      margin: 2rem 0;
    }
  }
}

@media screen and (min-width: 1024px) {
  .banner-slide {
    cursor: grab;
    &:active {
      cursor: grabbing;
    }
  }

  .slider-content {
    top: 60%;
    left: 30%;
    font-weight: 900;
    padding: 1rem 3rem;
    transform: translate(-60%, auto);

    h1 {
      font-size: 4rem;
    }

    .primary-btn {
      margin: 2rem 0;
    }
  }
}

@media screen and (min-width: 1440px) {
  .slider-content {
    left: 20%;
  }
}
</style>