<template>
  <div class="home">
    <IndexCarousel />
    <MainHeading setID="activities" heading="Áreas De Formación" />
    <ImageBox />
    <div class="text-content" :class="{ maximize: maximized }" id="top">
      <h1>Nuestra Historia</h1>
      <p id="next">
        Nos creamos como fundación para dar continuidad a las actividades que
        realizaba Zenobia Barliza Epieyu en el Cabo de la Vela, cuando La
        Guajira quedaba en el más allá y aún más distante en épocas de invierno,
        tiempo en que el acceso a ella se perdía por las lluvias que convertían
        sus tierras áridas en lodo; aun así, no se padecía de hambre.
        <span>
          Quien lo creyera que había para ese entonces siembras, cría de
          animales variados y se comercializaba con las Antillas Holandesas y
          Venezuela. A la partida de Zenobia al lugar donde descansan las almas,
          sus hijos aún pequeños, no pudieron manejar su legado; unos
          fallecieron, y otros en búsqueda una mejor calidad de vida, partieron
          a otras ciudades.
        </span>
        Sus nietos conscientes de sus raíces indígena wayuu y de las necesidades
        que viene padeciendo esta población, asumen su identidad de indio
        guajiro, y mediante actos legales, continúan con la labor de servicio de
        Zenobia a su población, extendiéndolo ahora a Riohacha creando la
        fundación que lleva su nombre. Creamos el Proyecto Ser Futuro Es un
        proyecto de formación artística y lectoescritura, dirigido a niños y
        jóvenes que son herramientas que estimulan su creativa, e involucran en
        actividades que fomentan el sentido de pertenencia e identidad cultural.
      </p>

      <iframe
        class="video-sample"
        src="https://www.youtube.com/embed/f3s0Mfvy5e8"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        data-aos="fade-in"
      ></iframe>
    </div>
    <a
      class="read-more"
      @click="maximize"
      v-scroll-to="{
        el: !maximized ? '#top' : '#next',
        offset: -85
      }"
    >
      {{ maximized ? "Minimizar" : "Continuar leyendo" }}
      <i
        class="fas fa-chevron-down"
        :class="[ maximized ? 'fas fa-chevron-up' : 'fas fa-chevron-down' ]"
      ></i>
    </a>

    <div class="donate" data-aos="fade-in">
      <div class="donate-container">
        <div class="donate-content" data-aos="fade-up" data-aos-offset="0">
          <h1>Ayudanos a ayudar</h1>
          <div class="btn-container">
            <router-link
              class="primary-btn"
              data-aos="fade-up"
              data-aos-delay="100"
              to="/"
            >Donaciones</router-link>
            <router-link
              class="primary-btn"
              data-aos="fade-up"
              data-aos-delay="200"
              to="/"
            >Apadrina un ser</router-link>
            <router-link
              class="primary-btn"
              data-aos="fade-up"
              data-aos-delay="300"
              to="/"
            >Sé voluntario</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeading from "@/components/MainHeading/MainHeading.vue";
import ImageBox from "@/components/ImageBox/ImageBox.vue";
import IndexCarousel from "@/components/Carousel/IndexCarousel.vue";
export default {
  name: "Home",
  components: {
    MainHeading,
    ImageBox,
    IndexCarousel
  },
  data() {
    return {
      maximized: false
    };
  },
  methods: {
    maximize() {
      this.maximized = !this.maximized;
    }
  },
  title() {
    return "Inicio";
  }
};
</script>
<style lang="scss">
.text-content {
  height: 400px;
  margin: auto;
  overflow: hidden;
  transition: 0.5s;
  max-width: 560px;
  padding: 2rem 1rem;

  h1 {
    color: #000;
    margin: 1rem 0 3rem 0;
  }

  p {
    line-height: 1.8;
    span {
      display: block;
      margin: 2rem 0;
    }

    &::after {
      content: "";
      height: 10px;
      width: 120px;
      display: block;
      margin-top: 4rem;
      background: #289ea8;
    }
  }

  &.maximize {
    height: 1790px;
  }

  .video-sample {
    width: 100%;
    height: 400px;
    max-width: 560px;
    margin: 4rem auto;
  }
}

.read-more {
  outline: none;
  display: flex;
  font-size: 1.5rem;
  flex-flow: column;
  text-align: center;
  margin-top: 2rem;

  i {
    margin-top: 1rem;
    font-size: 2rem;
    color: #289ea8;
    animation: 2s slider linear infinite;
  }

  @keyframes slider {
    from {
      opacity: 1;
      transform: translateY(-10px);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  }
}

.donate {
  width: 100%;
  height: 500px;
  margin-top: 4rem;
  overflow: hidden;
  position: relative;

  &-container {
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    position: absolute;
    justify-content: center;
    background: url("../assets/img/donate.jpg") no-repeat center center / cover;

    .donate-content {
      margin-top: auto;
      position: relative;
      text-align: center;
      .primary-btn {
        margin: 2rem auto;
        background: rgba(#f7c800, 0.5);
      }

      .btn-container {
        display: flex;
        flex-flow: column;
        justify-content: space-between;

        a {
          font-weight: 900;
        }
      }
    }
    &::before {
      top: 0;
      right: 0;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba(#000, 0.3);
    }
  }
}

@media screen and (min-width: 350px) and (max-width: 500px) {
  .text-content {
    height: 375px;

    &.maximize {
      height: 1540px;
    }
  }
}

@media screen and (min-width: 768px) {
  .text-content {
    width: 90%;
    height: auto;
    padding: 4rem 0 0 0;
    margin: 0 auto 2rem auto;

    &.maximize {
      height: unset;
    }
  }
  .read-more {
    display: none;
  }

  .donate {
    .donate-content {
      .btn-container {
        display: flex;
        flex-flow: row;
        justify-content: space-between;

        a {
          font-weight: 900;
          margin: 2rem 1rem;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .text-content {
    h1 {
      margin: 2rem 0;
      font-size: 2.5rem;
    }
  }

  .donate {
    height: 600px;

    &-container {
      height: 900px;

      .donate-content {
        margin-bottom: auto;
      }
    }
  }
}
</style>
