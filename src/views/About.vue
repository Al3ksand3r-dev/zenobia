<template>
  <div>
    <Header :imgUrl="require('@/assets/img/mission/01-sm.jpg')">
      <h1>¿Quiénes somos?</h1>
      <a
        class="primary-btn animated fadeIn delay-1s"
        href="#"
        v-scroll-to="{ el: '#mission', offset: -90 }"
        >Ver Detalle</a
      >
    </Header>
    <!-- <div class="text-content">
      <section>
        <MainHeading heading="Misión" setID="mission" />
        <div
          class="section-img"
          :style="{backgroundImage: 'url('+ require('@/assets/img/mission/02.png') +')'}"
        ></div>
        <p>Fomentar una sociedad con calidad de vida, desarrollando y reforzando capacidades que aporten a la transformación y contribuyan en el desarrollo de su comunidad, promoviendo acciones para mejorar su nivel económico.</p>
      </section>
      <section>
        <MainHeading heading="Visión" />
        <div
          class="section-img"
          :style="{backgroundImage: 'url('+ require('@/assets/img/mission/03-sm.jpg') +')'}"
        ></div>
        <p>Ser una Fundación innovadora y social, desarrollando proyectos que aportan a los de menores recursos en sus necesidades de vida, conservando el medio ambiente, manteniendo los valores raizales y culturales, destacando el equipo de comprometidos que busca el progreso de una población.</p>
      </section>
    </div>-->
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
// import MainHeading from "@/components/MainHeading/MainHeading.vue";
export default {
  name: "Mision",
  components: {
    Header,
    // MainHeading
  },
  title() {
    return "Quiénes Somos";
  },
};
</script>

<style lang="scss" scoped>
.text-content {
  gap: 4rem 0;
  height: auto;
  display: grid;
  padding: 2rem 1rem;
  margin: 4rem auto;
  border-radius: 10px;
  background: linear-gradient(to right, #f4f4f8, #fff);

  p {
    &::after {
      display: none;
    }
  }

  .main-heading {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;

    &::after {
      display: none;
    }
  }

  .section-img {
    width: 100%;
    height: 300px;
    margin-bottom: 2rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1024px) {
    padding: 3rem;
    gap: 8rem 4rem;
    max-width: 1024px;
    margin: 8rem auto;
    grid-template-columns: repeat(2, 1fr);

    .section-img {
      margin-bottom: 4rem;
    }
  }
}
</style>
